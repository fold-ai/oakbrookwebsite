/* ============================================================
   FOREST GLEN — MEETINGS & EVENTS
   ============================================================

   ▸ HOW TO POST A NEW MEETING (no coding skills needed):

     1. Copy one of the blocks between { ... } below.
     2. Paste it into the list (keep the comma after each block).
     3. Change the text inside the quotes.
     4. Save the file and re-upload it to your website host.

   ▸ FIELD GUIDE:
     id          — any unique short word/number (e.g. "2027-spring")
     title       — name of the meeting
     date        — format YYYY-MM-DD  (e.g. "2026-09-15")
     start       — 24-hour time, e.g. "19:00"  (7:00 PM)
     end         — 24-hour time, e.g. "20:30"  (8:30 PM)
     location    — where the meeting takes place
     description — one or two sentences shown on the calendar page

   ▸ The website automatically:
       • shows the next upcoming meeting on the home page plaque,
       • marks meeting days on the calendar,
       • sorts upcoming vs. past meetings,
       • lets residents download an "Add to Calendar" (.ics) file.

   ▸ Old meetings do NOT need to be deleted — they move to the
     "Past meetings" list by themselves.
   ============================================================ */

const FG_EVENTS = [
  {
    id: "2026-spring",
    title: "Spring General Meeting",
    date: "2026-03-10",
    start: "19:00",
    end: "20:30",
    location: "Oak Brook Public Library, 600 Oak Brook Rd",
    description: "Review of winter maintenance, spring landscaping plans for the entrance monuments, and the annual budget overview."
  },
  {
    id: "2026-summer",
    title: "Summer Board Meeting",
    date: "2026-06-16",
    start: "19:00",
    end: "20:30",
    location: "Oak Brook Public Library, 600 Oak Brook Rd",
    description: "Mid-year financial update, common-area landscaping review, and open forum for resident questions and concerns."
  },
  {
    id: "2026-fall",
    title: "Fall General Meeting",
    date: "2026-09-15",
    start: "19:00",
    end: "20:30",
    location: "Oak Brook Public Library, 600 Oak Brook Rd",
    description: "Autumn planting at the entrances, snow-removal contract for the coming winter, and neighborhood safety update with our HALO officer."
  },
  {
    id: "2026-annual",
    title: "Annual Meeting & Board Elections",
    date: "2026-12-08",
    start: "19:00",
    end: "21:00",
    location: "Oak Brook Public Library, 600 Oak Brook Rd",
    description: "Year-end financial report, 2027 budget and assessment vote, and election of directors. All homeowners are encouraged to attend."
  }
];
