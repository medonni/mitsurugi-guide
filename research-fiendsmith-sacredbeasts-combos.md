# Research: Fiendsmith and Sacred Beasts combo lines, handtrap map

- **Date researched:** 2026-08-05
- **Covers:** Fiendsmith combo lines, Sacred Beasts post-CORI combo lines, the Sacred Beasts/Fiendsmith bridge, and a handtrap interaction map for both directions.
- **Format assumed:** TCG, May 18th 2026 Forbidden & Limited List (the list in force as of this writing). OCG differences noted per line.
- **This file is research notes, not site content.** Nothing here has been written into `src/_data/`.

## Overall confidence summary

| Area | Lines found | Verified | Probable | Unverified |
|---|---|---|---|---|
| Fiendsmith | 5 (+1 dead line documented) | 3 | 2 | 0 |
| Sacred Beasts | 3 | 0 | 3 | 0 |
| Handtrap map (Fiendsmith) | 7 entries | 7 | 0 | 0 |
| Handtrap map (Sacred Beasts) | 7 entries | 6 | 1 | 0 |

**What "Verified" means here:** the card text came from a card-text source I read (YGOPRODeck's API, Yugipedia's card pages), *and* the step order came from a published written line I read. **"Probable"** means every card effect is verified but I assembled the sequence myself from that text, with at most a loose corroborating summary. **Nothing in the Sacred Beasts section reached Verified**, because I could not find a single published step-by-step Sacred Beasts combo write-up. That is the biggest gap in this document, see "Open questions" at the bottom.

---

## READ THIS FIRST: the site's Sacred Beast card names look wrong

`src/_data/sacredBeasts.js` (per the brief) uses these names for the three Level 10s:

- Uria, Lord of Searing Flames - Sacred Beast of Cataclysmic Fire
- Hamon, Lord of Striking Thunder - Sacred Beast of Sinful Catastrophe
- Raviel, Lord of Phantasms - Sacred Beast of Endless Eternity

Those are **pre-release translations**. On Yugipedia every one of them is a redirect to a different page, and the printed CORI-EN cards use:

- **Inferno of the Sacred Beasts - Uria, Lord of Searing Flames** (CORI-EN005)
- **Calamity of the Sacred Beasts - Hamon, Lord of Striking Thunder** (CORI-EN006)
- **Infinity of the Sacred Beasts - Raviel, Lord of Phantasms** (CORI-EN007)

Evidence: `https://yugipedia.com/wiki/Uria,_Lord_of_Searing_Flames_-_Sacred_Beast_of_Cataclysmic_Fire` returns `#REDIRECT [[Inferno of the Sacred Beasts - Uria, Lord of Searing Flames]]`, and the CORI-EN005 page carries the full six-language printed text plus a card scan filename of `InfernooftheSacredBeastsUriaLordofSearingFlames-CORI-EN-SR-1E.png`. YGOPRODeck's database still serves the old names, which is almost certainly where the site's data came from.

Same issue in the other direction: **"The Orchestrator of the Sacred Beasts"** (used by some deck lists and by YGOrganization) redirects to **Summoner of the Sacred Beasts**, so the site's name for that one is correct.

The rest of the site's Sacred Beast names check out against Yugipedia and printed CORI-EN codes: Summoner of the Sacred Beasts (EN008), Martyr of the Sacred Beasts (EN009), The Chaotic Phantasmal Sacred Beasts (EN029), Sacred Beasts Released (EN047), Fallen Paradise of the Sacred Beasts (EN048), Sacred Beasts Thunderclap (EN049), Sacred Beasts Combined Assault (EN066).

**I have used the site's existing names throughout the combo lines below** so they transcribe cleanly, but the names should be fixed before publish.

---

## Sources

| URL | What it gave me | Source date | Trust |
|---|---|---|---|
| `https://db.ygoprodeck.com/api/v7/cardinfo.php` (queries for `Fiendsmith`, `Sacred Beast`, individual card names) | Official English card text, types, levels, attributes, set codes, and current TCG/OCG banlist status for every card in both pools. Database version 146.36, `last_update` 2026-07-26. | 2026-07-26 | **High.** This is the card-text backbone of the whole document. Every effect I assert traces here or to Yugipedia. Caveat: it still serves the pre-release English names for the three Level 10 Sacred Beasts. |
| `https://yugipedia.com/wiki/Fiendsmith` (wikitext via `?action=raw`) | The Playing Style section, a per-card capability table, and **three fully specified sample combos** with opening card, end board, and numbered steps. Also the non-archetypal synergy list (Lurrie, Aerial Eater, Necroquip Princess, Chaos Angel, D/D/D Wave High King Caesar). | Live wiki, read 2026-08-05 | **High.** This is the single best source in the file. The sample combos are the basis for the three Verified Fiendsmith lines. |
| `https://yugipedia.com/wiki/Sacred_Beast_(archetype)` (wikitext) | Archetype Playing Style: confirms the Thunderclap self-place into Fallen Paradise search, the Martyr place-then-triple, the Abyss self-place, and the native Thunder Dragon Colossus access. Confirms the archetype is a "Phantasm" sub-archetype. **No sample combo section exists.** | Live wiki, read 2026-08-05 | **High for mechanics, useless for sequencing.** It describes what each piece does but never writes out a turn. |
| `https://yugipedia.com/wiki/Inferno_of_the_Sacred_Beasts_-_Uria,_Lord_of_Searing_Flames` (wikitext) | Printed CORI-EN005 text, set codes in six languages, card scan filename. Established the naming problem above. | Live wiki, read 2026-08-05 | **High.** |
| `https://ygoprodeck.com/article/11-new-sacred-beast-cards-302821` | The full 11-card CORI Sacred Beast reveal, including **Abyss of the Sacred Beasts**, the Continuous Trap the site's card pool is currently missing. | 2026 (CORI reveal window) | **Medium-high.** Uses unofficial translations throughout, so I re-pulled every effect from the API before using it. Good for "what exists", not for exact wording. |
| `https://ygorganization.com/kagemarusrevenge/` | CORI Sacred Beast reveal article, corroborates the effects above. | 2026-03-10 | **Medium.** Reveal-era translations, no combo content. |
| `https://ygorganization.com/cdp_sacredbeastsrevamp/` | A post-CORI Sacred Beasts deck profile (Dark World / Yubel hybrid). Confirms Fallen Paradise is treated as the centrepiece and that the deck wants Fiend-type enablers. | 2026 | **Low-medium.** It is a deck profile of a specific hybrid, not a combo guide, and I could not read its actual decklist reliably. Used only as directional corroboration. |
| `https://duelingnexus.com/blog/sacred-beasts-deck-february-2026-tcg-format/` | A real post-CORI Sacred Beasts decklist that **also runs the Fiendsmith engine**: 1 Fiendsmith Engraver, 1 Lacrima the Crimson Tears, 1 Fabled Lurrie, 1 Fiendsmith's Tract, alongside 3 Martyr, 3 Thunderclap, 2 Fallen Paradise, 3 Sacred Beasts Released, 3 Abyss. Also 3 Mulcharmy Fuwalos and 3 Infinite Impermanence. | Shared 2026-05-09, updated 2026-07-27 | **Medium.** This is the strongest evidence I found that the Sacred Beasts/Fiendsmith bridge is a real thing people build, not a theory. It has no written combo, only a "control deck, prefers going first" blurb. It is a simulator list, so see the Shimmering Shatterer caveat below. |
| `https://ygoprodeck.com/deck/sacred-beast-fiendsmith-mar-2026-700213` | A second Sacred Beast + Fiendsmith list: 3 Engraver, 1 Requiem, 1 Fiendsmith's Lacrima, 1 Sequence, 1 Tract next to 3 Hamon, 3 Raviel, 3 Martyr, 3 Sacred Beasts Released. | 2026-03 | **Medium.** Decklist only, no strategy text. Confirms the pairing independently of the Dueling Nexus list. |
| `https://archetypesnexus.com/pages/fiendsmith%20deck%20analysis` | A written Fiendsmith deck analysis: the Engraver one-card opener, the two end-board choices (D/D/D Wave High King Caesar vs Desirae), and a named chokepoint list (Ash on Tract, Droll after the first search, Bystial/D.D. Crow on the GY loop). | Undated | **Low-medium.** No visible publication date, and one search-engine summary of a nearby page got Fabled Lurrie's attribute wrong (it is LIGHT, not DARK, which I re-checked against the API). Used only where Yugipedia agrees. |
| `https://roadoftheking.com/ocg-2026-04-metagame/` | OCG 2026.04 metagame: Kewl Tune 254 tops, Elfnote 106, Light and Darkness Ritual 96, Toon 58. Sacred Beast has 13 tops (11 pure, 2 with Light and Darkness Ritual). Fiendsmith appears only as a hybrid engine: Fiendsmith Elfnote 6, Fiendsmith Unchained 3, **Fiendsmith Mitsurugi 1**, Evil Twin 1, Magical Musket 1, White Forest 1. | 2026 (Apr 1 to Jun 30 format) | **High.** Road of the King is the standard OCG metagame source. Best evidence for "is any of this actually relevant in 2026". |
| `https://www.yugiohmeta.com/forbidden-limited-list` | Confirmed the current TCG list's effective date: **May 18th, 2026**. The card table itself would not render for me, so the per-card statuses below all come from the YGOPRODeck API instead. | 2026-05-18 list | **Medium.** Date only. |
| `https://www.tcgplayer.com/content/article/3-New-Decks-To-Try-With-Yu-Gi-Oh-s-Latest-Banlist/...` | Context that Moon of the Closed Heaven's ban is what reshaped Fiendsmith access, and that Evilswarm Exciton Knight and Melomelody the Brass Djinn are the replacement bridges into Requiem. | 2026 | **Low-medium.** Reached via search summary; I verified both replacement cards are LIGHT Fiend Xyz via the API, which is the load-bearing claim. |

