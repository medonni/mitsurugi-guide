// Fiendsmith combo lines. Card names & effects © Konami: reference only.
//
// Two origins, and the page says which is which:
// - `fs-tract` / `fs-engraver-r6` were transcribed from Yugipedia's own
//   Fiendsmith sample combos (researched 2026-08-05, TCG May 18th 2026 F&L
//   list) with every effect re-checked against the YGOPRODeck API.
// - everything else was compiled by hand in COMBOS.md and ported here. Each
//   step was re-checked against the card text in fiendsmith.js.
//
// Most lines open with the same six steps, so they live once as `fs-common-start`
// and every later line's step 1 points at it instead of restating them. Step
// text is escaped by the `linkcards` filter, so cross-links go in `note` (which
// renders raw), never in `do`.
export default {
  kicker: "// COMBO LINES · FIENDSMITH",
  h1: "One LIGHT Fiend and the GY does the rest",
  intro:
    "Fiendsmith is an engine, so these are the engine's own starters: what it does before whatever deck hosts it takes over. Two things drive every line. Fiendsmith's Requiem is a Link 1 off any single LIGHT Fiend and can tribute itself to Special Summon any Fiendsmith monster from hand or Deck, which is why this package gets splashed everywhere. And Fiendsmith Engraver discard as a cost is not really a cost. In the GY it revives itself by shuffling one other LIGHT Fiend away, and every spent Link monster is one.",

  lines: [
    {
      id: "fs-common-start",
      name: "The common start",
      section: "1 Card Combos",
      tag: "Read this one first",
      starter: "Fiendsmith Engraver in hand",
      result:
        "Lacrima the Crimson Tears on the field, with a second Fiendsmith Engraver, Fiendsmith's Requiem, Fabled Lurrie and Fiendsmith's Tract in the GY",
      note:
        'Engraver is the deck\'s main monster, so every line below opens on it for demonstration: they all begin "run the common start", meaning these six steps. Once the shape is familiar, any other single LIGHT Fiend substitutes in at step 3. Note this needs 2 copies of Fiendsmith Engraver, which is legal in the TCG but <strong>not in the OCG</strong>, where Engraver is Limited to 1.',
      steps: [
        { n: "1", card: "Engraver in hand", do: "Discard Fiendsmith Engraver to search Fiendsmith's Tract.",
          why: "The discard is not a price you are paying. The GY is where Engraver wants to be, and it revives itself from there later.",
          warn: "Ash Blossom. This is a one-card start, so an Ash here is the whole turn." },
        { n: "2", card: "Tract", do: "Activate Fiendsmith's Tract, add Fabled Lurrie, then discard Lurrie for Tract's own cost.",
          why: "Tract makes you discard anyway, so you search the one card that wants to be discarded.",
          warn: "Droll & Lock Bird after step 1 shuts this second add off." },
        { n: "3", card: "Lurrie", do: "Fabled Lurrie Special Summons itself out of the GY.",
          info: "Lurrie is a LIGHT Fiend, which is the only reason this works." },
        { n: "4", card: "Lurrie", do: "Link Summon Fiendsmith's Requiem using Lurrie." },
        { n: "5", card: "Requiem", do: "Tribute Requiem to Special Summon Lacrima the Crimson Tears from the Deck.",
          info: "Lacrima the Crimson Tears is always treated as a \"Fiendsmith\" card, so Requiem can summon it.",
          warn: "Second Ash window, and it is a Special Summon from the Deck." },
        { n: "6", card: "Lacrima the Crimson Tears", do: "Its summon trigger sends 1 Fiendsmith card from the Deck to the GY. Send a second Fiendsmith Engraver.",
          why: "Two Engravers in the GY: one revives itself later, the other is Fusion material for Fiendsmith's Desirae. Requiem is down there too, and a spent Link is still a LIGHT Fiend." },
      ],
    },
    {
      id: "fs-caesar",
      name: "Engraver into D/D/D Wave High King Caesar",
      section: "1 Card Combos",
      tag: "Negate plus a grind chain",
      starter: "Fiendsmith Engraver in hand",
      result:
        "D/D/D Wave High King Caesar, then an opponent-turn chain that removes a card and hands you back Fiendsmith's Requiem and Fiendsmith's Desirae for next turn",
      note:
        'Picks up from <a class="clink" href="#fs-common-start">the common start</a>.',
      steps: [
        { n: "1", card: "The common start", do: "Run the common start. You end on Lacrima the Crimson Tears, with two Engravers, Requiem, Fabled Lurrie and Fiendsmith's Tract in the GY." },
        { n: "2", card: "Requiem in GY", do: "Equip Fiendsmith's Requiem from the GY to Lacrima the Crimson Tears.",
          why: "Requiem equips to any LIGHT non-Link Fiend you control, and a monster wearing a monster card is exactly what the next step needs." },
        { n: "3", card: "Lacrima + Requiem", do: "Contact fusion Necroquip Princess, sending the equipped Lacrima the Crimson Tears and Requiem to the GY as its material.",
          info: "Necroquip asks for 1 monster equipped with a Monster Card plus 1 Fiend monster card, and the Requiem sitting in your Spell & Trap Zone is the second one." },
        { n: "4", card: "Engraver in GY", do: "Shuffle Fabled Lurrie from the GY into the Deck to Special Summon Engraver." },
        { n: "5", card: "Necroquip + Engraver", do: "Xyz Summon D/D/D Wave High King Caesar with the two Level 6 Fiends. Pass.",
          why: "Caesar negates and destroys the first Spell, Trap or monster effect that tries to Special Summon, which is what a combo opponent opens with." },
        { n: "6", card: "Lacrima in GY, their turn", do: "Target Requiem in the GY: shuffle Lacrima the Crimson Tears into the Deck and Special Summon Requiem.",
          info: "This is a Quick Effect on your opponent's turn, so the whole follow-up below happens on their clock." },
        { n: "7", card: "Requiem", do: "Tribute Requiem again to Special Summon Lacrima the Crimson Tears, the copy you just shuffled back into the Deck." },
        { n: "8", card: "Lacrima the Crimson Tears", do: "Its summon trigger sends Fiendsmith in Paradise from the Deck to the GY." },
        { n: "9", card: "Fiendsmith in Paradise", do: "When your opponent Special Summons a monster, banish Paradise from the GY to send Fiendsmith's Desirae from the Extra Deck to the GY." },
        { n: "10", card: "Desirae in GY", do: "Desirae's sent-to-GY effect: shuffle Requiem into the Extra Deck, then target 1 card on the field and send it to the GY.",
          why: "Removal on their turn, and Requiem is back in the Extra Deck where you can use it again." },
        { n: "11", card: "Engraver in GY, your turn", do: "Shuffle Desirae from the GY into the Extra Deck to Special Summon Engraver.",
          why: "You start your next turn with a body on board and both Requiem and Desirae back in the Extra Deck." },
      ],
    },
    {
      id: "fs-desirae-sequence",
      name: "Engraver into Desirae equipped with Sequence",
      section: "1 Card Combos",
      tag: "The negate board",
      starter: "Fiendsmith Engraver in hand",
      result:
        "Fiendsmith's Desirae equipped with Fiendsmith's Sequence (2 negates, untargetable), with Engraver, Fiendsmith's Lacrima and Lacrima the Crimson Tears left in the GY",
      note:
        'Picks up from <a class="clink" href="#fs-common-start">the common start</a>.',
      steps: [
        { n: "1", card: "The common start", do: "Run the common start." },
        { n: "2", card: "Engraver in GY", do: "Shuffle Fabled Lurrie from the GY into the Deck to Special Summon Engraver." },
        { n: "3", card: "Lacrima + Engraver", do: "Link Summon Fiendsmith's Sequence using both bodies." },
        { n: "4", card: "Sequence", do: "Fusion Summon Fiendsmith's Lacrima, shuffling Requiem and an Engraver from the GY into the Deck.",
          why: "Sequence fuses out of the GY, so nothing on your field is spent to make it." },
        { n: "5", card: "Fiendsmith's Lacrima", do: "Its Fusion-Summon trigger Special Summons the other Engraver from the GY." },
        { n: "6", card: "Tract in GY", do: "Banish Fiendsmith's Tract from the GY to Fusion Summon Fiendsmith's Desirae, using Engraver, Fiendsmith's Lacrima and Sequence from the field.",
          why: "Desirae wants Engraver plus 2 LIGHT Fiends, and Sequence is a LIGHT Fiend too, so all three field monsters go.",
          info: "Sequence heading to the GY is not a loss: its equip effect works from there." },
        { n: "7", card: "Sequence in GY", do: "Equip Sequence from the GY to Desirae.",
          why: "Desirae negates up to the total Link Rating equipped to it, so a Link 2 means two negates, and Sequence also makes it untargetable." },
      ],
    },
    {
      id: "fs-agnumday",
      name: "Engraver into Desirae under Agnumday",
      section: "1 Card Combos",
      tag: "Up to 5 negates",
      starter: "Fiendsmith Engraver in hand",
      result:
        "Fiendsmith's Desirae revived under Fiendsmith's Agnumday, untargetable with up to 5 Link Ratings equipped to it",
      note:
        'Picks up from <a class="clink" href="#fs-common-start">the common start</a>. The last two steps are a choice, not a sequence: route A is the bigger negate, route B trades one negate for removal on the spot.',
      steps: [
        { n: "1", card: "The common start", do: "Run the common start." },
        { n: "2", card: "Engraver in GY", do: "Shuffle Fabled Lurrie from the GY into the Deck to Special Summon Engraver." },
        { n: "3", card: "Lacrima + Engraver", do: "Link Summon Fiendsmith's Sequence using both bodies." },
        { n: "4", card: "Sequence", do: "Fusion Summon Fiendsmith's Desirae, shuffling Requiem, Lacrima the Crimson Tears and Engraver from the GY into the Deck." },
        { n: "5", card: "Desirae + Sequence", do: "Link Summon Fiendsmith's Agnumday.",
          info: "Agnumday only asks for 2+ monsters including a LIGHT Fiend, so a Link 2 plus Desirae is enough material for a Link 3." },
        { n: "6A", card: "Route A: Agnumday", do: "Target Desirae in the GY: Special Summon it and equip Agnumday to it. Then equip Sequence from the GY to Desirae as well.",
          why: "Agnumday (Link 3) plus Sequence (Link 2) is 5 Link Ratings equipped: up to 5 negates, untargetable, and +3000 ATK with piercing." },
        { n: "6B", card: "Route B: Desirae in GY", do: "Or, as Desirae hits the GY for Agnumday's summon, use its trigger first: shuffle Engraver or Sequence into the Deck and send 1 card on the field to the GY. Then revive Desirae with Agnumday.",
          warn: "You get the removal or the second equip, not both. Whichever LIGHT Fiend you shuffled away for Desirae's effect is no longer in the GY to equip or to revive later." },
      ],
    },
    {
      id: "fs-otk",
      name: "Engraver into an OTK",
      section: "1 Card Combos",
      tag: "8200 off one card",
      starter: "Fiendsmith Engraver in hand",
      result: "1200 burn plus a 7000 ATK Desirae with piercing",
      note:
        'Picks up from <a class="clink" href="#fs-common-start">the common start</a>. It kills through the Battle Phase, so it is an OTK going second, not a first-turn kill.',
      steps: [
        { n: "1", card: "The common start", do: "Run the common start." },
        { n: "2", card: "Engraver in GY", do: "Shuffle Fabled Lurrie from the GY into the Deck to Special Summon Engraver." },
        { n: "3", card: "Tract in GY", do: "Banish Fiendsmith's Tract to Fusion Summon Fiendsmith's Lacrima, using Lacrima the Crimson Tears and Engraver from the field." },
        { n: "4", card: "Fiendsmith's Lacrima", do: "Its Fusion-Summon trigger Special Summons Engraver back from the GY." },
        { n: "5", card: "Both bodies", do: "Link Summon Fiendsmith's Sequence using Fiendsmith's Lacrima and Engraver." },
        { n: "6", card: "Fiendsmith's Lacrima in GY", do: "Its sent-to-GY effect: shuffle 1 Engraver into the Deck and inflict 1200 damage.",
          why: "The cost is a card you no longer need, and 1200 is exactly the gap between 7000 and lethal." },
        { n: "7", card: "Sequence", do: "Fusion Summon Fiendsmith's Desirae, shuffling the remaining Engraver, Lacrima the Crimson Tears and Fiendsmith's Lacrima from the GY into the Deck." },
        { n: "8", card: "Desirae + Sequence", do: "Link Summon Fiendsmith's Agnumday." },
        { n: "9", card: "Agnumday", do: "Special Summon Desirae from the GY and equip Agnumday to it." },
        { n: "10", card: "Sequence in GY", do: "Equip Sequence to Desirae." },
        { n: "11", card: "Requiem in GY", do: "Equip Requiem to Desirae as well.",
          why: "Requiem's own equip gives +600, and Agnumday gives 600 per Link Rating equipped: 3 + 2 + 1 is 6, so +3600. 2800 + 600 + 3600 is a 7000 ATK piercing body, and the 1200 burn covers the rest." },
      ],
    },
    {
      id: "fs-otk-kyrie",
      name: "Engraver into an OTK (Kyrie build)",
      section: "1 Card Combos",
      tag: "Exactly 10,000",
      starter: "Fiendsmith Engraver in hand, with Fiendsmith Kyrie in the Deck",
      result: "1200 burn plus three attacks: 1800, 4600 and 2400, for exactly 10,000",
      note:
        'Same opening as the line above, but you send Fiendsmith Kyrie instead of the second Engraver, and split the damage across three attacks rather than one. Also an OTK going second.',
      steps: [
        { n: "1", card: "The common start", do: "Run the common start, but at step 6 send Fiendsmith Kyrie from the Deck to the GY instead of a second Engraver." },
        { n: "2", card: "Engraver in GY", do: "Shuffle Fabled Lurrie from the GY into the Deck to Special Summon Engraver." },
        { n: "3", card: "Tract in GY", do: "Banish Fiendsmith's Tract to Fusion Summon Fiendsmith's Lacrima, using Lacrima the Crimson Tears and Engraver from the field." },
        { n: "4", card: "Fiendsmith's Lacrima", do: "Its Fusion-Summon trigger Special Summons Engraver back from the GY." },
        { n: "5", card: "Both bodies", do: "Link Summon Fiendsmith's Sequence using Fiendsmith's Lacrima and Engraver." },
        { n: "6", card: "Fiendsmith's Lacrima in GY", do: "Shuffle Lacrima the Crimson Tears into the Deck and inflict 1200 damage. Running total: 1200." },
        { n: "7", card: "Sequence", do: "Fusion Summon Fiendsmith's Desirae, shuffling Engraver, Fiendsmith's Lacrima and Requiem from the GY into the Deck." },
        { n: "8", card: "Desirae + Sequence", do: "Link Summon Fiendsmith's Agnumday, and do not use its effect yet." },
        { n: "9", card: "Battle Phase", do: "Attack with Agnumday for 1800. Running total: 3000." },
        { n: "10", card: "Agnumday", do: "Mid-Battle Phase, use Agnumday's Quick Effect: Special Summon Desirae from the GY and equip Agnumday to it, then attack for 4600. Running total: 7600.",
          why: "2800 base plus 600 per equipped Link Rating, and Agnumday is a Link 3." },
        { n: "11", card: "Kyrie in GY", do: "Banish Fiendsmith Kyrie to Fusion Summon Fiendsmith's Lacrima using Desirae and the equipped Agnumday, then attack for 2400. Total: 10,000.",
          info: "Kyrie is the only Fusion effect that can use a monster sitting in your Spell & Trap Zone as an equip, which is what makes the third attack possible." },
      ],
    },
    {
      id: "fs-tract",
      name: "Tract into Desirae",
      section: "1 Card Combos",
      tag: "The published opener",
      starter: "Fiendsmith's Tract plus 1 other card in hand",
      result:
        "Fiendsmith's Desirae equipped with Fiendsmith's Sequence (2 negates, and untargetable), plus Fiendsmith's Sanct in the GY as next-turn insurance",
      note:
        'The route Yugipedia publishes when you open on Tract instead of Engraver. Like the lines above it needs 2 copies of Fiendsmith Engraver: legal in the TCG, <strong>not in the OCG</strong>, where Engraver is Limited to 1.',
      steps: [
        { n: "1", card: "Tract in hand", do: "Activate Fiendsmith's Tract. Search Fiendsmith Engraver, then discard whatever your spare card is.",
          warn: "Ash Blossom on Tract is the cleanest way to end this line. If you have a bait, use it first." },
        { n: "2", card: "Engraver from hand", do: "Discard Engraver to search Fiendsmith's Sanct.",
          why: "Engraver in the GY is not a cost you are paying, it is where you want it. It comes back in step 6.",
          warn: "Droll & Lock Bird after step 1 stops this second search cold." },
        { n: "3", card: "Sanct", do: "Activate Fiendsmith's Sanct and make a Fiendsmith Token.",
          why: "The Token is a LIGHT Fiend, which is all Requiem asks for.",
          info: "Sanct needs you to control no face-up monsters, or only LIGHT Fiends. It also locks your attacks to Fiends for the turn, which never matters here." },
        { n: "4", card: "Token", do: "Link Summon Fiendsmith's Requiem using the Token." },
        { n: "5", card: "Requiem", do: "Tribute Requiem to Special Summon a second Fiendsmith Engraver from the Deck.",
          warn: "This is the Ash target if they let Tract resolve. It is a Special Summon from the Deck." },
        { n: "6", card: "Engraver in GY", do: "Revive the first Engraver from the GY by shuffling Requiem into the Extra Deck.",
          why: "Requiem already did its job. Feeding it to Engraver turns a spent Link into a second body for free." },
        { n: "7", card: "Tract in GY", do: "Banish Tract from the GY to Fusion Summon Fiendsmith's Lacrima using the two Engravers on the field.",
          info: "This is Tract's second half. One card, two effects." },
        { n: "8", card: "Lacrima", do: "Lacrima's Fusion-Summon trigger revives one Engraver from the GY.",
          why: "You are back to two bodies immediately after fusing away two." },
        { n: "9", card: "Lacrima + Engraver", do: "Link Summon Fiendsmith's Sequence using Lacrima and Engraver." },
        { n: "10", card: "Sequence", do: "Fuse Fiendsmith's Desirae by shuffling Lacrima and both Engravers from the GY into the Deck.",
          why: "Desirae wants Engraver plus 2 LIGHT Fiends, and every one of those is sitting in your GY. Nothing on the field is spent." },
        { n: "11", card: "Sequence again", do: "Equip Sequence to Desirae.",
          why: "Desirae negates up to the total Link Rating equipped to it, so Sequence being a Link 2 means two negates. It also makes Desirae untargetable." },
      ],
    },
    {
      id: "fs-engraver-r6",
      name: "Engraver into Rank 6",
      section: "1 Card Combos",
      tag: "Cheapest entry",
      starter: "Fiendsmith Engraver in hand, nothing else required",
      result: "One Rank 6 Xyz, most often D/D/D Wave High King Caesar",
      note:
        "The shortest route to a Rank 6: it stops where the common start would keep going. Four summons total, which keeps it under Nibiru range.",
      steps: [
        { n: "1", card: "Engraver", do: "Discard Engraver to search Fiendsmith's Tract.",
          warn: "Ash Blossom. This is a one-card combo, so an Ash here is the whole turn." },
        { n: "2", card: "Tract", do: "Activate Tract, add Fabled Lurrie, then discard Lurrie as the cost.",
          why: "Tract makes you discard anyway, so you search the one card that wants to be discarded." },
        { n: "3", card: "Lurrie", do: "Lurrie Special Summons itself out of the GY.",
          info: "Lurrie is a LIGHT Fiend, which is the only reason this works." },
        { n: "4", card: "Lurrie", do: "Link Summon Fiendsmith's Requiem using Lurrie." },
        { n: "5", card: "Requiem", do: "Tribute Requiem to Special Summon a second Engraver from the Deck.",
          warn: "Second Ash window, and it is a Special Summon from the Deck." },
        { n: "6", card: "Engraver in GY", do: "Revive the first Engraver by shuffling Lurrie from the GY into the Deck.",
          why: "Two Level 6 LIGHT Fiends on board off one card." },
        { n: "7", card: "Both Engravers", do: "Xyz Summon any Rank 6. D/D/D Wave High King Caesar is the standard pick.",
          why: "Caesar negates and destroys the first Spell, Trap, or monster effect that tries to Special Summon, which is exactly what a combo opponent is doing." },
      ],
    },
    {
      id: "fs-caesar-agnumday",
      name: "Caesar plus Desirae under Agnumday",
      section: "2 Card Combos",
      tag: "The full board",
      starter: "Fiendsmith Engraver in hand plus any monster you can Normal Summon",
      result:
        "D/D/D Wave High King Caesar on your turn, and Fiendsmith's Desirae revived under Fiendsmith's Agnumday on theirs",
      note:
        'Picks up from <a class="clink" href="#fs-common-start">the common start</a>. The second card only has to be a body: it is Link material and nothing else.',
      steps: [
        { n: "1", card: "The common start", do: "Run the common start." },
        { n: "2", card: "Your Normal Summon", do: "Normal Summon your second monster, or use one already on the field." },
        { n: "3", card: "Two bodies", do: "Link Summon Fiendsmith's Sequence using Lacrima the Crimson Tears and the Normal Summon." },
        { n: "4", card: "Sequence", do: "Fusion Summon Fiendsmith's Desirae, shuffling Engraver, Fabled Lurrie and Requiem from the GY into the Deck." },
        { n: "5", card: "Desirae + Sequence", do: "Link Summon Fiendsmith's Agnumday." },
        { n: "6", card: "Agnumday", do: "Special Summon Desirae from the GY and equip Agnumday to it." },
        { n: "7", card: "Desirae + Agnumday", do: "Contact fusion Necroquip Princess: Desirae is the monster equipped with a Monster Card, Agnumday is the Fiend monster card.",
          why: "Both halves land in the GY, which is where the opponent-turn half of this line reads from." },
        { n: "8", card: "Engraver in GY", do: "Shuffle Sequence from the GY into the Extra Deck to Special Summon Engraver." },
        { n: "9", card: "Necroquip + Engraver", do: "Xyz Summon D/D/D Wave High King Caesar with the two Level 6 Fiends. Pass." },
        { n: "10", card: "Lacrima in GY, their Draw Phase", do: "Target Agnumday in the GY: shuffle Lacrima the Crimson Tears into the Deck and Special Summon Agnumday." },
        { n: "11", card: "Agnumday", do: "It is a new turn, so its effect is live again: Special Summon Desirae from the GY and equip Agnumday to it.",
          why: "You end their Draw Phase with Caesar's negate plus a 4600 Desirae holding 3 negates." },
      ],
    },
    {
      id: "fs-saryuja",
      name: "Engraver plus a Normal Summon into Saryuja",
      section: "2 Card Combos",
      tag: "Draw 4",
      starter: "Fiendsmith Engraver in hand plus any monster you can Normal Summon",
      result: "Saryuja Skull Dread with 4 materials: draw 4, then bottom-deck 3",
      note:
        'Picks up from <a class="clink" href="#fs-common-start">the common start</a>. Not a board, a refuel: take it when the rest of your hand is what is actually holding you back.',
      steps: [
        { n: "1", card: "The common start", do: "Run the common start." },
        { n: "2", card: "Your Normal Summon", do: "Normal Summon your second monster." },
        { n: "3", card: "Two bodies", do: "Link Summon Fiendsmith's Sequence using Lacrima the Crimson Tears and the Normal Summon." },
        { n: "4", card: "Sequence", do: "Fusion Summon Fiendsmith's Lacrima, shuffling Fabled Lurrie and Requiem from the GY into the Deck." },
        { n: "5", card: "Fiendsmith's Lacrima", do: "Its Fusion-Summon trigger Special Summons Lacrima the Crimson Tears back from the GY." },
        { n: "6", card: "Engraver in GY", do: "Shuffle the other Engraver from the GY into the Deck to Special Summon Engraver." },
        { n: "7", card: "Four monsters", do: "Sequence, Fiendsmith's Lacrima, Lacrima the Crimson Tears and Engraver are four different names, so Link Summon Saryuja Skull Dread. With 4 materials: draw 4 cards, then place 3 cards from your hand on the bottom of your Deck in any order.",
          why: "Saryuja is EARTH and a Dragon, so it is dead weight for everything the engine does afterwards. This is the line you take when your hand, not your board, is the problem." },
      ],
    },
    {
      id: "fs-mitsurugi-bridge",
      name: "Two Level 4s into the engine",
      jump: "Bridge in",
      section: "Mitsurugi bridge",
      tag: "How a host deck gets here",
      starter: "Any two Level 4 monsters, for instance the Saji and Aramasa a Mitsurugi line leaves spare",
      result: "Fiendsmith's Requiem, and from there any line on this page",
      note:
        'This is the way into the engine from a deck that has no LIGHT Fiend of its own. The way back out, Aerial Eater into Skull Archfiend of Chaos, is on the <a class="clink" href="../../mitsurugi/combos/">Mitsurugi combos page</a>.',
      steps: [
        { n: "1", card: "Two Level 4s", do: "Xyz Summon Evilswarm Exciton Knight." },
        { n: "2", card: "Exciton", do: "Link Summon Fiendsmith's Requiem using Exciton.",
          why: "Exciton is a LIGHT Fiend, and Requiem asks for exactly one of those. That is the entire bridge." },
        { n: "3", card: "Requiem", do: "Tribute Requiem to Special Summon Lacrima the Crimson Tears from the Deck, and you are in the engine's normal lines from step 5 of the common start onward." },
      ],
    },
    {
      id: "fs-rextremende",
      name: "Kyrie into Rextremende",
      section: "Extensions",
      tag: "The unaffected body",
      starter:
        "Any line that already made a Fiendsmith Fusion plus a Link, with Fiendsmith Kyrie or Fiendsmith's Tract in the GY",
      result: "Fiendsmith's Rextremende, unaffected by non-Fiendsmith effects while an equip is on it",
      note:
        "Assembled from card text rather than taken from a published write-up. Every effect is verified, but treat it as a route that works rather than the route pilots run.",
      steps: [
        { n: "1", card: "Get Kyrie into the GY", do: "Lacrima the Crimson Tears' summon trigger sends any Fiendsmith card from the Deck to the GY. Send Fiendsmith Kyrie.",
          why: "Kyrie is a Trap you never want to draw or set. Its only real job is being in the GY." },
        { n: "2", card: "Kyrie in GY", do: "Banish Kyrie to Fusion Summon Rextremende.",
          info: "Kyrie can use monsters you control and monsters sitting in your Spell & Trap Zones as equips on a Fiendsmith monster. A Requiem or Sequence that is currently an Equip Spell is still valid material." },
        { n: "3", card: "Materials", do: "Rextremende needs one Fiendsmith Fusion plus one Fusion or Link. Fiendsmith's Lacrima plus Sequence is the usual pairing." },
        { n: "4", card: "Rextremende", do: "Its Fusion-Summon trigger: discard 1, then send a LIGHT Fiend from the Deck or Extra Deck to the GY.",
          why: "This is how you set up a GY Desirae or bank another Engraver.",
          warn: "Ash Blossom, it sends from the Deck." },
        { n: "5", card: "Equip", do: "Equip Sequence (or Requiem) to Rextremende.",
          why: "Rextremende is only unaffected by non-Fiendsmith card effects while a Fiendsmith Equip Spell is on it. Naked Rextremende is just a 3000 body." },
      ],
    },
  ],

  interactionsTitle: "What to know before you pilot it",
  interactions: [
    { name: "Engraver is a battery, not a cost", body:
      "Every spent Link monster in the GY is a LIGHT Fiend, so Requiem, Sequence and Agnumday are all Engraver fuel once they have done their job. One Engraver revive per turn, so pick the line before you spend it." },
    { name: "One Fiendsmith's Lacrima, and it is not optional", body:
      "Four lines above fuse it, and it is Limited in the TCG (unrestricted in the OCG and Master Duel). One copy is enough for all of them, but only because each shuffles it back into the Extra Deck before it is needed again: the OTKs in particular reuse the same copy twice in one turn." },
    { name: "The Moon of the Closed Heaven bridge is dead", body:
      "Guides from 2024 open this engine with \"just make Moon of the Closed Heaven\". That card is Forbidden in both the TCG and the OCG, and so is Beatrice, Lady of the Eternal. Requiem only wants one LIGHT Fiend, so the repair is any other LIGHT Fiend you can make: what your host deck reaches decides it." },
    { name: "Sanct in the GY is your rebuild", body:
      "If a Fiendsmith monster you control is destroyed by an opponent's card effect, Fiendsmith's Sanct Sets itself from the GY. Next turn it makes another Token and the line runs again." },
    { name: "Dimension Shifter is the one that kills it", body:
      "Nearly every step above routes through the GY, including Fabled Lurrie, which only Special Summons itself if it actually reaches the GY. There is no play-around worth the name, the answer is deckbuilding. If you expect it, note that Sanct is the one opener Ash Blossom cannot touch: it makes a Token, so it neither adds, summons, nor sends from the Deck." },
  ],

  pending: ["Sacred Beasts hybrid bridge"],
};
