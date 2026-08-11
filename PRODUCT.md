# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Yu-Gi-Oh! players who want to learn or pilot a specific combo deck or engine. The audience spans from a curious newcomer meeting a deck for the first time to a competitive grinder refining lines. They arrive mid-research, usually from a search result rather than the front door, often on a phone with a game in progress, looking up one card or one combo, and they need the answer to be legible fast. The primary job is comprehension: understand what a deck does, where each card activates, and how a real turn plays out. Part of the audience isn't piloting a named archetype at all: they run a splashable engine (Fiendsmith) inside a host deck, or they're looking up handtrap interactions that apply no matter what they're playing.

## Product Purpose

A fan-made reference guide, one section per deck or engine, each taking a complex, trigger-heavy package and making it legible by organizing every card around where it activates (hand, deck, graveyard, field, trigger, on-tribute) and by walking through how turns actually resolve. A deck-select hub at the root sends a reader to the section they came for; content that genuinely crosses deck lines (handtraps) gets one shared reference instead of being duplicated per deck. Success is a reader who can pick their deck, look up a card, understand its role, and know how to sequence it, without wading through verbatim rules text or an ad-heavy wiki.

## Positioning

A deck-by-deck combo guide: pick your deck, see where each card activates and how a turn actually plays out, not just what the cards say. Mitsurugi is the flagship and the origin of the project; the hub is built to keep growing, and adding a deck is a routine operation, not a rewrite.

## Operating Context

Read mid-game or mid-deckbuilding, frequently on a phone, frequently one page deep from a search engine with no prior visit to the hub. A reader may arrive knowing only a card name, only a zone ("what do I do from the GY here?"), or only an opponent's archetype (the handtrap matchup map). Every section therefore has to be self-explanatory on arrival and offer a way back up to the hub; no page can assume the reader came through the front door.

Each deck section links out to that deck's own player community on Discord for the conversation the guide doesn't host.

## Capabilities and Constraints

- **Shape:** every deck or engine section is the same three pages: Overview, Card Compendium (grouped by where each card activates, with per-card tips), and Combos (step-by-step lines from starter to end board). Parallel sections stay in lockstep; a feature added to one belongs on all of them.
- **Shared references:** `/handtraps/` (the cards themselves) and `/handtraps/matchups/` (which handtrap answers which opponent archetype, and when to hold it), deliberately deck-independent and not duplicated per deck.
- **Current sections:** Mitsurugi (DARK Reptile Ritual, complete), Fiendsmith (splashable LIGHT Fiend engine, complete, documented with the full three-page shape despite not being a standalone archetype), Sacred Beasts (Chaos Origins package documented; older staples and combo lines still in progress, carries a WIP badge).
- **Growth:** more decks and engines will be added over time. The hub, the nav dropdowns, the per-section accent theming, and the shared-engine pattern all have to keep scaling; none of them may assume a fixed section count.
- **Stack:** static Eleventy build deployed to GitHub Pages under the `/mitsurugi-guide/` path prefix. No backend, no database, no accounts, no user-generated content. The repo and URL keep the `mitsurugi-guide` name for URL stability; the project's actual name is Medonni's Guides and its scope is no longer one deck.
- **Never monetized:** no ad slots, no sponsorships, no paywall. This is a hard product commitment, not a current-state observation.
- **Fan use:** card art is used under fan-project norms. No claim of ownership, no mimicry of official Konami branding, no resale.
- **Phone-first:** readers use this mid-game on a phone. Any feature has to work at small widths and on touch, never desktop-and-hover only.

## Brand Commitments

Name: Medonni's Guides. Voice: knowledgeable and practical, an experienced pilot explaining the deck to a friend. Confident but never showy. Effects are simplified and paired with real-game tips rather than transcribed rules.

Hard copy rule: no em-dashes anywhere, use colons or commas.

Visual identity (purple-black ground, gold-for-payoff / accent-for-interaction split, per-deck accent colors, diamond motif) is specified in DESIGN.md, which is the authority on it.

## Evidence on Hand

Every card tip and combo line is written by the site's author from their own play experience. There is no external source to cite and nothing has been fact-checked by a third party; future work must not fabricate citations, contributor credits, endorsements, view counts, or community-authorship claims.

The three Discord invites in `src/_data/hub.js` are the respective decks' existing player communities, run by other people. They are outbound links only. Never present them as this project's community, a support channel, or something the author operates.

Real assets in the repo: card art under `src/assets/cards/`, and the per-deck content in `src/_data/`.

## Anti-references

- Generic TCG wikis: dense, ad-heavy, table-dump database sites.
- Official Konami styling: this is a fan project with its own voice, not a mimic of official Yu-Gi-Oh branding or art direction.
- Corporate SaaS: cream/navy startup landing pages, hero-metric templates, identical card grids, tracked-uppercase eyebrows on every section.
- Loud gamer / RGB: neon, harsh gradients, aggressive angular esports styling.

## Product Principles

Legibility is the product. Every choice serves making a complex combo deck understandable; when clarity and completeness conflict, clarity wins.

Teach, don't catalog. Show how cards play through tips, combo lines, and cross-links between related cards, not just what their text says.

Organize by function. Group and label cards by where they activate and what job they do, so a reader navigates by intent rather than by card name.

Every section is a front door. A reader lands one page deep from search with no context and no back button; the page has to orient them and offer a way up.

Calm density. The content is dense but never cluttered: no ads, no noise, generous rhythm, one signature moment per page rather than competing motion.

Own fan voice. A confident, distinct identity that never mimics official branding or reads like a generic wiki.

## Accessibility & Inclusion

Best-effort rather than a formally certified level. Preserve and extend the existing basics: keyboard-operable filter chips and hamburger, visible focus rings, aria attributes on interactive controls, and a reduced-motion path for animations. Keep body text contrast comfortably readable against the purple-black ground.
