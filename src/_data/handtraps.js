// Handtrap reference. Cards you run in hand to disrupt the opponent's turn or
// protect your own combo. Shared across every deck in this guide (Mitsurugi,
// Sacred Beasts, and whatever comes next), so this page has no deck of its
// own: it's the common toolbox every deck page links out to.
// Card names & effects © Konami: reference only. Extracted verbatim from the
// former "nonengine" handtrap cluster in src/_data/cards.js.
import { findImage } from "../_lib/card-images.js";

const cardData = [
  {
    id: "ash", name: "Ash Blossom & Joyous Spring", short: "ASH", role: "Handtrap",
    glyphColor: "#7fd8c6", stat: "LV3 · Handtrap",
    badges: ["FIRE", "Zombie", "Tuner"],
    zones: [
      ["HAND", "Discard: negate a card that adds from Deck, Special Summons from Deck, or sends Deck-to-GY."],
    ],
    tips: [
      "Nothing much to say about it.",
    ],
  },
  {
    id: "nibiru", name: "Nibiru, the Primal Being", short: "NIBIRU", role: "Handtrap",
    glyphColor: "#7fd8c6", stat: "LV11 · Handtrap",
    badges: ["LIGHT", "Rock"],
    zones: [
      ["HAND", "After the opponent's 5th+ summon this turn: tribute ALL monsters both players control, gain a token."],
    ],
    tips: [
      "Your Mitsurugi monsters will trigger off Nibiru effects.",
      "Careful: they can discard Nibiru to Murakumo's negate and dodge it. Timing matters.",
      "Easily searchable: it's a Rock, so <a href=\"../mitsurugi/cards/#granite\">Gallant Granite</a> tutors it straight from the Deck, making the handtrap far more consistent.",
      "Running it is a meta call. It kinda sucks now.",
    ],
  },
  {
    id: "imperm", name: "Infinite Impermanence", short: "IMPERM", role: "Handtrap / Trap",
    glyphColor: "#7fd8c6", stat: "Trap Card",
    badges: ["Trap", "Normal"],
    zones: [
      ["HAND", "From hand (if you control no cards): negate a face-up monster's effects."],
      ["FIELD", "If Set, also nullifies other Spell/Trap effects in that column this turn."],
    ],
    tips: [
      "Flexible interaction that works from hand on an empty board: great on the draw.",
      "Set it to threaten column lockdown against backrow-reliant decks, if they forget to play around it.",
    ],
  },
  {
    id: "droll", name: "Droll & Lock Bird", short: "DROLL", role: "Handtrap · Search Lock",
    glyphColor: "#7fd8c6", stat: "LV1 · Handtrap",
    badges: ["WIND", "Winged Beast"],
    zones: [
      ["HAND", "If a card is added from the Deck to a hand (except during the Draw Phase): discard this. For the rest of this turn, neither player can add cards from the Deck to the hand."],
    ],
    tips: [
      "A hard stop against search-heavy decks: they add one card, then everything else in the Deck is locked off.",
    ],
  },
  {
    id: "fuwalos", name: "Mulcharmy Fuwalos", short: "FUWALOS", role: "Handtrap · Draw",
    glyphColor: "#7fd8c6", stat: "LV4 · Handtrap",
    badges: ["WIND", "Winged Beast"],
    zones: [
      ["HAND", "If you control no monsters (Quick Effect): discard this. Each time the opponent Special Summons a monster from the Deck or Extra Deck this turn, draw 1 (keeping a set hand size at the End Phase)."],
    ],
    tips: [
      "A go-second draw engine that punishes big combo turns, refueling your hand while the opponent builds.",
      "Only live on an empty board, so it's a handtrap you open with, not something you set up.",
    ],
  },
  {
    id: "purulia", name: "Mulcharmy Purulia", short: "PURULIA", role: "Handtrap · Draw",
    glyphColor: "#7fd8c6", stat: "LV4 · Handtrap",
    badges: ["WATER", "Aqua"],
    zones: [
      ["HAND", "If you control no monsters (Quick Effect): discard this. Each time the opponent Normal or Special Summons a monster from the Hand this turn, draw 1 (End Phase hand-size limit applies)."],
    ],
    tips: [
      "The HAND-Special-Summon counterpart to Fuwalos.",
      "Like every Mulcharmy card, it needs an empty board on your side to fire.",
    ],
  },
  {
    id: "dshifter", name: "Dimension Shifter", short: "DIM. SHIFTER", role: "Handtrap · GY Hate",
    glyphColor: "#7fd8c6", stat: "LV6 · Handtrap",
    badges: ["DARK", "Spellcaster", "Effect", "Level 6"],
    zones: [
      ["HAND", "If your GY is empty (Quick Effect): send this from hand to GY: until the end of the next turn, cards sent to the GY are banished instead."],
    ],
    tips: [
      "Disruptive tech that turns off Graveyard strategies.",
      "Most effects from Mitsurugi Monsters are activated by tributing, so the banishment is not too punishing on us. Kusanagi also grabs from Banishment, so if Ritual goes there it does not matter.",
      "It also stops some popular cards that discard to GY as cost, most notably Fallen & the Virtuous.",
    ],
  },
];

for (const c of cardData) c.image = findImage("handtraps", c.id);

// id -> card, so the matchups page can reuse a handtrap's art and name without
// redeclaring them. This file stays the single source for what a handtrap is.
const byId = Object.fromEntries(cardData.map((c) => [c.id, c]));

export default {
  groups: [
    { key: "handtraps", title: "Handtraps", tag: "hand disruption", dot: "#7fd8c6",
      blurb: "Cards you hold in hand to disrupt the opponent's turn or protect your own combo. Not tied to any one deck: run whichever fit your build and the matchup.",
      cards: cardData },
  ],
  total: cardData.length,
  byId,
};