### Banlist status established (TCG list of 2026-05-18, via YGOPRODeck API)

| Card | TCG | OCG |
|---|---|---|
| Fiendsmith Engraver | Unlimited | **Limited** |
| Fiendsmith's Tract | Unlimited | **Limited** |
| Fiendsmith's Lacrima (the Fusion) | **Limited** | Unlimited |
| Fiendsmith's Requiem, Sequence, Desirae, Rextremende, Agnumday, Sanct, Kyrie, in Paradise, Lacrima the Crimson Tears, Fabled Lurrie | Unlimited | Unlimited |
| **Moon of the Closed Heaven** | **FORBIDDEN** | **FORBIDDEN** |
| **Beatrice, Lady of the Eternal** | **FORBIDDEN** | **FORBIDDEN** |
| Every Sacred Beast card, including all CORI cards | Unlimited | Unlimited |
| Dimension Shifter | **Limited** | **Limited** |
| Droll & Lock Bird | **Semi-Limited** | **Limited** |
| Ash Blossom & Joyous Spring | Unlimited | **Semi-Limited** |
| Nibiru, Infinite Impermanence, Mulcharmy Fuwalos, Mulcharmy Purulia | Unlimited | Unlimited |

---

# 1. Fiendsmith combo lines

## Engine note before the lines

Two things drive every Fiendsmith line and are worth stating once rather than repeating in each step:

1. **Requiem is the on-ramp and it only needs one LIGHT Fiend.** Fiendsmith's Requiem is Link 1 off any LIGHT Fiend, and it can Tribute itself at Quick Effect speed to Special Summon any "Fiendsmith" monster from hand *or Deck*. That is the whole reason this engine gets splashed everywhere.
2. **Engraver is the battery.** In the GY it revives itself by shuffling one *other* LIGHT Fiend from the GY into the Deck or Extra Deck. Requiem, Sequence and Lurrie are all LIGHT Fiends, so a spent Link monster is Engraver fuel. This is also why the engine is so allergic to Dimension Shifter.

**Fabled Lurrie is LIGHT Fiend, not DARK.** I flag this because one search summary I hit asserted the opposite, and if it were DARK, half the lines below would not work. Verified against the API: LIGHT / Fiend / Level 1 / 200 ATK.

---

## Line: `fs-tract`

```
id:      "fs-tract"
name:    "Tract into Desirae"
section: "1 Card Combos"
tag:     "The standard opener"
starter: "Fiendsmith's Tract plus 1 other card in hand"
result:  "Fiendsmith's Desirae equipped with Fiendsmith's Sequence (2 negates, untargetable), plus Fiendsmith's Sanct in the GY as next-turn insurance"
```

**steps:**

| n | card | do | why / info / warn |
|---|---|---|---|
| 1 | Tract in hand | Activate Fiendsmith's Tract. Search Fiendsmith Engraver, then discard whatever your spare card is. | `warn`: Ash Blossom on Tract is the cleanest way to end this line. If you have a bait, use it first. |
| 2 | Engraver from hand | Discard Engraver to search Fiendsmith's Sanct. | `why`: Engraver in the GY is not a cost you are paying, it is where you want it. It comes back in step 6. `warn`: Droll & Lock Bird after step 1 stops this second search cold. |
| 3 | Sanct | Activate Fiendsmith's Sanct and make a Fiendsmith Token. | `info`: Sanct needs you to control no face-up monsters, or only LIGHT Fiends. It also locks your attacks to Fiends for the turn, which never matters here. `why`: the Token is a LIGHT Fiend, which is all Requiem asks for. |
| 4 | Token | Link Summon Fiendsmith's Requiem using the Token. | |
| 5 | Requiem | Tribute Requiem to Special Summon a second Fiendsmith Engraver from the Deck. | `warn`: this is the Ash target if they let Tract resolve. It is a Special Summon from the Deck. |
| 6 | Engraver in GY | Revive the first Engraver from the GY by shuffling Requiem into the Extra Deck. | `why`: Requiem already did its job. Feeding it to Engraver turns a spent Link into a second body for free. |
| 7 | Tract in GY | Banish Tract from the GY to Fusion Summon Fiendsmith's Lacrima using the two Engravers on the field. | `info`: this is Tract's second half. One card, two effects. |
| 8 | Lacrima | Lacrima's Fusion-Summon trigger: revive one Engraver from the GY. | `why`: you are back to two bodies immediately after fusing away two. |
| 9 | Lacrima + Engraver | Link Summon Fiendsmith's Sequence using Lacrima and Engraver. | |
| 10 | Sequence | Fuse Fiendsmith's Desirae by shuffling Lacrima and both Engravers from the GY into the Deck. | `why`: Desirae wants Engraver plus 2 LIGHT Fiends, and every one of those is sitting in your GY. Nothing on the field is spent. |
| 11 | Sequence again | Equip Sequence to Desirae. | `why`: Desirae negates up to the total Link Rating equipped to it, so Sequence being a Link 2 means two negates. It also makes Desirae untargetable. |

