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
  text-faint: "#6f6488"
  text-caption: "#8f84af"
  violet: "#b98cff"
  violet-lt: "#cbb0ff"
  violet-deep: "#8a5cf0"
  gold: "#e0c46a"
  gold-deep: "#c9a24b"
  gold-lt: "#f0d98a"
  zone-gy: "#8f9bd0"
  zone-field: "#7fd8c6"
  zone-hybrid: "#e6dfc9"
  frame-trap: "#d98cba"
  frame-xyz: "#b9b4c9"
  frame-link: "#6f97ff"
  frame-fusion: "#c69bff"
  discord: "#5865f2"
  discord-deep: "#4752c4"
  warning: "#e59a9a"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "64px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-sm:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
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

This is a dark reference tome for a single Yu-Gi-Oh! deck: disciplined, legible, and quietly scholarly. Everything sits on a purple-black ground the color of a shrine at night (`#14101f`), and meaning is carried by two accents that never trade jobs: gold is the payoff (`#e0c46a`, used for stats, emphasis, and the on-tribute reward), violet is the interaction language (`#b98cff`, used for links, filters, and eyebrows). The page reads like an illuminated manuscript, dense with content but calm, gold catching the eye only where something actually matters.

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
- **Arcane Violet** (`#b98cff`): The interaction color. Every link, active nav item, filter tab fill, and `// LABEL` eyebrow. Its lighter sibling **Violet Light** (`#cbb0ff`) is the hover/active text state; **Violet Deep** (`#8a5cf0`) is the gradient partner on filled violet buttons and tabs.

### Secondary
- **Ritual Gold** (`#e0c46a`): The payoff color. Stat values, inline emphasis (used instead of italics), the tips column header, the on-tribute zone fill, and the brand mark glint. **Gold Deep** (`#c9a24b`) is its gradient partner on the primary gold CTA. Gold is rare on purpose: it marks reward, never decoration.

### Tertiary
- **Reptile Teal** (`#7fd8c6`): The Field zone color and the Reptile-type attribute pill. Cool counterweight to the two warm/violet accents.
- **Ash Blue-Violet** (`#8f9bd0`): The Graveyard (GY) zone color. A muted, cold neutral-accent for the "dead but working" zone.
- **Discord Blurple** (`#5865f2`, hover **Blurple Deep** `#4752c4`) and **Warning Rose** (`#e59a9a`): reserved semantics only, the external Discord CTA and combo "watch out" callouts respectively.

### Card-Frame Accents
Cost-label and pill colors keyed to a card's Yu-Gi-Oh! frame, so an Extra Deck type reads at a glance. Each is a desaturated take on the real frame color, tuned for legibility on the dark ground. Used only on the material-cost label and matching pills, never as surface or text color.
- **Trap** (`#d98cba`), **Xyz** (`#b9b4c9`, silver), **Link** (`#6f97ff`, cobalt), **Fusion** (`#c69bff`, purple).
- **Hybrid Zone** (`#e6dfc9`): text for a pill that spans two zones (e.g. HAND / GY), over a gold→ash gradient tint.
- **Gold Light** (`#f0d98a`): the hover state for gold inline links only (payoff still owns the hue; see The Scarce Gold Rule).

### Neutral
- **Void Purple-Black** (`#14101f`): The body ground on every page; landing and cards layer soft radial violet glows on top of it.
- **Surface** (`#191225`) and its two tonal steps **Surface Alt 1** (`#1e1633`) / **Surface Alt 2** (`#241b3d`): the layered card and panel backgrounds. Depth comes from these tonal steps, not shadow. The 45-degree stripe (`#1e1633` / `#241b3d`) backs empty card-art placeholders.
- **Text ramp** (purple-leaning, never neutral gray): Text `#ece8f5` → Muted `#b7add0` → Dim `#a79bc0` → Caption `#8f84af` → Faint `#6f6488`.
- **Borders** are alpha-violet, never gray: `rgba(185,140,255,0.16)` standard, `0.14` soft.

### Named Rules
**The Two Voices Rule.** Gold and violet are never interchangeable. Gold means payoff/emphasis/stats; violet means interaction/links/eyebrows. If a color choice can't be justified by that split, it's wrong.

**The Purple-Gray Rule.** There is no neutral gray anywhere. Every "gray" is a purple-leaning value off the text ramp, and every border is alpha-violet. Grey text or grey hairlines read as a foreign body.

**The Scarce Gold Rule.** Gold appears only where something is a genuine reward or the single most important number on screen. Spread it around and it stops meaning payoff.

