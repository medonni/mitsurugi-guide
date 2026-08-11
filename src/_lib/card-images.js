// Shared by every deck's card-data file that resolves art from disk
// (cards.js, handtraps.js, ...): drop a file at
// src/assets/cards/<section>/<id>.<ext> and it becomes that card's art, no
// code change. Lives next to zones.js for the same reason, one copy of the
// convention instead of one per data file.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SRC = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
// Lightest formats win when multiple exist for one card.
const EXTS = ["avif", "webp", "png", "jpg", "jpeg"];

export function findImage(section, id) {
  for (const ext of EXTS) {
    const rel = `assets/cards/${section}/${id}.${ext}`;
    if (fs.existsSync(path.join(SRC, rel))) return "/" + rel;
  }
  return null;
}