**Confidence: Verified.** Step order taken verbatim in structure from Yugipedia's Fiendsmith "Sample combos, As a Deck" block (`https://yugipedia.com/wiki/Fiendsmith`), every card effect re-checked against the YGOPRODeck API.

**Caveats worth putting on the page:**
- **This line needs 2 copies of Fiendsmith Engraver.** Legal in the TCG (Unlimited), **not legal in the OCG** where Engraver is Limited to 1. An OCG pilot has to substitute in one of the other lines.
- Fiendsmith's Lacrima being TCG-Limited does not hurt this line, it only uses one.
- Sanct ending up in the GY is the point of step 3 as much as the Token is: if Desirae eats a destruction effect, Sanct Sets itself back from the GY and you can run a similar line next turn.

---

## Line: `fs-engraver-r6`

```
id:      "fs-engraver-r6"
name:    "Engraver into Rank 6"
section: "1 Card Combos"
tag:     "Cheapest entry"
starter: "Fiendsmith Engraver in hand, nothing else required"
result:  "One Rank 6 Xyz, most often D/D/D Wave High King Caesar"
```

**steps:**

| n | card | do | why / info / warn |
|---|---|---|---|
| 1 | Engraver | Discard Engraver to search Fiendsmith's Tract. | `warn`: Ash Blossom. This is a one-card combo, so an Ash here is the whole turn. |
| 2 | Tract | Activate Tract, add Fabled Lurrie, discard Lurrie as the cost. | `why`: Tract makes you discard anyway, so you search the one card that *wants* to be discarded. |
| 3 | Lurrie | Lurrie Special Summons itself out of the GY. | `info`: Lurrie is a LIGHT Fiend, which is the only reason this works. |
| 4 | Lurrie | Link Summon Fiendsmith's Requiem using Lurrie. | |
| 5 | Requiem | Tribute Requiem to Special Summon a second Engraver from the Deck. | `warn`: second Ash window, Special Summon from Deck. |
| 6 | Engraver in GY | Revive the first Engraver by shuffling Lurrie from the GY into the Deck. | `why`: two Level 6 LIGHT Fiends on board off one card. |
| 7 | Both Engravers | Xyz Summon any Rank 6. D/D/D Wave High King Caesar is the standard pick. | `why`: Caesar negates and destroys the first Spell, Trap or monster effect that tries to Special Summon, which is exactly what a combo opponent is doing. |

**Confidence: Verified.** Step order from Yugipedia's Fiendsmith sample combos ("Another method requires the player to specifically have Fiendsmith Engraver in hand"). Caesar's text and its Unlimited status verified via API.

**Caveat: also needs 2 Engravers**, so TCG-only in the same way `fs-tract` is.

---

## Line: `fs-engraver-desirae`

```
id:      "fs-engraver-desirae"
name:    "Engraver into Desirae"
section: "1 Card Combos"
tag:     "Full board off one card"
starter: "Fiendsmith Engraver in hand"
result:  "Fiendsmith's Desirae equipped with Fiendsmith's Sequence"
```

Steps 1 to 6 are identical to `fs-engraver-r6`. Instead of the Xyz at step 7:

| n | card | do | why / info / warn |
|---|---|---|---|
| 7 | Lacrima the Crimson Tears | If your Requiem tribute fetched Lacrima the Crimson Tears from the Deck instead of a second Engraver, its summon trigger sends a Fiendsmith card from the Deck to the GY. Send Fiendsmith Kyrie or Fiendsmith's Sanct depending on what you want later. | `why`: this is the branch point. Engraver-from-Deck gives you a second Level 6 body for a Rank 6; Lacrima the Crimson Tears gives you a Deck-to-GY send instead. `warn`: Ash also hits Lacrima the Crimson Tears, it sends from the Deck. |
| 8 | Engraver in GY | Revive Engraver by shuffling Lurrie into the Deck. | |
| 9 | Lacrima + Engraver | Link Summon Fiendsmith's Sequence. | |
| 10 | Sequence | Fuse Fiendsmith's Desirae, shuffling Engraver plus two LIGHT Fiends out of the GY. | `warn`: you need three LIGHT Fiends in the GY including an Engraver. Count before you commit. If Requiem is still down there it counts. |
| 11 | Sequence | Equip Sequence to Desirae. | |

**Confidence: Probable.** The shape of this line (Engraver opener into Desirae rather than a Rank 6) comes from `archetypesnexus.com`'s Fiendsmith analysis, which describes exactly this branch: "Use Lacrima to send a second Engraver to GY. Revive the first Engraver by shuffling Requiem back, then Link climb into Fiendsmith's Sequence", with Desirae as the in-archetype end board. Every card effect is verified. **What is missing:** that source is undated, and I could not find a second written source that spells out this specific branch step by step. The Verified `fs-tract` line reaches the same board, so if you only want to publish one route to Desirae, publish that one.

---

## Line: `fs-rextremende`

```
id:      "fs-rextremende"
name:    "Kyrie into Rextremende"
section: "Extensions"
tag:     "The unaffected body"
starter: "Any line that already made a Fiendsmith Fusion plus a Link, with Fiendsmith Kyrie or Fiendsmith's Tract in the GY"
result:  "Fiendsmith's Rextremende, unaffected by non-Fiendsmith effects while an equip is on it"
```

**steps:**

