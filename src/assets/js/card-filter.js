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

  // Each row's filterable facts, read once at startup: the name, the zone list,
  // and the group it belongs to never change, so re-deriving them per keystroke
  // (per row, per tab) was the same DOM walk over and over.
  const meta = [...rows].map((r) => ({
    row: r,
    section: (r.closest("[data-section]") || { dataset: {} }).dataset.section,
    name: ((r.querySelector("h3") || {}).textContent || "").toLowerCase(),
    zones: r.dataset.zones.split(" "),
  }));

  // A row's own filters, ignoring the section tabs: this is what a tab's count
  // has to answer, since the count predicts what clicking it would give you.
  const matchesRow = (m) =>
    (state.zone === "all" || m.zones.includes(state.zone)) &&
    (!state.q || m.name.includes(state.q));

  function apply() {
    // Group key -> how many of its rows survived, so the per-group recount
    // below doesn't have to re-query the DOM for what this loop already knows.
    const visibleBySection = new Map();
    meta.forEach((m) => {
      const okSection = state.section === "all" || !m.section || m.section === state.section;
      const on = matchesRow(m) && okSection;
      m.row.hidden = !on;
      if (on && m.section) visibleBySection.set(m.section, (visibleBySection.get(m.section) || 0) + 1);
    });
    // Sub-label dividers only make sense in the unfiltered functional view.
    const filtering = state.zone !== "all" || !!state.q;
    subLabels.forEach((s) => { s.hidden = filtering; });

    let anyRow = false;
    groups.forEach((g) => {
      const visible = visibleBySection.get(g.dataset.section) || 0;
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
      count.textContent = meta.filter(
        (m) => (key === "all" || m.section === key) && matchesRow(m)
      ).length;
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
