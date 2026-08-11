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
      ["FIELD", `You can discard 1 card; Special Summon 1 "Sacred Beast" monster from your hand or GY in Defense Position, except a Level 8 monster or the discarded card.`],
      ["GY", `You can banish this card from your GY; Special Summon 1 "Sacred Beast" monster from your GY in Defense Position, except a Level 8 monster.`],
    ],
    note: `You can only use each effect of "Summoner of the Sacred Beasts" once per turn.`,
    tips: [
      `Three separate ways to put a non-Level-8 Sacred Beast into Defense Position, one per location: revealed in hand it summons from your hand, on the field it discards 1 to summon from your hand or GY, and in the GY it banishes itself to summon from your GY. Each is once per turn, so one copy can do all three in a turn. None of them can target a Level 8 monster.`,
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
  // ===== GENERIC EXTRA DECK & STAPLES =====
  // Not "Sacred Beast" cards. These are here because the Link line on the
  // combos page rents them wholesale; text is API-verified like the rest.
  {
    id: "thunder-dragon-colossus",
    name: "Thunder Dragon Colossus",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["DARK", "Thunder", "Fusion", "Level 8"],
    stat: "ATK 2600 / DEF 2400",
    cost: `"Thunder Dragon" + 1 Thunder monster`,
    pre: `Must be either Fusion Summoned, or Special Summoned during the turn a Thunder monster's effect was activated in the hand, by Tributing 1 Thunder Effect non-Fusion Monster (in which case you do not use "Polymerization").`,
    zones: [
      ["FIELD", `Cards cannot be added from the Main Deck to your opponent's hand except by drawing them.`],
      ["FIELD", `If this card would be destroyed by battle or card effect, you can banish 1 Thunder monster from your GY instead.`],
    ],
    tips: [
      `The reason the deck can host it: Hamon, Summoner of the Sacred Beasts and Martyr of the Sacred Beasts are Thunder or Fiend bodies, and Hamon's own hand effect satisfies the "a Thunder monster's effect was activated in the hand" clause, so Tributing a Thunder monster summons it without "Polymerization".`,
      `Its floodgate half stops searching outright, which is the hardest thing this package does to a combo opponent.`,
    ],
  },
  {
    id: "albion-the-branded-dragon",
    name: "Albion the Branded Dragon",
    role: "Fusion Effect Monster",
    accent: "#cbb0ff",
    badges: ["DARK", "Dragon", "Fusion", "Level 8"],
    stat: "ATK 2500 / DEF 2000",
    cost: `"Fallen of Albaz" + 1 LIGHT monster`,
    zones: [
      ["FIELD", `If this card is Fusion Summoned: You can Fusion Summon 1 Level 8 or lower Fusion Monster from your Extra Deck, except "Albion the Branded Dragon", by banishing Fusion Materials mentioned on it from your hand, field, and/or GY.`],
      ["GY", `During the End Phase, if this card is in the GY because it was sent there this turn: You can add to your hand or Set 1 "Branded" Spell/Trap directly from your Deck.`],
    ],
    note: `You can only use each effect of "Albion the Branded Dragon" once per turn.`,
    tips: [
      `Never Fusion Summoned here. It gets sent from the Extra Deck to the GY (by Zenna's Deceiving Doll Maidens) purely for the End Phase half, which Sets a "Branded" card from the Deck.`,
    ],
  },
  {
    id: "linkuriboh",
    name: "Linkuriboh",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["DARK", "Cyberse", "Link", "LINK-1"],
    stat: "ATK 300 · LINK-1",
    cost: `1 Level 1 monster`,
    zones: [
      ["FIELD", `When an opponent's monster declares an attack: You can Tribute this card; change that opponent's monster's ATK to 0, until the end of this turn.`],
      ["GY", `If this card is in your GY (Quick Effect): You can Tribute 1 Level 1 monster; Special Summon this card.`],
    ],
    note: `You can only use this effect of "Linkuriboh" once per turn.`,
    tips: [
      `Martyr of the Sacred Beasts is a Level 1, so this is a free Link off a spare Martyr, and its GY effect can bring it back by Tributing another one.`,
    ],
  },
  {
    id: "cross-sheep",
    name: "Cross-Sheep",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["EARTH", "Beast", "Link", "LINK-2"],
    stat: "ATK 700 · LINK-2",
    cost: `2 monsters with different names`,
    zones: [
      ["FIELD", `If a monster is Special Summoned to a zone this card points to: You can apply the following effects, in sequence, based on the card types of the monster(s) this card points to.\n● Ritual: Draw 2 cards, then discard 2 cards.\n● Fusion: Special Summon 1 Level 4 or lower monster from your GY.\n● Synchro: All monsters you control gain 700 ATK.\n● Xyz: All monsters your opponent controls lose 700 ATK.`],
    ],
    note: `You can only use this effect of "Cross-Sheep" once per turn.`,
    tips: [
      `Both arrows point down, so whatever you summon has to land in a zone below it. Summon Thunder Dragon Colossus there and the Fusion clause revives a Martyr for free.`,
    ],
  },
  {
    id: "sp-little-knight",
    name: "S:P Little Knight",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["DARK", "Warrior", "Link", "LINK-2"],
    stat: "ATK 1600 · LINK-2",
    cost: `2 Effect Monsters`,
    zones: [
      ["FIELD", `If this card is Link Summoned using a Fusion, Synchro, Xyz, or Link Monster as material: You can target 1 card on the field or in either GY; banish it, also your monsters cannot attack directly this turn.`],
      ["FIELD", `When your opponent activates a card or effect (Quick Effect): You can target 2 face-up monsters on the field, including a monster you control; banish both until the End Phase.`],
    ],
    note: `You can only use each effect of "S:P Little Knight" once per turn.`,
    tips: [
      `The banish-two is the real reason to end on it: it dodges a removal effect by banishing your own monster alongside theirs, and it works on their turn.`,
      `Its first effect only turns on if a Fusion, Synchro, Xyz or Link was used as material, so build it off a spent Link, not off two Martyrs.`,
    ],
  },
  {
    id: "protectcode-talker",
    name: "Protectcode Talker",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["DARK", "Cyberse", "Link", "LINK-3"],
    stat: "ATK 2300 · LINK-3",
    cost: `2+ Effect Monsters`,
    zones: [
      ["FIELD", `Your opponent cannot target Link-4 or higher monsters you control with card effects, also they cannot be destroyed by battle.`],
      ["GY", `If you control a "Firewall" Link Monster (Quick Effect): You can banish Link Monsters from your GY whose combined Link Ratings equal exactly 3; Special Summon this card from your GY, but banish it when it leaves the field.`],
    ],
    note: `You can only use this effect of "Protectcode Talker" once per turn.`,
    tips: [
      `Its GY revive wants exactly 3 Link Ratings of fodder, which Linkuriboh plus Cross-Sheep supplies exactly, and it needs a "Firewall" monster already on the field.`,
      `The static half protects Firewall Dragon and Charmer Quartet in Bloom, the two Link-4s this deck ends on.`,
    ],
  },
  {
    id: "firewall-dragon",
    name: "Firewall Dragon",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["LIGHT", "Cyberse", "Link", "LINK-4"],
    stat: "ATK 2500 · LINK-4",
    cost: `2+ monsters`,
    zones: [
      ["FIELD", `Once while face-up on the field (Quick Effect): You can target monsters on the field and/or GY up to the number of monsters co-linked to this card; return them to the hand.`],
      ["FIELD", `If a monster this card points to is destroyed by battle or sent to the GY: You can Special Summon 1 Cyberse monster from your hand.`],
    ],
    note: `You can only use each effect of "Firewall Dragon" once per turn.`,
    tips: [
      `Co-linked, not adjacent: the bounce counts monsters that point back at it, so a monster parked in an arrow zone facing away is worth nothing. Place the revived Protectcode Talker deliberately.`,
      `It is a LIGHT monster, which is what lets Charmer Quartet in Bloom revive it alongside Hamon.`,
    ],
  },
  {
    id: "charmer-quartet-in-bloom",
    name: "Charmer Quartet in Bloom",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["LIGHT", "Spellcaster", "Link", "LINK-4"],
    stat: "ATK 1850 · LINK-4",
    cost: `2+ monsters`,
    zones: [
      ["FIELD", `Gains 300 ATK for each different Attribute on the field.`],
      ["FIELD", `Once, while this card is face-up on the field, during the Main Phase (Quick Effect): You can target 2 monsters in your GY with the same Attribute but different Types, or with the same Type but different Attributes; Special Summon both, also until the end of the next turn, this card and the Special Summoned monsters cannot be used as material for a Fusion, Synchro, Xyz, or Link Summon.`],
    ],
    note: `You can only use this effect of "Charmer Quartet in Bloom" once per turn.`,
    tips: [
      `Hamon and Firewall Dragon are both LIGHT with different Types, which is exactly the pairing its revive asks for.`,
      `The restriction blocks using the revived monsters as material. It does not block a Tribute, so a revived Hamon can still pay for Thunder Dragon Colossus.`,
    ],
  },
  {
    id: "zennas-deceiving-doll-maidens",
    name: "Zenna's Deceiving Doll Maidens",
    role: "Link Effect Monster",
    accent: "#8f9bd0",
    badges: ["DARK", "Machine", "Link", "LINK-5"],
    stat: "ATK 0 · LINK-5",
    cost: `2+ Effect Monsters`,
    pre: `You can also use 1 monster in your hand as material to Link Summon this card.`,
    zones: [
      ["FIELD", `If this card is Link Summoned: You can send 1 monster from your Deck to the GY, or if all materials used for its Link Summon were monsters you controlled, you can send 1 monster from your Extra Deck instead.`],
      ["GY", `During your next Standby Phase after this card was sent from the field to the GY: You can add 1 monster from your GY to your hand.`],
    ],
    note: `You can only use each of the following effects of "Zenna's Deceiving Doll Maidens" once per turn.`,
    tips: [
      `A Link-5 off two materials, since it only asks for "2+". Feed it a spare Martyr and a spent Link.`,
      `Summon it with monsters you already control and the send switches to the Extra Deck, which is the only reason Albion the Branded Dragon reaches the GY.`,
    ],
  },
  {
    id: "the-fallen-and-the-virtuous",
    name: "The Fallen & The Virtuous",
    role: "Quick-Play Spell",
    accent: "#7fd8c6",
    badges: ["Spell", "Quick-Play"],
    stat: "Quick-Play Spell",
    pre: `(This card is always treated as a "Branded" and "Dogmatika" card.)`,
    zones: [
      ["FIELD", `Activate 1 of these effects;\n● Send 1 monster that mentions "Fallen of Albaz" from your Extra Deck to the GY, then target 1 face-up card on the field; destroy it.\n● If you have an "Ecclesia" monster in your field or GY: Target 1 monster in either GY; Special Summon it to your field.`],
    ],
    note: `You can only activate 1 "The Fallen & The Virtuous" per turn.`,
    tips: [
      `Treated as a "Branded" card, which is the only reason Albion the Branded Dragon can Set it from the Deck in the End Phase.`,
      `Set on your turn, live on theirs: the first effect is a Quick-Play destroy that pays for itself by dumping an Albaz Fusion.`,
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
    { key: "support", title: "Supporting Cards", tag: "generic glue", dot: "#b98cff",
      blurb: "Not \"Sacred Beast\" cards. The generic Extra Deck the Link line rents: Fusions listed by Level, Links by Rating, plus the one Spell that comes with them.",
      cards: pick("thunder-dragon-colossus", "albion-the-branded-dragon", "linkuriboh",
                  "cross-sheep", "sp-little-knight", "protectcode-talker", "firewall-dragon",
                  "charmer-quartet-in-bloom", "zennas-deceiving-doll-maidens",
                  "the-fallen-and-the-virtuous") },
  ],
  zones: deriveZones(cards),
  total: cards.length,
};
