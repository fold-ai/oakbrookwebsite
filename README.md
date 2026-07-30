# Forest Glen — Oak Brook, IL · Website

Простий чотирьохсторінковий сайт для Forest Glen subdivision (Oak Brook, Illinois).
A simple four-page website for the Forest Glen subdivision (Oak Brook, Illinois).

Чистий HTML + CSS + JavaScript — без фреймворків, без бази даних, без збірки.
Plain HTML + CSS + JavaScript — no frameworks, no database, no build step.

---

## 📄 Сторінки / Pages

| Файл / File      | Сторінка / Page                                          |
|------------------|----------------------------------------------------------|
| `index.html`     | Головна / Home (hero + плашка «Next Meeting»)            |
| `board.html`     | Рада директорів / Board of Directors (7 members)         |
| `calendar.html`  | Календар зустрічей / Meetings & Calendar                 |
| `documents.html` | Документи й корисні посилання / Documents & Helpful Links|

PDF-документи лежать у папці `documents/` (By-Laws + Declaration).
The PDFs live in the `documents/` folder (By-Laws + Declaration).

---

## 🗓 ЗУСТРІЧІ / MEETINGS

**Єдиний файл, який треба редагувати: `js/events.js`**
**The only file you ever need to edit: `js/events.js`**

Зустрічі ради вже внесені на рік уперед — **другий вівторок кожного місяця,
з червня 2026 до червня 2027**. Біля кожної написано, що локацію треба
уточнити в будь-кого з директорів.

Board meetings are already entered a year ahead — **the second Tuesday of
every month, June 2026 through June 2027**. Each entry tells residents to
contact a board member to confirm the location.

### Додати нову зустріч чи подію / Add a new meeting or event

1. Відкрийте `js/events.js` у будь-якому редакторі (Notepad, TextEdit).
   Open `js/events.js` in any text editor (Notepad, TextEdit).
2. Скопіюйте один блок `{ ... },` і вставте поруч.
   Copy one `{ ... },` block and paste it next to the others.
3. Змініть текст у лапках: `id`, `title`, `date` (РРРР-ММ-ДД), `location`,
   `description`. Поля `start`/`end` (час) — необов'язкові: якщо час ще не
   відомий, просто не додавайте їх.
   Change the text in quotes: `id`, `title`, `date` (YYYY-MM-DD), `location`,
   `description`. The `start`/`end` (time) fields are optional — leave them
   out if the time isn't fixed yet.
4. Збережіть файл і завантажте на хостинг.
   Save the file and re-upload it to your host.

Сайт сам: покаже найближчу зустріч на головній, позначить дні в календарі,
розсортує майбутні/минулі та дасть кнопку «Add to calendar» (.ics).
The site automatically: shows the next meeting on the home page, marks the
days on the calendar, sorts upcoming vs. past, and offers an
"Add to calendar" (.ics) button.

Коли мине червень 2027 — додайте так само наступні другі вівторки.
After June 2027 passes, add the next second-Tuesdays the same way.

---

## 👥 РАДА ДИРЕКТОРІВ / BOARD OF DIRECTORS

Усі 7 директорів з реальними телефонами та email уже на сторінці `board.html`.
All 7 directors with their real phones and emails are already on `board.html`.

Щоб замінити людину: відкрийте `board.html`, знайдіть блок
`<article class="member"> ... </article>` і поміняйте ім'я, роль, телефон
(у двох місцях: `href="tel:+1..."` і видимий текст), email (так само двічі)
та дві літери ініціалів у `member__avatar`.

To replace a person: open `board.html`, find their
`<article class="member"> ... </article>` block and change the name, role,
phone (in two places: `href="tel:+1..."` and the visible text), email
(also twice), and the two initials inside `member__avatar`.

---

## 📑 ДОКУМЕНТИ / DOCUMENTS

Щоб додати документ: покладіть PDF у папку `documents/` і скопіюйте одну
картку `<div class="contact-card"> ... </div>` на сторінці `documents.html`,
замінивши назву, опис і шлях до файла.

To add a document: drop the PDF into the `documents/` folder and copy one
`<div class="contact-card"> ... </div>` card on `documents.html`, changing
the title, description, and file path.

---

## 🚀 ЯК ОПУБЛІКУВАТИ / HOW TO PUBLISH

Підійде будь-який статичний хостинг / Any static host works:

* **Netlify** — drag & drop цієї папки на https://app.netlify.com/drop
* **GitHub Pages** — завантажте файли в репозиторій → Settings → Pages
* **Vercel**, або хостинг із cPanel — просто скопіюйте файли в `public_html`

Жодних налаштувань сервера не потрібно. / No server configuration needed.

Шрифти Google Fonts і потребують інтернету; на хостингу все працює само.
Google Fonts load from the internet; on a real host everything just works.
