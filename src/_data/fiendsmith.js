// Fiendsmith synergy cards. Card data (names, types, stats) and official effect
// text pulled from the YGOPRODeck API; © Konami, reference only. The effect text
// is split by WHERE it triggers (materials / field / GY / hand), wording kept
// verbatim; `pre` holds a leading static/limit line, `note` the once-per-turn
// clause. No strategy commentary here on purpose, only factual card info.
// First-pass segmentation, to be refined by hand.
export default [
  {
    "id": "fiendsmith-engraver",
    "name": "Fiendsmith Engraver",
    "role": "Effect Monster",
    "accent": "#e0c46a",
    "badges": ["LIGHT", "Fiend", "Effect", "Level 6"],
    "stat": "ATK 1800 / DEF 2400",
    "zones": [
      ["HAND", `You can discard this card; add 1 "Fiendsmith" Spell/Trap from your Deck to your hand.`],
      ["FIELD", `You can target 1 "Fiendsmith" Equip Card you control and 1 monster on the field; send them to the GY.`],
      ["GY", `If this card is in your GY: You can shuffle 1 other LIGHT Fiend monster from your GY into the Deck/Extra Deck; Special Summon this card.`],
    ],
    "note": `You can only use each effect of "Fiendsmith Engraver" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmith-engraver.webp"
  },
  {
    "id": "lacrima-the-crimson-tears",
    "name": "Lacrima the Crimson Tears",
    "role": "Effect Monster",
    "accent": "#e0c46a",
    "badges": ["LIGHT", "Fiend", "Effect", "Level 4"],
    "stat": "ATK 1200 / DEF 1200",
    "pre": `(This card is always treated as a "Fiendsmith" card.)`,
    "zones": [
      ["FIELD", `If this card is Normal or Special Summoned: You can send 1 "Fiendsmith" card from your Deck to the GY, except "Lacrima the Crimson Tears".`],
      ["GY", `During your opponent's turn, if this card is in your GY (Quick Effect): You can target 1 "Fiendsmith" Link Monster in your GY; shuffle this card into the Deck, and if you do, Special Summon that monster.`],
    ],
    "note": `You can only use each effect of "Lacrima the Crimson Tears" once per turn.`,
    "image": "/assets/cards/fiendsmith/lacrima-the-crimson-tears.webp"
  },
  {
    "id": "fiendsmiths-desirae",
    "name": "Fiendsmith's Desirae",
    "role": "Fusion Effect Monster",
    "accent": "#cbb0ff",
    "badges": ["LIGHT", "Fiend", "Fusion", "Level 9"],
    "stat": "ATK 2800 / DEF 2400",
    "cost": `"Fiendsmith Engraver" + 2 LIGHT Fiend monsters`,
    "zones": [
      ["FIELD", `(Quick Effect): You can negate the effects of a number of face-up cards on the field, up to the total Link Rating of Link Monsters equipped to this card, until the end of this turn.`],
      ["GY", `If this card is sent to the GY: You can shuffle 1 other LIGHT Fiend monster from your GY into the Deck/Extra Deck, then target 1 card on the field; send it to the GY.`],
    ],
    "note": `You can only use each effect of "Fiendsmith's Desirae" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmiths-desirae.webp"
  },
  {
    "id": "fiendsmiths-lacrima",
    "name": "Fiendsmith's Lacrima",
    "role": "Fusion Effect Monster",
    "accent": "#cbb0ff",
    "badges": ["LIGHT", "Fiend", "Fusion", "Level 6"],
    "stat": "ATK 2400 / DEF 2400",
    "cost": `2 LIGHT Fiend monsters`,
    "zones": [
      ["FIELD", `Monsters your opponent controls lose 600 ATK.`],
      ["FIELD", `If this card is Fusion Summoned: You can target 1 of your LIGHT Fiend monsters that is banished or in your GY; add it to your hand or Special Summon it.`],
      ["GY", `If this card is sent to the GY: You can shuffle 1 other LIGHT Fiend monster from your GY into the Deck/Extra Deck; inflict 1200 damage to your opponent.`],
    ],
    "note": `You can only use each of the following effects of "Fiendsmith's Lacrima" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmiths-lacrima.webp"
  },
  {
    "id": "fiendsmiths-rextremende",
    "name": "Fiendsmith's Rextremende",
    "role": "Fusion Effect Monster",
    "accent": "#cbb0ff",
    "badges": ["LIGHT", "Fiend", "Fusion", "Level 9"],
    "stat": "ATK 3000 / DEF 3600",
    "cost": `1 "Fiendsmith" Fusion Monster + 1 Fusion or Link Monster`,
    "zones": [
      ["FIELD", `Unaffected by card effects, except "Fiendsmith" cards, while equipped with a "Fiendsmith" Equip Spell.`],
      ["FIELD", `If this card is Fusion Summoned: You can discard 1 card; send 1 LIGHT Fiend monster from your Deck or Extra Deck to the GY.`],
      ["GY", `If this card is sent to the GY: You can target 1 other "Fiendsmith" card in your GY or banishment; add it to your hand.`],
    ],
    "note": `You can only use each of the following effects of "Fiendsmith's Rextremende" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmiths-rextremende.webp"
  },
  {
    "id": "fiendsmiths-agnumday",
    "name": "Fiendsmith's Agnumday",
    "role": "Link Effect Monster",
    "accent": "#8f9bd0",
    "badges": ["LIGHT", "Fiend", "Link", "LINK-3"],
    "stat": "ATK 1800 · LINK-3",
    "cost": `2+ monsters, including a LIGHT Fiend monster`,
    "zones": [
      ["FIELD", `Once per turn (Quick Effect): You can target 1 LIGHT non-Link Fiend monster in your GY; Special Summon it, and if you do, equip this card you control to that monster as an Equip Spell with the following effects.\n● The equipped monster gains ATK equal to the total Link Rating of Link Monsters equipped to it x 600.\n● If the equipped monster attacks a Defense Position monster, inflict piercing battle damage to your opponent.`],
    ],
    "image": "/assets/cards/fiendsmith/fiendsmiths-agnumday.webp"
  },
  {
    "id": "fiendsmiths-requiem",
    "name": "Fiendsmith's Requiem",
    "role": "Link Effect Monster",
    "accent": "#8f9bd0",
    "badges": ["LIGHT", "Fiend", "Link", "LINK-1"],
    "stat": "ATK 600 · LINK-1",
    "cost": `1 LIGHT Fiend monster`,
    "pre": `You can only Special Summon "Fiendsmith's Requiem(s)" once per turn.`,
    "zones": [
      ["FIELD", `During the Main Phase (Quick Effect): You can Tribute this card; Special Summon 1 "Fiendsmith" monster from your hand or Deck.`],
      ["FIELD", `You can target 1 LIGHT non-Link Fiend monster you control; equip this card from your field or GY to that monster you control as an Equip Spell that gives it 600 ATK.`],
    ],
    "note": `You can only use this effect of "Fiendsmith's Requiem" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmiths-requiem.webp"
  },
  {
    "id": "fiendsmiths-sequence",
    "name": "Fiendsmith's Sequence",
    "role": "Link Effect Monster",
    "accent": "#8f9bd0",
    "badges": ["LIGHT", "Fiend", "Link", "LINK-2"],
    "stat": "ATK 1200 · LINK-2",
    "cost": `2 monsters, including a LIGHT Fiend monster`,
    "zones": [
      ["FIELD", `During your Main Phase: You can Fusion Summon 1 Fiend Fusion Monster from your Extra Deck, by shuffling its materials from your GY into the Deck.`],
      ["FIELD", `You can target 1 LIGHT non-Link Fiend monster you control; equip this card from your field or GY to that monster you control as an Equip Spell with the following effect.\n● Your opponent cannot target the equipped monster with card effects.`],
    ],
    "note": `You can only use each effect of "Fiendsmith's Sequence" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmiths-sequence.webp"
  },
  {
    "id": "fiendsmiths-sanct",
    "name": "Fiendsmith's Sanct",
    "role": "Quick-Play Spell",
    "accent": "#7fd8c6",
    "badges": ["Quick-Play", "Spell"],
    "stat": "",
    "zones": [
      ["FIELD", `If you control no face-up monsters, or the only face-up monsters you control are LIGHT Fiend monsters: Special Summon 1 "Fiendsmith Token" (Fiend/LIGHT/Level 1/ATK 0/DEF 0), also you cannot declare attacks for the rest of this turn, except with Fiend monsters.`],
      ["GY", `If a face-up "Fiendsmith" monster(s) you control is destroyed by an opponent's card effect, while this card is in your GY: You can Set this card.`],
    ],
    "note": `You can only use each effect of "Fiendsmith's Sanct" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmiths-sanct.webp"
  },
  {
    "id": "fiendsmiths-tract",
    "name": "Fiendsmith's Tract",
    "role": "Normal Spell",
    "accent": "#7fd8c6",
    "badges": ["Normal", "Spell"],
    "stat": "",
    "zones": [
      ["FIELD", `Add 1 LIGHT Fiend monster from your Deck to your hand, then discard 1 card.`],
      ["GY", `You can banish this card from your GY; Fusion Summon 1 "Fiendsmith" Fusion Monster from your Extra Deck, using monsters from your hand or field.`],
    ],
    "note": `You can only use each effect of "Fiendsmith's Tract" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmiths-tract.webp"
  },
  {
    "id": "fiendsmith-kyrie",
    "name": "Fiendsmith Kyrie",
    "role": "Normal Trap",
    "accent": "#d98cba",
    "badges": ["Normal", "Trap"],
    "stat": "",
    "zones": [
      ["FIELD", `This turn, your LIGHT Fiend monsters cannot be destroyed by battle, also any battle damage you take becomes halved.`],
      ["GY", `You can banish this card from your GY; Fusion Summon 1 "Fiendsmith" Fusion Monster from your Extra Deck, using monsters you control, and/or monsters in your Spell & Trap Zones that are equipped to a "Fiendsmith" monster as an Equip Spell, as material.`],
    ],
    "note": `You can only use this effect of "Fiendsmith Kyrie" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmith-kyrie.webp"
  },
  {
    "id": "fiendsmith-in-paradise",
    "name": "Fiendsmith in Paradise",
    "role": "Normal Trap",
    "accent": "#d98cba",
    "badges": ["Normal", "Trap"],
    "stat": "",
    "zones": [
      ["FIELD", `Target 1 Level 7 or higher LIGHT Fiend monster you control; send all cards on the field to the GY that are not that monster.`],
      ["GY", `If your opponent Special Summons a monster(s), while this card is in your GY: You can banish this card; send 1 "Fiendsmith" monster from your Deck or Extra Deck to the GY.`],
    ],
    "note": `You can only use each effect of "Fiendsmith in Paradise" once per turn.`,
    "image": "/assets/cards/fiendsmith/fiendsmith-in-paradise.webp"
  }
];
