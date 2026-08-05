---
target: site-wide (hub + navigation)
total_score: 27
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
timestamp: 2026-08-05T10-06-45Z
slug: site-wide-hub-navigation
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active nav state and WIP badges work well; hub itself has no nav entry that highlights when you're on it |
| 2 | Match System / Real World | 4 | Precise domain vocabulary and lore-accurate kanji marks throughout |
| 3 | User Control and Freedom | 2 | No path back to the hub from inside a deck |
| 4 | Consistency and Standards | 3 | Component system is disciplined; Fiendsmith/Sacred Beasts overviews are structurally thinner than Mitsurugi's |
| 5 | Error Prevention | 3 | WIP badges set expectations before commit |
| 6 | Recognition Rather Than Recall | 2 | Nav-sub dropdown has zero visual affordance signaling it's a disclosure trigger |
| 7 | Flexibility and Efficiency | 3 | The dropdown is a real efficiency win when found, but undiscoverable and dead on touch tablets ≥900px |
| 8 | Aesthetic and Minimalist Design | 4 | Calm density, matches DESIGN.md's stated restraint |
| 9 | Error Recovery | 3 | No forms to test; WIP handling is the relevant signal and it's handled well |
| 10 | Help and Documentation | n/a | The site is the documentation product; heuristic doesn't meaningfully apply to this Read/Persuade surface |
| **Total** | | **27/36** | **Good** (75%, heuristic 10 excluded from denominator) |

## Design Specificity Verdict

**LLM assessment**: Clearly authored for this product, not a generic multi-product picker. The per-deck kanji are lore-accurate (御 honorable-blade for Mitsurugi, 鍛 forge for the blacksmith-flavored Fiendsmith engine, 神 god for Sacred Beasts), hub copy uses precise archetype vocabulary ("DARK Reptile · Ritual", "LIGHT Fiend · Engine"), and the zone-based organizing language is baked into copy and the pill system site-wide. It actively resists the genre's real anti-pattern (the ad-heavy wiki) rather than just avoiding it by omission.

**Deterministic scan**: 75 raw detector findings across 14 files, 33 verified real (28 font-size, 3 color, 2 radius — all in `src/css/style.css`), 42 verified false positives. The false-positive rate (56%) is a good sign, not noise: it means DESIGN.md's own documented escape hatches (shadow/overlay rgba, the Label/Title/Body size ranges, diamond-bullet radii) are being read and applied correctly by whoever wrote this CSS, not used as a blanket excuse. The real drift is concentrated in inherited base styles (`.btn`, `.nav`, `.tab`, badge/tag sizes) that predate this session's restructure, not new damage from it.

One real doc/implementation mismatch B surfaced: DESIGN.md describes headline sizing as `clamp()`-based fluid scaling, but `grep -rn "clamp(" src/` returns nothing — every heading size is a fixed pixel value. The values happen to fall in the range DESIGN.md describes, so this isn't visual drift, but the documented *mechanism* doesn't exist in code. Worth a `/impeccable document` pass to resync.

## Overall Impression

The engineering underneath this redesign is genuinely well-built: the per-deck CSS token cascade, the brand-data cascade, the honest WIP framing all show real discipline and product-specific thinking. But the newest, most user-facing surface, the hub itself, has the roughest edges: it's a one-way door (no link back to it from inside a deck), it's the one page that breaks the site's own heading hierarchy, and it doesn't showcase the very theming system that's its most distinctive technical achievement. The biggest opportunity is closing the loop on the hub concept the redesign was built around: right now "pick your deck" plays more like "pick your site" once you've clicked.

## What's Working

