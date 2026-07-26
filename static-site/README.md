# Gopikrishna Rajendran — Static Portfolio

A self-contained **HTML / CSS / vanilla-JS** version of the portfolio. No backend, no build step — just static files you can host **free on GitHub Pages**.

## Files
- `index.html` — all page content
- `styles.css` — all styling (dark + light themes)
- `script.js` — animations, theme toggle, tabs, contact
- `assets/headshot.png` — profile photo

## Features
- Dark / light theme toggle (remembers your choice)
- Scroll reveal animations, animated hero, marquee, timeline, project cards, pipeline tabs
- Contact form opens the visitor's email app pre-filled (**mailto:** — no server needed)

> Note: The Academic Projects section and PIN gate are **not** included in this static version (they required a backend). Your full-featured React version remains available on Emergent.

## Preview locally
Open `index.html` directly in a browser, or run a tiny server:
```bash
cd static-site
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish free on GitHub Pages
1. Create a new GitHub repository (e.g. `portfolio`).
2. Upload the contents of this `static-site` folder to the repo root
   (so `index.html` sits at the top level, with `assets/` beside it).
3. In the repo: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)** → **Save**
4. Wait ~1 minute. Your site goes live at:
   `https://<your-username>.github.io/<repo-name>/`

### Optional: use it as your main site
Name the repo `<your-username>.github.io` and it will be served at
`https://<your-username>.github.io/`.

## Editing content
All text/projects live inside `script.js` (arrays like `liveProjects`, `experience`, `skillGroups`, `pipeline`) and the hero text in `index.html`. Edit, save, re-upload.
