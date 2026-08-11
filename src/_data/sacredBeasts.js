// Sacred Beast card data: the "Chaos Origins" (CORI, July 2026) support package.
// Card names, types, stats, and effect text are the printed CORI-EN text, taken
// from Yugipedia (NOT from YGOPRODeck, see below);
// © Konami, reference only. Effect text is split by WHERE it triggers (hand /
// field / GY), wording kept as close to verbatim as the split allows; `pre`
// holds a leading static/summon-restriction line, `note` a once-per-turn
// clause shared across more than one numbered effect. No strategy tips here
// on purpose: the set is a month old and untested, so only factual,
// text-derived clarifications are included. Older Sacred Beast staples
// (Rite of Aramesir, the original Structure Deck) aren't in this pool yet.
//
// EXCEPT the three Level 10 names, which come from Yugipedia's printed CORI-EN
// pages, NOT from YGOPRODeck. The API still serves the pre-release translations
// ("Uria, Lord of Searing Flames - Sacred Beast of Cataclysmic Fire"); the
// printed cards read "Inferno / Calamity / Infinity of the Sacred Beasts - "
// first (CORI-EN005/006/007). Don't "correct" them back from the API. Note the
// bare originals (Uria, Lord of Searing Flames, SOI-EN005) are separate, older
// cards, so the short form is genuinely ambiguous and the full name matters.
//
// The text below is word-for-word printed text with exactly ONE deliberate
// deviation, on Uria, Hamon, Raviel and Fallen Paradise: where the card ends an
// effect with its own "You can only use this effect of "<full name>" once per
// turn.", that clause is folded into a leading "Once per turn," on the effect it
// governs. `note` can't hold it, since `note` renders once for the whole card
// and these OPTs bind to a single effect on cards that have two independent
// ones. Same meaning, and it avoids repeating a 58-character card name inside
// the effect box. Every other word matches the printed card.
import { deriveZones } from "../_lib/zones.js";
import { findImage } from "../_lib/card-images.js";

