---
name: Mitsurugi Ritual Guide
description: A dark, disciplined reference codex for the Yu-Gi-Oh! Mitsurugi archetype.
colors:
  bg: "#14101f"
  surface: "#191225"
  surface-alt1: "#1e1633"
  surface-alt2: "#241b3d"
  border: "#b98cff29"
  border-soft: "#b98cff24"
  text: "#ece8f5"
  text-muted: "#b7add0"
  text-dim: "#a79bc0"
  text-faint: "#8a7ea3"
  text-caption: "#8f84af"
  violet: "#b98cff"
  violet-lt: "#cbb0ff"
  violet-deep: "#8a5cf0"
  sacred-beasts-accent: "#52d68f"
  sacred-beasts-accent-lt: "#82e6ac"
  sacred-beasts-accent-deep: "#2fa868"
  fiendsmith-accent: "#4fc9e8"
  fiendsmith-accent-lt: "#85dcf2"
  fiendsmith-accent-deep: "#2fa0c2"
  gold: "#e0c46a"
  gold-deep: "#c9a24b"
  gold-lt: "#f0d98a"
  zone-gy: "#8f9bd0"
  zone-field: "#7fd8c6"
  zone-hybrid: "#e6dfc9"
  frame-trap: "#d98cba"
  frame-xyz: "#b9b4c9"
  frame-synchro: "#eef0f8"
  frame-link: "#6f97ff"
  frame-fusion: "#c69bff"
  discord: "#5865f2"
  discord-deep: "#4752c4"
  warning: "#e59a9a"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "4rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  page:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.875rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.375rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.4375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title-sm:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.01em"
  body-sm:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.01em"
  meta:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.01em"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
  label-sm:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
  label-xs:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.07em"
rounded:
  xs: "5px"
  chip: "6px"
  sm: "8px"
  tab: "9px"
  btn: "10px"
  md: "12px"
  panel: "14px"
  lg: "16px"
  xl: "20px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "14px"
  md: "24px"
  lg: "40px"
  xl: "56px"
  2xl: "72px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.bg}"
    rounded: "{rounded.md}"
    padding: "16px 30px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.violet-lt}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-dim}"
    rounded: "9px"
    padding: "9px 16px"
  tab-active:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.bg}"
    rounded: "9px"
    padding: "9px 16px"
  card-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.text-dim}"
    rounded: "{rounded.xs}"
    padding: "3px 8px"
---

# Design System: Mitsurugi Ritual Guide

## 1. Overview

**Creative North Star: "The Ritual Codex"**

This is a dark reference codex for Yu-Gi-Oh! combo decks, disciplined, legible, and quietly scholarly, one deck per section (Mitsurugi first, more added over time) plus shared cross-deck engine pages. Everything sits on a purple-black ground the color of a shrine at night (`#14101f`), and meaning is carried by two accents that never trade jobs: gold is the payoff (`#e0c46a`, used for stats, emphasis, and the on-tribute reward), and an interaction accent that is violet (`#b98cff`) by default and swaps per deck (see §2, Per-Deck Accents). The page reads like an illuminated manuscript, dense with content but calm, gold catching the eye only where something actually matters.

The system rejects the four things this deck's audience already sees too much of: the dense, ad-heavy **generic TCG wiki**; **official Konami styling** (this is a fan project with its own voice, not a mimic); **corporate SaaS** clichés (cream/navy landing pages, hero-metric templates, tracked-uppercase eyebrows on every section); and **loud gamer / RGB** (neon, harsh gradients, angular esports styling). Restraint is the whole point: color is scarce so it can mean something, and the one signature motion (the diagonal boss-stack hover) is allowed to be the single wow moment per page.

The identity motif is the **diamond**, a 45-degree rotated square with upright content, repeated at every scale: the brand mark, card glyphs, group dots, and tip bullets. Typography does most of the heavy lifting through a three-face system where the mono face, in wide-tracked uppercase, defines the codex feel.

