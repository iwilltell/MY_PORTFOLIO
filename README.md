# Wibhor Kumar Roy — Personal Portfolio

A calm, minimal, and personal developer portfolio built with plain HTML, CSS, and JavaScript.

**Live URL:** https://iwilltell.github.io/MY_PORTFOLIO/

---

## Quick Start

No build step required. Open `index.html` in any browser.

```bash
# Option 1: open directly
start index.html

# Option 2: use a local dev server (recommended)
npx serve .
# or
python -m http.server 8080
```

---

## Project Structure

```
/
├── index.html                  ← Main HTML file
├── style.css                   ← All styles (CSS variables design system)
├── script.js                   ← All JavaScript
├── assets/
│   ├── images/
│   │   └── profile.jpg         ← ⚠️ ADD YOUR PHOTO HERE
│   ├── projects/
│   │   ├── sakuri.jpg          ← ⚠️ Add project screenshots
│   │   ├── job-scraper.jpg
│   │   ├── file-organizer.jpg
│   │   ├── phone-unlock.jpg
│   │   └── recommendation.jpg
│   ├── certificates/
│   │   ├── certificate-1.pdf   ← ⚠️ Add certificate PDFs
│   │   ├── certificate-2.pdf
│   │   ├── certificate-3.pdf
│   │   └── certificate-4.pdf
│   └── documents/
│       └── Wibhor-Kumar-Roy-CV.pdf  ← ⚠️ ADD YOUR CV HERE
└── README.md
```

---

## Assets You Need to Add

### Profile Photo
- Path: `assets/images/profile.jpg`
- Recommended: Square or portrait crop, min 600×600px
- The site shows a placeholder if the file is missing

### Project Screenshots
- Paths: `assets/projects/sakuri.jpg`, etc.
- Recommended: 1200×630px or similar landscape format
- The site shows path placeholders if files are missing

### Certificate PDFs
- Paths: `assets/certificates/certificate-1.pdf` through `certificate-4.pdf`
- The Preview button shows a placeholder if the file is missing
- The Download button will work as soon as the file exists

### CV / Resume
- Path: `assets/documents/Wibhor-Kumar-Roy-CV.pdf`
- Both the nav Download CV button and hero button point to this file
- Add your PDF here before deploying

---

## GitHub Pages Deployment

1. Push the repository to GitHub (repo name: `MY_PORTFOLIO`)
2. Go to **Settings → Pages**
3. Under **Source**, select: `Deploy from a branch`
4. Select: `main` branch, `/ (root)` folder
5. Click Save
6. Wait ~2 minutes, then visit: `https://iwilltell.github.io/MY_PORTFOLIO/`

> All asset paths are relative (no leading `/`) so they work correctly under the GitHub Pages subpath.

---

## Updating Content

### Updating Projects
Edit the `PROJECTS` object in `script.js`. Each project has:
- `title`, `type`, `image`
- `overview`, `whatIBuilt`, `howItWorks`
- `tech` array (technology tags)
- `features` array
- `github` and `demo` URLs (set to `null` for placeholder)

### Adding a New Project
1. Add a new entry to the `PROJECTS` object in `script.js`
2. Add a new `PROJECT_NAMES` entry
3. Add a project card in the `#projects` section of `index.html`
4. Add the project screenshot to `assets/projects/`

### Updating Skills (Arsenal)
Edit the tech-tag buttons in the `#arsenal` section of `index.html`.
The `data-projects` attribute should list comma-separated project IDs.

### Updating Certificates
Edit the certificate cards in the `#certificates` section of `index.html`.
Match the `assets/certificates/certificate-N.pdf` path.

### GitHub / LinkedIn Links
Search for `iwilltell` in `index.html` and `script.js` to find all occurrences.

---

## Rating System

Ratings are stored in `localStorage`. This means:
- Each visitor's browser stores ratings locally
- There is no shared/global backend yet
- When you add a backend (e.g., MongoDB API), replace `getRatings()` / `saveRatings()` in `script.js` with API calls — the UI does not need to change

Duplicate submission prevention: one rating per browser session (via `localStorage` flag).

---

## Easter Eggs

- **Konami Code:** `↑ ↑ ↓ ↓ ← → ← → B A` — opens a secret terminal
- **Backtick ×3:** press the backtick key (`` ` ``) three times quickly
- **Browser Console:** open DevTools → Console for a greeting message

---

## Design System

Colors and spacing are defined as CSS variables in `style.css` under `:root`.

Key variables:
```css
--color-bg:         #F5F3EE   /* warm off-white background */
--color-text:       #242421   /* primary text */
--color-text-muted: #74736D   /* secondary text */
--color-sage:       #7D8977   /* muted green accent */
--color-wood:       #8A755F   /* warm brown */
--color-accent:     #5C7A54   /* forest green interactive accent */
--font-sans:        'Inter'
--font-serif:       'DM Serif Display'
```

---

## Tech Stack

- HTML5 (semantic)
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+, no frameworks)
- Google Fonts: Inter + DM Serif Display
- No build tools required
- No npm dependencies

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
No IE11 support (intentional — CSS Grid and custom properties are used throughout).

---

## License

Personal portfolio — feel free to use the structure as inspiration.
Do not copy content, personal information, or project descriptions.
