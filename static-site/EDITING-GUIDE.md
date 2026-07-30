# Editing Guide — Static Portfolio (HTML/CSS/JS)

This is a plain static website. No build step, no server. You edit text files and re-upload.

## Files you'll touch
| File | What lives here |
|------|-----------------|
| `script.js` | **All content data**: projects, experience, skills, languages, pipeline, manifesto |
| `index.html` | Page structure + hero text, counts, section headings, contact email/links |
| `styles.css` | Colors, fonts, spacing (only if you want to restyle) |
| `assets/headshot.png` | Your profile photo |

> Golden rule: **content = `script.js`**, **layout/text labels = `index.html`**.

---

## 1) Add a NEW live project
Open `script.js`, find the `liveProjects` array. Copy one block and edit it:
```js
{ name: "Project Name", blurb: "One-line description.", tags: ["Tag1","Tag2"], link: "https://your-link", signature: false },
```
- Put a **comma** after the `}` of every item.
- `signature: true` highlights the card (adds a SIGNATURE badge). Use `false` (or omit) for normal cards.
- Then update the counter in `index.html`: search for `live deployments` and change the number.

## 2) Remove a project
In `script.js`, delete that whole `{ ... },` line. Update the `live deployments` number in `index.html`.

## 3) Edit experience
In `script.js`, edit the `experience` array. Each job:
```js
{ company: "Name", role: "Title", period: "Jan 2023 — Present", location: "City",
  points: ["Achievement one.", "Achievement two."],
  metrics: ["95%+ KPI","20% cost cut"] },
```

## 4) Edit skills
In `script.js`, edit the `skillGroups` array — add/remove strings inside `items: [ ... ]`.

## 5) Edit pipeline (Projects / Games / Hobbies)
In `script.js`, edit the `pipeline` object.
- `{ name: "X", link: "https://...", live: true }` → clickable card
- `{ name: "X", live: false }` → shows a "SOON" tag

## 6) Change hero text / headline / tagline
In `index.html`, find the `<section id="top" class="hero">` block and edit the text inside
`<h1 class="name">`, `.headline`, and `.tagline`.

## 7) Change contact email / social links
In `index.html`, search for `gkrishna.69800@gmail.com` and the social `href="..."` links in the
contact section and footer. Update as needed.

## 8) Replace your photo
Replace `assets/headshot.png` with a new PNG of the same name (square, transparent or plain
background works best). Keep the file name identical.

## 9) Change colors / theme
In `styles.css`, the palette is at the top:
- Dark theme under `:root { ... }`
- Light theme under `html[data-theme="light"] { ... }`
Values are HSL (`hue saturation% lightness%`). The `--primary` variable is the accent color.

---

## Preview your changes locally
```bash
cd static-site
python3 -m http.server 8000
# open http://localhost:8000
```
Or just double-click `index.html` to open it in a browser.

## Publish the update (GitHub Pages)
1. Replace the changed files in your GitHub repo (drag-drop upload or `git push`).
2. GitHub Pages redeploys automatically in ~1 minute.

## Common mistakes to avoid
- Missing comma between items in an array → page goes blank. (Check the browser console: F12.)
- Renaming `assets/headshot.png` → image breaks. Keep the name.
- Editing inside `<script src="script.js">` in `index.html` — don't; data is in `script.js`.
