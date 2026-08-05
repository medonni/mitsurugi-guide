// Card compendium filtering, shared by every deck's cards.njk. Three
// independent filter axes (name search + section tabs + zone chips), one
// apply(). Pure DOM, no build step: works off the classes/ids/data-*
// attributes that components.njk's cardSearch/zoneFilter/sectionTabs/
// filterEmpty macros and the cardGroup/cardRow macros already render, so it's
// a plain <script src> include, not templated per page.
//
// Visibility uses the `hidden` attribute, not inline display, so "is this row
// showing?" is one honest property instead of a substring match on a style
// string. Same convention as the matchups filter.
(function () {
  const tabs = document.querySelectorAll(".tab");
  const zoneChips = document.querySelectorAll("#zone-filter .zone-pill");
  const search = document.getElementById("card-search");
  if (!tabs.length && !zoneChips.length && !search) return;

  const groups = document.querySelectorAll("[data-section]");
  const rows = document.querySelectorAll(".card-row");
  const subLabels = document.querySelectorAll(".sub-label");
  const empty = document.getElementById("filter-empty");
  const emptyWhat = empty && empty.querySelector(".filter-empty-what");
  // Not a card group, so it must never read as a search result.
  const synergy = document.getElementById("synergy");
  const state = { section: "all", zone: "all", q: "" };

  const rowName = (r) => (r.querySelector("h3") || {}).textContent || "";
  // A row's own filters, ignoring the section tabs: this is what a tab's count
  // has to answer, since the count predicts what clicking it would give you.
  const matchesRow = (r) =>
    (state.zone === "all" || r.dataset.zones.split(" ").includes(state.zone)) &&
    (!state.q || rowName(r).toLowerCase().includes(state.q));

  function apply() {
    rows.forEach((r) => {
      const g = r.closest("[data-section]");
      const okSection = state.section === "all" || !g || g.dataset.section === state.section;
      r.hidden = !(matchesRow(r) && okSection);
    });
    // Sub-label dividers only make sense in the unfiltered functional view.
    const filtering = state.zone !== "all" || !!state.q;
    subLabels.forEach((s) => { s.hidden = filtering; });

    let anyRow = false;
    groups.forEach((g) => {
      const visible = g.querySelectorAll(".card-row:not([hidden])").length;
      g.hidden = visible === 0;
      if (visible) anyRow = true;
      // Counts are recomputed, never left at the baked-in total: a header that
      // claims 7 while showing 2 is worse than no count at all.
      const count = g.querySelector(".group-count");
      if (count) count.textContent = visible;
      // A group that survived the filter but is collapsed would otherwise show
      // nothing with no explanation. Open it while a filter is narrowing.
      if (visible && filtering) g.open = true;
    });

    // Tab counts answer "what would I get if I clicked this?", so they ignore
    // the section axis and reflect only the zone + search filters.
    tabs.forEach((t) => {
      const count = t.querySelector(".count");
      if (!count) return;
      const key = t.dataset.filter;
      const scope = key === "all"
        ? [...rows]
        : [...rows].filter((r) => {
            const g = r.closest("[data-section]");
            return g && g.dataset.section === key;
          });
      count.textContent = scope.filter(matchesRow).length;
    });

    if (synergy) synergy.hidden = filtering;

    if (!empty) return;
    if (!anyRow) {
      // Name every active filter, not just the zone: blaming the chip when the
      // tab is the cause sends the reader to fix the wrong control.
      const chip = [...zoneChips].find((c) => c.dataset.zone === state.zone);
      const tab = [...tabs].find((t) => t.dataset.filter === state.section);
      const parts = [];
      if (state.q) parts.push(`matching "${state.q}"`);
      if (chip) parts.push(`activating in ${chip.textContent.trim()}`);
      let what = parts.join(" ") || "matching this filter";
      if (tab && state.section !== "all") what += ` under ${tab.childNodes[0].textContent.trim()}`;
      emptyWhat.textContent = what;
      empty.hidden = false;
    } else {
      empty.hidden = true;
    }
  }

  tabs.forEach((tab) => tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle("active", on);
      t.setAttribute("aria-pressed", on);
    });
    state.section = tab.dataset.filter;
    apply();
  }));

  const resetBtn = document.getElementById("filter-reset");
  if (resetBtn) resetBtn.addEventListener("click", () => {
    state.section = "all";
    state.zone = "all";
    state.q = "";
    if (search) search.value = "";
    tabs.forEach((t) => {
      const on = t.dataset.filter === "all";
      t.classList.toggle("active", on);
      t.setAttribute("aria-pressed", on);
    });
    zoneChips.forEach((c) => { c.classList.remove("active"); c.setAttribute("aria-pressed", "false"); });
    apply();
    if (search) search.focus();
  });

  function toggleZone(chip) {
    const z = chip.dataset.zone;
    state.zone = state.zone === z ? "all" : z; // click active chip again to clear
    zoneChips.forEach((c) => {
      const on = c.dataset.zone === state.zone;
      c.classList.toggle("active", on);
      c.setAttribute("aria-pressed", on);
    });
    apply();
  }
  zoneChips.forEach((chip) => chip.addEventListener("click", () => toggleZone(chip)));

  if (search) {
    search.addEventListener("input", () => {
      state.q = search.value.trim().toLowerCase();
      apply();
    });
    // Escape clears the field without reaching for the mouse.
    search.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && search.value) { search.value = ""; state.q = ""; apply(); }
    });
  }

  apply();
})();
