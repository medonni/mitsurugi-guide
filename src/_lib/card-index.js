// id -> card lookup for every card in the guide, derived from the deck data
// files rather than restated alongside them. Two callers need it: the
// `linkcards` filter in eleventy.config.js (which turns card names in combo and
// matchup prose into links with hover art) and the matchup map in
// src/_data/matchups.js. Deriving it means a renamed, re-arted, or newly added
// card reaches both for free, and there is no second place to register a card.
//
// `href` is written root-absolute; callers make it relative to the page being
// rendered so the /mitsurugi-guide/ pathPrefix applies without them knowing.
import mitsurugi from "../_data/cards.js";
import handtraps from "../_data/handtraps.js";
import fiendsmith from "../_data/fiendsmith.js";
import sacredBeasts from "../_data/sacredBeasts.js";

// Every card pool and the page its anchors live on. Handtraps are the odd one
// out: they sit on the shared /handtraps/ page, not under any deck. Keys match
// the `deck` value a matchup threat uses.
export const DECKS = {
  mitsurugi: { data: mitsurugi, href: "/mitsurugi/cards/" },
  fiendsmith: { data: fiendsmith, href: "/fiendsmith/cards/" },
  sacredBeasts: { data: sacredBeasts, href: "/sacred-beasts/cards/" },
  handtraps: { data: handtraps, href: "/handtraps/" },
};

// One pool's cards keyed by id, each carrying the anchor that reaches it.
export const indexDeck = ({ data, href }) =>
  Object.fromEntries(
    data.groups.flatMap((g) => g.cards).map((c) => [c.id, { ...c, href: `${href}#${c.id}` }]),
  );

// Every pool flattened into one id -> card map. Card ids are unique guide-wide.
export const cardIndex = Object.fromEntries(
  Object.values(DECKS).flatMap((d) => Object.entries(indexDeck(d))),
);