- **The kanji brand marks** are semantically chosen per deck, not decorative reskins, a level of specificity a generic template would skip.
- **The per-deck accent token system** (`body.deck-*` overriding four CSS custom properties in `style.css`): elegant, scalable, and disciplined about what it does *not* theme (zone pills, frame accents stay pinned per DESIGN.md's Deck Accent Rule), so the "where it activates" language stays legible across decks.
- **Honest WIP framing**: Sacred Beasts' wip-note names exactly what's missing ("Older Sacred Beast staples and combo lines aren't documented yet") instead of a vague "coming soon," which is real expectation-setting, not a shrug.

## Priority Issues

**[P1] No way back to the hub from inside a deck**
**Why it matters**: PRODUCT.md frames the audience as arriving "mid-research, often on mobile," most likely landing on a deck page directly via search, not the hub. Once there, the brand mark links to that deck's own Overview (not `/`), and the nav lists only decks + Handtraps, no "All Decks" entry. A reader who wants to compare decks before committing has no on-page path back, only the browser back button, which a search-landing visitor may not have. This undermines the redesign's own premise.
**Fix**: Add a persistent "All Decks" nav item, or make the brand mark always resolve to `/` regardless of the current deck.
**Suggested command**: `/impeccable clarify`

**[P1] Hub page has no `<h1>`**
**Why it matters**: `src/index.njk` sets its lead heading as `<h2>Choose your deck.</h2>` with no `<h1>` anywhere on the page. Every other page in the site correctly uses `<h1>` for its lead heading. This is the site's front door, and it's the one page breaking heading hierarchy, a real screen-reader landmark-navigation and SEO gap.
**Fix**: Promote "Choose your deck." to `<h1>`.
**Suggested command**: `/impeccable harden`

**[P2] The deck-picker doesn't preview each deck's own accent color**
**Why it matters**: The hub's `.boss-card` grid renders every deck card in the same neutral gold/violet palette (hover border hardcoded to gold). DESIGN.md sells the per-deck accent system as letting "a reader always know which section they're on just from the chrome", but that's invisible at exactly the moment a reader is *choosing* a section. You only discover Mitsurugi=violet/Fiendsmith=cyan/Sacred Beasts=emerald after clicking.
**Fix**: Apply each deck's own `--violet`-family token as the hub card's border/hover accent. The data (`d.id`) and the CSS cascade already do the hard work; this is a small template change.
**Suggested command**: `/impeccable colorize`

**[P2] Nav-sub dropdown has no discoverability affordance and breaks on touch tablets ≥900px**
**Why it matters**: The per-deck nav item has no chevron, no `aria-haspopup`, nothing signaling it's also a disclosure trigger, unlike the mobile hamburger a few lines away in the same file, which correctly sets `aria-expanded`/`aria-controls`. It opens purely on `:hover`/`:focus-within`. On any touch-capable device at ≥900px (iPad landscape, touch laptops), a tap just navigates to Overview; Cards/Combos/Discord become unreachable from the header on that entire device class.
**Fix**: Add a small caret (the codebase already has this exact chevron pattern for the accordion `summary.group-head::after`) and/or make the top-level nav item a real toggle for touch parity.
**Suggested command**: `/impeccable clarify`

**[P2] Type-scale drift: 28 font-sizes off DESIGN.md's documented ramp**
**Why it matters**: Verified real (not false positives) across `style.css`: Space-Grotesk "Title" elements sized below the documented 18-30px floor (e.g. `.brand-mark > span` at 15px, `.boss-slice-name` at 15px, `.combo-n` at 16px), plus assorted body/caption text off the 17px/13.5-14.5px ranges (`.btn` 15px, `.prose` 16px, `.tab` 12.5px, and a cluster of 9-10px badge/tag text). This is inherited baseline drift predating this session, not new damage, but it's real and would compound as more decks are added.
**Fix**: Snap these onto the nearest documented step, or if the smaller sizes are intentional (dense badge/tag text often legitimately runs smaller than the documented Label floor), add a documented "micro-label" step to DESIGN.md so the detector stops (correctly) flagging an intentional choice.
**Suggested command**: `/impeccable typeset`

## Persona Red Flags

**Jordan (First-Timer)**: Picks Sacred Beasts off the hub, reads the honest WIP note, then wants to go back and compare it against Mitsurugi before committing. No nav item or brand-mark link back to `/` exists (P1 above), so Jordan's only route back is the browser back button, unreliable for a visitor who arrived via a search result. The "hub" concept dead-ends the moment they pick.

**Sam (Accessibility-Dependent)**: Two concrete misses: the hub's heading hierarchy skips `<h1>` entirely, breaking landmark navigation on the site's own front door; and the nav-sub dropdowns expose no `aria-haspopup`/`aria-expanded` on the top-level deck link, so a screen-reader user tabbing through gets no advance notice it's a disclosure trigger for three more links, unlike the mobile hamburger a few lines away that does this correctly.

**Casey (Distracted Mobile User)**: Fine on a real phone; the <900px breakpoint correctly collapses the nav into an accordion sheet. But on a touch-primary tablet at ≥900px, hover never fires, and a tap on the deck name navigates immediately, losing access to Cards/Combos/Discord from the header entirely on that device band, which the responsive design silently assumes is "desktop."

## Minor Observations

- `.boss-card`/`.synergy-card` hover borders are hardcoded gold rather than each section's own accent; per DESIGN.md's Two Voices Rule, hover is an interaction state and arguably belongs to the violet-family lane, not gold. Appears to predate this session.
- `.nav-wip`/`.wip-badge` are styled gold. Gold is documented as strictly payoff/emphasis; a "this is incomplete" caution badge reads closer to Warning Rose semantics.
- The header brand-mark glyph is hardcoded gold on every deck; the mark's background gradient only blends the deck accent at 16% opacity, so the header mark itself barely signals which deck you're on, the wordmark text is doing nearly all of that work.
- `site.ogImage` defaults to Mitsurugi's Murakumo art sitewide, including the neutral hub's social-share preview, a small brand-neutrality miss for the one page that isn't about any single deck.
- 3 real color drifts verified: `.group-blurb` text (`#9a90b8`, a near-duplicate of the text ramp but not an actual ramp value), `.cost-synchro` (`#eef0f8`, an undocumented Synchro frame-accent color, DESIGN.md's Card-Frame Accents section lists Trap/Xyz/Link/Fusion but not Synchro), and `.zone-text` (`#c4bbdd`, doesn't match any documented value).
- 2 real radius drifts: `.nav-wip` (4px) and `.combo-jump-wip` (3px) badges don't match the documented `rounded.xs` (5px) badge token or the diamond/chevron glyph-radii carve-out.
- Documentation/implementation mismatch: DESIGN.md describes `clamp()`-based fluid heading sizing; no `clamp()` exists anywhere in `src/`. Values happen to fall in the described range, so this isn't visual drift, but the documented mechanism isn't real. Consider `/impeccable document` to resync, or add the Synchro frame color to DESIGN.md while there.

## Questions to Consider

1. If the whole point of the per-deck accent system is "a reader always knows which section they're on just from the chrome," why is the hub, the one page where they're *choosing* a section, the only page showing none of those colors?
2. Given the audience "arrives mid-research, often on mobile," is a hover-only nav flyout with no click affordance the right pattern, when it silently fails for any touch device that isn't narrow enough to trigger the mobile accordion?
3. Now that there's no link back to `/` from inside a deck, is "deck-select hub" still the mental model this site implements, or has it quietly become three separate single-deck sites sharing a homepage?
