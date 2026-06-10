# Forest Glen — Oak Brook, IL · Website

Простий чотирьохсторінковий сайт для Forest Glen subdivision (Oak Brook, Illinois).
A simple four-page website for the Forest Glen subdivision (Oak Brook, Illinois).

Чистий HTML + CSS + JavaScript — без фреймворків, без бази даних, без збірки.
Plain HTML + CSS + JavaScript — no frameworks, no database, no build step.

---

## 📄 Сторінки / Pages

| Файл / File     | Сторінка / Page                                  |
|-----------------|--------------------------------------------------|
| `index.html`    | Головна / Home (hero + плашка «Next Meeting»)    |
| `calendar.html` | Календар зустрічей / Meetings & Calendar         |
| `board.html`    | Рада директорів / Board of Directors             |
| `contact.html`  | Контакти / Contact (телефон, email, мапа)        |

---

## 🗓 ЯК ДОДАТИ ЗУСТРІЧ / HOW TO POST A MEETING

**Єдиний файл, який треба редагувати: `js/events.js`**
**The only file you need to edit: `js/events.js`**

1. Відкрийте `js/events.js` у будь-якому текстовому редакторі (Notepad, TextEdit).
   Open `js/events.js` in any text editor (Notepad, TextEdit).
2. Скопіюйте один блок `{ ... },` і вставте поруч.
   Copy one `{ ... },` block and paste it next to the others.
3. Змініть текст у лапках: назву, дату (`YYYY-MM-DD`), час (`19:00`), місце, опис.
   Change the text in quotes: title, date (`YYYY-MM-DD`), time (`19:00`), location, description.
4. Збережіть файл і завантажте його на хостинг.
   Save the file and re-upload it to your host.

Сайт сам:
* покаже найближчу зустріч на головній сторінці (бронзова плашка),
* позначить дні зустрічей рожевим у календарі,
* розсортує майбутні та минулі зустрічі,
* дасть мешканцям кнопку **Add to calendar** (.ics) для телефона/комп'ютера.

The site automatically:
* shows the next meeting on the home-page plaque,
* marks meeting days in pink on the calendar,
* sorts upcoming vs. past meetings,
* gives residents an **Add to calendar** (.ics) button.

Старі зустрічі видаляти не обов'язково — вони самі переходять у «Past meetings».
You don't need to delete old meetings — they move to "Past meetings" by themselves.

---

## 👥 РАДА ДИРЕКТОРІВ / BOARD OF DIRECTORS

Файл: `board.html`. Зараз там **зразкові (вигадані) імена** — замініть їх на справжні:
File: `board.html`. It currently contains **sample (fictional) names** — replace them with real ones:

* ім'я та прізвище / name,
* посаду / role (President, Treasurer…),
* рік початку каденції / "Director since…",
* телефон (у двох місцях: `tel:+1630…` і видимий текст) / phone (in two places: the `tel:+1630…` link and the visible text),
* email (так само у двох місцях) / email (also in two places),
* ініціали в кружечку (`<div class="member__avatar">MA</div>`) / the initials in the circle.

Щоб додати шостого члена ради — скопіюйте весь блок `<article class="member"> … </article>`.
To add a sixth member, copy a whole `<article class="member"> … </article>` block.

---

## ☎️ КОНТАКТИ / CONTACT DETAILS

Зразкові контакти асоціації (замініть на справжні):
Sample association contacts (replace with real ones):

* телефон `(630) 555-0142` — у `contact.html` та у футері **всіх чотирьох** сторінок;
* email `info@forestglenoakbrook.org` — там само;
* поштова скринька `P.O. Box 5183` — там само.

Підказка: знайдіть і замініть (Ctrl+F / Cmd+F) старе значення в кожному файлі.
Tip: use find-and-replace (Ctrl+F / Cmd+F) in each file.

**Справжні дані, вже перевірені / Real, verified details already on the site:**
* HALO-офіцер поліції для Forest Glen: Officer Franczak, (630) 706-4069, afranczak@oak-brook.org
* Village Hall: 1200 Oak Brook Road, Oak Brook, IL 60523, (630) 368-5000, oak-brook.org

---

## 🚀 ЯК ОПУБЛІКУВАТИ / HOW TO PUBLISH

Завантажте **всю папку** (зі збереженою структурою) на будь-який хостинг:
Upload the **whole folder** (keeping its structure) to any host:

* Netlify / Vercel / Cloudflare Pages — перетягніть папку, безкоштовно / drag-and-drop, free;
* GitHub Pages — безкоштовно / free;
* будь-який звичайний хостинг (cPanel, FTP) — у папку `public_html` / any classic host.

Жодних налаштувань сервера не потрібно. No server configuration is needed.

---

## 🗂 Структура / Structure

```
forest-glen-website/
├── index.html          ← Головна / Home
├── calendar.html       ← Календар / Calendar
├── board.html          ← Рада / Board
├── contact.html        ← Контакти / Contact
├── css/
│   └── styles.css      ← Увесь дизайн / all styling
├── js/
│   ├── events.js       ← ⭐ ЗУСТРІЧІ — редагуйте тут / MEETINGS — edit here
│   ├── main.js         ← меню, плашка, дати / menu, plaque, dates
│   └── calendar.js     ← логіка календаря / calendar logic
└── images/
    ├── entrance-spring.jpg
    ├── entrance-autumn.jpg
    ├── neighborhood-garden.jpg
    └── favicon.svg
```

Дизайн натхненний самим районом: вапняковий камінь в'їзного знаку, бронзові
літери, сосни та газони (зелений), квітучі багряники у квітні (рожевий акцент).

The design is drawn from the neighborhood itself: the limestone entrance
monument, its bronze letters, the pines and lawns (green), and the redbuds
that bloom over the gates each April (the pink accent).
