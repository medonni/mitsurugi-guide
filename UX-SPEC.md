# Mitsurugi Guide — UX & Frontend Spec

A design handoff for the Mitsurugi Ritual Guide: a fan reference site for a Yu-Gi-Oh
archetype. Static site (Eleventy + Nunjucks), **dark theme only**, content authored in
JS data files. Values below are sourced from `src/css/style.css` and the templates.

- **Live:** https://medonni.github.io/mitsurugi-guide/
- **Audience:** players learning or piloting the deck, from curious newcomer to competitive grinder.
- **The one job:** make a complex combo deck legible, by *where each card activates* and *how a turn actually plays out*.

---

## 1. Information architecture

Three routes, one shared layout (`base.njk`: sticky header + hamburger, footer).

```
/            Overview   — what the deck is, why it works, a turn at a glance
/cards/      Compendium — every card, filterable by section and by activation zone
/combos/     Combos     — full combo lines as numbered timelines
```

Global nav (every page): **Overview · Cards · Synergy · Combos · [Discord]**
- "Synergy" is not a page: it deep-links to `/cards/#synergy`.
- "Discord" is an external CTA (opens in a new tab).

---

## 2. Primary user flows

1. **Understand the deck (newcomer).**
   Overview hero → engine loop → bosses → "A turn at a glance" → *See the full combos* → `/combos/`.
2. **Look up a card (all levels).**
   Cards → filter by section tab *or* by activation zone chip → read simplified effect + tips.
3. **Learn a line (piloting).**
   Combos → read Main combo line 1 top-to-bottom → tap an opener card → jumps to that card in the Compendium → back.
4. **Join the community.**
   Discord CTA, persistent in the nav on every page.

Cross-links are deliberate: Overview → Combos, Combos → Cards (per-card anchors), Cards → Synergy.

---

## 3. Navigation & wayfinding

| Aspect | Behavior |
|---|---|
| Header | Sticky, top, translucent with 14px backdrop blur. Present on all pages. |
| Active state | Current page's nav item gets a violet-tint background + light-violet text. |
| Hover | Links shift to light violet. |
| Discord CTA | Blurple button, right end of nav. New tab, `rel="noopener"`. |
| Mobile (<900px) | Links collapse behind a hamburger into a floating dropdown panel. Button carries `aria-expanded` / `aria-controls`. Tapping any link closes the menu. Discord becomes a full-width item in the sheet. |
| Sticky filters | On Cards, the filter tab bar is also sticky (below the header) on desktop; it releases to static under 900px. |

---

## 4. Page-by-page UX

### 4.1 Overview (`/`)
Purpose: sell the deck's identity and give a mental model before detail.

- **Hero** — headline (gold/violet gradient on the payoff word), one-paragraph thesis, two CTAs (primary "Explore every card", secondary "How it works"). Art: a card-shaped frame split diagonally into the 3 bosses (see boss-stack, §6).
- **Stat strip** — 4 cells (Attribute, Type, Ritual Bosses, Engine Monsters). Hairline dividers.
- **The archetype** — two-column prose intro.
- **The tribute engine** — 4-step numbered loop. *Numbering is meaningful here: it's a real cycle.*
- **The bosses** — 3 cards, each links to its Compendium entry.
- **Expanding out** — synergy grid (partner archetypes).
- **A turn at a glance** — condensed 5-beat turn, ending in a link to `/combos/`.
- **CTA** — closing push to the Compendium.

### 4.2 Card Compendium (`/cards/`)
Purpose: reference every card, organized by *where it activates*.

- **Header + legend** — explains the zone color language; the zone pills double as filter controls.
- **Two independent filter axes** (this is the key interaction):
  - **Section tabs** — All / Main / Supporting / Non-Engine / Extra Deck. Each shows a count.
  - **Zone chips** — Hand / Deck / GY / Field / On-Tribute / Trigger. Tap to filter; tap the active chip again to clear.
  - The two combine: a group hides if it has no visible rows under the current filters. Sub-label dividers only show in the unfiltered view.
- **Card row** — art (or placeholder), role label, name, type badges, optional summoning-cost pill, then two columns: **Where it Activates** (zone rows) and **Tips & Tricks**.
- **Synergy grid** at the foot (anchor `#synergy`).
- Every card has an `id` anchor for deep-linking from Combos.

### 4.3 Combos (`/combos/`)
Purpose: teach full lines step by step.

