# Mitsurugi Ritual Guide

A fan-made guide to the Yu-Gi-Oh! **Mitsurugi** archetype — a DARK Reptile
Ritual deck whose monsters gain value every time they're tributed.

**Live site:** https://medonni.github.io/mitsurugi-guide/

Built with [Eleventy](https://www.11ty.dev/). Two pages:

- **Overview** — what the archetype is, the tribute engine, the three ritual
  bosses, synergy partners, and a sample turn.
- **Card Compendium** — every card, its effects grouped by *where they resolve*
  (hand / deck / GY / field / on-tribute), plus tips & tricks. Filterable by
  group: Main Archetype, Supporting, Non-Engine, Extra Deck.

## Local development

```sh
npm install
npm start        # dev server with live reload at http://localhost:8080
npm run build    # one-off build to _site/
```

## Adding a card

Card content lives in `src/_data/cards.js`. Append one object to the `cardData`
array — it flows to the compendium automatically (tab counts included):

```js
{
  id: "newcard", section: "main",              // main | support | nonengine | extra
  name: "Full Card Name", short: "SHORTNAME",
  role: "Lv4 Searcher", glyph: "刀", glyphColor: "#b98cff",
  stat: "LV4 · Reptile", badges: ["DARK", "Reptile", "Effect"],
  zones: [ ["HAND", "What it does."], ["ON TRIBUTE", "The trigger."] ],
  tips: [ "A tip.", "Another." ],
}
```

### Card art

Drop an image at `src/assets/cards/<section>/<id>.webp` and it's picked up
automatically — no code change. WebP preferred, ~600px wide, < 60 KB. See
[`src/assets/cards/README.md`](src/assets/cards/README.md) for details.

## Structure

```
src/
├── index.njk              # landing / overview page
├── cards.njk              # card compendium (+ client-side group filter)
├── _includes/base.njk     # shared layout, nav, footer
├── _data/
│   ├── cards.js           # all card data + image auto-detection
│   └── landing.js         # landing-page content
├── css/style.css          # design tokens + components
└── assets/cards/          # card art, split by section
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
(with the correct GitHub Pages path prefix) and deploys it to GitHub Pages.

## Credits

Card names, effects, and art are © Konami and used here for reference only.
This is a non-commercial fan project.
