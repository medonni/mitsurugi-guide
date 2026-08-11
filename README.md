# Medonni's Guides

A fan-made, deck-by-deck combo guide for Yu-Gi-Oh!. What started as a single
**Mitsurugi** guide is now a small hub of decks and engines, each gets its
own Overview/Cards/Combos, its own accent color, and its own Discord link.

*The repo, live URL, and Eleventy path prefix are still `mitsurugi-guide` for
historical/URL-stability reasons; that's a leftover name, not the project's
actual scope anymore.*

**Live site:** https://medonni.github.io/mitsurugi-guide/

Built with [Eleventy](https://www.11ty.dev/).

- **`/`:** the deck hub. Pick a deck or engine below.
- **`/mitsurugi/`** and **`/fiendsmith/`:** complete and live. Mitsurugi is a
  DARK Reptile Ritual deck whose monsters gain value every time they're
  tributed; Fiendsmith is a splashable LIGHT Fiend engine, not a standalone
  archetype, piloted inside a host deck, but documented with the same
  three-page shape since it's used the same way once it's in your deck.
- **`/sacred-beasts/`:** the *Chaos Origins* (CORI) card package is
  documented; older Sacred Beast staples and combo lines for any deck aren't
  yet, so it still carries a WIP badge.
- Each deck/engine page is an Overview, a Card Compendium (every card
  grouped by *where it activates*: hand / deck / GY / field / trigger /
  on-tribute, with per-card tips), and Combos (step-by-step lines from
  starter to end board), themed with its own accent color (see DESIGN.md,
  "Per-Deck Accents").
- **`/handtraps/`:** the shared reference, genuinely deck-independent (hand
  disruption run regardless of what deck you're piloting), so those cards
  live in one place instead of being copy-pasted onto every compendium. Two
  pages: the card reference itself, and **`/handtraps/matchups/`**, an
  interaction map organized by opponent archetype (which handtrap hits which
  of their cards, and when to hold it).

## Local development

```sh
npm install
npm start        # dev server, no path prefix, at http://localhost:8080/
npm run start:prod   # same, but with GitHub Pages' /mitsurugi-guide/ path prefix,
                      # for testing URLs exactly as they'll work in production
npm run build    # one-off build to _site/
npm run check    # prod-prefix build + link check (see check-links.js)
```

`npm run check` builds into its own `_check/` directory, so it's safe to run
while `npm start` is up: a prefixed build written over `_site/` would make the
dev server serve pages whose CSS and links all 404.

`npm run check` is the one thing worth running before pushing a structural
change. Card links are emitted by the `linkcards` filter relative to the page
being rendered, so moving a page to a different URL depth breaks them silently
— the build still succeeds. The check fails loudly instead.

`npm start`'s URLs (`/mitsurugi/`, `/fiendsmith/`, …) have no prefix; the deployed
site's URLs (`/mitsurugi-guide/mitsurugi/`, …) do. Mixing the two 404s. Use
`npm run start:prod` when you want to click around with the real, prefixed URLs.

## Adding a card

Each deck/engine has its own card data file: Mitsurugi in `src/_data/cards.js`,
Fiendsmith in `src/_data/fiendsmith.js`, Sacred Beasts in
`src/_data/sacredBeasts.js`, shared handtraps in `src/_data/handtraps.js`.
Every page renders its cards through the shared `cardGroup`/`cardRow` macros
in `src/_includes/components.njk`, so a new card just needs an object
appended to the right file's `groups`, no template changes.

Two card-object shapes are in use, pick whichever the file you're editing
already uses. They differ only in which field colors the role label
(`glyphColor` or `accent`) and whether the card is filed under a `section`:

```js
// Mitsurugi / Handtraps style.
{
  id: "newcard", section: "main",              // main | support | nonengine | extra
  name: "Full Card Name", role: "Lv4 Searcher", glyphColor: "#b98cff",
  stat: "LV4 · Reptile", badges: ["DARK", "Reptile", "Effect"],
  zones: [ ["HAND", "What it does."], ["ON TRIBUTE", "The trigger."] ],
  tips: [ "A tip.", "Another." ],
}

// Fiendsmith / Sacred Beasts style: accent instead of glyphColor.
{
  id: "newcard", name: "Full Card Name", role: "Effect Monster",
  accent: "#e0c46a", badges: ["DARK", "Fiend", "Effect", "Level 4"],
  stat: "ATK 1800 / DEF 1200",
  zones: [ ["HAND", "What it does, ideally verbatim official text." ] ],
}
```

Where a card *links to* needs no registration: `src/_lib/card-index.js` derives
the id → `{ href, image }` map straight from the deck data files, and both the
`linkcards` filter (`eleventy.config.js`) and the matchup map
(`src/_data/matchups.js`) read it. Add the card to its deck's data file, give
it art, and its anchor and hover preview exist.

What *is* hand-written is the prose alias list, `CARD_LINKS` in
`eleventy.config.js`: the names combo steps and matchup notes actually write,
longest alias first so `Fiendsmith's Tract` wins over a bare `Tract`. A card
with no alias there simply renders as plain text in prose.

### Card art

Drop an image at `src/assets/cards/<section>/<id>.<ext>` (`webp`/`png`/`jpg`,
tried in that order) and it's picked up automatically, no code change. WebP
preferred, ~600px tall (e.g. 412×600), < 60 KB when available; a plain JPG
from [YGOPRODeck](https://db.ygoprodeck.com/api/v7/cardinfo.php) resized with
`sips -Z 600` is the fallback used for Sacred Beasts' art (this machine's
`sips` can't encode WebP). See
[`src/assets/cards/README.md`](src/assets/cards/README.md) for details.

### Card compendium filtering

A card compendium page is three independent filters (name search, section tabs,
zone chips) over the same card rows, plus a "no results" fallback. **You do not
wire these up per deck.** `src/_includes/cards-page.njk` is the whole page body,
and every deck's `cards.njk` includes it, so the filter kit arrives complete or
not at all. (Fiendsmith and Sacred Beasts once shipped without it because each
page was a hand-copy; that's what the shared include exists to prevent.)

Two things a deck must provide:

1. Its data file (`cards.js`, `fiendsmith.js`, `sacredBeasts.js`, ...) exports
   `zones` and `total` alongside `groups`:
   ```js
   import { deriveZones } from "../_lib/zones.js";
   // ...
   export default {
     groups: [ /* ... */ ],
     zones: deriveZones(cards),   // only the zone labels this deck's cards actually use
     total: cards.length,
   };
   ```
2. Its `cards.njk` sets the page-specific copy and includes the shared body:
   ```njk
   ---
   title: My Deck Cards
   bg: cards
   description: ...
   ---
   {% set c = myDeck %}
   {% set showStats = true %}          {# see cardRow's showStatLine #}
   {% set kicker %}// CARD COMPENDIUM · MY DECK{% endset %}
   {% set heading = "Every My Deck card" %}
   {% set intro %}
   <p class="intro">...</p>
   {% endset %}
   {% include "cards-page.njk" %}
   ```
   `afterGroups` is an optional extra `{% set %}` block for markup below the
   compendium (Mitsurugi uses it for its synergy panel).

Nothing else: `cardGroup`/`cardRow` already emit the `data-section`/`data-zones`
attributes the script reads, and `src/assets/js/card-filter.js` is one shared,
page-agnostic script, don't inline a per-page copy.

## Adding a new deck

1. `src/<deck-id>/` with `index.njk` (Overview), `cards.njk`, `combos.njk`,
   mirroring an existing deck's frontmatter (`title`, `bg`, `description`).
   `cards.njk` includes the shared `cards-page.njk`, see "Card compendium
   filtering" above; `combos.njk` includes the shared `combos-page.njk`, see
   "Adding combo lines to a deck" below. Both are a few `{% set %}` lines and
   an `{% include %}`, there is no page body to copy. The Overview's hero art
   is the shared `heroArt(bosses, cardsHref, hero)` macro.
2. `src/<deck-id>/<deck-id>.11tydata.js` exporting `{ brand: { id, glyph,
   wordmark, href } }`, cascades the header brand mark to every page in the
   folder.
3. A `body.deck-<deck-id>` block in `src/css/style.css` overriding
   `--violet`/`--violet-lt`/`--violet-deep`/`--violet-rgb`, pick a hue that
   doesn't collide with an existing deck's accent or the pinned semantic
   colors (zone pills, warning rose); see DESIGN.md's "Per-Deck Accents" for
   the reasoning behind the existing choices.
4. An entry in `src/_data/hub.js`'s `decks` array (`href`, `accent` matching
   step 3, `discord`, cover `image`, etc.), this is the single source the
   hub page *and* the site-wide nav both read from.
5. Lay the Overview page out with `.container` (not `.container-narrow`) on
   *every* section including the hero, matching Mitsurugi. Mixing the two on
   one page puts a 50px jog in the left edge between the hero and everything
   under it, which is exactly what Fiendsmith and Sacred Beasts shipped with.
6. Frame the hero boss stack, see below. The defaults are not a finished job.

## Adding combo lines to a deck

The combos page body is **one shared template**, `src/_includes/combos-page.njk`.
A deck's `combos.njk` is frontmatter plus two lines:

```njk
{% set c = fiendsmithCombos %}
{% include "combos-page.njk" %}
```

1. Add `src/_data/<deck>Combos.js` exporting `kicker`, `h1`, `intro`, `lines`,
   `interactions`, `pending`, and optionally `interactionsTitle`. Mitsurugi's
   `src/_data/combos.js` keeps its generic name for history; new decks use the
   `<deck>Combos` form.
2. Each entry in `lines` needs `id`, `name`, `section`, `tag`, `starter`,
   `result`, and `steps[]` of `{ n, card, do, why?, info?, warn? }`. Sections
   group automatically: consecutive lines sharing a `section` string fold into
   one collapsible block, so **keep lines of the same section adjacent**.
   A `note` on a line renders under the heading and may contain HTML.
   A `placeholder: true` entry renders `note` as a stub instead of steps, and
   takes an optional short `jump` label for the jump nav.
3. Card names in `do`/`why`/`info`/`warn`/`starter`/`result`/`intro` auto-link
   through the `linkcards` filter. A name only links if it is in **both**
   `CARD_LINKS` and `CARD_TARGETS` in `eleventy.config.js`; add it to both, and
   put the longest alias first so "Fiendsmith's Requiem" wins over "Requiem".
   `interactions[].body` is **not** run through `linkcards`, it renders as plain
   text.
4. Keep the honesty rule the data files already follow: only publish sequencing
   that traces to a real line. Anything assembled from card text alone carries
   a visible `note` saying so, and anything unconfirmed stays in `pending`
   rather than going on the page. See the header comment in
   `src/_data/fiendsmithCombos.js` for what that looks like in practice.

Note the frontmatter `description` is unquoted YAML, so a colon inside it
breaks the build. Use a comma.

## Framing the hero boss stack

`bossStack` splits one card-sized frame into three diagonal wedges, each
showing a ~26% crop of one card's art at 190% zoom. The per-wedge defaults in
`.boss-slice:nth-child(n)` only look right when a card's subject fills its art
window edge to edge (Sacred Beasts). Anything else, a subject parked
off-centre or sitting low under a big ornamental background, crops to
background and half-figures.

Two optional per-boss fields override it, both boss-stack-only:

- `focus: "58% 35%"` sets `--pan` (a `background-position`). Horizontal is the
  main lever: a higher percentage slides the card's subject **left** in the
  frame, so the left wedge wants a high value and the right wedge a low one.
- `zoom: "250%"` sets `--zoom` (the `background-size` height). Reach for it
  only when panning alone can't get to the subject, a tighter crop is what
  keeps the effect box out of frame when the subject sits low.

Vertical pan has less room than it looks: a card's art window runs from ~17%
to ~72% of the card, and at 190% a wedge shows ~53% of the card's height, so
the window is already nearly the full art. Push it far in either direction and
you pull in the level-star row or the effect box.

Set these on the deck's own `bosses`/`heroBosses` array, not on the shared card
objects, the compendium needs the whole card. Where `heroBosses` is built with
`pick()`/`byId` (Fiendsmith, Sacred Beasts), spread a copy:
`.map((c, i) => ({ ...c, focus: [...][i] }))`.

There is no mechanical check for this. Load each Overview page above 900px and
look at the stack: every wedge should read as a creature, not as background.

## Type

Every font size is a `--text-*` token from `:root` in `src/css/style.css`, in
`rem`. Twelve steps, from `--text-label-xs` (10px) to `--text-display` (64px);
DESIGN.md §3 has the full table with what each one is for.

Two rules, both of which have already been broken here:

- **Never write a literal `font-size` in a rule.** If a size seems missing, it
  is almost always one of the twelve under a different name. If it genuinely
  isn't, add a token, and add it to DESIGN.md's `typography` frontmatter in the
  same change. The CSS used to carry 28 px literals, 18 of them between 8.5px
  and 18px in half-pixel steps, and each one was individually defensible at the
  time. The only three literals left are the glyph sizes inside the diamond
  icons, which are icon geometry, not type.
- **`rem`, never `px`.** A px ramp ignores the reader's browser font-size
  setting. The corollary: any new grid or flex row holding text needs
  `min-width: 0` on its children, or a reader at 200% gets a horizontally
  scrolling page. There's a shared rule near the top of the file covering the
  current layouts, add new ones to it.

Prose caps go in `ch` for the same reason, a `px` cap only equals its intended
measure at a 16px root. Panel widths stay in `px`.

The check that catches both, at 390px:

```js
// in devtools, on each page
document.documentElement.style.fontSize = '32px';   // a 200% reader setting
document.documentElement.scrollWidth > document.documentElement.clientWidth
```

## Page rhythm and measure

Section spacing comes from the `--space-*` tokens, not from ad-hoc pixel
values. Use `.section` (56px) for an ordinary top-level section and
`.section-pad-lg` (72px) for a feature section or a page's first section, and
keep a heading inside the same `<section>` as the content it introduces. Full
rules, and the failures that produced them, are in DESIGN.md §5.

Two things are easy to miss and worth checking on any new page:

- **Wrapping prose needs its own `max-width`** (68ch, or 60–62ch inside a card
  row). A two-column layout hides the problem until it collapses and the text
  inherits the full container.
- **A grid whose item count varies wants `repeat(auto-fit, minmax(…, 1fr))`,
  not a fixed column count.** Fixed counts need a breakpoint override per
  layout and still break when the data grows a row.

`node check-links.js` won't catch either. The cheap check is to load the page
at ~768px and ~1400px and look for a paragraph running past ~75 characters or
a grid holding cramped columns.

## Structure

```
src/
├── index.njk               # deck-select hub (site root)
├── mitsurugi/               # Mitsurugi: index.njk, cards.njk, combos.njk, mitsurugi.11tydata.js (brand)
├── fiendsmith/               # Fiendsmith: same 3-page shape, own .11tydata.js brand
├── sacred-beasts/            # Sacred Beasts: Chaos Origins (CORI) package documented, combos still WIP, own .11tydata.js brand
├── handtraps/              # shared reference: index.njk (cards) + matchups.njk (interaction map)
├── _includes/
│   ├── base.njk            # shared layout, nav, footer, deck-brand-aware header
│   └── components.njk       # reusable Nunjucks macros (card art, synergy, boss stack)
├── _data/
│   ├── cards.js            # Mitsurugi card data + image auto-detection
│   ├── mitsurugi.js         # Mitsurugi overview-page content
│   ├── combos.js            # Mitsurugi combo lines
│   ├── fiendsmith.js        # Fiendsmith card data
│   ├── sacredBeasts.js      # Sacred Beasts card data (CORI package)
│   ├── handtraps.js         # shared handtrap card data
│   ├── matchups.js          # per-archetype interaction map, reads handtraps.js
│   └── hub.js               # deck-hub content, and the nav's single source
├── _lib/zones.js           # deriveZones(), shared by every deck's card-data file
├── css/style.css           # design tokens + components + per-deck accent overrides
├── assets/js/card-filter.js # card compendium filtering, shared <script src> across every deck
└── assets/cards/           # card art, split by section (main/support/nonengine/extra/handtraps/fiendsmith)
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
(with the correct GitHub Pages path prefix) and deploys it to GitHub Pages.

## Credits

Card names, effects, and art are © Konami and used here for reference only.
This is a non-commercial fan project.
