---
target: matchups page
total_score: 23
p0_count: 2
p1_count: 3
timestamp: 2026-08-07T06-35-53Z
slug: src-handtraps-matchups-njk
---
Method: dual-agent (A: design review, isolated · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Headline count `25 cards mapped, 46 handtrap calls` never recomputes under filter, breaking DESIGN.md's own Live Count Rule |
| 2 | Match System / Real World | 3 | Pilot voice excellent; `no answers here` prints above visibly present content |
| 3 | User Control and Freedom | 2 | No URL state; all 46 chips navigate away and destroy scroll position |
| 4 | Consistency and Standards | 2 | `.tab` is single-select-with-counts on every compendium, multi-select-without-counts here |
| 5 | Error Prevention | 1 | A BLANK verdict chip is byte-identical to a live one |
| 6 | Recognition Rather Than Recall | 2 | Card-first page ships only a handtrap-first control |
| 7 | Flexibility and Efficiency | 2 | No URL state, no collapse-all, all 10 `<details>` ship open |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained and on-brand; costs a 175px art tax per row plus 720px of stubs |
| 9 | Error Recovery | 2 | `#filter-empty` is a dead end with no Clear affordance inside it |
| 10 | Help and Documentation | 3 | BLANK and "Leave at home", the two novel concepts, are never defined |
| **Total** | | **23/40** | **Acceptable, significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment**: Not AI slop. All eight absolute bans clean. No em-dashes anywhere. Every gray resolves to the purple-leaning ramp. Exactly one eyebrow, correctly placed per The Eyebrow Rule. The verdict prose is unmistakably human.

One real DESIGN.md violation: gold spent on decoration. Ten `.group-dot` diamonds hardcoded `var(--gold)` at matchups.njk:46, six on empty stubs, encoding nothing, where the same dot on the compendium encodes zone. The Scarce Gold Rule and The Two Voices Rule are both slipping.

Borderline: the six "not mapped yet" stubs and Branded's three striped placeholders read as template scaffolding.

**Deterministic scan**: `detect.mjs` exit 0 / 0 findings on `src/handtraps/matchups.njk`. Built HTML: 1 finding, `overused-font` (Google Fonts: Space Grotesk) at line 20, which is DESIGN.md section 3's documented display face on every page: false positive. In-page injected detector: 48 findings, of which 46 `ai-color-palette` + 1 `gpt-thin-border-wide-shadow` map to the documented violet identity and elevation values (false positives), leaving 1 `wide-tracking` (.kicker) and 1 `tight-leading` as low-confidence.

The gap is the finding: the machine found nothing real, the human review scored 23/40. Every genuine problem here is one a detector structurally cannot see (what a color means, whether the control matches the data model, what the last screen makes you feel).

**Visual overlays**: injection succeeded; live-server started, injected, read, and stopped.

## Overall Impression

The content is the best on the site and the structure half-delivers it. The card-first inversion changed the data model and the row layout but not the controls: the page argues in its own source comments that the reader's question is "they just resolved X", then ships only a handtrap filter. And the single most valuable content class the restructure introduced, the BLANK verdict, is styled identically to its opposite. Biggest opportunity: make the blank/live distinction visible in the chip, and give the page the card search its own data model implies.

## What's Working

1. **The verdict prose and its discipline.** Every verdict commits, none runs past three sentences, none transcribes rules text. Best execution of PRODUCT.md's "experienced pilot explaining the deck to a friend" on the site.
2. **Blanks as first-class content.** "Ash doesn't stop Thunderclap, because placing is not adding" is information no wiki gives. Six blank verdicts plus five "Leave at home" entries turn the page into a map of where your interaction fails. The idea is the best thing here; the execution buries it.
3. **The three-level filter cascade is correct and complete.** Hides verdicts, then cards with no surviving verdict, then archetypes with no surviving card; recomputes counts; prunes the jump nav; distinguishes "zero cards, non-zero content". Verified independently by both assessments across ~15 permutations.

## Priority Issues

### [P0-1] A blank verdict looks identical to a live one
- **Why it matters**: `.answer.is-blank .answer-trap` computes to the same color, background and border as a live chip. The chip is the largest, leftmost, highest-contrast object in the verdict. On the Sacred Beasts block five identical ASH chips carry two opposite meanings; the only signals are a 10px badge inside the sentence and slightly dimmer prose. A player with 15 seconds reads the chip and fires Ash into Thunderclap.
- **Fix**: Give `.is-blank` the chip in Warning Rose (`#e59a9a`), already reserved for this semantic in DESIGN.md section 2, and move the BLANK badge out of the sentence into the chip column beneath its chip.
- **Suggested command**: /impeccable polish

### [P0-2] The page's stated lookup key has no lookup
- **Why it matters**: `matchups.js` states the reader's question is "they just resolved <card>" and that this is why art leads every row, but the only control filters by handtrap, which the same comment calls "the rarer question". No search, no card index, no card-level anchor. DESIGN.md section 6 says search "is the axis for a reader who only knows the name, which is the common arrival case per PRODUCT.md". Finding a card today means knowing its archetype and scanning up to 8 rows.
- **Fix**: Search input above the chips, filtering `.threat` on card name plus the `does` caption, combining with the chip axis, auto-opening collapsed groups on match, Escape to clear. The behavior already exists in `card-filter.js` on three pages.
- **Suggested command**: /impeccable craft

### [P1-1] Six empty stubs carry full archetype weight and own the end of the page
- **Why it matters**: Each renders a gold diamond, a 28px heading, a chevron, and the same "not mapped yet" statement twice, about 120px each and 720px total, as the last thing before the footer. Peak-end: the reader leaves on six declarations of absence weighted equally with the three mapped archetypes.
- **Fix**: Collapse to one caption line under the mapped content. Drop them from `<details>` entirely.
- **Suggested command**: /impeccable distill

### [P1-2] Mobile has zero persistent controls on a 15-screen page
- **Why it matters**: `style.css` sets `.tabs { position: static }` below 900px and `.combo-jump` is static at every width. Unfiltered mobile document height is 12,825px at a 844px viewport. PRODUCT.md names mobile as the primary arrival device.
- **Fix**: Keep the chip row sticky on mobile as a single scrollable row under the mobile header.
- **Suggested command**: /impeccable adapt

### [P1-3] Touch targets fail WCAG 2.2 AA
- **Why it matters**: All 46 `.answer-trap` chips measure 22px tall, under the 24x24 minimum, and they are the page's primary repeated control. Flagged independently by both assessments.
- **Fix**: Raise chip padding above 24px and adopt the project's existing `@media (pointer: coarse) { min-height: 40px }` convention. (`.tab` 35px and `.trap-clear` 34px clear AA but miss 44x44; pre-existing shared components, separate change.)
- **Suggested command**: /impeccable audit

## Persona Red Flags

**Alex (power user)**: No URL state, so a filtered view is unshareable and unbookmarkable. All 10 `<details>` ship open with no collapse-all. Chips carry no counts, unlike every other `.tab` on the site. JUMP TO scrolls away after 500px.

**Casey (distracted mobile)**: 12,825px, 15 screens, no sticky anything below 900px. `.answer-trap` is 42x22px. Card art drops to 84x122px on mobile, close to the thumbnail the restructure explicitly rejected. No scroll, filter, or position memory on interruption. Tapping a chip navigates away and loses everything.

**Sam (screen reader, keyboard, 200% zoom)**: 146 focusable stops in `<main>`; 46 are handtrap chips with 7 distinct accessible names, "ASH" appearing 16 times, all to the same URL, so tabbing is useless as navigation. At 200% root font-size the art rail stays a px literal while all type doubles, inverting the intended hierarchy for the reader who needs it most. The archetype disclosure chevron is an 8x8px triangle 877px right of the h2 it controls. `.threat` only gets `scroll-margin-top` below 900px, so a desktop keyboard-focused row can land under the 184px sticky stack. BLANK is announced as an unstressed word mid-sentence.

**Kenji (project persona: locals grinder, round 2 of 4, 20 seconds of thinking time)**: Knows the card name and nothing else; no search, so he must first know Thunderclap is a Sacred Beasts card and scroll ~4,000px. If he arrives, ASH looks live, and it is not. On his phone the filter bar and jump nav are gone. The one line written for his game-2 side deck is the dimmest 11px text in the block. He is the reason this page exists and the reader it serves worst.

## Minor Observations

- `loading="lazy"` on `.threat-art img` pops rows in with empty frames while filtering; eager-load the first archetype.
- The hover popover shows the handtrap's card art at ~165px, where its effect text is illegible; the intro already sent the reader elsewhere for that.
- `SHOW HANDTRAP` (singular) labels a multi-select control.
- `#filter-empty` has no Clear affordance inside it; `card-filter.js` does this better by naming the offending filter.
- `.group-blurb` sits at x=187 while the `.threat` rows it introduces start at x=163: content outdented from its own heading.
- `no answers here` above a visible "Leave at home" verdict is a contradiction; "blanks only" would be truthful.
- Branded's three striped placeholders spend 525px conveying nothing; a compact row variant for `!t.href` would help.
- Contrast: all 10 measured text roles pass 4.5:1 (lowest 4.98). Headings: one h1, no skipped levels. Images: 24/24 explicit `alt=""`, 22 with lazy + intrinsic dimensions. Console: 0 errors. No horizontal overflow at 1440, 390, or 390 at 200%.
- 6 of 8 CSS transitions lack a `prefers-reduced-motion` override; all are <=0.2s color/border micro-transitions.

## Questions to Consider

1. If the reader's question is "they just resolved X", why is the only control a handtrap filter? What if search were primary and the chips a secondary axis, the two-axis shape every compendium already ships?
2. Does the card art earn 175px per row? It is ~60% of page height. At 48px inline it would still be recognizable and fit three rows per screen.
3. What if BLANK inverted the whole row instead of tagging it, so the scan gives the answer before a word is read?
4. Are "Leave at home" and the verdicts even the same page? One is a deckbuilding decision with unlimited time, the other a play decision in ten seconds, rendered in the same register.
5. Should the six unmapped archetypes exist as blocks at all?
