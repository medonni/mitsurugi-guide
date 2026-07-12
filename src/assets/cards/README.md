# Card images

Drop card art here and it gets wired into the compendium automatically — no
code change needed. `src/_data/cards.js` scans these folders on build.

## Convention

```
src/assets/cards/<section>/<card-id>.<ext>
```

- `<section>` — one of `main`, `support`, `nonengine` (matches the card's group).
- `<card-id>` — the card's `id` from `src/_data/cards.js` (e.g. `murakumo`,
  `habakiri`, `ash`).
- `<ext>` — prefer `webp` (or `avif`) for performance. Order of preference when
  several exist: `avif` → `webp` → `png` → `jpg` → `jpeg` (lightest wins).

## Sizing for performance

Card art is displayed at ~210px wide (compendium) up to ~430px (hero). Export at
**~600px wide max** (covers 2× retina), WebP quality ~80, aiming for **< 60 KB**
per card. No need for full-res scans — they'd just slow the page down. Images
already load lazily (`loading="lazy"`).

## Examples

```
src/assets/cards/main/murakumo.jpg
src/assets/cards/main/habakiri.png
src/assets/cards/nonengine/ash.webp
```

When an image exists, the compendium shows it in place of the striped
`[ CARD ART ]` placeholder. When it doesn't, the placeholder stays.

Full id list: run `node -e "import('./src/_data/cards.js').then(m => console.log(m.default.groups.flatMap(g => g.cards.map(c => c.section + '/' + c.id)).join('\n')))"`
