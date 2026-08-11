// Every card in the guide as {name, href, page}, for the compendium's
// "not on this page" hint.
//
// Each deck's compendium deliberately holds only its own cards: handtraps live
// on one shared page instead of being copy-pasted onto every deck, and a
// splashed engine has its own section. That's the right data model, but it made
// the single most common arrival intent PRODUCT.md names ("I know a card name")
// fail silently whenever the reader guessed the wrong page: searching "ash" on
// the Mitsurugi compendium returned nothing, on a page that names Ash Blossom
// in a tip a few inches below.
//
// Derived from the same card-index the `linkcards` filter and the matchup map
// read, so a new or renamed card becomes findable guide-wide for free, with no
// second place to register it.
import { DECKS, indexDeck } from "../_lib/card-index.js";

// How each pool is named in the hint sentence, in the reader's terms rather
// than the data key's. Keys match DECKS.
const PAGE_NAMES = {
  mitsurugi: "the Mitsurugi compendium",
  fiendsmith: "the Fiendsmith compendium",
  sacredBeasts: "the Sacred Beasts compendium",
  handtraps: "the shared handtrap reference",
};

export default Object.entries(DECKS).flatMap(([key, deck]) =>
  Object.values(indexDeck(deck)).map((c) => ({
    name: c.name,
    href: c.href,
    page: PAGE_NAMES[key],
  })),
);
