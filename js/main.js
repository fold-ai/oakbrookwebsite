/* ============================================================
   FOREST GLEN — shared site scripts
   (You normally never need to edit this file.
    Meetings are edited in js/events.js)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu after choosing a page (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

/* ============================================================
   Shared date/event helpers (used by home plaque + calendar)
   ============================================================ */
const FG = (function () {
  "use strict";

  function parseDate(ev) {
    // "2026-06-16" + "19:00" -> local Date object
    const [y, m, d] = ev.date.split("-").map(Number);
    const [hh, mm] = (ev.start || "00:00").split(":").map(Number);
    return new Date(y, m - 1, d, hh, mm);
  }

  function parseEnd(ev) {
    const [y, m, d] = ev.date.split("-").map(Number);
    const [hh, mm] = (ev.end || ev.start || "00:00").split(":").map(Number);
    return new Date(y, m - 1, d, hh, mm);
  }

  function fmtLongDate(date) {
    return date.toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric", year: "numeric"
    });
  }

  function fmtTime(date) {
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }

  function fmtTimeRange(ev) {
    if (!ev.start) return null; // meetings without a fixed time yet
    const s = fmtTime(parseDate(ev));
    const e = ev.end ? fmtTime(parseEnd(ev)) : null;
    return e ? s + " – " + e : s;
  }

  function startOfToday() {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }

  function sorted(events) {
    return events.slice().sort(function (a, b) { return parseDate(a) - parseDate(b); });
  }

  function upcoming(events) {
    const t = startOfToday();
    return sorted(events).filter(function (ev) { return parseEnd(ev) >= t; });
  }

  function past(events) {
    const t = startOfToday();
    return sorted(events).filter(function (ev) { return parseEnd(ev) < t; }).reverse();
  }

  /* ---------- "Add to calendar" (.ics) ---------- */
  function pad(n) { return String(n).padStart(2, "0"); }

  function icsStamp(d) {
    return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) +
      "T" + pad(d.getHours()) + pad(d.getMinutes()) + "00";
  }

  function downloadICS(ev) {
    const s = parseDate(ev);
    const esc = function (t) { return String(t || "").replace(/[\\;,]/g, " ").replace(/\n/g, "\\n"); };
    let dtLines;
    if (ev.start) {
      const e = ev.end ? parseEnd(ev) : new Date(s.getTime() + 90 * 60000);
      dtLines = ["DTSTART:" + icsStamp(s), "DTEND:" + icsStamp(e)];
    } else {
      // No fixed time yet — save it as an all-day entry
      const next = new Date(s.getFullYear(), s.getMonth(), s.getDate() + 1);
      const day = function (d) { return d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()); };
      dtLines = ["DTSTART;VALUE=DATE:" + day(s), "DTEND;VALUE=DATE:" + day(next)];
    }
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Forest Glen Oak Brook//Meetings//EN",
      "BEGIN:VEVENT",
      "UID:" + ev.id + "@forestglen-oakbrook",
      "DTSTAMP:" + icsStamp(new Date())
    ].concat(dtLines, [
      "SUMMARY:" + esc("Forest Glen — " + ev.title),
      "LOCATION:" + esc(ev.location),
      "DESCRIPTION:" + esc(ev.description),
      "END:VEVENT",
      "END:VCALENDAR"
    ]);
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "forest-glen-" + ev.id + ".ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  }

  return {
    parseDate: parseDate,
    fmtLongDate: fmtLongDate,
    fmtTimeRange: fmtTimeRange,
    startOfToday: startOfToday,
    sorted: sorted,
    upcoming: upcoming,
    past: past,
    downloadICS: downloadICS
  };
})();

/* ============================================================
   Home-page plaque — fills in the next upcoming meeting
   ============================================================ */
(function () {
  "use strict";
  const plaque = document.getElementById("next-meeting");
  if (!plaque || typeof FG_EVENTS === "undefined") return;

  const next = FG.upcoming(FG_EVENTS)[0];
  const titleEl = plaque.querySelector("[data-nm-title]");
  const dateEl = plaque.querySelector("[data-nm-date]");
  const locEl = plaque.querySelector("[data-nm-location]");

  if (!next) {
    titleEl.textContent = "No meeting is currently scheduled";
    dateEl.innerHTML = "New dates are posted here and on the calendar page.";
    locEl.textContent = "";
    return;
  }

  const d = FG.parseDate(next);
  const t = FG.fmtTimeRange(next);
  titleEl.textContent = next.title;
  dateEl.innerHTML = "<strong>" + FG.fmtLongDate(d) + "</strong>" + (t ? " · " + t : "");
  locEl.textContent = next.location;
})();
