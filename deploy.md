# ✅ Neopolis Infra is LIVE

**Live URL:** https://neopolis-infra.netlify.app
Hosted free on Netlify (team: hemantsatishjadhav06-ai). Auto-deployed via the Netlify connector.

To put it on your own domain (neopolisinfra.com): Netlify → Project "neopolis-infra" → Domain settings → Add a custom domain → point your DNS CNAME `www` to `neopolis-infra.netlify.app` (free HTTPS auto-issued).

To redeploy after edits: re-run the deploy, or connect this repo to GitHub (steps below) for auto-deploy on every push.

---

# Deploying Neopolis Infra (GitHub + Netlify — free)

This is a single-file static site (`index.html` + `assets/` + SEO files). No build step.

> ⚠️ **Security first:** a GitHub token was shared in chat. Before anything else, go to
> github.com/settings/tokens and **revoke/regenerate it**. Use the new token only in
> your own terminal (steps below). Never paste a token into a website or share it again.

---

## Option 1 — GitHub repo + Netlify auto-deploy (recommended, free)

### A. Push to GitHub
From this project folder, in your terminal:

```bash
git init -b main
git add -A
git commit -m "Neopolis Infra — landlord-share site"

# create an EMPTY repo at github.com/new (e.g. "neopolis-infra"), then:
git remote add origin https://github.com/<your-username>/neopolis-infra.git
git push -u origin main
```

When git asks for a password, paste your **new** Personal Access Token (not your GitHub
password). The token stays in your local credential store — it is never committed.

### B. Connect Netlify (free tier)
1. Sign in at https://app.netlify.com → **Add new site → Import an existing project**.
2. Choose **GitHub**, authorize, pick the `neopolis-infra` repo.
3. Build settings (already in `netlify.toml`, just confirm):
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
4. Click **Deploy**. You get a free `*.netlify.app` URL in ~30s.
5. Every `git push` now redeploys automatically.

### C. Custom domain (optional)
Netlify → **Domain settings → Add a custom domain** → `www.neopolisinfra.com`, then point
your DNS (CNAME `www` → your-site.netlify.app) at your registrar. Netlify issues free HTTPS.

---

## Option 2 — Netlify drag-and-drop (fastest, no Git)
1. Go to https://app.netlify.com/drop
2. Drag this entire project folder onto the page.
3. Done — instant free URL. (No auto-deploy; re-drag to update.)

---

## After deploy — verify
- Open the site, click through Home / The Share / Corridors / About / Contact.
- WhatsApp button, Call link, and Instagram (@neopolis_infra) all work.
- Test rich results: https://search.google.com/test/rich-results (paste your URL) — should detect RealEstateAgent + FAQ.
- Submit `https://www.neopolisinfra.com/sitemap.xml` in Google Search Console.

## Notes
- `.github/workflows/deploy-pages.yml` also exists (GitHub Pages). You can ignore it if
  using Netlify, or delete it to avoid duplicate deploys.
- Listing/corridor photos currently load from Unsplash (free, indicative). For production,
  replace the image URLs in `index.html` (the `CORRIDORS`/`LISTINGS` data + About photo)
  with your own project photos and add them under `assets/img/`.
- `assets/img/og-cover.jpg` is the social-share preview card (already generated).
