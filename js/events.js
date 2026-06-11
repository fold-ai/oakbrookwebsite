/* ============================================================
   FOREST GLEN — MEETINGS & EVENTS
   ============================================================

   The board meets on the SECOND TUESDAY of every month.
   The dates below are already filled in through June 2027.
   Locations vary, so each entry simply tells residents to
   contact a board member to confirm where (and when) to come.

   ▸ HOW TO POST OR EDIT A MEETING / EVENT (no coding needed):

     1. Copy one of the blocks between { ... } below.
     2. Paste it into the list (keep the comma after each block).
     3. Change the text inside the quotes.
     4. Save the file and re-upload it to your website host.

   ▸ FIELD GUIDE:
     id          — any unique short word/number (e.g. "2027-picnic")
     title       — name of the meeting or event
     date        — format YYYY-MM-DD  (e.g. "2026-09-08")
     start       — OPTIONAL 24-hour time, e.g. "19:00" (7:00 PM).
                   Leave it out if the time isn't fixed yet.
     end         — OPTIONAL 24-hour time, e.g. "20:30" (8:30 PM)
     location    — where it takes place
     description — one or two sentences shown on the calendar page

   ▸ Example with a fixed time and place (e.g. the summer picnic):

     {
       id: "2026-picnic",
       title: "Community Picnic",
       date: "2026-08-22",
       start: "12:00",
       end: "15:00",
       location: "Forest Glen Park",
       description: "Food, games, and an afternoon with neighbors."
     },

   ▸ The website automatically:
       • shows the next upcoming meeting on the home page plaque,
       • marks meeting days on the calendar,
       • sorts upcoming vs. past meetings,
       • lets residents download an "Add to Calendar" (.ics) file.

   ▸ Old meetings do NOT need to be deleted — they move to the
     "Past meetings" list by themselves.
   ============================================================ */

/* Shared wording for the monthly board meetings */
const FG_BOARD_LOCATION = "Location varies — contact any board member to confirm";
const FG_BOARD_DESC =
  "Regular monthly meeting of the Forest Glen board. To confirm the " +
  "location and time, please contact any member of the Board of " +
  "Directors — all homeowners are welcome.";

const FG_EVENTS = [
  /* ---- Second-Tuesday board meetings, June 2026 – June 2027 ---- */
  { id: "bm-2026-06", title: "Monthly Board Meeting", date: "2026-06-09",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2026-07", title: "Monthly Board Meeting", date: "2026-07-14",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2026-08", title: "Monthly Board Meeting", date: "2026-08-11",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2026-09", title: "Monthly Board Meeting", date: "2026-09-08",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2026-10", title: "Monthly Board Meeting", date: "2026-10-13",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2026-11", title: "Monthly Board Meeting", date: "2026-11-10",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2026-12", title: "Monthly Board Meeting", date: "2026-12-08",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2027-01", title: "Monthly Board Meeting", date: "2027-01-12",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2027-02", title: "Monthly Board Meeting", date: "2027-02-09",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2027-03", title: "Monthly Board Meeting", date: "2027-03-09",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2027-04", title: "Monthly Board Meeting", date: "2027-04-13",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2027-05", title: "Monthly Board Meeting", date: "2027-05-11",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC },
  { id: "bm-2027-06", title: "Monthly Board Meeting", date: "2027-06-08",
    location: FG_BOARD_LOCATION, description: FG_BOARD_DESC }
];
