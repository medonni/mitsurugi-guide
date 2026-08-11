# Combo lines — editing source

Plain-text mirror of the combo data so lines can be written/edited here first.
Source of truth is still the JS: `src/_data/combos.js` (Mitsurugi),
`src/_data/fiendsmithCombos.js` (Fiendsmith). Sacred Beasts has no combo data
file yet, its page is a hand-written placeholder (`src/sacred-beasts/combos.njk`).

Field names map 1:1 to the data files:

- `id` — anchor, must be unique within a deck
- `name` / `jump` — heading, and a shorter label for the jump nav
- `section` — groups lines into a collapsible block ("1 Card Combos", "Extensions", ...)
- `tag` — small badge next to the name
- `starter` / `result` — the START / END meta rows
- `note` — paragraph under the heading (HTML allowed)
- `video` / `t` — YouTube id and optional start seconds
- steps: `n` (label), `card` (what you're acting with), `do`, plus optional
  `why` / `info` / `warn` (rendered as WHY / INFO / WATCH OUT)
- `interactions` — the "key interactions" card grid at the bottom
- `pending` — one-line list of lines not written yet

---

# MITSURUGI

**kicker:** `// COMBO LINES`
**h1:** From one card to a full board
**intro:** Mitsurugi wins by looping tributes into searches and revivals. Below is the main line that turns a single starter into a board wipe plus a grind engine. Each step notes what to do and why the resources come back.

## Section: 1 Card Combos

### Standard full combo
- **id:** `main-1`
- **tag:** Bread and butter
- **START:** Any opener that reaches Habakiri: Pre-Prep of Rites, Mitsurugi Prayers, an Aramasa Normal Summon, or Ragged Records of Rites
- **END:** Habakiri, Murakumo, and Futsu no Mitama on board, plus a Rank 4 Xyz or Link 2 of your choice and a set Mitsurugi Great Purification

**0. Get to Habakiri**
Reach Habakiri through any opener: Pre-Prep of Rites, Mitsurugi Prayers, an Aramasa Normal Summon, or Ragged Records of Rites.
- INFO: The next steps can vary a little depending on the rest of your hand and how you got to Habakiri.

**1. Habakiri effect in hand**
Reveal Habakiri, Special Summon Saji from the Deck, then tribute Saji.
- WATCH OUT: Ash Blossom hits this trigger and stops the whole search. Bait it out first if you can. Though, most people would probably wait and hit Saji effect.

**1.5. Saji triggers in GY**
Add Mitsurugi Ritual to hand.
- WATCH OUT: Droll & Lock Bird shuts off every further add for the turn once you make this search.

**2. Ritual summon from hand, tribute from Deck**
Activate Mitsurugi Ritual to Ritual Summon Habakiri, tributing Aramasa and Kusanagi from the Deck. If you run it, use NSS instead of Aramasa to revive it.

**2.5. Tributed monsters trigger**
CL1 Kusanagi returns Mitsurugi Ritual to hand; CL2 Aramasa fetches Futsu no Mitama.
- WHY: Both on-Tribute effects resolve from the GY. Taking the Ritual back sets up the second Ritual Summon in step 3. Doing Kusanagi's effect first allows you to chain block with Aramasa.

**3. Ritual summon from Deck, tribute from field**
Activate Mitsurugi Ritual again, tributing Habakiri to summon Ame no Murakumo from the Deck.
- INFO: Murakumo wipes the opponent's board on Special Summon.

**3.5. Habakiri on-Tribute**
Habakiri's on-Tribute effect adds Mitsurugi Mirror and revives itself.

**4. Mirror activation**
Activate Mitsurugi Mirror, tributing Murakumo to Special Summon Futsu no Mitama from the hand in defense position.
- INFO: Futsu is a 3400 DEF wall, a very big defender.

**4.5. Murakumo on-Tribute**
Murakumo activates in the GY, adding Mitsurugi Prayers and reviving itself.

**5. Prayers loop**
Activate Mitsurugi Prayers, tributing Futsu no Mitama to add Aramasa (pay 800 LP) and revive Saji from the GY.
- WHY: Prayers turns the spent Futsu into a fresh search plus a body.

**5.5. Mirror + Futsu trigger in GY**
As Prayers resolves, Futsu no Mitama and Mirror's GY effect triggers. Shuffle Mirror back into the deck, add Mitsurugi Great Purification and revive Futsu no Mitama.
- WHY: You get Futsu back and end on a live Trap.

**6. Flexible Extra Deck end**
Normal Summon the Aramasa you added, then overlay the two Level 4s (Saji and Aramasa) into any Rank 4 Xyz of your choice, or use them for a Link 2.

**6.5. Set the Trap**
Set Mitsurugi Great Purification to finish, alongside any other cards that need to be set.

---

### Aramasa Normal Summon line
- **id:** `main-2`
- **tag:** Aramasa opener
- **START:** An opener that starts with an Aramasa Normal Summon.
- **END:** Habakiri, Murakumo, and Futsu no Mitama on board, plus a Rank 4 Xyz or Link 2 of your choice and a set Mitsurugi Great Purification

**0. Start on Aramasa**
Normal Summon Aramasa. Its effect adds Habakiri to hand.
- WHY: Aramasa's Normal-Summon search is the entry point.

**1. Habakiri effect in hand**
Reveal Habakiri, Special Summon Saji from the Deck, then tribute Aramasa (keep Saji on the field).
- WATCH OUT: Ash Blossom hits this trigger and stops the whole search. Bait it out first if you can. Though, most people would probably wait and hit Saji effect.

**1.5. Saji triggers**
Add Mitsurugi Prayers to hand.
- WATCH OUT: Droll & Lock Bird shuts off every further add for the turn once you make this search.

**2. Prayers loop**
Activate Mitsurugi Prayers, tributing Habakiri to add Ame no Murakumo (pay 800 LP) and revive Aramasa from the GY.
- WHY: Prayers turns the tributed Habakiri into a search plus a body, and leaves Habakiri in the GY to trigger next.

**2.5. Habakiri triggers in GY**
As Prayers hits the GY, Habakiri's GY effect triggers. Add Mitsurugi Ritual to hand. Unfortunately, we cannot revive Habakiri here as it was not properly summoned first.

**3. Ritual summon from hand, tribute from Deck**
Activate Mitsurugi Ritual to Ritual Summon Ame no Murakumo, tributing Kusanagi and Aramasa from the Deck.
- INFO: Murakumo wipes the opponent's board on Special Summon.

**3.5. Kusanagi triggers**
Kusanagi returns Mitsurugi Ritual to hand.
- WHY: Taking the Ritual back sets up the second Ritual Summon in step 4. Unfortunately, we cannot chain block Kusanagi here, as Aramasa's effect was already activated this turn.

**4. Ritual summon from Deck, tribute from field**
Activate Mitsurugi Ritual again, tributing Murakumo to Special Summon Futsu no Mitama from the Deck in defense position.
- INFO: Futsu is a 3400 DEF wall, a very big defender.

**4.5. Murakumo on-Tribute**
Murakumo activates in the GY, adding Mitsurugi Mirror and reviving itself.

**5. Mirror activation**
Activate Mitsurugi Mirror, tributing Futsu no Mitama to Special Summon Habakiri from the GY.

**5.5. Futsu trigger in GY**
As Mirror resolves, Futsu no Mitama GY effect triggers. Add Mitsurugi Great Purification and revive Futsu no Mitama.
- WHY: You get the Futsu wall back and end on a live Trap.

**6. Flexible Extra Deck end**
Overlay only the two Level 4s (Saji and Aramasa) into any Rank 4 Xyz of your choice, or use them for a Link 2.

**6.5. Set the Trap**
Set Mitsurugi Great Purification to finish, alongside any other cards that need to be set.

---

### Prayers solo starter
- **id:** `main-3`
- **tag:** Prayers opener
- **START:** Mitsurugi Prayers
- **END:** Habakiri, Murakumo, and Futsu no Mitama on board (three Level 8 bodies), plus a set Mitsurugi Great Purification, with an optional Link 2

**0. Open on Prayers**
Activate Mitsurugi Prayers to add Habakiri to hand.
- INFO: Prayers can reach Habakiri all by itself. The trade-off: spending it up front means you do NOT have the end-of-combo Prayers loop that Line 1 uses, so this line ends with fewer bodies.

**1. Habakiri effect in hand**
Reveal Habakiri, Special Summon Saji from the Deck, then tribute Saji.
- WATCH OUT: Ash Blossom hits this trigger and stops the whole search. Bait it out first if you can. Though, most people would probably wait and hit Saji effect.

**1.5. Saji triggers in GY**
Add Mitsurugi Ritual to hand.
- WATCH OUT: Droll & Lock Bird shuts off every further add for the turn once you make this search.

**2. Ritual summon from hand, tribute from Deck**
Activate Mitsurugi Ritual to Ritual Summon Habakiri, tributing Aramasa and Kusanagi from the Deck.

**2.5. Tributed monsters trigger**
CL1 Kusanagi returns Mitsurugi Ritual to hand; CL2 Aramasa fetches Futsu no Mitama.
- WHY: Both on-Tribute effects resolve from the GY. Taking the Ritual back sets up the second Ritual Summon in step 3.

**3. Ritual summon from Deck, tribute from field**
Activate Mitsurugi Ritual again, tributing Habakiri to summon Ame no Murakumo from the Deck.
- INFO: Murakumo wipes the opponent's board on Special Summon.

**3.5. Habakiri on-Tribute**
Habakiri's on-Tribute effect adds Mitsurugi Mirror and revives itself.

**4. Mirror activation**
Activate Mitsurugi Mirror, tributing Murakumo to Special Summon Futsu no Mitama from the hand in defense position.
- INFO: Futsu is a 3400 DEF wall, a very big defender.

**4.5. Murakumo on-Tribute**
Murakumo activates in the GY, adding Mitsurugi Great Purification and reviving itself.

**5. Extra Deck end**
Do not overlay into a Rank 8. Keep the three Level 8 monsters; if you need something from the extra deck, make a Link 2 off two of them.
- WHY: This line has no leftover Level 4's, so a Rank 4 isn't available. Prayers as your only starter pays off in three big Level 8 bodies instead of an Extra Deck piece.

**5.5. Set the Trap**
Set Mitsurugi Great Purification to finish, alongside any other cards that need to be set.

---

### Pre-Preparation extended line
- **id:** `main-4`
- **tag:** Pre-Prep opener
- **START:** Pre-Preparation of Rites. Make sure there is no Mitsurugi Mirror in your hand!
- **END:** Habakiri, Murakumo, and Futsu no Mitama on board, plus a Rank 4 Xyz or Link 2 of your choice, a set Mitsurugi Great Purification and Mitsurugi Prayers.

**0. Open on Pre-Prep**
Activate Pre-Preparation of Rites, adding Habakiri and Mitsurugi Mirror to hand.
- WHY: One card pre-loads both your Habakiri starter and the Mirror you need mid-combo, so this line ends a card richer than the others.

**1. Habakiri effect in hand**
Reveal Habakiri, Special Summon Saji from the Deck, then tribute Saji.
- WATCH OUT: Ash Blossom hits this trigger and stops the whole search. Bait it out first if you can. Though, most people would probably wait and hit Saji effect.

**1.5. Saji triggers in GY**
Add Mitsurugi Ritual to hand.
- WATCH OUT: Droll & Lock Bird shuts off every further add for the turn once you make this search.

**2. Ritual summon from hand, tribute from Deck**
Activate Mitsurugi Ritual to Ritual Summon Habakiri, tributing Aramasa and Kusanagi from the Deck.

**2.5. Tributed monsters trigger**
CL1 Kusanagi returns Mitsurugi Ritual to hand; CL2 Aramasa fetches Futsu no Mitama.
- WHY: Both on-Tribute effects resolve from the GY. Taking the Ritual back sets up the second Ritual Summon in step 3.

**3. Ritual summon from Deck, tribute from field**
Activate Mitsurugi Ritual again, tributing Habakiri to summon Ame no Murakumo from the Deck.
- INFO: Murakumo wipes the opponent's board on Special Summon.

**3.5. Habakiri on-Tribute**
Habakiri's on-Tribute effect adds Mitsurugi Prayers and revives itself.

**4. Mirror activation**
Activate the Mitsurugi Mirror you pre-searched, tributing Murakumo to Special Summon Futsu no Mitama from the hand in defense position.
- INFO: Futsu is a 3400 DEF wall, a very big defender.

**4.5. Murakumo on-Tribute**
Murakumo activates in the GY, adding Mitsurugi Great Purification and reviving itself.

**5. Prayers loop**
Activate Mitsurugi Prayers, tributing Futsu no Mitama to add Aramasa (pay 800 LP) and revive Kusanagi from the GY.
- WHY: Prayers turns the spent Futsu into a fresh search plus a Level 4 body.

**5.5. Mirror + Futsu trigger in GY**
As Prayers resolves, Futsu no Mitama and Mirror's GY effect triggers. Shuffle Mirror back into the deck, add Mitsurugi Great Purification and revive Futsu no Mitama.
- WHY: You get the Futsu back and bank a spare Prayers to set as backup interaction.

**6. Flexible Extra Deck end**
Normal Summon the Aramasa you added, then overlay the two Level 4s (Kusanagi and Aramasa) into any Rank 4 Xyz of your choice, or use them for a Link 2.
- WHY: The Level 8 bodies (Habakiri, Murakumo, the 3400 Futsu wall) are already your board, so spend just the disposable Level 4s on the Extra Deck play.

**6.5. Set the Traps**
Set Mitsurugi Great Purification, and set the spare Prayers as extra interaction.

---

## Mitsurugi — key interactions mid-combo

- **Ash Blossom on the Mitsurugi Ritual Monsters** — Negating a Mitsurugi Ritual Monster's on-Tribute search also cancels its self-revive: both resolve as one effect. Bait or play around Ash before committing.
- **Mitsurugi Prayers, surprise wipe** — Set Prayers and activate on the opponent's turn tributing Murakumo from field. This will trigger Murakumo's revive effect, which counts as a Special Summon, meaning it will Raigeki the opponents board.
- **The negate is conditional** — Murakumo's discard-or-negate helps decks that WANT to discard. Respect the matchup instead of leaning on it.

## Mitsurugi — pending

- Follow the usual Fiendsmith combo, until you reach the possibility to fusion summon with Fiendsmith Sequence. Using the Fiendsmith Sequence effect, Fusion summon Aerial Eater from your extra deck, using the fiend monsters in your GY. Aerial Eater triggers, sending Skull Archfiend of Chaos to the GY. Archfiend triggers in the grave, dumping Mitsurugi Mirror, and adding Habakiri to your hand.

---

# FIENDSMITH

**kicker:** `// COMBO LINES · FIENDSMITH`
**h1:** One LIGHT Fiend and the GY does the rest
**intro:** Fiendsmith is an engine, so these are the engine's own starters: what it does before whatever deck hosts it takes over. Two things drive every line. Fiendsmith's Requiem is a Link 1 off any single LIGHT Fiend and can tribute itself to Special Summon any Fiendsmith monster from hand or Deck, which is why this package gets splashed everywhere. And Fiendsmith Engraver discard as a cost is not really a cost. In the GY it revives itself by shuffling one other LIGHT Fiend away, and every spent Link monster is one.

## Section: 1 Card Combos

### Starting with Engraver
As engraver can be considered a main monster of the deck, most of the combos will start with him in hand for demonstration purposes. Once you get the jist of it down, you should be able to weave in starting with something else.

### The common start
- Engraver in hand
- Activate Engraver to discard, fetch Fiendsmith Tract
- Activate Tract, get Lurrie, discard Lurrie
- Lurrie triggers because of discard, special summon itself
- Fiendsmith Requiem summon using Lurrie as material
- Use Requiem effect to special summon Lacrima
- Lacrima effect on special summon to dump another Engraver

### Engraver into D/D/D Wave High King Caesar + Followup on opponents turn
- {the common start}
- Use Requiem effect in GY to equip it to Lacrima
- Contact fusion Necroquip Princess using Lacrima equipped with Requiem as material
- Use effect of Engraver in GY to shuffle back Lurrie, to special summon itself
- Use 2 level 6 Fiend monsters to summon D/D/D Caesar
- Followup on the opponents turn
- Effect of Lacrima in GY, targeting Fiendsmith Requiem to shuffle Lacrima back into the deck, special summoning Requiem
- Use effect of Requiem, to special summon Lacrima
- Use effect of Lacrima to send Fiendsmith in Paradise to GY
- After oponent special summons a monster, use effect of Fiendsmith in Paradise, to banish it and dump Fiendsmith Desirae to GY.
- Effect of Desirae to return Requem back to extra deck, for next turn, and send 1 oponent card to GY
- On your turn, use effect of Engraver in GY, to shuffle back Desirae to Extra deck.
- Again, you have Requem and Desirae in Extra deck to do more things.

### Engraver into Desirae (Equipped with Sequence) + Followup on opponents turn
- {the common start}
- Use effect of Engraver in GY to shuffle back Lurrie, to special summon itself
- Use 2 Fiend bodies to make Fiendsmith Sequence
- Use effect of Sequence, shuffling Requiem and Engraver to summon Fiendsmith Lacrima
- Use effect of Fiendsmith Lacrima, to special summon Engraver from GY
- Banish Tract from Graveyard, summoning Fiendsmith Desirae using Engraver and 2 light fiends
- Equip Sequence to Desirae
- There is Engraver, Fiendsmith Lacrima, and Lacrima in GY for followup

### Engraver start on opponents turn
- {the common start}
- Use effect of Engraver in GY to shuffle back Lurrie, to special summon itself
- Use 2 Fiend bodies to make Fiendsmith Sequence
- Use effect of Fiendsmith Sequence to shuffle back Requiem, Lacrima and Engraver to summon Fiendsmith Desirae
- Climb into Link-3, Fiendsmith Agnumday
Based on the game state, we have few options:
Option A:
- Use effect of Agnumday, to summon Desirae, and equip Agnumday to it.
- Use effect of Sequence to attach it to Desirae. Desirae now has 5 Link ratings attached to it, and is not targetable.
Option B:
- Effect of Desirae being sent to GY, shuffle back Engraver or Sequence, send opponents card to GY.
- Use effect of Agnumday, to summon Desirae, and equip Agnumday to it.
- Based on what was sent to GY earlier, either attach Sequence to Desirae, or have Engraver as followup. You cannot have both if you send an opponents card to GY.

### Engraver + another summon into D/D/D Wave High King Caesar + Desirae with Agnumday
- {the common start}
- Normal summon a monster, or monster on field
- Summon Sequence
- Fusion summon using Sequence by using Engraver, Lurrie and Requiem to summon Desirae
- Climb into Agnumday
- Use effect of Agnumday to summon Desirae, and equip it to it
- Use the Desirae to contact fusion into Necroquip
- Activate engraver in GY to shuffle back sequence, summon engraver
- Make D/D/D
- Pass turn to opponent
- On opponent's draw phase, use effect of Lacrima, targetting Agnumday.
- Use effect of Agnumday during draw phase, Targetting Desirae to summon it, and equip Agnumday to it

### Engraver into FTK
- {the common start}
- Use effect of Engraver in GY to shuffle back Lurrie, to special summon itself
- Use tract effect in GY to fusion summon Fiendsmith Lacrima
- Use effect of Lacrima to special summon Engraver
- Use 2 bodies to summon Sequence
- Use effect of Fiendsmith Lacrima to shuffle back 1 engraver, to burn the enemy
- Effect of sequence, to shuffle back Lacrima, Fiendsmith Lacrima and Engraver, to fusion summon Desirae
- Climb into Agnumday
- Use effect of Agnumday on Desirae, to summon it back and equip Agnumday to it
- Use effect of Sequence to attach it to Desirae
- Use effect of Requiem to attach it to Desirae
- You already burned the opponent for 1200, Desirae now has 7000 ATK and piercing damage

### Engraver into FTK (Running Fiendsmith Kyrie)
- {the common start} -> Dump Fiendsmith Kyrie here instead of Engraver with Lacrima
- Use effect of Engraver in GY to shuffle back Lurrie, to special summon itself
- Effect of Tract to fusion summon Fiendsmith Lacrima
- Effect of Fiendsmith Lacrima to special summon engraver
- Summon Fiendsmith sequence
- Use effect of Fiendsmith Lacrima to shuffle back Lacrima to burn for 1200
- Use effect of sequence to shuffle back Engraver, Fiendsmith Lacrima and requiem for Fiendsmith Desirae
- Use Desirae and Sequence to climb into Agnumday
- Go to BP without using Agnumday effect
- Attack with Agnumday for 1800 (3000 total with previous burn)
- Use effect of Agnumday to summon Desirae and equip it to it
- Attack for 4600 (7600 in total)
- Use effect of Kyrie in GY to fusion summon Fiendsmith Lacrima
- Attack for 2400 (10 000 in total)

### Engraver + another summon into Saryuja Skull Dread [missing card] for draws
- {the common start}
- use the normal summon
- Summon fiendsmith sequence
- Using Sequence effect fusion summon Fiendsmith Lacrima with Lurrie and Requiem as material
- Use effect of Fiendsmith Lacrima to summon Lacrima
- Use effect of engraver, shufflign other engraver to summon itself
- There are 4 monsters with different names on field, summon Saryuja Skull Dread for the effect "●4: When this card is Link Summoned: You can draw 4 cards, then place 3 cards from your hand on the bottom of the Deck in any order."
- Go on with your day



### Tract into Desirae
- **id:** `fs-tract`
- **tag:** The standard opener
- **START:** Fiendsmith's Tract plus 1 other card in hand
- **END:** Fiendsmith's Desirae equipped with Fiendsmith's Sequence (2 negates, and untargetable), plus Fiendsmith's Sanct in the GY as next-turn insurance
- **note:** This line needs 2 copies of Fiendsmith Engraver. That is legal in the TCG, but **not in the OCG**, where Engraver is Limited to 1.

**1. Tract in hand**
Activate Fiendsmith's Tract. Search Fiendsmith Engraver, then discard whatever your spare card is.
- WATCH OUT: Ash Blossom on Tract is the cleanest way to end this line. If you have a bait, use it first.

**2. Engraver from hand**
Discard Engraver to search Fiendsmith's Sanct.
- WHY: Engraver in the GY is not a cost you are paying, it is where you want it. It comes back in step 6.
- WATCH OUT: Droll & Lock Bird after step 1 stops this second search cold.

**3. Sanct**
Activate Fiendsmith's Sanct and make a Fiendsmith Token.
- WHY: The Token is a LIGHT Fiend, which is all Requiem asks for.
- INFO: Sanct needs you to control no face-up monsters, or only LIGHT Fiends. It also locks your attacks to Fiends for the turn, which never matters here.

**4. Token**
Link Summon Fiendsmith's Requiem using the Token.

**5. Requiem**
Tribute Requiem to Special Summon a second Fiendsmith Engraver from the Deck.
- WATCH OUT: This is the Ash target if they let Tract resolve. It is a Special Summon from the Deck.

**6. Engraver in GY**
Revive the first Engraver from the GY by shuffling Requiem into the Extra Deck.
- WHY: Requiem already did its job. Feeding it to Engraver turns a spent Link into a second body for free.

**7. Tract in GY**
Banish Tract from the GY to Fusion Summon Fiendsmith's Lacrima using the two Engravers on the field.
- INFO: This is Tract's second half. One card, two effects.

**8. Lacrima**
Lacrima's Fusion-Summon trigger revives one Engraver from the GY.
- WHY: You are back to two bodies immediately after fusing away two.

**9. Lacrima + Engraver**
Link Summon Fiendsmith's Sequence using Lacrima and Engraver.

**10. Sequence**
Fuse Fiendsmith's Desirae by shuffling Lacrima and both Engravers from the GY into the Deck.
- WHY: Desirae wants Engraver plus 2 LIGHT Fiends, and every one of those is sitting in your GY. Nothing on the field is spent.

**11. Sequence again**
Equip Sequence to Desirae.
- WHY: Desirae negates up to the total Link Rating equipped to it, so Sequence being a Link 2 means two negates. It also makes Desirae untargetable.

---

### Engraver into Rank 6
- **id:** `fs-engraver-r6`
- **tag:** Cheapest entry
- **START:** Fiendsmith Engraver in hand, nothing else required
- **END:** One Rank 6 Xyz, most often D/D/D Wave High King Caesar
- **note:** Also needs 2 copies of Fiendsmith Engraver, so TCG-only in the same way the Tract line is. Four summons total, which keeps it under Nibiru range.

**1. Engraver**
Discard Engraver to search Fiendsmith's Tract.
- WATCH OUT: Ash Blossom. This is a one-card combo, so an Ash here is the whole turn.

**2. Tract**
Activate Tract, add Fabled Lurrie, then discard Lurrie as the cost.
- WHY: Tract makes you discard anyway, so you search the one card that wants to be discarded.

**3. Lurrie**
Lurrie Special Summons itself out of the GY.
- INFO: Lurrie is a LIGHT Fiend, which is the only reason this works.

**4. Lurrie**
Link Summon Fiendsmith's Requiem using Lurrie.

**5. Requiem**
Tribute Requiem to Special Summon a second Engraver from the Deck.
- WATCH OUT: Second Ash window, and it is a Special Summon from the Deck.

**6. Engraver in GY**
Revive the first Engraver by shuffling Lurrie from the GY into the Deck.
- WHY: Two Level 6 LIGHT Fiends on board off one card.

**7. Both Engravers**
Xyz Summon any Rank 6. D/D/D Wave High King Caesar is the standard pick.
- WHY: Caesar negates and destroys the first Spell, Trap, or monster effect that tries to Special Summon, which is exactly what a combo opponent is doing.

---

## Section: Mitsurugi bridge [maybe add it to mitsurugi combos too?]
### Two lvl4 into Fiendsmith combo
- Use Two lvl4 to summon Evilswarm Knight
- Evilswarm knight is Light Fiend, which we can use for Requiem
- Ta daaaa

## Section: Extensions

### Kyrie into Rextremende
- **id:** `fs-rextremende`
- **tag:** The unaffected body
- **START:** Any line that already made a Fiendsmith Fusion plus a Link, with Fiendsmith Kyrie or Fiendsmith's Tract in the GY
- **END:** Fiendsmith's Rextremende, unaffected by non-Fiendsmith effects while an equip is on it
- **note:** Unlike the two lines above, this sequence is not taken from a published write-up. Every card effect is verified, but the step order was assembled from card text, so treat it as a route that works rather than the route pilots run.

**1. Get Kyrie into the GY**
Lacrima the Crimson Tears' summon trigger sends any Fiendsmith card from the Deck to the GY. Send Fiendsmith Kyrie.
- WHY: Kyrie is a Trap you never want to draw or set. Its only real job is being in the GY.

**2. Kyrie in GY**
Banish Kyrie to Fusion Summon Rextremende.
- INFO: Kyrie can use monsters you control and monsters sitting in your Spell & Trap Zones as equips on a Fiendsmith monster. A Requiem or Sequence that is currently an Equip Spell is still valid material.

**3. Materials**
Rextremende needs one Fiendsmith Fusion plus one Fusion or Link. Fiendsmith's Lacrima plus Sequence is the usual pairing.

**4. Rextremende**
Its Fusion-Summon trigger: discard 1, then send a LIGHT Fiend from the Deck or Extra Deck to the GY.
- WHY: This is how you set up a GY Desirae or bank another Engraver.
- WATCH OUT: Ash Blossom, it sends from the Deck.

**5. Equip**
Equip Sequence (or Requiem) to Rextremende.
- WHY: Rextremende is only unaffected by non-Fiendsmith card effects while a Fiendsmith Equip Spell is on it. Naked Rextremende is just a 3000 body.

## Fiendsmith — what to know before you pilot it

(`interactionsTitle: "What to know before you pilot it"`)

- **The Moon of the Closed Heaven bridge is dead** — Guides from 2024 open this engine with "just make Moon of the Closed Heaven". That card is Forbidden in both the TCG and the OCG, and so is Beatrice, Lady of the Eternal. The line does not work. The repair: Requiem only wants one LIGHT Fiend, so Evilswarm Exciton Knight (Rank 4) and Melomelody the Brass Djinn (Rank 3) still bridge in. It costs an Xyz instead of a Link 2.
- **Engraver is a battery, not a cost** — Every spent Link monster in the GY is a LIGHT Fiend, so Requiem and Sequence are both Engraver fuel once they have done their job. One Engraver revive per turn.
- **Sanct in the GY is your rebuild** — If a Fiendsmith monster you control is destroyed by an opponent's card effect, Fiendsmith's Sanct Sets itself from the GY. Next turn it makes another Token and the line runs again.
- **Dimension Shifter is the one that kills it** — Nearly every step above routes through the GY, including Fabled Lurrie, which only Special Summons itself if it actually reaches the GY. There is no play-around worth the name, the answer is deckbuilding. If you expect it, note that Sanct is the one opener Ash Blossom cannot touch: it makes a Token, so it neither adds, summons, nor sends from the Deck.

## Fiendsmith — pending

- Sacred Beasts hybrid bridge

Deliberately NOT published (from the data file's own comments):

- `fs-engraver-desirae` — single-sourced to an undated article, and it reaches the same board as the verified `fs-tract` line.
- `sb-fiendsmith` (Sacred Beasts bridge) — the pairing is evidenced by two real decklists, but no published line exists.

---

# SACRED BEASTS

No combo data file exists. `src/sacred-beasts/combos.njk` is a hand-written
"coming soon" page: WIP badge, a pointer to the Sacred Beasts card compendium,
and a pointer to the Mitsurugi lines as the format this page will follow. Its
copy also promises the eventual page will cover Fiendsmith-splash variants.

To publish lines here: add `src/_data/sacredBeastsCombos.js` in the same shape as
the two above, then replace the hand-written page body with the two lines every
other deck uses:

```njk
{% set c = sacredBeastsCombos %}
{% include "combos-page.njk" %}
```

# One card combo

## Raviel in hand
- If started with Raviel, use it to search Hamon. Discard 1.
- Use effect of Hamon, search Sacred Beast Released. Discard 1.
- Activate Sacred Beast Released, searching Uria, Martyr and Summoner. Discard Raviel and Summoner.
- Activate effect of Uria, to reveal itself and add Sacred Beasts Combined Assault
- Normal summon Martyr
- Activate effect of Martyr to place Thunderclap
- Activate effect of Thunderclap to place 2 more Thunderclaps, Reveal a lvl 10 Sacred Beast from hand and place Fallen Paradise to the field zone
- use effect of summoner, to banish itself to summon Raviel from GY
- Use effect of Martyr, to summon 2 more copies of itself
- Use effect of Fallen Paradise to draw 2 cards
- Use effect of Fallen Paradise to send 3 Thunderclaps to GY, then special summon back the Summoner
- Use Martyrs to Link summon whatever you might need
- 

## Hamon in hand ( Link spam )
- Search Sacred Beast Released
- Activate Release to get Martry, Raviel and Summoner, discard 2
- Summon Martyr to put Thunderclap
- Activate Thunderclap to put 2 more Thunderclaps on field, and place Fallen Paradise to field zone
- Use effect of Raviel to get Uria, discard Raviel
- Use effect of Uria, to get Sacred Beast Combined Assault, then discard it.
- Activate Summoner, to discard itself and summon Uria in defense position
- Activate Martyr, to summon 2 additional copies of itself
- Use effect of Fallen Paradise to draw 2 cards
- Use 1 martyt for Linkuriboh
- Use Uria and Linkuriboh to link into Cross-Sheep
- use effect of Summoner to banish itself, and summon Hamon from hand
- Use Hamon to summon Thunder Dragon Collosus to an arrow where cross sheep points
- Effect of Cross-Sheep activates, reviving Martyr
- Link 1 Martyr and Cross-sheep for Protectcode Talker
- Link 1 Martyt and Protectcode Talker into Firewall Dragon
- Activate Protectcode Talker to banish linkuriboh and Cross-sheep to summon itself
- Use effect of Firewall to grab back Uria from GY to hand ( or bounce opponents monster )
- Link last martyr and firewall dragon into Zenna's Decieving Doll Maidens
- Use effect of zenna to dump Albion the Branded Dragon
- Use Paradise to send 3 Thunderclaps to grave, to summon Summoner from grave
- Use effect of summoner (this is incorrectly marked as HAND / GY in compendium, it is from field), to dump Uria and summon back Raviel from GY
- Link protectcode talker and Raviel for Charmer Quartet
- Activate Quartet to bring back Firewall and Hamon
- Link Zenna and Summoner to summon S:P Knight
- Use Hamon to summon 2nd Thunder Collosus
- Use effect of Albion in end phase to set Fallen & the Virtuous
- if 3 lvl 10's in hand/field, use effect of trap to summon the Chaotic Sacred Beast Fusion