| n | card | do | why / info / warn |
|---|---|---|---|
| 1 | Get Kyrie into the GY | Lacrima the Crimson Tears' summon trigger sends any Fiendsmith card from the Deck to the GY. Send Fiendsmith Kyrie. | `why`: Kyrie is a Trap you never want to draw or set. Its only real job is being in the GY. |
| 2 | Kyrie in GY | Banish Kyrie to Fusion Summon Rextremende. | `info`: Kyrie can use monsters you control **and** monsters sitting in your Spell & Trap Zones as equips on a Fiendsmith monster. That is unique: a Requiem or Sequence that is currently an Equip Spell is still valid Fusion material for Kyrie. |
| 3 | Materials | Rextremende needs one Fiendsmith Fusion plus one Fusion or Link. Fiendsmith's Lacrima plus Sequence is the usual pairing. | |
| 4 | Rextremende | Its Fusion-Summon trigger: discard 1, send a LIGHT Fiend from the Deck or Extra Deck to the GY. | `why`: this is how you set up a GY Desirae or bank another Engraver. `warn`: Ash, it sends from the Deck. |
| 5 | Equip | Equip Sequence (or Requiem) to Rextremende. | `why`: Rextremende is only unaffected by non-Fiendsmith card effects **while** a Fiendsmith Equip Spell is on it. Naked Rextremende is just a 3000 body. |

**Confidence: Probable.** Rextremende's and Kyrie's exact texts are Verified via API and Yugipedia. The sequence is assembled from Yugipedia's per-card capability table plus a Fandom "Card Tips:Fiendsmith's Rextremende" summary describing a Tract-banish route into Rextremende using Sequence and a Fusion-Summoned Lacrima, and noting that Lacrima the Crimson Tears can send Kyrie "in place of Fiendsmith's Sequence" for the fusion. **What is missing:** I could not read the Fandom tips page directly (Cloudflare challenge, and WebFetch returned HTTP 402), so I only have a search-engine rendering of it. Treat step order as mine, not theirs.

---

## Dead line: the Moon of the Closed Heaven bridge

**Do not publish this, publish the correction instead.** Yugipedia's Fiendsmith page still lists this as a sample combo, and it is quoted all over 2024-era Fiendsmith content:

> Any 2 Effect Monsters -> Link Summon Moon of the Closed Heaven -> Link Summon Fiendsmith's Requiem -> Tribute Requiem for Engraver -> equip Requiem to Engraver -> Contact Fuse Necroquip Princess -> revive Engraver -> Rank 6.

**Moon of the Closed Heaven is Forbidden in both the TCG and the OCG** as of the current list (verified via API). So is Beatrice, Lady of the Eternal, which Yugipedia's own text flags. **This line does not work.** Any 2024-era Fiendsmith guide that opens "just make Moon of the Closed Heaven" is obsolete.

**The repair, for the site's `info` note:** Requiem only wants one LIGHT Fiend, so anything that makes one still bridges in. The two standard replacements are **Evilswarm Exciton Knight** (Rank 4, LIGHT Fiend, Unlimited) and **Melomelody the Brass Djinn** (Rank 3, LIGHT Fiend, Unlimited). Any Rank 3 or Rank 4 deck can still reach Requiem, it just costs an Xyz instead of a Link 2.

**Confidence:** the ban status is **Verified** (API). The Exciton Knight / Melomelody replacement is **Probable**: both cards' attributes and types are Verified, but I got the suggestion from a search summary of a TCGplayer article rather than the article body.

**The rest of the Necroquip Princess line is still fine** once you get to Requiem, and Necroquip Princess is Unlimited. It just no longer starts off two generic Effect Monsters.

---

## Fiendsmith resource loop

Worth a short prose block on the page rather than a numbered line. All Verified from card text:

- **Engraver is a battery, not a cost.** Every spent Link monster in the GY (Requiem, Sequence, Agnumday) is a LIGHT Fiend that Engraver can shuffle away to revive itself. You get one Engraver revive per turn.
- **Sanct in the GY is your rebuild.** If a Fiendsmith monster you control gets destroyed by an opponent's card effect, Sanct Sets itself from the GY. Next turn it makes another Token and the whole line runs again.
- **Lacrima the Crimson Tears is interaction, not just a starter.** On the opponent's turn it shuffles itself from the GY back into the Deck to revive a Fiendsmith Link Monster. That is a free body during their turn.
- **Fiendsmith in Paradise is the reset button.** It targets a Level 7 or higher LIGHT Fiend you control and sends *everything else on the field* to the GY. In this pool only Desirae (Level 9) and Rextremende (Level 9) qualify as the target. Its GY half banishes itself when the opponent Special Summons, to send a Fiendsmith monster from the Deck or Extra Deck to the GY, which is a free Engraver drop on their turn.
- **Agnumday** is a Link 3 that revives a LIGHT non-Link Fiend from the GY at Quick Effect speed and equips itself to it, granting ATK equal to total equipped Link Rating x600 plus piercing. It is a damage and grind piece, not a combo piece.

---

# 2. Sacred Beasts combo lines (post-CORI)

## The mechanical shape of the deck, first

This is the part worth understanding before any line makes sense, and it is all Verified card text:

All three Level 10s **cannot be Normal Summoned and must be Special Summoned with a "Sacred Beast" card**. So the deck's entire job is generating Sacred Beast summon effects. There are three:

1. **Fallen Paradise of the Sacred Beasts** (Field Spell): **up to three times per turn**, send 3 *other* cards **of the same card type** (all monsters, or all Spells, or all Traps) from hand and/or face-up field to the GY, then Special Summon one Sacred Beast from hand, Deck, GY or banishment. The summoned monster is **unaffected by your opponent's activated Spell/Trap effects**. Separately, once per turn, if you control a Level 10 Sacred Beast, draw 2.
2. **Summoner of the Sacred Beasts**: three separate once-per-turn effects, reveal-from-hand + discard, discard from field, and banish-from-GY, each summoning a non-Level-8 Sacred Beast in Defense Position. Note it only summons **from hand or GY**, never from the Deck.
3. **Sacred Beasts Combined Assault** (Normal Trap): summon one from hand or GY, and if you then control 2+ Level 10 Sacred Beasts, negate and destroy a face-up opponent card. Its GY half banishes itself to Fusion Summon a "Phantasm" Fusion from hand or field material, which is the second route into The Chaotic Phantasmal Sacred Beasts.

The trick is feeding Fallen Paradise three same-type cards, three separate times. The deck solves that with three self-triplicating cards, one of each type:

- **Martyr of the Sacred Beasts** (Monster): on summon, place a Sacred Beast Field or Continuous Spell/Trap from the Deck face-up. Then, if you control *another* Sacred Beast monster, Special Summon 2 more Martyrs from hand, Deck and/or GY. That is **three Monsters**.
- **Sacred Beasts Thunderclap** (Continuous Spell): place 2 more copies of itself from hand, Deck and/or GY face-up, then reveal a Level 10 Sacred Beast in hand to place Fallen Paradise from the Deck into the Field Zone. That is **three Spells plus your Field Spell**.
- **Abyss of the Sacred Beasts** (Continuous Trap, CORI-EN067): place 2 more copies of itself face-up. That is **three Traps**.

**The site's card pool is missing Abyss of the Sacred Beasts.** It is the Trap leg of that tripod and Martyr can place it straight from the Deck. Without it, the third Fallen Paradise activation has no fuel. I would treat adding it as a prerequisite for documenting the full line.

---

## Line: `sb-thunderclap`