**Key Characteristics:**
- Purple-black ground; color is scarce and therefore meaningful.
- Two accents, strictly separated: gold = payoff, violet = interaction.
- Near-flat surfaces built from tonal violet layering, not shadows.
- The diamond motif at every scale.
- Mono-uppercase labels as the signature texture.
- One breakpoint (900px); one signature motion per page.

## 2. Colors

A cool, low-glare palette: a violet-black ground, purple-leaning neutrals, and two disciplined accents that carry all the meaning.

### Primary
- **Arcane Violet** (`#b98cff`): The interaction color. Every link, active nav item, filter tab fill, and `// LABEL` eyebrow. Its lighter sibling **Violet Light** (`#cbb0ff`) is the hover/active text state; **Violet Deep** (`#8a5cf0`) is the gradient partner on filled violet buttons and tabs. This is also the default/neutral interaction color: the deck hub and the shared Handtraps page always show it, since they don't belong to one deck. See Per-Deck Accents below.

### Per-Deck Accents
Violet is Mitsurugi's accent, not the whole site's. Each deck or engine section gets its own interaction color, so a reader always knows which section they're on just from the chrome. Implemented as one CSS custom-property override per section (`body.deck-<id>` sets `--violet`/`--violet-lt`/`--violet-deep`/`--violet-rgb`); everything built from those tokens (links, buttons, nav, tabs, glows, borders) follows automatically, so adding a new section's theme is a four-line block, not a component-by-component reskin.
- **Mitsurugi** (default): Arcane Violet (`#b98cff` / `#cbb0ff` / `#8a5cf0`), as above.
- **Sacred Beasts**: **Emerald** (`#52d68f`, light `#82e6ac`, deep `#2fa868`). Pairs with gold the way emerald and gold classically do, regal rather than competing with gold's warm hue, and reads clearly distinct from violet on the shared purple-black ground.
- **Fiendsmith**: **Ether Cyan** (`#4fc9e8`, light `#85dcf2`, deep `#2fa0c2`). A cooler, paler blue than Mitsurugi's violet or the zone/frame blues (zone-gy, frame-link), fitting the engine's ghostly LIGHT Fiend flavor, and far enough from Warning Rose that a Fiendsmith combo page's brand color and its "watch out" callouts never get confused for one another.

**Zone-pill colors are pinned, not deck-themed.** HAND/GY/FIELD/TRIGGER pill colors (`--zone-trigger`, plus gold/teal/ash-blue) stay the fixed defaults on every deck's compendium, deliberately decoupled from the deck accent, so the "where it activates" language reads identically everywhere a reader has already learned it. Card-frame accents (§ Card-Frame Accents) and the DARK/LIGHT/etc. attribute pills are pinned the same way: they encode a game fact, not a brand.

### Secondary
- **Ritual Gold** (`#e0c46a`): The payoff color. Stat values, inline emphasis (used instead of italics), the tips column header, the on-tribute zone fill, and the brand mark glint. **Gold Deep** (`#c9a24b`) is its gradient partner on the primary gold CTA. Gold is rare on purpose: it marks reward, never decoration.

### Tertiary
- **Reptile Teal** (`#7fd8c6`): The Field zone color and the Reptile-type attribute pill. Cool counterweight to the two warm/violet accents.
- **Ash Blue-Violet** (`#8f9bd0`): The Graveyard (GY) zone color. A muted, cold neutral-accent for the "dead but working" zone.
- **Discord Blurple** (`#5865f2`, hover **Blurple Deep** `#4752c4`) and **Warning Rose** (`#e59a9a`): reserved semantics only, the external Discord CTA and combo "watch out" callouts respectively.