- **Intro** — what winning looks like.
- **Combo line** — a card with **START / END** meta, then a **numbered vertical timeline**. Step numbers preserve the source's `0 / 1.5 / 2.5` scheme (half-steps = trigger resolutions off the prior play), so order carries real meaning.
- **Per-step annotations** — two tag types, never conflated:
  - **WHY** (gold) — the resource logic / why it works.
  - **WATCH OUT** (red) — opponent interaction to play around (handtraps, etc.).
- **Opener cards** in the START line deep-link to the Compendium.
- **Key interactions** — 3-card grid of general callouts.
- **Pending** — a quiet footer listing lines still to document.

---

## 5. Interaction patterns & states

| Element | Rest | Hover | Active / Selected | Focus |
|---|---|---|---|---|
| Nav link | dim text | light violet | violet-tint bg (current page) | — |
| Button (violet/gold) | filled gradient | (color holds) | — | visible ring expected |
| Filter tab | surface, dim | — | violet gradient fill, bg | — |
| Zone chip | 0.72 opacity | full opacity | white ring (`box-shadow`) | white ring (`focus-visible`) |
| Boss slice (desktop) | ⅓ frame, dimmed | expands to full frame, caption reveals | — | — |
| Combo opener link | violet | light violet | — | — |

- **Empty/pending state:** the combos page shows a "More lines to document" line rather than hiding the absence, keeping the roadmap visible.
- **Keyboard:** zone chips are operable via Enter/Space with a visible focus ring; the hamburger is a real `<button>`.

---

## 6. Signature interaction: the boss stack (desktop only)

The hero art is one card-sized frame split by diagonal `clip-path` into three slices (Murakumo · Habakiri · Futsu, Habakiri centered). Hovering a slice expands it to fill the frame (0.5s cubic-bezier) and slides in its name + stats. Below 900px it's replaced by a single static card. Treat this as the page's one "wow" moment; don't add competing motion.

---

## 7. Responsive behavior

**One breakpoint: `900px`.** Everything collapses at once — there is no tablet mid-tier.

- Multi-column grids (hero, stats, bosses, synergy, turn, card row, card columns) → single column.
- Nav → hamburger dropdown.
- Side padding: `40px` → `20px`.
- Card art moves from a left rail to a top row within the card.
- Sticky filter bar releases to static.

---

## 8. Visual system (condensed reference)

Full token table and live swatches are in the visual spec; the essentials a UX designer needs to keep new screens native:

**Color roles**
- Ground: `#14101f` (purple-black). Surfaces: `#191225`. Borders are alpha-violet, not grey.
- **Two accents, never interchangeable:** gold `#e0c46a` = payoff / emphasis / stats; violet `#b98cff` = interaction / links / eyebrows.
- Neutrals lean purple (text `#ece8f5` down to faint `#6f6488`).
- **Zone color language (fixed):** Hand = gold, Deck = violet, GY = `#8f9bd0`, Field = `#7fd8c6`, On-Tribute = gold fill, Trigger = violet fill. Reuse these exact roles; don't recolor.
- Semantic: warning = `#e59a9a`; Discord = `#5865f2`.

**Type roles** (never mixed out of role)
- **Space Grotesk** — headings, wordmark, stat values, card names, combo numbers.
- **IBM Plex Sans** — all running text.
- **IBM Plex Mono** — every label, eyebrow, pill, badge, nav, stat caption. Wide tracking, often uppercase. This face does much of the identity work.

**Motifs**
- The **diamond** (45° rotated square, content upright) at every scale: brand mark, card glyph, synergy dots, tip bullets.
- The **eyebrow**: mono, violet, `// LABEL`. Numbered `// 01 · LABEL` *only* where content is a true sequence.
- **Gold emphasis** inline instead of italics.

**Shape/depth**
- Radii: 8–10px (controls) · 14–16px (cards) · 20px (feature panels).
- One big soft shadow, reserved for floating card art.
- Textures: a 45° diagonal stripe (card-art backdrop) and the accent gradients.

---

## 9. Content & voice rules

- **No em-dashes anywhere in copy.** Use colons or commas. (Hard rule; match it in new strings.)
- Card effects are **simplified**, grouped by activation zone, and paired with practical tips.
- Card names & effects © Konami, used for reference only. Transcribe effects; don't fabricate.

---

## 10. Open items

- **Overview vs Combos mismatch:** the Overview "turn at a glance" still says Kusanagi returns *Ritual*, while Combos says *Mirror*. Needs reconciliation.
- **More combo lines** to document (Ogdoadic Rank 8 extension, Fiendsmith bridge) — currently in the pending list.
- **Azamina synergy** copy is still "TBA".
- **Hero float animation** is intentionally disabled (was choppy on the boss stack).