```
id:      "sb-thunderclap"
name:    "Thunderclap into the full field"
section: "1 Card Combos"
tag:     "The main line"
starter: "Sacred Beasts Thunderclap plus any Level 10 Sacred Beast in hand"
result:  "The Chaotic Phantasmal Sacred Beasts (5000 ATK, three negates per turn, survives two destruction effects), or the three Level 10s left standing instead"
```

**steps:**

| n | card | do | why / info / warn |
|---|---|---|---|
| 1 | Thunderclap | Activate Sacred Beasts Thunderclap and place 2 more copies from the Deck face-up. Then reveal a Level 10 Sacred Beast in hand to place Fallen Paradise of the Sacred Beasts from the Deck into your Field Zone. | `why`: one card becomes three Spells on board plus your Field Spell. `info`: Thunderclap **places**, it does not add to hand and does not Special Summon, so Ash Blossom and Droll & Lock Bird are both blank here. That matters a lot, see the handtrap section. |
| 2 | Fallen Paradise | First activation: send the three Thunderclaps to the GY, Special Summon a Level 10 Sacred Beast from the Deck. | `warn`: **this is the Ash Blossom window.** The effect includes "Special Summon from the Deck", so Ash negates it. `info`: the summoned beast is unaffected by your opponent's activated Spell/Trap effects, which turns off their Infinite Impermanence on it. |
| 3 | Fallen Paradise draw | You control a Level 10 Sacred Beast, so take the draw 2. | `why`: this is what pays for sending three cards. |
| 4 | Martyr | Normal Summon Martyr of the Sacred Beasts. Its summon trigger places Abyss of the Sacred Beasts from the Deck face-up. | `info`: Martyr can place the Field Spell instead if you have not got Fallen Paradise down yet. That is the alternate opener. |
| 5 | Martyr again | You control another Sacred Beast monster (the Level 10 from step 2), so Special Summon 2 more Martyrs from the Deck. | `warn`: Ash Blossom hits this too, it summons from the Deck. |
| 6 | Fallen Paradise | Second activation: send the three Martyrs (all Monsters) to the GY, Special Summon your second Level 10. | |
| 7 | Abyss | Activate Abyss of the Sacred Beasts to place 2 more copies of itself face-up. | `why`: three Traps on board, which is the last leg of the tripod. |
| 8 | Fallen Paradise | Third activation: send the three Abyss (all Traps) to the GY, Special Summon your third Level 10. | `info`: three Traps in the GY is also +3000 ATK on Uria, if Uria is one of your three. |
| 9 | The end | Send all three Level 10s you control to the GY to Special Summon The Chaotic Phantasmal Sacred Beasts from the Extra Deck. | `why`: 5000 ATK, negates up to three opponent monsters per turn at Quick Effect speed once per Chain, and it survives the first two destruction effects each turn. `warn`: Nibiru is live several summons before this. Read the room, see below. |

**Alternative end at step 9:** keep the three Level 10s instead. Raviel can Tribute two other Sacred Beasts as a Quick Effect to destroy every monster the opponent controls and gain 1000 ATK per kill, Uria pops a Spell/Trap with no response window allowed, and Hamon burns for 1000 whenever a monster hits the opponent's GY. Three 4000-ATK bodies with interaction is arguably better than one 5000 body, and it keeps Combined Assault's Fusion half live for later.

**Confidence: Probable.** Every card effect is Verified against the YGOPRODeck API and Yugipedia. The *sequence* is mine. Corroboration is partial: Yugipedia's Sacred Beast archetype Playing Style section independently describes each leg of the tripod ("Sacred Beasts Thunderclap can place 2 more copies of itself from the hand, Deck or GY then can place the Field Spell", "placing Abyss of the Sacred Beasts allows it to place 2 more copies of itself ... allowing it to fulfill the requirements for either Fallen Paradise of the Sacred Beasts or for its own effect", "Martyr ... can get any Sacred Beast Continuous Spell/Trap or Field Spell face-up on the field from the Deck, then can Summon 2 more copies of itself"), and a search-engine summary of Martyr's card page phrased the intent as "use Martyr to set up your Field Spell, then leverage Thunderclap and the type-based summoning effect to build the board".

**What is missing:** no published source writes this out as a numbered turn. I have not seen a single Sacred Beasts combo write-up, video transcript, or tournament report that confirms the ordering. Two specific things I could not confirm and would want a second pair of eyes on:
- Whether Martyr's Normal Summon is really where good pilots use it, or whether it is better held for the Fallen Paradise summon so the Normal Summon stays open.
- Whether three Fallen Paradise activations in one turn is actually achievable in practice, or whether real lists only manage two and use Combined Assault or Summoner for the third beast. Nine cards of fuel is a lot even with the self-placers.

---

## Line: `sb-released`

```
id:      "sb-released"
name:    "Sacred Beasts Released opener"
section: "1 Card Combos"
tag:     "Three for one"
starter: "Sacred Beasts Released"
result:  "All three Level 10s in hand with their reveal effects live, feeding into the Thunderclap line"
```

**steps:**

| n | card | do | why / info / warn |
|---|---|---|---|
| 1 | Sacred Beasts Released | Add three differently-named Sacred Beast monsters from the Deck to your hand, then discard 2. | `warn`: **Ash Blossom ends the turn here.** This is a single add-from-Deck effect and it is the deck's best card. `warn`: Droll & Lock Bird activated after this resolves turns off every reveal effect in step 2. |
| 2 | The reveals | Reveal each Level 10 in hand to search its matching card type, discarding 1 each time. Uria fetches a Sacred Beast Trap, Hamon a Spell, Raviel a monster. | `why`: this is where you assemble Thunderclap (off Hamon), Abyss or Combined Assault (off Uria), and Martyr or Summoner (off Raviel). Each is once per turn and they stack. `info`: the beasts stay in hand after revealing, they are not being spent. |
| 3 | The discards | Every one of those searches makes you discard. Count three-plus discards in a normal turn. | `why`: this is why the Fiendsmith engine fits, see the hybrid line below. |
| 4 | Continue | Run `sb-thunderclap` from step 1 with the pieces you just assembled. | |
| 5 | Later | Banish Sacred Beasts Released from the GY (not the turn it was sent) to add a Level 10 Pyro, Thunder or Fiend monster that cannot be Normal Summoned from the Deck. | `why`: that clause is written to fetch the *original* Uria, Hamon or Raviel as extra Fusion material for The Chaotic Phantasmal Sacred Beasts or Phantasm Emperor Trilojig. |

**Confidence: Probable.** All card text Verified. The sequencing is straightforward and low-risk (a search followed by reveals), but again no published line confirms it. Yugipedia's Playing Style corroborates the intent: "The three Sacred Beast retrains now have a useful in-hand effect to search for a Sacred Beast card of their corresponding card type but must then discard 1 card."

---

## Line: `sb-fiendsmith`