### Card-Frame Accents
Cost-label and pill colors keyed to a card's Yu-Gi-Oh! frame, so an Extra Deck type reads at a glance. Each is a desaturated take on the real frame color, tuned for legibility on the dark ground. Used only on the material-cost label and matching pills, never as surface or text color.
- **Trap** (`#d98cba`), **Xyz** (`#b9b4c9`, silver), **Synchro** (`#eef0f8`, near-white), **Link** (`#6f97ff`, cobalt), **Fusion** (`#c69bff`, purple).
- **Hybrid Zone** (`#e6dfc9`): text for a pill that spans two zones (e.g. HAND / GY), over a gold→ash gradient tint.
- **Gold Light** (`#f0d98a`): the hover state for gold inline links only (payoff still owns the hue; see The Scarce Gold Rule).

### Neutral
- **Void Purple-Black** (`#14101f`): The body ground on every page; landing and cards layer soft radial violet glows on top of it.
- **Surface** (`#191225`) and its two tonal steps **Surface Alt 1** (`#1e1633`) / **Surface Alt 2** (`#241b3d`): the layered card and panel backgrounds. Depth comes from these tonal steps, not shadow. The 45-degree stripe (`#1e1633` / `#241b3d`) backs the empty threat-art slot on the matchup map.
- **Text ramp** (purple-leaning, never neutral gray): Text `#ece8f5` → Muted `#b7add0` → Dim `#a79bc0` → Caption `#8f84af` → Faint `#8a7ea3`.
- **Borders** are alpha-violet, never gray: `rgba(185,140,255,0.16)` standard, `0.14` soft.