### What lives outside the token tables
The frontmatter `colors` / `rounded` maps are the *palette and shape system*, not an inventory of every literal in the CSS. These stay as contextual values on purpose, and a design-drift scan flagging them is expected, not a defect:
- **Shadow and overlay rgba** (`rgba(0,0,0,*)` drop shadows, `rgba(10,7,18,*)` translucent header/nav grounds, the `rgba(255,255,255,.75)` / `#fff` selection ring, the `rgba(61,42,90,*)` 45-degree art-placeholder stripe): these belong to Elevation (§4) and Neutral (§2), described there with exact values.
- **Fluid heading sizes** (the `clamp()` display range, ~30–46px): scale steps of the Display/Headline roles, not new ramp entries.
- **Glyph radii** (2–4px on the chevron and diamond bullets): sub-token shapes below `chip`/`xs`.

## 3. Typography

**Display Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** IBM Plex Sans (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono

**Character:** A three-face system pairing on a clear contrast axis: Space Grotesk's geometric quirk for anything that names or numbers, IBM Plex Sans's humanist calm for running prose, and IBM Plex Mono for every label and pill. The mono face, wide-tracked and usually uppercase, does most of the identity work: it is the texture that makes the page read as a codex rather than a blog.

### Hierarchy
- **Display** (Space Grotesk 700, 64px, line-height 1.02, tracking -0.02em): The hero headline only. On the payoff word it takes a gold→violet clip gradient. One per page.
- **Headline** (Space Grotesk 700, 27px): Group and section titles ("Ritual Monsters", "Every card, by where it activates").
- **Title** (Space Grotesk 600–700, 18–30px): Boss card names (18px), stat values (30px, gold), the wordmark (18px, tracking 0.04em).
- **Body** (IBM Plex Sans 400, 17px, line-height 1.6, muted): Page intros and prose; capped around 65–75ch (`max-width` ~680px). Card-level running text drops to 13.5–14.5px at the same line-height.
- **Label** (IBM Plex Mono 500, 10.5–12px, tracking 0.06–0.12em, usually UPPERCASE): Every eyebrow, nav item, badge, pill, column header, and stat caption. This is the signature face.

### Named Rules
**The Mono-Label Rule.** Every label, eyebrow, pill, badge, nav item, and caption is IBM Plex Mono, wide-tracked. Never set a label in the body or display face.

**The Eyebrow Rule.** Eyebrows are mono, violet, and prefixed `// LABEL`. Use them deliberately as page or key-section markers, never above every section (an eyebrow over every heading reads as scaffolding, not voice). The numbered form `// 01 · LABEL` is reserved for content that is a true ordered sequence (the tribute engine loop, combo timelines).

**The No-Em-Dash Rule.** No em-dashes anywhere in copy. Use colons or commas. This is a hard content rule that the type system inherits.

## 4. Elevation

The system is near-flat and depth is built almost entirely from **tonal violet layering**: the ground is darkest, surfaces step up through `#191225` → `#1e1633` → `#241b3d`, and separation is drawn with alpha-violet hairline borders rather than shadow. The header is the one ambient exception: it floats with a 14px backdrop blur over a translucent ground.

### Shadow Vocabulary
- **Floating art** (`box-shadow: 0 40px 80px -30px rgba(0,0,0,0.8)`): Reserved for the hero card and boss-stack frame, the only elements meant to lift off the page.
- **Dropdown / popover** (`box-shadow: 0 18px 40px rgba(0,0,0,0.45)`): The mobile nav sheet and nav sub-menus.
- **Selection ring** (`box-shadow: 0 0 0 2px rgba(255,255,255,0.75)`): The white ring on an active or focused zone chip. This is a state indicator, not elevation.

### Named Rules
**The Flat-Codex Rule.** Surfaces are flat at rest and separated by tone and hairline borders. A drop shadow is earned only by something that genuinely floats (hero art, the boss stack, an open menu). If a card has a shadow, ask whether it should float at all; the answer is almost always no.

## 5. Components

### Buttons
- **Shape:** Softly rounded (10–12px). Pill radius is reserved for attribute pills, not buttons.
- **Primary (violet):** Violet→violet-deep gradient (`#b98cff`→`#8a5cf0`), `#14101f` ink, 14px×24px. The main "explore/see" action.
- **Gold:** Gold→gold-deep gradient (`#e0c46a`→`#c9a24b`), `#14101f` ink, 700 weight, 16px×30px, 12px radius. The single strongest closing CTA per page; used sparingly.
- **Outline:** Transparent with a `rgba(185,140,255,0.28)` border and violet-light text. The secondary/fallback action.
- **Hover / Focus:** Filled buttons hold their fill and ink color on hover (no wash-out); interaction feedback is subtle. Focus should show a visible ring.
- **Discord CTA:** Blurple (`#5865f2`) with white text, right end of the nav, opens in a new tab with `rel="noopener"`.

### Chips (zone filters)
- **Style:** Mono, 10.5px, colored per zone with a matching alpha border (Hand=gold, Deck=violet, GY=ash, Field=teal; On-Tribute and Trigger are filled). 6px radius.
- **State:** Rest at 0.72 opacity; hover and selected go to full opacity; selected/focused add the white 2px selection ring. Tap an active chip again to clear. Fully keyboard-operable (Enter/Space) with a visible focus ring.

### Cards / Containers
- **Corner Style:** 16px (card rows, panels), 14px (synergy/stat panels), 20px for feature panels.
- **Background:** `#191225` surface; synergy cards use a subtle 160-degree surface-alt gradient.
- **Shadow Strategy:** None by default (see The Flat-Codex Rule). Separation is border + tone.
- **Border:** Alpha-violet hairline (`rgba(185,140,255,0.16)`).
- **Internal Padding:** ~24–26px on panels; card rows split into a 210px art rail + content grid that collapses to a top art row under 900px.

### Navigation
- **Style:** Sticky, translucent header (`rgba(20,16,31,0.72)`) with 14px backdrop blur and a soft-violet bottom hairline. Nav items are mono, 12.5px, dim by default.
- **States:** Hover → violet-light; active page → `rgba(185,140,255,0.12)` violet-tint background + violet-light text.
- **Mobile (<900px):** Links collapse behind a real `<button>` hamburger (`aria-expanded`/`aria-controls`) into a floating dropdown sheet; Discord becomes a full-width item; tapping any link closes it.

### Signature Component: The Boss Stack
On the overview hero (desktop only, ≥901px), one card-sized frame is split by diagonal `clip-path` into three slices (the three Ritual Monsters, center one emphasized). Hovering a slice expands it to fill the frame (~0.5s cubic-bezier) and slides in its name and stats. Below 900px it is replaced by a single static card. This is the page's one deliberate wow moment; nothing else on the page should compete with it for motion.

### Signature Component: The Card Row
The compendium's core unit: a left art rail (or striped `[ CARD ART ]` placeholder) beside a content block of role label, name, type badges, an optional summoning-cost pill, and two columns, **Where It Activates** (colored zone rows) and **Tips & Tricks** (gold-headed, diamond bullets). Two independent filter axes act on it: section tabs and zone chips, combining so a group hides when it has no visible rows.

## 6. Do's and Don'ts

### Do:
- **Do** keep gold and violet in their lanes: gold = payoff/stats/emphasis, violet = interaction/links/eyebrows (The Two Voices Rule).
- **Do** build depth from tonal surface steps (`#191225` → `#1e1633` → `#241b3d`) and alpha-violet hairline borders, not shadows.
- **Do** set every label, pill, badge, nav item, and eyebrow in IBM Plex Mono, wide-tracked, usually uppercase.
- **Do** reserve the big soft shadow (`0 40px 80px -30px rgba(0,0,0,0.8)`) for elements that genuinely float (hero art, boss stack).
- **Do** use the diamond (45-degree rotated square) as the recurring motif at every scale.
- **Do** keep body copy purple-leaning off the text ramp and comfortably readable against `#14101f`.
- **Do** keep to one signature motion per page and give it room.

### Don't:
- **Don't** look like a **generic TCG wiki**: no dense table-dumps, no ad slots, no undifferentiated wall of card text.
- **Don't** mimic **official Konami styling**; this fan guide has its own violet-black voice.
- **Don't** drift into **corporate SaaS** clichés: no cream/navy landing pages, no hero-metric templates, no identical icon-card grids, no tracked-uppercase eyebrow above every section.
- **Don't** go **loud gamer / RGB**: no neon, no harsh multi-stop gradients, no angular esports styling.
- **Don't** introduce neutral gray text or gray borders anywhere; every gray is purple-leaning and every border is alpha-violet (The Purple-Gray Rule).
- **Don't** spend gold on decoration; if it isn't marking a payoff or the single key number, it shouldn't be gold (The Scarce Gold Rule).
- **Don't** use em-dashes in any copy; use colons or commas.
- **Don't** put a shadow on a resting card, or a numbered `01 · ` marker on a section that isn't a true sequence.