```
id:      "sb-fiendsmith"
name:    "Sacred Beasts into Fiendsmith"
section: "Hybrid"
tag:     "The bridge"
starter: "Any Sacred Beasts opener that makes you discard, with a Fiendsmith piece in hand"
result:  "Your normal Sacred Beasts board plus a Fiendsmith Fusion, off cards you were discarding anyway"
```

**The whole idea in one sentence:** Sacred Beasts forces you to discard on almost every card it plays, and Fiendsmith is the archetype that most wants to be discarded.

**steps:**

| n | card | do | why / info / warn |
|---|---|---|---|
| 1 | Any Sacred Beast search | Sacred Beasts Released, or any Level 10 reveal, or Summoner of the Sacred Beasts. Each makes you discard. | |
| 2 | Discard Engraver | Use Fiendsmith Engraver as one of those discards. It searches Fiendsmith's Tract on the way down. | `why`: a mandatory discard becomes a free search. This is the entire reason the two decks fit together. |
| 3 | Discard Lurrie | Use Fabled Lurrie as another discard. It Special Summons itself from the GY. | `why`: a mandatory discard becomes a free LIGHT Fiend body. |
| 4 | Lurrie | Link Summon Fiendsmith's Requiem off Lurrie. | `info`: Requiem is Link 1 off any single LIGHT Fiend, so it never costs you Sacred Beast material. |
| 5 | Requiem | Tribute Requiem to Special Summon Lacrima the Crimson Tears or Engraver from the Deck. | `warn`: Ash. |
| 6 | Build the Fusion | From here run the back half of any Fiendsmith line. Tract in the GY can banish itself to Fusion, or Sequence can fuse off GY material. | |
| 7 | Note the overlap | Martyr of the Sacred Beasts is a DARK **Fiend**, and Raviel is a DARK **Fiend**. Fiendsmith's Sequence and Agnumday only require "a LIGHT Fiend" among their materials, so Martyrs make fine second and third materials. | `warn`: Martyr and Raviel are DARK, so they cannot be the LIGHT Fiend that Requiem, Sequence or Agnumday requires. Only Lurrie, Engraver, Lacrima the Crimson Tears and the Fiendsmith Extra Deck monsters fill that slot. |

**A second bridge worth noting:** Hamon and Summoner of the Sacred Beasts are both **Thunder** monsters with in-hand effects, which natively enables **Thunder Dragon Colossus** (Unlimited in both formats). Colossus stops the opponent adding anything from their Main Deck except by drawing. That is a real alternative to the Fiendsmith package for a floodgate-flavoured build. Verified: Yugipedia's Sacred Beast Playing Style calls this out explicitly, and Colossus's summoning condition ("Special Summoned during the turn a Thunder monster's effect was activated in the hand, by Tributing 1 Thunder Effect non-Fusion Monster") checks out against its card text.