### Named Rules
**The Two Voices Rule.** Gold and violet are never interchangeable. Gold means payoff/emphasis/stats; violet means interaction/links/eyebrows. If a color choice can't be justified by that split, it's wrong. ("Violet" here means each deck's own interaction accent; see Per-Deck Accents.)

**The Deck Accent Rule.** Gold stays gold on every deck, it's the one constant a reader can rely on sitewide. The interaction accent is the only thing that reskins per deck, and only via the `--violet*` token family; zone pills, card-frame accents, and attribute pills stay pinned so the rest of the visual language reads identically across decks.

**The Purple-Gray Rule.** There is no neutral gray anywhere. Every "gray" is a purple-leaning value off the text ramp, and every border is alpha-violet. Grey text or grey hairlines read as a foreign body.

**The Scarce Gold Rule.** Gold appears only where something is a genuine reward or the single most important number on screen. Spread it around and it stops meaning payoff.

### What lives outside the token tables
The frontmatter `colors` / `rounded` / `typography` maps are the *palette, shape, and type system*, one representative value per named role, not an inventory of every literal in the CSS. §3's Hierarchy prose is the actual multi-step spec for a role that spans a range; these stay as contextual values on purpose, and a design-drift scan flagging them is expected, not a defect:
- **Shadow and overlay rgba** (`rgba(0,0,0,*)` drop shadows, `rgba(20,16,31,*)` and `rgba(10,7,18,*)` translucent grounds: the header, the nav sheet, the boss-stack vignette and the boss-slice info scrim, all alpha steps of `--bg`; the `rgba(255,255,255,.75)` / `#fff` selection ring, the `rgba(61,42,90,*)` 45-degree stripe): these belong to Elevation (§4) and Neutral (§2), described there with exact values.
- **Glyph radii** (2–4px on the chevron, diamond bullets, and the tiny WIP badges (`.nav-wip`, `.combo-jump-wip`)): sub-token shapes below `chip`/`xs`, each corner-rounded proportionally to its own small size rather than snapped to a shared step.
- **Glyph size** (15px, sized to the 34px header brand-mark diamond that contains it): the single kanji/character inside a diamond icon is sized to its container, not to the Title ramp. This is the **only** literal `font-size` value left in `style.css`, and it is not type, it is icon geometry.

**Type is no longer on this list.** It used to be, with the same "contextual values on purpose" argument, and that argument was wrong. What it was defending was 28 distinct `px` font sizes, 18 of them between 8.5px and 18px, stepping by half a pixel: `.zone-text` at 13.5, `.panel-card .body` at 14, `.combo-do` at 14.5, `.turn-step .card` at 15, four sizes inside a pixel and a half, all doing the same job. That is drift, not context, and a doc that carves out room for it stops being a spec. §3's ramp is now the whole inventory: twelve `--text-*` tokens, every one of them in the frontmatter above.

## 3. Typography

**Display Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** IBM Plex Sans (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono

**Character:** A three-face system pairing on a clear contrast axis: Space Grotesk's geometric quirk for anything that names or numbers, IBM Plex Sans's humanist calm for running prose, and IBM Plex Mono for every label and pill. The mono face, wide-tracked and usually uppercase, does most of the identity work: it is the texture that makes the page read as a codex rather than a blog.

### The ramp

Twelve `--text-*` tokens in `:root`, in `rem`. **There are no other type sizes.** A new size means adding a token here and in the frontmatter, not a literal in a rule.

| Token | rem | ≈px | Face | Used by |
|---|---|---|---|---|
| `--text-display` | 4 | 64 | Grotesk 700 | The hero headline only, one per page |
| `--text-page` | 2.875 | 46 | Grotesk 700 | Page `h1` (`.comp-head h1`, mobile hero) |
| `--text-section` | 2.375 | 38 | Grotesk 700 | Section headings (`.section-head h2`, `.turn-panel h2`, `.cta h2`) |
| `--text-headline` | 1.75 | 28 | Grotesk 700 | Group headings, a combo line's own name |
| `--text-title` | 1.4375 | 23 | Grotesk 600 | Compendium card-row names |
| `--text-title-sm` | 1.1875 | 19 | Grotesk 600 | Wordmark, panel/boss-card/synergy titles |
| `--text-body` | 1.0625 | 17 | Plex Sans 400 | Prose, page intros, the gold CTA, stat readouts |
| `--text-body-sm` | 0.9375 | 15 | Plex Sans 400 | Card-level running text, UI text, buttons |
| `--text-meta` | 0.8125 | 13 | Plex Sans 400 | Dense secondary prose, inline meta, combo notes |
| `--text-label` | 0.75 | 12 | Plex Mono 500 | Nav, eyebrows, tabs, quiet notes |
| `--text-label-sm` | 0.6875 | 11 | Plex Mono 500 | Zone pills, stat captions, column heads |
| `--text-label-xs` | 0.625 | 10 | Plex Mono 500 | Micro badges, cost labels, combo tags |

Ratios widen as the ramp climbs: 1.08–1.10 across the label band, 1.12–1.15 through body, 1.2–1.4 at the headings. Big type can afford big jumps; a label band stepping by 20% would read as four unrelated sizes instead of one texture.

### Named Rules
**The Rem Rule.** Type sizes are `rem`, never `px`. A `px` ramp silently overrides the reader's own browser font-size setting, and this is a reference site people read on a phone, mid-game. The corollary is that the layout has to survive a reader who has set 200%: grid and flex children that hold text carry `min-width: 0` (see §5's Collapse-On-Content Rule), because the default `min-width: auto` refuses to shrink below the longest word and turns a large-type reader's page into a horizontal scroll. Five routes did exactly that before the rule existed.

**The Light-On-Dark Rule.** Body carries `letter-spacing: 0.01em`, and `h1, h2, h3` reset it to `normal`. Light ink on a dark ground reads optically tighter than the same type dark-on-light, so prose gets a hair of tracking back; display sizes need the opposite (they tighten to -0.02em), so the correction must never inherit into a heading.

**The Mono-Label Rule.** Every label, eyebrow, pill, badge, nav item, and caption is IBM Plex Mono, wide-tracked. Never set a label in the body or display face.

**The Eyebrow Rule.** Eyebrows are mono, violet, and prefixed `// LABEL`. Use them deliberately as page or key-section markers, never above every section (an eyebrow over every heading reads as scaffolding, not voice). The numbered form `// 01 · LABEL` is reserved for content that is a true ordered sequence (the tribute engine loop, combo timelines).

**The No-Em-Dash Rule.** No em-dashes anywhere in copy. Use colons or commas. This is a hard content rule that the type system inherits.

## 4. Elevation

The system is near-flat and depth is built almost entirely from **tonal violet layering**: the ground is darkest, surfaces step up through `#191225` → `#1e1633` → `#241b3d`, and separation is drawn with alpha-violet hairline borders rather than shadow. The header is the one ambient exception: it floats with a 14px backdrop blur over a translucent ground.

### Shadow Vocabulary
- **Floating art** (`box-shadow: 0 40px 80px -30px rgba(0,0,0,0.8)`): Reserved for the hero card and boss-stack frame, the only elements meant to lift off the page.
- **Dropdown / popover** (`box-shadow: 0 18px 40px rgba(0,0,0,0.45)`): The mobile nav sheet and nav sub-menus.
- **Selection / focus ring** (`box-shadow: 0 0 0 2px var(--focus-ring)`, white at 75%): The ring on an active or keyboard-focused control. A state indicator, not elevation. White rather than the deck accent because the accent reskins per deck and some of them would collide with the chip colors the ring has to read against.

### Stacking order

`--z-sticky` 40 → `--z-header` 50 → `--z-dropdown` 60 → `--z-popover` 70 → `--z-modal` 90 → `--z-skip` 100. Every non-local layer comes from that ladder; the only bare integers left are the boss stack's internal 2/3, which order slices against their own vignette and mean nothing outside the component.

The header sits **above** the sticky tab bar and **below** its own dropdown: the nav flyout hangs off the header and has to clear it. That inverts the usual dropdown-under-sticky order and is deliberate. The skip link tops the ladder by definition, it has to be reachable over anything on screen; it previously tied the lightbox at 100 with nothing saying which should win.

### Named Rules
**The One Ring Rule.** The focus ring is declared once, on `a / button / input / summary / [tabindex]`, never per component. It used to be copied into eleven rules and still missed seven controls, including the compendium's section tabs: `#trap-filter .tab:focus-visible` gave the matchups page the ring while the identical button elsewhere fell back to the browser default, so the same component had two focus treatments depending on the page. A component that needs *more* than the ring (a border-color change, an opacity bump, the boss slice's `inset` variant, which the stack's `overflow: hidden` forces) declares only the extra and inherits the ring.

### Named Rules
**The Flat-Codex Rule.** Surfaces are flat at rest and separated by tone and hairline borders. A drop shadow is earned only by something that genuinely floats (hero art, the boss stack, an open menu). If a card has a shadow, ask whether it should float at all; the answer is almost always no.

## 5. Spacing & Rhythm

The frontmatter `spacing` scale is exposed in CSS as `--space-xs` … `--space-3xl` (6 / 14 / 24 / 40 / 56 / 72 / 96px). **Page-level rhythm keys off those tokens; component internals keep their own contextual values** (a card's 24px padding, a tip list's 11px gap), the same split as the type and color tables.

The rhythm classes and what they are for:
- **`.section`** (`--space-xl`, 56px top and bottom): an ordinary top-level section. Two in a row are 112px apart.
- **`.section-pad-lg`** (`--space-2xl`, 72px): a feature section that should read as a bigger beat, and the first section on a page. Against a `.section` neighbour that is 128px.
- **`.cta`** (`--space-2xl` top, `--space-3xl` bottom): the closing call to action, separated from the section it closes and given room before the footer.
- **`.groups` / `.combo-jump`** (`--space-lg`, 40px): the seam between a page's header/filter block and its content.

### Named Rules
**The Separation Rule.** The space *between* two sections must beat the space *inside* one. Intra-section separators are ~32–44px (`.section-head`, `.section-head-center`), so a top-level section boundary never goes below 56px per side. This has already gone wrong once: `.section` used to be 24px, which put two distinct sections 48px apart while their own headings sat 32px from their content, so the page read as one continuous block with no hierarchy.

**The One-Section Rule.** A heading and the content it introduces are one `<section>`, not two. The deck hub shipped them as separate sections and got the inverse rhythm: 96px between the h1 and its own deck grid, 48px between that grid and the next section down.

**The Measure Rule.** Any element that holds *wrapping* prose carries its own `max-width` (68ch, or 60–62ch for the card-row columns), not just the ones that look too wide today. Two-column layouts hide the problem: `.card-cols`, `.two-col` and `.combo-head` all inherit the full container the moment they collapse, and `.combo-warn` / `.combo-info` / `.fs-pre` were each running at 120–150 characters before their siblings' caps were extended to them. A single-line status note (`.pending-note`, `.wip-note` when short) does not need one; anything that reaches a second line does.

The cap is in `ch`, never `px`. A `px` cap only equals its documented measure at exactly a 16px root: five of them (`.hero p` 560px, `.comp-head .intro` 680px, `.combo-note` and `.section-head .prose` 640px, `.section-head-center p` 620px) were doing that, and a reader at a 200% font setting got 30–36 characters per line instead of 65–75, because the box stayed put while the type doubled. `ch` scales with the type, so the measure holds. Component *box* widths (`.synergy-card`, `.combo-meta`, `.combo-video`) stay in `px`: those size a panel, not a line of text.

**The Collapse-On-Content Rule.** Multi-column grids collapse when *their content* gets cramped, not when the viewport hits the global 900px breakpoint. `.card-cols` collapses at 1080px, because the 210px art rail squeezes its text columns to ~30 characters long before the page itself is narrow. Grids whose item count varies (`.grid-3`, `.grid-4`, `.turn-grid`, `.synergy-grid`, `.deck-grid`) use `repeat(auto-fit, minmax(…, 1fr))` and need no breakpoint at all.

## 6. Components

### Buttons
- **Shape:** Softly rounded (10–12px). Pill radius is reserved for attribute pills, not buttons.
- **Primary (violet):** Violet→violet-deep gradient (`#b98cff`→`#8a5cf0`), `#14101f` ink, 14px×24px. The main "explore/see" action.
- **Gold:** Gold→gold-deep gradient (`#e0c46a`→`#c9a24b`), `#14101f` ink, 700 weight, 16px×30px, 12px radius. The single strongest closing CTA per page; used sparingly.
- **Outline:** Transparent with a `rgba(185,140,255,0.28)` border and violet-light text. The secondary/fallback action.
- **Hover / Focus:** Filled buttons hold their fill and ink color on hover (no wash-out); interaction feedback is subtle. Focus should show a visible ring.
- **Discord CTA:** Blurple (`#5865f2`) with white text, right end of the nav, opens in a new tab with `rel="noopener"`.

### Card search

- **Shape:** A labeled `<input type="search">` above the zone chips on every compendium, 8px radius, `--surface` fill, alpha-violet border, `--text-body-sm`. Placeholder uses `--text-caption`, not `--text-faint`: placeholder text needs the same 4.5:1 as body copy.
- **Why it exists:** the zone chips and section tabs both require the reader to already know where a card lives. Search is the axis for a reader who only knows the name, which is the common arrival case per PRODUCT.md.
- **Behavior:** filters on card name, combines with both other axes, auto-opens any collapsed group holding a match, and Escape clears the field.

### Skip link

Off-screen until focused, then a violet chip at the top left jumping to `<main>`. The nav is four dropdown groups (18 links in the mobile sheet) and precedes the content on every page, so keyboard and screen-reader users need one key past it.

### Chips (zone filters)
- **Style:** Mono, `--text-label-sm`, colored per zone with a matching alpha border (Hand=gold, Deck=violet, GY=ash, Field=teal; On-Tribute and Trigger are filled). 6px radius.
- **State:** Rest at 0.72 opacity; hover and selected go to full opacity; selected/focused add the white 2px selection ring, except the two filled chips (On-Tribute gold, Trigger violet) which ring in `--bg` first so the state reads at equal strength on all five. Tap an active chip again to clear.
- **Markup:** real `<button aria-pressed>`, never a `role="button"` span. The pressed state has to be announced, and a button brings keyboard activation for free. Both filter surfaces on the site (compendium zone chips, matchup handtrap chips) share this contract.

**The Live Count Rule.** Any count rendered next to a filter (tab counts, group counts) is recomputed from what is actually visible, never left at the baked-in total. A tab reading "5" that delivers 0 is worse than no count at all. Tab counts answer "what would I get if I clicked this?", so they reflect every axis except their own.

### Cards / Containers
- **Corner Style:** 16px (card rows, panels), 14px (synergy/stat panels), 20px for feature panels.
- **Background:** `#191225` surface; synergy cards use a subtle 160-degree surface-alt gradient.
- **Shadow Strategy:** None by default (see The Flat-Codex Rule). Separation is border + tone.
- **Border:** Alpha-violet hairline (`rgba(185,140,255,0.16)`).
- **Internal Padding:** ~24–26px on panels; card rows split into a 210px art rail + content grid that collapses to a top art row under 900px.

### Navigation
- **Style:** Sticky, translucent header (`rgba(20,16,31,0.72)`) with 14px backdrop blur and a soft-violet bottom hairline. Nav items are mono, 12px, dim by default.
- **States:** Hover → violet-light; active page → deck-accent-tint background + violet-light text.
- **Brand mark:** always links to `/` (the deck hub), regardless of which deck's own glyph/wordmark it's currently showing. A logo is a way home, never a dead end; don't repurpose it as "this deck's Overview link" again, that's what the dropdown's own Overview item is for.
- **Per-deck dropdown:** each deck is a `.nav-group` (link + a separate `.nav-caret` button + `.nav-sub` flyout). The caret carries its own `aria-haspopup`/`aria-expanded` and toggles independently of the deck link, which still navigates normally on click. Desktop mouse users get the flyout for free via `:hover`/`:focus-within`; the caret exists specifically for `pointer: coarse` devices (tablets, touch laptops) at ≥900px, where hover never fires and a tap on the link would otherwise navigate away before the Cards/Combos/Discord items are ever seen. **Any future hover-revealed menu needs this same non-hover path**, don't ship a dropdown that only opens on `:hover`.
- **Mobile (<900px):** Links collapse behind a real `<button>` hamburger (`aria-expanded`/`aria-controls`) into a floating dropdown sheet; the caret hides itself (`.nav-sub` is already always-visible in the sheet); tapping any link closes it.

### Signature Component: The Boss Stack
On the overview hero (desktop only, ≥901px), one card-sized frame is split by diagonal `clip-path` into three panels, one per hero card. This is the page's one deliberate wow moment; nothing else on the page should compete with it for motion.

**At rest it is an artwork triptych, not three cards.** Each panel is zoomed to `auto 190%` and panned (`85% / 50% / 15%` horizontally, `35% / 40% / 37%` vertically) so it shows only its card's *art window*: no title bar, no effect box, no ATK/DEF line. A `.boss-stack::after` vignette sinks whatever chrome the crop still catches at either end. The panels are cut with ~0.8% gaps on both sides of each seam so the parent's `--bg` shows through as a real gap, and each carries a `drop-shadow` (which follows `clip-path`, unlike `box-shadow`) so the stack reads as depth.

**Hover / focus wipes the panel open and zooms out**: `clip-path` to the full frame and `background-size` from `auto 190%` to `auto 100%` over 450ms `--ease-out-quint`, then the name and stats slide up 160ms behind it. The art detail resolving into the whole card *is* the reveal. `auto 100%`, not the `cover` keyword: identical result, but it interpolates, where `cover` snapped. The expanded panel takes `z-index: 3` and so paints over the vignette; nothing needs to fade it. Keyboard focus gets the identical reveal, since three stacked full-frame links are otherwise indistinguishable on focus.

**The honesty rule.** Every Yu-Gi-Oh! card frame has identical geometry, so three sharp slices of three whole cards compose into one legible card: a spliced title over another card's stats. On a guide that sells accurate card information that is the worst thing the hero could say. Blurring it was the earlier answer and failed twice over: it read as an out-of-focus render, and at 3px the title bar and stat line were still legible. Crop past the chrome instead of fogging it. If this component is ever re-cropped, check the rest state at 100% zoom for any card text at all.

**Motion tokens.** `--ease-out-quint` (`cubic-bezier(0.22, 1, 0.36, 1)`) is the system's one easing token: natural deceleration, never bounce or elastic. Under `prefers-reduced-motion: reduce` the slice and its info panel drop `transition` entirely, so the reveal is instant and the component still works.

Below 900px the whole stack is replaced by a single static card.

### Signature Component: The Card Row
The compendium's core unit: a left art rail beside a content block of role label, name, type badges, an optional summoning-cost pill, and two columns, **Where It Activates** (colored zone rows) and **Tips & Tricks** (gold-headed, diamond bullets). Two independent filter axes act on it: section tabs and zone chips, combining so a group hides when it has no visible rows.

## 7. Do's and Don'ts

### Do:
- **Do** keep gold and violet in their lanes: gold = payoff/stats/emphasis, violet = interaction/links/eyebrows (The Two Voices Rule).
- **Do** build depth from tonal surface steps (`#191225` → `#1e1633` → `#241b3d`) and alpha-violet hairline borders, not shadows.
- **Do** set every label, pill, badge, nav item, and eyebrow in IBM Plex Mono, wide-tracked, usually uppercase.
- **Do** reserve the big soft shadow (`0 40px 80px -30px rgba(0,0,0,0.8)`) for elements that genuinely float (hero art, boss stack).
- **Do** use the diamond (45-degree rotated square) as the recurring motif at every scale.
- **Do** keep body copy purple-leaning off the text ramp and comfortably readable against `#14101f`.
- **Do** keep to one signature motion per page and give it room.
- **Do** give every page exactly one `<h1>` and nothing above it in the outline. A `critique`/`audit` pass on this project has caught a page shipping `<h2>` as its top heading before; it's an easy miss on a page built without a hero, check it explicitly.
- **Do** give any new top-level surface (a deck, a hub, a standalone section) an obvious way back to whatever it belongs under. Don't rely on browser-back; a visitor landing via search has none.
- **Do** check DESIGN.md's typography/color/rounded frontmatter (not just this prose) before shipping a new font-size, color, or radius. The design-drift detector reads the YAML frontmatter, not the prose sections; a value only described in prose still shows up as drift. If a new size earns its place, add it to the frontmatter in the same change, don't let it accumulate undocumented.
- **Do** run `/impeccable critique` and `/impeccable audit` after a structural change (new IA, new nav pattern, new page template), not only after a visual one. Heading-hierarchy breaks and navigation dead-ends don't show up in a build or in the detector's CSS scan; they only surface in a design review.

### Don't:
- **Don't** look like a **generic TCG wiki**: no dense table-dumps, no ad slots, no undifferentiated wall of card text.
- **Don't** mimic **official Konami styling**; this fan guide has its own violet-black voice.
- **Don't** drift into **corporate SaaS** clichés: no cream/navy landing pages, no hero-metric templates, no identical icon-card grids, no tracked-uppercase eyebrow above every section.
- **Don't** go **loud gamer / RGB**: no neon, no harsh multi-stop gradients, no angular esports styling.
- **Don't** introduce neutral gray text or gray borders anywhere; every gray is purple-leaning and every border is alpha-violet (The Purple-Gray Rule).
- **Don't** spend gold on decoration; if it isn't marking a payoff or the single key number, it shouldn't be gold (The Scarce Gold Rule).
- **Don't** use em-dashes in any copy; use colons or commas.
- **Don't** put a shadow on a resting card, or a numbered `01 · ` marker on a section that isn't a true sequence.
