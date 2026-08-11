// Convert card art to WebP at the size and quality src/assets/cards/README.md
// documents, and strip the metadata that comes with a downloaded scan.
//
// Why this exists: the guide's art convention (412x600, WebP, under ~60KB) was
// prose that every new deck had to re-implement by hand, and macOS `sips` is a
// trap here. It lists `org.webmproject.webp` in `--formats` and accepts
// `-s format webp` without complaint, then exits 13 and writes nothing: it can
// decode WebP, not encode it. That's why the Sacred Beasts package shipped as
// ~75KB JPGs while every other deck is ~18KB WebP.
//
// Metadata: sharp drops EXIF, ICC, XMP and IPTC unless you explicitly ask for
// them back with .withMetadata(), so stripping is the default and this file
// deliberately never calls it. On art pulled from an API that routinely means
// dropping a colour profile and a software tag that are pure bytes to a reader.
//
// Usage:
//   npm run art:webp                          # every card directory
//   npm run art:webp -- src/assets/cards/sacred-beasts
//   npm run art:webp -- --dry                 # show what would happen
//   npm run art:webp -- --keep                # don't delete the source file
//   npm run art:webp -- --force               # redo ones that already have WebP
import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

// Matches the existing art and the width/height baked into the templates'
// <img> attributes. `inside` + no enlargement means a smaller scan is left at
// its own size rather than being upscaled into blur.
const BOX = { width: 412, height: 600, fit: "inside", withoutEnlargement: true };
const QUALITY = 82;
const SOURCES = /\.(jpe?g|png)$/i;
const DEFAULT_ROOT = "src/assets/cards";

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const dry = flag("--dry");
const keep = flag("--keep");
const force = flag("--force");
const roots = args.filter((a) => !a.startsWith("--"));

const kb = (n) => (n / 1024).toFixed(1) + "KB";

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (SOURCES.test(entry.name)) out.push(full);
  }
  return out;
}

async function convert(file) {
  const out = file.replace(SOURCES, ".webp");
  if (existsSync(out) && !force) return { file, skipped: "WebP already exists" };

  const before = (await stat(file)).size;
  if (dry) return { file, out, before, dryRun: true };

  // Re-encoding into the same directory, so write to a temp name first: a
  // crash mid-encode must not leave a truncated .webp that findImage would
  // then happily prefer over the intact original.
  const tmp = out + ".tmp";
  await sharp(file).resize(BOX).webp({ quality: QUALITY }).toFile(tmp);

  // Verify before destroying anything: the file has to be readable, actually
  // WebP, and smaller than what it replaces.
  const probe = await sharp(tmp).metadata();
  const after = (await stat(tmp)).size;
  if (probe.format !== "webp" || !probe.width) {
    await unlink(tmp);
    return { file, failed: "output was not readable WebP" };
  }
  if (after >= before) {
    await unlink(tmp);
    return { file, skipped: `WebP was larger (${kb(after)} vs ${kb(before)})` };
  }

  const { rename } = await import("node:fs/promises");
  await rename(tmp, out);
  // findImage prefers webp over jpg, so a surviving source is dead weight in
  // the repo AND in the deploy, shipped to nobody.
  if (!keep) await unlink(file);
  return { file, out, before, after, dims: `${probe.width}x${probe.height}` };
}

const targets = roots.length ? roots : [DEFAULT_ROOT];
const files = [];
for (const t of targets) {
  const s = await stat(t).catch(() => null);
  if (!s) { console.error(`skip: ${t} does not exist`); continue; }
  files.push(...(s.isDirectory() ? await walk(t) : [t]));
}

if (!files.length) {
  console.log("Nothing to convert: no .jpg/.jpeg/.png under " + targets.join(", "));
  process.exit(0);
}

console.log(`${dry ? "[dry run] " : ""}${files.length} source image(s)\n`);
let saved = 0, done = 0;
for (const f of files) {
  const r = await convert(f);
  const name = path.relative(process.cwd(), r.file);
  if (r.skipped) { console.log(`  skip  ${name}  (${r.skipped})`); continue; }
  if (r.failed) { console.log(`  FAIL  ${name}  (${r.failed})`); continue; }
  if (r.dryRun) { console.log(`  would ${name} -> ${path.basename(r.out)}  (${kb(r.before)})`); continue; }
  saved += r.before - r.after;
  done++;
  console.log(`  ok    ${name} -> ${path.basename(r.out)}  ${kb(r.before)} -> ${kb(r.after)}  ${r.dims}`);
}
if (!dry) console.log(`\n${done} converted, ${kb(saved)} saved${keep ? " (sources kept)" : ""}`);