**Confidence: Probable for the concept, Unverified for the exact sequence.** The *pairing* is well evidenced: two independent post-CORI decklists run both engines together (the Dueling Nexus February 2026 TCG list with 1 Engraver / 1 Lacrima the Crimson Tears / 1 Lurrie / 1 Tract, and the YGOPRODeck March 2026 list with 3 Engraver / 1 Requiem / 1 Fiendsmith's Lacrima / 1 Sequence / 1 Tract). The discard-synergy reasoning is mine, derived from verified card text on both sides. **What is missing:** neither decklist has any written strategy text, and I found no published hybrid combo line. I did find a video titled "Fiendsmith Sacred Beast Deck Profile + Combos (Post CORI)" at `https://www.youtube.com/watch?v=16PDvS8-36I` but could not retrieve its description or transcript. That video is the single highest-value thing left unread for this section.

---

# 3. Handtrap interaction map

Shape matches `src/_data/matchups.js`. Handtrap ids: `ash`, `imperm`, `nibiru`, `droll`, `fuwalos`, `purulia`, `dshifter`.

## Fiendsmith

```
name: "Fiendsmith"
note: "One long chain off one card, and almost all of it routes through the GY. Nothing here is a floodgate, so if you let the line finish you are looking at a Desirae with two negates that you cannot target."
```

**entries:**

| card | hits | note |
|---|---|---|
| `dshifter` | Every part of the engine. Engraver's self-revive, Lurrie's discard-then-summon, Sequence's Fusion (shuffles GY material), Tract's GY half, Kyrie's GY Fusion, Lacrima the Crimson Tears' opponent-turn revive, Sanct's GY Set. | **The best card against this deck by a wide margin.** Fiendsmith does not have a GY, it *is* a GY. Note Lurrie is the cleanest illustration: it says "if this card is discarded to the GY, Special Summon it", and under Shifter it never reaches the GY, so it never triggers. Fire it before they establish anything, Shifter needs your own GY empty. TCG-Limited to 1. |
| `ash` | Fiendsmith's Tract (adds from Deck), Fiendsmith Engraver's hand discard (adds from Deck), Fiendsmith's Requiem's tribute effect (Special Summons from the Deck), Lacrima the Crimson Tears' summon trigger (sends from the Deck), Fiendsmith's Rextremende's Fusion trigger (sends from Deck or Extra Deck), Fiendsmith in Paradise's GY half (sends from Deck or Extra Deck). | Tract is the highest-value hit: it is both a search and, later, a Fusion. If Tract has already resolved, wait for the Requiem tribute, that is the Deck summon the whole line hangs on. **Ash does not stop Fiendsmith's Sanct** (it makes a Token, not a Deck summon) and **does not stop Sequence's Fusion** (materials come from the GY). |
| `imperm` | Requiem's tribute Quick Effect before it fetches from the Deck, Lacrima the Crimson Tears' summon trigger, Engraver's field effect, and Desirae itself. | Best used on Requiem while it is still a monster on the field. Once the line reaches Desirae with Sequence equipped, **Desirae cannot be targeted**, so Imperm is dead on it. There is no window between the Fusion and the equip, they equip immediately. |
| `nibiru` | The whole board, if you let it get to 5. | The Tract line makes six Special Summons: Token, Requiem, Engraver from Deck, Engraver from GY, Sequence, Desirae. **You hit five right as Sequence goes down**, which is one summon before Desirae. Tributing there costs them Desirae entirely. Waiting for Desirae is not an option, there is no sixth-plus window worth more. |
| `fuwalos` | Requiem (Extra Deck), the Deck Special Summon off Requiem's tribute, Fiendsmith's Lacrima or Sequence (Extra Deck), Desirae (Extra Deck). | Roughly four draws through a full Tract line. Requires you to control no cards. **Engraver reviving itself out of the GY does not trigger Fuwalos**, that is neither Deck nor Extra Deck. |
| `purulia` | Almost nothing. | Fiendsmith summons from the Deck, the GY and the Extra Deck, essentially never from hand. **Do not side Purulia for this matchup**, take Fuwalos instead. |
| `droll` | Fiendsmith's Tract and Fiendsmith Engraver's discard, the only two adds in the engine. | Situational. The `fs-tract` line makes two adds, so a Droll on the first one costs them Sanct. But the `fs-engraver-r6` and `fs-engraver-desirae` lines only need Tract to fetch Lurrie, one add, and everything after that is Deck summons and GY plays that Droll does not touch. **Do not count on Droll to stop this deck.** |

## Sacred Beasts

```
name: "Sacred Beasts"
note: "Post-CORI this deck barely searches its way to the board, it PLACES its way there. That turns off half your usual handtraps. Hold for the Fallen Paradise activations, not for the placements."
```

**entries:**

| card | hits | note |
|---|---|---|
| `ash` | Sacred Beasts Released (adds 3 from the Deck), each Level 10's reveal effect (adds from the Deck), Fallen Paradise of the Sacred Beasts (its Special Summon includes "from the Deck"), Martyr of the Sacred Beasts' triple-summon (includes "from the Deck"). | Sacred Beasts Released is the single best Ash target in the matchup: one card into three, and Ash turns it into nothing. If it is gone, hold for the **first** Fallen Paradise activation. **Ash is blank on Sacred Beasts Thunderclap, on Martyr's placement effect, and on Abyss of the Sacred Beasts.** Placing a card face-up from the Deck is not adding, not Special Summoning, and not sending to the GY. **Ash is also blank on Summoner of the Sacred Beasts**, which only summons from hand or GY. |
| `nibiru` | The entire assembled board. | Count carefully: Level 10 #1, Martyr Normal Summon, two more Martyrs, Level 10 #2, Level 10 #3, then The Chaotic Phantasmal Sacred Beasts. That is **six or seven summons**, so you cross five somewhere around the third Martyr. Nibiru tributes rather than destroys, so **Chaotic Phantasmal's twice-per-turn destruction protection does not save it**. The temptation is to wait for the 5000-ATK Fusion; the risk is that Raviel is a Quick Effect that Tributes two Sacred Beasts to nuke your field first. On balance, Nibiru is a strong card here and this is one of the better decks to hold it against. |
| `fuwalos` | Fallen Paradise summoning from the Deck (up to three times), Martyr summoning two more from the Deck, The Chaotic Phantasmal Sacred Beasts from the Extra Deck. | **Six-ish draws off a full line.** This is the best Mulcharmy in the matchup by a distance, and note the deck's own pilots run 3 copies of Fuwalos themselves in at least one published list. Requires you to control no cards. |
| `droll` | Sacred Beasts Released, and every one of the three Level 10 reveal effects. | Genuinely strong on the search suite but **it does not touch the engine**. Thunderclap, Martyr and Abyss all *place* rather than add, and Fallen Paradise Special Summons rather than adds. If they open Thunderclap they play straight through Droll. Hold Droll for a hand that leads with Sacred Beasts Released. |
| `dshifter` | Every recursion effect: Summoner of the Sacred Beasts' GY summons, Combined Assault's summon-from-GY and its GY Fusion, Martyr's End Phase self-return from GY, Thunderclap and Abyss returning themselves from the GY, and Fallen Paradise's summon-from-GY mode. Also keeps Uria at 0 ATK, since it gains 1000 per Trap **in the GYs**. | An awkward one. Shifter guts the *grind* but does not stop the *opening turn*: Fallen Paradise still resolves, because sending cards away is still sending them, and it can summon from hand or Deck instead of GY. Great as a follow-up, not as a turn-one answer. TCG-Limited to 1. |
| `imperm` | The Chaotic Phantasmal Sacred Beasts, Martyr before it triples, and any Sacred Beast that was **not** summoned by Fallen Paradise. | **Read this one carefully.** Fallen Paradise makes the monster it summons *unaffected by your opponent's activated Spell/Trap effects*. Infinite Impermanence is a Trap, from hand or from the field. **It cannot touch a beast summoned off the Field Spell.** It works fine on Chaotic Phantasmal (summoned from the Extra Deck, not by Fallen Paradise), on beasts summoned by Combined Assault or Summoner, and on Martyr. Save it for the Fusion. |
| `purulia` | Summoner of the Sacred Beasts' hand summons, and Fallen Paradise when it chooses the hand as the source. | Marginal. The deck prefers Deck and GY sources, so most turns Purulia draws you one or two at best. Take Fuwalos. **Confidence: Probable**, this is the one entry where I am reasoning about play patterns rather than card text, since I could not find data on how often real lists route through hand summons. |

---

# 4. Playing Fiendsmith and Sacred Beasts *into* handtraps

## Fiendsmith

**Worst handtrap against you: Dimension Shifter.** There is no play-around worth the name. The engine's recursion is the engine. If Shifter lands before you start, you get a Requiem and a body and that is roughly it. The realistic answer is deckbuilding (a non-GY secondary engine), not piloting.

**Second worst: Ash Blossom on Fiendsmith's Tract.** Tract is both your search and, from the GY, one of your two Fusion enablers, so an Ash there costs two cards.

**The play-around that actually exists:** open on **Fiendsmith's Sanct** rather than on a search. Sanct makes a Fiendsmith Token out of nothing, and it neither adds from the Deck, nor Special Summons from the Deck, nor sends from the Deck. **Ash Blossom cannot interact with it.** Token into Requiem, tribute Requiem for a Deck summon, and you have baited the Ash onto the Requiem tribute instead of onto Tract, where losing it costs you far less. If you hold both Sanct and Tract, leading with Sanct is usually right.

**Second play-around, against Droll:** if you suspect Droll, use Tract to add **Fabled Lurrie** rather than Engraver. That is one add, and every step after it (Lurrie's self-summon, Requiem, the Deck summon, Engraver's GY revive, Sequence, Desirae) is summons and GY plays that Droll cannot see. You lose the Sanct search and end on a slightly worse board, but you end on Desirae.

**Against Nibiru:** you cross five summons at Sequence. If they have shown Nibiru or you are deep in game 3 against a deck that boards it, consider stopping at a Rank 6 (Caesar) off `fs-engraver-r6` instead, which is four summons total and stays under the threshold.

**Against Imperm:** get Sequence equipped to Desirae as fast as possible, since the equip is what makes Desirae untargetable. There is no gap between Fusion and equip in the standard line, which is exactly why the line is written that way.

## Sacred Beasts

**Worst handtrap against you: Mulcharmy Fuwalos.** Six-ish Deck and Extra Deck summons in a full line is close to a maximum-value Fuwalos. There is no clean play-around: the only lever is stopping short, which means a worse board.

**Second worst: Ash Blossom on Sacred Beasts Released.** Three cards into zero.

**The play-around that actually exists, and it is a good one:** **lead with Sacred Beasts Thunderclap, not with Sacred Beasts Released.** Thunderclap places two copies of itself from the Deck and places Fallen Paradise from the Deck into the Field Zone. Neither is an add and neither is a summon. **Ash Blossom is blank on it. Droll & Lock Bird is blank on it.** You get to your Field Spell and your first Fallen Paradise activation without ever exposing a search. Save Sacred Beasts Released for after their handtrap has been spent, or for a turn where you can afford to lose it.

**Against Infinite Impermanence:** summon your important beasts through **Fallen Paradise**, not through Summoner or Combined Assault. The Field Spell grants "unaffected by your opponent's activated Spell/Trap effects", which makes those beasts immune to Imperm outright. This is free value and a real reason to sequence the Field Spell first.

**Against Nibiru:** you can stop at four summons and pass with three Level 10s or two plus Martyrs, holding The Chaotic Phantasmal Sacred Beasts for later. Combined Assault's GY half Fusion Summons a Phantasm Fusion using hand or field material on a later turn, so the Fusion is not a now-or-never decision. Against a deck you expect Nibiru from, this is worth doing.

**In-archetype answer:** **Shimmering Shatterer of the Sacred Beasts** has a mode that negates any card or effect the opponent activates in response to a Sacred Beast monster's effect activation. That is a hard counter to Ash and Imperm on your reveal effects. **It is OCG-only as of now:** Yugipedia lists it in BETB-JP065 / BETB-SC065 (Beyond the Brave) with **no English set printing**. Do not put it in a TCG guide as though it were available. Simulator lists (like the Dueling Nexus one) run 3 of it, which is why it shows up in decklists that look TCG-legal.

---

# 5. Secondary archetypes (kept deliberately thin)

I did one search pass here and stopped, per the brief. What I have is meta context only, **no combo lines and no chokepoints**, so I would leave these stubs empty rather than fill them with guesses.

From `https://roadoftheking.com/ocg-2026-04-metagame/` (OCG, 1 Apr to 30 Jun 2026) and a tier-list search summary:

- **Kewl Tunes / Kewl Tune** is clear tier 1: 254 tops in the OCG 2026.04 format, and it won the European WCQ 2026 with 16 tops there. **This is the matchup the site should prioritise mapping.**
- **Elfnote**: 106 tops OCG, tier 2. Notably, "Fiendsmith Elfnote" was the most common Fiendsmith hybrid (6 tops), so there is a natural cross-reference with the Fiendsmith page.
- **Light and Darkness Ritual**: 96 tops OCG. Also appears as a Sacred Beast hybrid ("2 Light and Darkness Ritual Sacred Beast"), which is a direct connection to this site's Sacred Beasts page and to **Skull Archfiend of Chaos**, which is already in the site's support list and whose text explicitly references Light and Darkness Ritual.
- **Blitzclique**: ~13 tops OCG, ~2.6% of a TCG meta sample.
- **Maliss**: ~10 tops OCG, ~1.7%.
- **Doomz**: I found nothing. Not in the Road of the King breakdown I read, not in the tier list summary. Either it is very fringe, very new, or the name on the site differs from what tournament coverage calls it.

**Confidence: Unverified for anything actionable.** These are placement counts, not card interactions. I did not read a single decklist or combo line for any of them.

---

# 6. Open questions and things I could not verify

1. **No published Sacred Beasts combo line exists that I could find.** This is the biggest gap in the document. Every Sacred Beasts line above is my own assembly from verified card text. I checked Yugipedia's archetype page (has a Playing Style section but **no sample combo section**, unlike the Fiendsmith page which has three), YGOrganization's CORI coverage, Master Duel Meta, YGOPRODeck's article and deck listings, and Dueling Nexus deck blogs. Not one writes out a turn. **Recommended next step:** the video at `https://www.youtube.com/watch?v=16PDvS8-36I` ("Fiendsmith Sacred Beast Deck Profile + Combos (Post CORI)") and `https://www.youtube.com/watch?v=VdHx8f6Fww4` ("YuGiOh Sacred Beasts Deck 2026, Post CORI") are the two most likely places a real line is written down. I could not retrieve either description or transcript, WebFetch returns only YouTube's page chrome.

2. **Can Fallen Paradise really be activated three times in one turn?** Nine cards of same-type fuel is a lot. My line uses Thunderclap x3, Martyr x3, Abyss x3, which works on paper but assumes you draw or place all three self-triplicating cards. I have no data on how often real lists get there, or whether two activations plus Combined Assault is the actual standard. **This directly affects whether The Chaotic Phantasmal Sacred Beasts is a realistic turn-one end board or an aspirational one.**

3. **The Sacred Beast card names on this site are probably wrong** (see the section at the top). I am confident the printed TCG names are Inferno / Calamity / Infinity of the Sacred Beasts, based on Yugipedia redirects plus a CORI-EN card-scan filename, but I did not manage to load Konami's official database to confirm it from the source of truth. `https://www.db.yugioh-card.com/yugiohdb/` would settle it.

4. **Abyss of the Sacred Beasts (CORI-EN067) is missing from the site's Sacred Beasts card pool.** It is the Trap leg of the Fallen Paradise tripod and Martyr places it directly from the Deck. The full line does not work without it. Should be added, or the line documented as two Fallen Paradise activations rather than three.

5. **Shimmering Shatterer of the Sacred Beasts (BETB-JP065)** is OCG-only with no English printing that I can find, but it appears in TCG-labelled simulator decklists. Worth confirming whether Beyond the Brave has a TCG release date before mentioning it anywhere on the site.

6. **The `fs-engraver-desirae` branch is single-sourced** to an undated article (`archetypesnexus.com`). The board it reaches is identical to the Verified `fs-tract` line. If you only publish one, publish `fs-tract`.

7. **The `fs-rextremende` sequence is my own.** Kyrie's and Rextremende's texts are solid, but I could only see the corroborating Fandom card-tips page through a search-engine summary (Cloudflare blocked direct access, WebFetch returned HTTP 402 on Fandom). The specific claim "Lacrima the Crimson Tears sends Kyrie in place of Sequence for the fusion" is the part I trust least.

8. **Fiendsmith's Sanct's exact position in the modern line.** Yugipedia's sample combo uses it as the Token generator. Whether current pilots still open on Sanct, or whether the Lurrie route has replaced it entirely post-Moon-ban, I could not establish. Both work, but I do not know which is standard in August 2026.

9. **Nibiru counts are derived, not observed.** I counted summons off the written step lists. A real pilot may sequence differently (for example holding the Normal Summon), which shifts where the fifth summon lands. Treat the "Nibiru is live at Sequence" and "you cross five around the third Martyr" claims as arithmetic on my step order, not as tournament-tested numbers.

10. **Fiendsmith's competitive standing in the TCG specifically.** All my metagame data is OCG (Road of the King, 2026.04 format). In that data Fiendsmith is not a deck, it is an engine appearing in 13 hybrid tops total, and Sacred Beast is a real but small archetype at 13 tops. I did not find equivalent TCG-side tournament data for the current format. If the site wants to say anything about tiering, that gap needs closing.

11. **Whether Fiendsmith's Lacrima being TCG-Limited changes anything structurally.** None of the lines above use more than one copy, so it does not break them, but a Limited Fusion is a consistency tax I could not quantify: I do not know whether real lists rely on drawing into a second one for a different line I never found.

12. **Doomz.** I found zero information under that name. It may be spelled differently in tournament coverage.
