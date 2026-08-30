# Neopolis Infra — Website

Marketing website for **Neopolis Infra**, the landlord-share desk of the Neopolis Group, selling premium West-Hyderabad property **direct from the source — no middlemen, no markups.**

This is a complete creative rebuild of [neopolisinfra.com](https://www.neopolisinfra.com/): a fast, accessible **single-file app** with an architect's *master-plan / blueprint* design, built in hand-written HTML, CSS and vanilla JavaScript. No framework, no build step required to run.

---

## ✦ Highlights

- **One file, five pages.** Home, The Share, Corridors, About and Contact all run from `index.html` via client-side hash routing (`#/`, `#/the-share`, …). Open it anywhere — every page works.
- **Brand-accurate identity.** Navy `#081d4a`, orange `#ff6600`, white — taken from the live site's own stylesheet — plus its asymmetric rounded-corner motif, elevated into a full design system.
- **"Master plan" creative concept.** Blueprint grids, drafting-style "FIG.0X" annotations, an animated site-plan hero with a survey scan-line, and draw-on SVG line work — all tied to the business (land parcels = the landlord's share).
- **Interactive savings calculator.** Drag a target price, pick a corridor, see resale-vs-direct bars, the rupee saving, and a pre-filled WhatsApp CTA.
- **Clickable corridor map.** Select a parcel to load that corridor's stats in a live panel.
- **Filterable listings**, an **auto-advancing testimonial slider**, scroll-progress bar, animated counters, reveal-on-enter, mobile nav — all respecting `prefers-reduced-motion`.
- **WhatsApp-first conversion.** Floating button, per-corridor deep links, and a contact form that composes a WhatsApp message client-side, so the site needs **no backend**.

---

## ✦ Run it locally

Plain static files — no build needed:

```bash
# Zero install — open directly
open index.html

# Or a local server (recommended; lets the map iframe + relative logo behave)
npx serve .                  # http://localhost:3000
# or
python3 -m http.server 3000  # http://localhost:3000
```

### Build a single self-contained file

```bash
npm run build        # → python3 tools/build.py
```

Produces `dist/neopolis-infra.html` — one file with the logo embedded as a data URI. Drag it onto any static host (see below) and you're live.

---

## ✦ Deploy

Any static host works. Fastest options:

- **Drag-and-drop (30 seconds, instant URL):** build the single file (`npm run build`) and drag `dist/neopolis-infra.html` onto **[Netlify Drop](https://app.netlify.com/drop)** or **[tiiny.host](https://tiiny.host)**. Rename it to `index.html` on upload.
- **Netlify (repo):** connect the repo — `netlify.toml` sets headers, caching and an SPA fallback. No build command needed.
- **Vercel:** import the repo; `vercel.json` handles clean URLs and headers. Framework preset: **Other**.
- **GitHub Pages:** push (below) and enable Pages → *Source: GitHub Actions*; `deploy-pages.yml` publishes automatically.
- **Any cPanel / static host:** upload the files (or just the one built file) to the web root.

---

## ✦ Push to GitHub

Already a git repo with history. To publish:

```bash
git remote add origin https://github.com/<your-username>/neopolis-infra.git
git branch -M main
git push -u origin main
```

---

## ✦ Project structure

```
neopolis-infra/
├── index.html              # The entire app (HTML + CSS + JS, hash-routed)
├── assets/img/
│   ├── logo.png            # Official brand logo
│   └── bg-texture.webp     # Brand background texture
├── tools/build.py          # Emits dist/neopolis-infra.html (self-contained)
├── .github/workflows/      # CI + GitHub Pages deploy
├── netlify.toml · vercel.json   # Host configs (headers, caching, SPA fallback)
├── robots.txt · sitemap.xml
├── package.json · .editorconfig · .gitignore
└── LICENSE · CHANGELOG.md · README.md
```

---

## ✦ Customising content

- **Phone / WhatsApp** — `+91 95336 86567` (`919533686567`) is used in `tel:` and `wa.me` links; find-and-replace to change everywhere.
- **Corridors & listings** — edit the `CORRIDORS` object and `LISTINGS` array near the top of the `<script>` in `index.html`; the map, teasers, calculator chips, panel and cards all read from them.
- **Colours / fonts** — CSS custom properties at the top of the `<style>` block.
- **Logo** — replace `assets/img/logo.png`.

---

## ⚠️ Before going live

- **Listing prices, corridor ₹/sq.ft ranges and photos are indicative placeholders** (asterisked, with a disclaimer). Swap in real inventory and **owned/licensed imagery** — cards currently use Unsplash stand-ins.
- Point `sitemap.xml` / `robots.txt` at the production domain.
- Note: hash-routed pages share one URL, which is great for a single-file deploy but not separately indexed by search engines. If per-page SEO matters later, the same content can be split into static pages.

---

## ✦ License

Proprietary — © 2025 Neopolis Infra Developers / Neopolis Group. See [`LICENSE`](./LICENSE). Fonts are OFL; placeholder photography is under the Unsplash License and should be replaced for production.
