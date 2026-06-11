/* ============================================================
   FOREST GLEN — calendar page
   Renders the month grid and the meeting lists from js/events.js.
   (You normally never need to edit this file.)
   ============================================================ */

(function () {
  "use strict";
  if (typeof FG_EVENTS === "undefined") return;

  const grid = document.getElementById("cal-grid");
  const monthLabel = document.getElementById("cal-month");
  const prevBtn = document.getElementById("cal-prev");
  const nextBtn = document.getElementById("cal-next");
  const dayDetail = document.getElementById("day-detail");
  const upcomingList = document.getElementById("upcoming-list");
  const pastList = document.getElementById("past-list");
  const pastBlock = document.getElementById("past-block");
  if (!grid) return;

  const today = FG.startOfToday();
  let view = new Date(today.getFullYear(), today.getMonth(), 1);
  let selectedKey = null;

  /* Map "YYYY-MM-DD" -> [events] for quick lookup */
  const byDay = {};
  FG_EVENTS.forEach(function (ev) {
    (byDay[ev.date] = byDay[ev.date] || []).push(ev);
  });

  function keyOf(date) {
    const p = function (n) { return String(n).padStart(2, "0"); };
    return date.getFullYear() + "-" + p(date.getMonth() + 1) + "-" + p(date.getDate());
  }

  /* ---------- Month grid ---------- */
  function renderGrid() {
    grid.innerHTML = "";
    monthLabel.textContent = view.toLocaleDateString("en-US", { month: "long", year: "numeric" });

    const firstDow = new Date(view.getFullYear(), view.getMonth(), 1).getDay(); // 0 = Sun
    const start = new Date(view.getFullYear(), view.getMonth(), 1 - firstDow);

    for (let i = 0; i < 42; i++) {
      const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const k = keyOf(d);
      const inMonth = d.getMonth() === view.getMonth();
      const has = !!byDay[k];

      const cell = document.createElement(has ? "button" : "div");
      cell.className = "cal-day";
      cell.textContent = d.getDate();
      if (!inMonth) cell.classList.add("cal-day--out");
      if (k === keyOf(today)) cell.classList.add("cal-day--today");

      if (has) {
        cell.type = "button";
        cell.classList.add("cal-day--event");
        if (k === selectedKey) cell.classList.add("cal-day--selected");
        const names = byDay[k].map(function (e) { return e.title; }).join(", ");
        cell.setAttribute("aria-label", FG.fmtLongDate(d) + " — " + names);
        cell.addEventListener("click", function () {
          selectedKey = k;
          renderGrid();
          renderDayDetail(k);
          dayDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      } else {
        cell.setAttribute("aria-hidden", "true");
      }
      grid.appendChild(cell);
    }
  }

  function renderDayDetail(k) {
    dayDetail.innerHTML = "";
    const evs = byDay[k];
    if (!evs) return;
    const h = document.createElement("h3");
    h.className = "eyebrow";
    h.style.marginTop = "0";
    h.textContent = "Selected day";
    dayDetail.appendChild(h);
    evs.forEach(function (ev) { dayDetail.appendChild(card(ev)); });
  }

  prevBtn.addEventListener("click", function () {
    view = new Date(view.getFullYear(), view.getMonth() - 1, 1);
    renderGrid();
  });
  nextBtn.addEventListener("click", function () {
    view = new Date(view.getFullYear(), view.getMonth() + 1, 1);
    renderGrid();
  });

  /* ---------- Event cards ---------- */
  function card(ev, isPast) {
    const d = FG.parseDate(ev);
    const el = document.createElement("article");
    el.className = "event-card" + (isPast ? " event-card--past" : "");

    const dateBox = document.createElement("div");
    dateBox.className = "event-card__date";
    dateBox.innerHTML =
      '<span class="event-card__day">' + d.getDate() + "</span>" +
      '<span class="event-card__month">' +
      d.toLocaleDateString("en-US", { month: "short" }) + " " + d.getFullYear() +
      "</span>";

    const body = document.createElement("div");
    body.className = "event-card__body";

    const title = document.createElement("h3");
    title.className = "event-card__title";
    title.textContent = ev.title;

    const when = document.createElement("p");
    when.className = "event-card__meta";
    const t = FG.fmtTimeRange(ev);
    when.textContent = FG.fmtLongDate(d) + (t ? " · " + t : "");

    const loc = document.createElement("p");
    loc.className = "event-card__meta event-card__meta--loc";
    loc.textContent = ev.location;

    body.appendChild(title);
    body.appendChild(when);
    body.appendChild(loc);

    if (ev.description) {
      const desc = document.createElement("p");
      desc.className = "event-card__desc";
      desc.textContent = ev.description;
      body.appendChild(desc);
    }

    if (!isPast) {
      const actions = document.createElement("div");
      actions.className = "event-card__actions";
      const ics = document.createElement("button");
      ics.type = "button";
      ics.className = "btn btn--ghost btn--small";
      ics.textContent = "Add to calendar";
      ics.addEventListener("click", function () { FG.downloadICS(ev); });
      actions.appendChild(ics);
      body.appendChild(actions);
    }

    el.appendChild(dateBox);
    el.appendChild(body);
    return el;
  }

  /* ---------- Upcoming / past lists ---------- */
  function renderLists() {
    const up = FG.upcoming(FG_EVENTS);
    const pa = FG.past(FG_EVENTS);

    upcomingList.innerHTML = "";
    if (up.length === 0) {
      const empty = document.createElement("div");
      empty.className = "events-empty";
      empty.textContent = "No upcoming meetings are scheduled at the moment. New dates will be posted here.";
      upcomingList.appendChild(empty);
    } else {
      up.forEach(function (ev) { upcomingList.appendChild(card(ev)); });
    }

    pastList.innerHTML = "";
    if (pa.length === 0) {
      pastBlock.hidden = true;
    } else {
      pastBlock.hidden = false;
      pa.forEach(function (ev) { pastList.appendChild(card(ev, true)); });
    }
  }

  /* ---------- Init: open on the month of the next meeting ---------- */
  const next = FG.upcoming(FG_EVENTS)[0];
  if (next) {
    const nd = FG.parseDate(next);
    view = new Date(nd.getFullYear(), nd.getMonth(), 1);
  }
  renderGrid();
  renderLists();
})();
