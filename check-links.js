// Link check for the built site. `npm run check` builds with the production
// pathPrefix and runs this, because that's the build where links can break:
// linkcards() emits paths relative to the page being rendered, so a page that
// moves to a different depth silently points at nothing.
//
// Checks every relative and pathPrefix'd href/src/data-img in _site: that the
// target file exists, and that a #fragment matches a real id on that page.
// ponytail: regex over the built HTML, no DOM parser. It only has to read
// output this repo generates, not arbitrary HTML.
import fs from "node:fs";
import path from "node:path";

// Built output to check. `npm run check` passes _check, its own directory, so
// running the check never clobbers the _site that `npm start` is serving.
const OUT = process.argv[2] || "_site";
const PREFIX = "/mitsurugi-guide/";

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

const pages = walk(OUT).filter((f) => f.endsWith(".html"));

// page -> ids on it, for fragment checking.
const ids = {};
for (const f of pages) {
  ids[path.resolve(f)] = new Set(
    [...fs.readFileSync(f, "utf8").matchAll(/id="([^"]+)"/g)].map((m) => m[1]),
  );
}

const resolve = (from, href) =>
  href.startsWith(PREFIX)
    ? path.resolve(OUT, href.slice(PREFIX.length))
    : path.resolve(path.dirname(from), href);

const LINK = new RegExp(`(?:href|src|data-img)="((?:\\.\\./|${PREFIX})[^"]*)"`, "g");

let checked = 0;
const broken = [];
for (const f of pages) {
  for (const m of fs.readFileSync(f, "utf8").matchAll(LINK)) {
    checked++;
    const [p, frag] = m[1].split("#");
    let target = resolve(f, p);
    if (!fs.existsSync(target)) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) {
      broken.push(`${f} -> ${m[1]} (no such file)`);
    } else if (frag && ids[target] && !ids[target].has(frag)) {
      broken.push(`${f} -> ${m[1]} (no #${frag} on that page)`);
    }
  }
}

for (const b of broken) console.error("BROKEN " + b);
console.log(`${checked} links checked across ${pages.length} pages, ${broken.length} broken`);
process.exit(broken.length ? 1 : 0);
