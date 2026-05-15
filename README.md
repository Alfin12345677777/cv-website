# alfinputra.github.io

This is the source for my academic CV website at **https://alfinputra.github.io**.

It's a single-page hand-built site (HTML + CSS + a tiny bit of JS) — no Jekyll, no build step, no dependencies. You just push the files, GitHub Pages serves them.

## Folder structure

```
.
├── index.html              ← the page itself
├── assets/
│   ├── css/style.css       ← all styling lives here
│   ├── js/script.js        ← tiny scroll-reveal script
│   ├── img/
│   │   ├── favicon.svg
│   │   ├── portrait.jpg              ← REPLACE with your photo (4:5 ratio works best)
│   │   ├── handmesh-comparison.png   ← REPLACE with your hand mesh visualization
│   │   ├── stellink-screens.png      ← REPLACE with Stellink screenshots
│   │   └── beacon-screens.png        ← REPLACE with Beacon screenshots
│   └── cv/
│       └── Alfin_Putra_CV.pdf        ← REPLACE with your latest CV PDF
└── README.md
```

## How to deploy (first time, ~5 minutes)

1. **Create a GitHub account** if you don't already have `alfinputra`:
   - Go to https://github.com/signup
   - Use the username **alfinputra**

2. **Create a new repository** named exactly `alfinputra.github.io`
   - https://github.com/new
   - Repository name: `alfinputra.github.io` (this exact name is what makes it a personal site)
   - Public, no README (this folder already has one)

3. **Push these files to the repo.** From this folder in a terminal:

   ```bash
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/alfinputra/alfinputra.github.io.git
   git push -u origin main
   ```

4. **Wait ~30 seconds**, then visit https://alfinputra.github.io — the site is live.

## How to update content (after launch)

- **Replace placeholders** by overwriting files in `assets/img/` and `assets/cv/` with the same filename. The site will show your real photo / visualizations.
- **Edit text** in `index.html` — find the text, change it, push.
- **Change colors** in `assets/css/style.css` — the `:root` variables at the top control everything.

To push changes:

```bash
git add .
git commit -m "update photo and projects"
git push
```

GitHub Pages takes ~30 seconds to redeploy.

## Image requirements

| File | Use | Recommended dimensions |
|---|---|---|
| `portrait.jpg` | Your portrait photo | 800 × 1000 px (4:5 ratio) |
| `handmesh-comparison.png` | Hand mesh visualization | 1200 × 900 px (4:3) |
| `stellink-screens.png` | Stellink app screenshot(s) | 1200 × 900 px (4:3) |
| `beacon-screens.png` | Beacon app screenshot(s) | 1200 × 900 px (4:3) |

The site automatically falls back to a diagonal-striped placeholder if an image is missing, so you can deploy the empty version first and add images later.

## Design notes (in case you want to tweak)

- Aesthetic: editorial / warm-paper / refined minimalism
- Fonts: **Fraunces** (serif headers) + **IBM Plex Sans** (body) + **JetBrains Mono** (eyebrow / labels)
- Accent color: deep terracotta (`#b85c38`)
- Background: warm off-white paper (`#f6f1e8`)
- Single-page, all anchors hash-linked
- Responsive down to mobile
- Subtle SVG grain overlay, pulsing dot in the eyebrow, soft scroll reveal animations
- No tracking, no analytics, no cookies

## License

Personal site code. Feel free to keep, modify, or scrap any of it.
