# Work Handoff — Mitsurugi Guide

Snapshot for continuing on another machine. Last updated: 2026-07-12.

## Getting set up on the new machine

```sh
git clone https://github.com/medonni/mitsurugi-guide
cd mitsurugi-guide
# node/npm required. On mac: brew install node
# (node installs to /usr/local/bin — add to PATH if `npm` isn't found:
#   export PATH="/usr/local/bin:$PATH")
npm install
npm start        # dev server + live reload at http://localhost:8080
```

Git identity for commits (this project attributes to the user, **no Claude co-author trailer**):

```sh
git config user.name  "medoni"
git config user.email "omeragicmedin1@gmail.com"
```

## Current state

- Branch: `main`, tip `fcb82f2`, working tree clean, all pushed.
- Live site auto-deploys on push to `main` via `.github/workflows/deploy.yml`
  (GitHub Pages, path-prefix aware). Live: https://medonni.github.io/mitsurugi-guide/
- Two pages: `src/index.njk` (Overview) and `src/cards.njk` (Compendium).
  `/combos/` is referenced but **not built yet** (nav shows "Combos ◦" as coming-soon).

### Recent commits
- `fcb82f2` README updates (where-it-activates wording, TRIGGER pill, components.njk, art size)
- `e37cd0d` reusable components (`src/_includes/components.njk`), diagonal boss stack, page fixes
- `f5156a5` card art for 14 new cards (412×600 WebP)
- `b575b05` card data corrections + 14 staple/Extra cards + refreshed synergy

## Key conventions (don't break these)

- **Copy style: NO em-dashes.** Use colons/commas instead.
- Commits attributed to medoni, **no Claude co-author line**.
- Card art: WebP, ~600px tall (e.g. 412×600), < 60 KB, at
  `src/assets/cards/<section>/<id>.webp`. Auto-detected by `findImage()` in
  `src/_data/cards.js` (exts tried: avif, webp, png, jpg, jpeg) — no code change needed.
- "Where it Activates" (renamed from "Where it Resolves").
- Reusable UI lives in `src/_includes/components.njk` (macros: `synergyCard`,
  `cardArt`, `bossArt`, `bossStack`). Boss stack is the desktop-only diagonal
  hover split (Murakumo · Habakiri · Futsu, Habakiri middle).

## Pending / open items

1. **Azamina synergy writeup** — currently `"TBA"` in both `src/_data/landing.js`
   and `src/_data/cards.js` (body is `"TBA."`). User will supply the real text.
2. **3 unverified cards to add** once user provides accurate effects (I declined to
   fabricate): **Radiant Typhoon Vision**, **Dyna Mondo**, **Reptilianne Echidna**.
3. **Build the `/combos/` page** and flip the nav "Combos ◦ (coming soon)" to a live
   link. Turn panel on Overview (`// 05 · A TURN AT A GLANCE`) already links to `/combos/`.

## Useful notes

- The one-off art-fetch script used for the 14 staples is in this session's
  scratchpad (`fetch-art.mjs`): maps id→section→exact name, queries YGOProDeck
  (`db.ygoprodeck.com/api/v7/cardinfo.php?name=` then `?fname=`), downloads
  `card_images[0].image_url`. Converted to WebP with `cwebp -resize 0 600`
  (0 width, 600 tall — NOT `600 0`). Needs `brew install webp libtiff`.
- Boss stats (corrected): Murakumo 3200/800, Futsu 2000/3400, Habakiri 2400/1800.
  Habakiri is Limited (cap 1 copy).