const cards = [
  {
    id: "uria",
    name: `Inferno of the Sacred Beasts - Uria, Lord of Searing Flames`,
    role: "Special Summon Effect Monster",
    accent: "#e0c46a",
    badges: ["FIRE", "Pyro", "Effect", "Level 10"],
    stat: "ATK 0 / DEF 0",
    pre: `Cannot be Normal Summoned/Set. Must be Special Summoned with the effect of a "Sacred Beast" card.`,
    zones: [
      ["HAND", `Once per turn, you can reveal this card in your hand; add 1 "Sacred Beast" Trap from your Deck to your hand, then discard 1 card.`],
      ["FIELD", `Gains 1000 ATK/DEF for each Trap in the GYs.`],
      ["FIELD", `Once per turn (Quick Effect): You can target 1 Spell/Trap on the field; destroy it. Neither player can activate cards or effects in response to this effect's activation.`],
    ],
    tips: [
      `"The GYs" is both players' combined, so the ATK/DEF boost climbs even off Traps your opponent has used.`,
    ],
  },
  {
    id: "hamon",
    name: `Calamity of the Sacred Beasts - Hamon, Lord of Striking Thunder`,
    role: "Special Summon Effect Monster",
    accent: "#e0c46a",
    badges: ["LIGHT", "Thunder", "Effect", "Level 10"],
    stat: "ATK 4000 / DEF 4000",
    pre: `Cannot be Normal Summoned/Set. Must be Special Summoned with the effect of a "Sacred Beast" card.`,
    zones: [
      ["HAND", `Once per turn, you can reveal this card in your hand; add 1 "Sacred Beast" Spell from your Deck to your hand, then discard 1 card.`],
      ["FIELD", `Once per turn, if a monster(s) is sent to your opponent's GY: Inflict 1000 damage to your opponent.`],
      ["FIELD", `If this card is destroyed by battle or card effect: You can activate this effect; you take no damage this turn.`],
    ],
  },
  {
    id: "raviel",
    name: `Infinity of the Sacred Beasts - Raviel, Lord of Phantasms`,
    role: "Special Summon Effect Monster",
    accent: "#e0c46a",
    badges: ["DARK", "Fiend", "Effect", "Level 10"],
    stat: "ATK 4000 / DEF 4000",
    pre: `Cannot be Normal Summoned/Set. Must be Special Summoned with the effect of a "Sacred Beast" card.`,
    zones: [
      ["HAND", `Once per turn, you can reveal this card in your hand; add 1 "Sacred Beast" monster from your Deck to your hand, except "Infinity of the Sacred Beasts - Raviel, Lord of Phantasms", then discard 1 card.`],
      ["FIELD", `Once per turn (Quick Effect): You can Tribute 2 other "Sacred Beast" monsters; destroy as many monsters your opponent controls as possible, and if you do, this card gains 1000 ATK for each card destroyed.`],
    ],
  },
  {
    id: "summoner-of-the-sacred-beasts",
    name: "Summoner of the Sacred Beasts",
    role: "Effect Monster",
    accent: "#e0c46a",
    badges: ["LIGHT", "Thunder", "Effect", "Level 8"],
    stat: "ATK 2300 / DEF 3000",
    zones: [
      ["HAND", `You can reveal this card in your hand; discard 1 card, and if you do, Special Summon 1 "Sacred Beast" monster from your hand in Defense Position, except a Level 8 monster.`],
      ["HAND / GY", `You can discard 1 card; Special Summon 1 "Sacred Beast" monster from your hand or GY in Defense Position, except a Level 8 monster or the discarded card.`],
      ["GY", `You can banish this card from your GY; Special Summon 1 "Sacred Beast" monster from your GY in Defense Position, except a Level 8 monster.`],
    ],
    note: `You can only use each effect of "Summoner of the Sacred Beasts" once per turn.`,
    tips: [
      `Three separate ways to put a non-Level-8 Sacred Beast into Defense Position: from hand (discarding to trigger it), from hand or GY (discarding a different card as cost), and from GY (banishing itself). None of the three can target a Level 8 monster.`,
    ],
  },
  {
    id: "martyr-of-the-sacred-beasts",
    name: "Martyr of the Sacred Beasts",
    role: "Effect Monster",
    accent: "#e0c46a",
    badges: ["DARK", "Fiend", "Effect", "Level 1"],
    stat: "ATK 0 / DEF 0",
    zones: [
      ["FIELD", `If this card is Normal or Special Summoned: You can place 1 "Sacred Beast" Field Spell or 1 "Sacred Beast" Continuous Spell/Trap from your Deck, face-up on your field.`],
      ["FIELD", `If you control another "Sacred Beast" monster: You can Special Summon 2 "Martyr of the Sacred Beasts" from your hand, Deck, and/or GY.`],
      ["GY", `During your opponent's End Phase, if you have this card and a Level 10 "Sacred Beast" monster in your GY: You can add this card to your hand.`],
    ],
    note: `You can only use each effect of "Martyr of the Sacred Beasts" once per turn.`,
  },
  // ===== EXTRA DECK =====
  {
    id: "chaotic-phantasmal-sacred-beasts",
    name: "The Chaotic Phantasmal Sacred Beasts",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["DARK", "Fiend", "Fusion", "Level 10"],
    stat: "ATK 5000 / DEF 5000",
    cost: "3 Level 10 monsters that cannot be Normal Summoned/Set",
    pre: `Must be either Fusion Summoned, or Special Summoned (from your Extra Deck) by sending the above cards you control to the GY. You can only Special Summon "The Chaotic Phantasmal Sacred Beasts" once per turn this way, no matter which method you use.`,
    zones: [
      ["FIELD", `The first two times this card on the field would be destroyed by card effect each turn, it is not destroyed.`],
      ["FIELD", `Once per Chain, up to thrice per turn (Quick Effect): You can target 1 face-up monster your opponent controls; negate its effects (until the end of this turn), then you can gain LP equal to half that monster's ATK.`],
    ],
    tips: [
      `The materials are 3 Level 10 monsters that can't be Normal Summoned, so Uria, Hamon, and Raviel are the intended fuel, one of each, though any three qualifying Level 10s work.`,
    ],
  },
  // ===== SPELLS =====
  {
    id: "sacred-beasts-released",
    name: "Sacred Beasts Released",
    role: "Normal Spell",
    accent: "#7fd8c6",
    badges: ["Spell", "Normal"],
    stat: "Normal Spell",
    zones: [
      ["HAND", `Add 3 "Sacred Beast" monsters with different names from your Deck to your hand, then discard 2 cards.`],
      ["GY", `If this card is in your GY, except the turn it was sent there: You can banish it; add 1 Level 10 Pyro, Thunder, or Fiend monster that cannot be Normal Summoned/Set, from your Deck to your hand.`],
    ],
    note: `You can only use each effect of "Sacred Beasts Released" once per turn.`,
  },
  {
    id: "fallen-paradise-of-the-sacred-beasts",
    name: "Fallen Paradise of the Sacred Beasts",
    role: "Field Spell",
    accent: "#7fd8c6",
    badges: ["Spell", "Field"],
    stat: "Field Spell",
    zones: [
      ["FIELD", `Up to thrice per turn, during your Main Phase: You can send 3 other cards of the same type (Monster, Spell, or Trap) from your hand and/or face-up field to the GY, then you can Special Summon 1 "Sacred Beast" monster from your hand, Deck, GY, or banishment, and if you do, it is unaffected by your opponent's activated Spell/Trap effects.`],
      ["FIELD", `Once per turn, if you control a "Sacred Beast" monster whose original Level is 10: You can draw 2 cards.`],
    ],
  },
  {
    id: "sacred-beasts-thunderclap",
    name: "Sacred Beasts Thunderclap",
    role: "Continuous Spell",
    accent: "#7fd8c6",
    badges: ["Spell", "Continuous"],
    stat: "Continuous Spell",
    zones: [
      ["FIELD", `During your Main Phase: You can place 2 "Sacred Beasts Thunderclap" from your hand, Deck, and/or GY, face-up on your field, then you can reveal 1 Level 10 "Sacred Beast" monster in your hand, then place 1 "Fallen Paradise of the Sacred Beasts" from your Deck, face-up in your Field Zone.`],
      ["GY", `During your opponent's End Phase, if this card is in your GY: You can add this card to your hand.`],
    ],
    note: `You can only use each effect of "Sacred Beasts Thunderclap" once per turn.`,
  },
  // ===== TRAPS =====
  {
    id: "sacred-beasts-combined-assault",
    name: "Sacred Beasts Combined Assault",
    role: "Normal Trap",
    accent: "#d98cba",
    badges: ["Trap", "Normal"],
    stat: "Normal Trap",
    zones: [
      ["FIELD", `Special Summon 1 "Sacred Beast" monster from your hand or GY in Defense Position, then if you control 2 or more "Sacred Beast" monsters whose original Levels are 10, you can negate the effects of 1 face-up card your opponent controls, and if you do, destroy it.`],
      ["GY", `You can banish this card from your GY; Fusion Summon 1 "Phantasm" Fusion Monster from your Extra Deck, using monsters from your hand or field.`],
    ],
    note: `You can only use each effect of "Sacred Beasts Combined Assault" once per turn.`,
    tips: [
      `The GY effect Fusion Summons any "Phantasm" Fusion Monster, which is what The Chaotic Phantasmal Sacred Beasts actually is under the hood (its archetype is "Phantasm", not "Sacred Beast"), so this can put it on the field without the 3-material cost.`,
    ],
  },
];

