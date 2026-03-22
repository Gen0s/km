# Portfolio — Vite + React + Tailwind CSS

Slate & amber vCard-style personal portfolio.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → open http://localhost:5173
```

## Customise

All your personal content lives in one file:

```
src/data.js
```

Edit the values marked with `← replace` — name, bio, links, projects, skills, experience, etc.

**Add your photo:**
- Place `photo.jpg` (or any image) inside the `public/` folder
- In `src/data.js`, set `avatar: '/photo.jpg'`

**Add your CV:**
- Place `cv.pdf` inside the `public/` folder
- The Download CV button already points to `/cv.pdf`

**Add project screenshots:**
- Place images in `public/projects/`
- In `src/data.js`, add `image: '/projects/yourimage.png'` to a project entry

**Contact form (Formspree — free):**
1. Sign up at https://formspree.io
2. Create a new form → copy your Form ID
3. Open `src/components/Contact.jsx`
4. Uncomment the fetch block and replace `YOUR_ID` with your form ID
5. Remove the `setSent(true)` placeholder line above it

---

## Deploy to GitHub Pages

### One-time setup

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

In `vite.config.js`, set `base` to your repo name:
```js
base: '/your-repo-name/',
```

### Deploy

```bash
npm run deploy
```

Then go to your repo → **Settings → Pages → Source: gh-pages branch**.

### Custom domain

1. In GitHub Pages settings, enter your domain
2. In `vite.config.js`, change `base: '/'`
3. Add a `CNAME` file in `public/` containing just your domain, e.g. `yourdomain.com`
4. Run `npm run deploy` again

---

## Project Structure

```
portfolio/
├── public/             ← static assets (photo, cv.pdf, project images)
│   └── cv.pdf          ← your CV goes here
├── src/
│   ├── components/
│   │   ├── Icons.jsx   ← SVG icon components
│   │   ├── Sidebar.jsx ← left sidebar (photo, contacts, socials)
│   │   ├── About.jsx   ← About tab
│   │   ├── Resume.jsx  ← Résumé tab (timeline + skills)
│   │   ├── Portfolio.jsx ← Portfolio tab (filterable grid)
│   │   └── Contact.jsx ← Contact tab (info + form)
│   ├── data.js         ← ★ ALL YOUR CONTENT LIVES HERE
│   ├── App.jsx         ← shell layout + tab switching
│   ├── main.jsx        ← React entry point
│   └── index.css       ← Tailwind + custom animations
├── index.html
├── vite.config.js      ← change base for GitHub Pages
├── tailwind.config.js
└── package.json
```
