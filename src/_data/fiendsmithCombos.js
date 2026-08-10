// Fiendsmith combo lines. Transcribed from research-fiendsmith-sacredbeasts-combos.md
// (researched 2026-08-05, TCG May 18th 2026 F&L list). Card names & effects
// © Konami: reference only.
//
// Same honesty rule as combos.js: only lines whose sequencing traces to a
// published write-up go on the page as-is, anything assembled from card text
// alone carries a visible `note` saying so. Two lines here are Verified against
// Yugipedia's own Fiendsmith sample combos with every effect re-checked against
// the YGOPRODeck API; `fs-rextremende` is not, and says so on the page.
//
// Deliberately NOT published, per the research file:
// - `fs-engraver-desirae`: single-sourced to an undated article and it reaches
//   the same board as the Verified `fs-tract`. Publishing one route to Desirae.
// - `sb-fiendsmith` (the Sacred Beasts bridge): the pairing is evidenced by two
//   real decklists but no published line exists, so it sits in `pending`.
export default {
  kicker: "// COMBO LINES · FIENDSMITH",
  h1: "One LIGHT Fiend and the GY does the rest",
  intro:
    "Fiendsmith is an engine, so these are the engine's own starters: what it does before whatever deck hosts it takes over. Two things drive every line. Fiendsmith's Requiem is a Link 1 off any single LIGHT Fiend and can tribute itself to Special Summon any Fiendsmith monster from hand or Deck, which is why this package gets splashed everywhere. And Fiendsmith Engraver is a battery, not a cost: in the GY it revives itself by shuffling one other LIGHT Fiend away, and every spent Link monster is one.",

  lines: [
    {
      id: "fs-tract",
      name: "Tract into Desirae",
      section: "1 Card Combos",
      tag: "The standard opener",
      starter: "Fiendsmith's Tract plus 1 other card in hand",
      result:
        "Fiendsmith's Desirae equipped with Fiendsmith's Sequence (2 negates, and untargetable), plus Fiendsmith's Sanct in the GY as next-turn insurance",
      note:
        'This line needs 2 copies of Fiendsmith Engraver. That is legal in the TCG, but <strong>not in the OCG</strong>, where Engraver is Limited to 1.',
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
        "Also needs 2 copies of Fiendsmith Engraver, so TCG-only in the same way the Tract line is. Four summons total, which keeps it under Nibiru range.",
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
      id: "fs-rextremende",
      name: "Kyrie into Rextremende",
      section: "Extensions",
      tag: "The unaffected body",
      starter:
        "Any line that already made a Fiendsmith Fusion plus a Link, with Fiendsmith Kyrie or Fiendsmith's Tract in the GY",
      result: "Fiendsmith's Rextremende, unaffected by non-Fiendsmith effects while an equip is on it",
      note:
        "Unlike the two lines above, this sequence is not taken from a published write-up. Every card effect is verified, but the step order was assembled from card text, so treat it as a route that works rather than the route pilots run.",
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
    { name: "The Moon of the Closed Heaven bridge is dead", body:
      "Guides from 2024 open this engine with \"just make Moon of the Closed Heaven\". That card is Forbidden in both the TCG and the OCG, and so is Beatrice, Lady of the Eternal. The line does not work. The repair: Requiem only wants one LIGHT Fiend, so Evilswarm Exciton Knight (Rank 4) and Melomelody the Brass Djinn (Rank 3) still bridge in. It costs an Xyz instead of a Link 2." },
    { name: "Engraver is a battery, not a cost", body:
      "Every spent Link monster in the GY is a LIGHT Fiend, so Requiem and Sequence are both Engraver fuel once they have done their job. One Engraver revive per turn." },
    { name: "Sanct in the GY is your rebuild", body:
      "If a Fiendsmith monster you control is destroyed by an opponent's card effect, Fiendsmith's Sanct Sets itself from the GY. Next turn it makes another Token and the line runs again." },
    { name: "Dimension Shifter is the one that kills it", body:
      "Nearly every step above routes through the GY, including Fabled Lurrie, which only Special Summons itself if it actually reaches the GY. There is no play-around worth the name, the answer is deckbuilding. If you expect it, note that Sanct is the one opener Ash Blossom cannot touch: it makes a Token, so it neither adds, summons, nor sends from the Deck." },
  ],

  // Sequencing exists in the research notes for both, but neither is confirmed
  // by a published line, so they stay off the page until they are.
  pending: ["Sacred Beasts hybrid bridge", "2-card combos"],
};