// Card art is resolved from disk, not written per card: drop a file at
// src/assets/cards/sacred-beasts/<id>.<ext> and it is picked up. Same wiring as
// cards.js and handtraps.js, so a lighter re-encode is a file drop.
for (const c of cards) c.image = findImage("sacred-beasts", c.id);

// Same shape as fiendsmith.js: card order within a group is set here by hand,
// so it reads in the order listed rather than however `cards` happens to be
// ordered above.
const byId = Object.fromEntries(cards.map((c) => [c.id, c]));
const pick = (...ids) => ids.map((id) => byId[id]);

export default {
  // The three bosses, shown in the landing page's hero boss-stack.
  // Ordered Raviel · Hamon · Uria so the artwork faces inward.
  heroBosses: pick("raviel", "hamon", "uria"),
  groups: [
    { key: "monsters", title: "Sacred Beast Monsters", tag: "the package", dot: "#e0c46a",
      blurb: "Uria, Hamon, and Raviel, the three Level 10 Sacred Beasts, plus the two support monsters that fetch and Summon them. None of the three bosses can be Normal Summoned; they need a \"Sacred Beast\" card to hit the field.",
      cards: pick("uria", "hamon", "raviel", "summoner-of-the-sacred-beasts", "martyr-of-the-sacred-beasts") },
    { key: "extra", title: "Extra Deck", tag: "the payoff", dot: "#cbb0ff",
      blurb: "The Fusion boss the whole package builds toward.",
      cards: pick("chaotic-phantasmal-sacred-beasts") },
    { key: "spells", title: "Spells", tag: "search & setup", dot: "#7fd8c6",
      blurb: "Consistency and the Field Spell that turns spare cards into a free Sacred Beast Special Summon.",
      cards: pick("sacred-beasts-released", "fallen-paradise-of-the-sacred-beasts", "sacred-beasts-thunderclap") },
    { key: "traps", title: "Traps", tag: "payoff & protection", dot: "#d98cba",
      blurb: "A Summon-plus-negate that doubles as a backdoor into the Fusion boss.",
      cards: pick("sacred-beasts-combined-assault") },
  ],
  zones: deriveZones(cards),
  total: cards.length,
};
