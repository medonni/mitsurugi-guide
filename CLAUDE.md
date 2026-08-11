# Working in this repo

## Parallel deck pages must stay in lockstep

Mitsurugi, Fiendsmith, and Sacred Beasts (and any deck added later) each get
the identical Overview/Cards/Combos page shape. Before treating a
structural change as done, check the other decks' equivalent files for the
same pattern:

```sh
grep -rn "<feature>" src/mitsurugi/ src/fiendsmith/ src/sacred-beasts/
```

If a fix or feature belongs on one deck's page, it almost always belongs on
all of them. Prefer extracting it into a shared macro (`src/_includes/components.njk`),
shared data helper (`src/_lib/`), or shared static asset (`src/assets/js/`)
over copy-pasting per deck. This has already gone wrong twice: hero sections
were added to Fiendsmith/Sacred Beasts in a different shape than Mitsurugi's,
and Mitsurugi's `cards.njk` had zone-filter + section-tab filtering that
Fiendsmith and Sacred Beasts silently never got, even though the shared
`cardGroup`/`cardRow` macros were already emitting the `data-section`/
`data-zones` attributes the filter script needs. See README.md's "Card
compendium filtering" and "Adding a new deck" sections for the concrete,
current pattern every deck's pages must follow.

## After a structural change, run a UX pass

A build succeeding or `git diff` looking reasonable is not evidence the
structure is right. After changing navigation, information architecture, or
introducing a new page template (not just colors/spacing/copy on an existing
page), run the `impeccable` skill (critique + audit) before considering the
work done. Bugs like a missing `<h1>`, a one-way nav with no path back, or a
hover-only dropdown unreachable on touch devices don't show up in a build or
a mechanical CSS check, only in an actual review pass.

## Keep README.md current

README.md is the implementation guide for this repo's shared patterns
(adding a card, card compendium filtering, adding a new deck). When a shared
pattern changes, update it there, it's the file both humans and future
Claude sessions are expected to check before assuming a new deck page is
complete.
