# Changelog

## 2026-06-27 — SEO/AEO + contact + UX upgrade
- SEO: keyword-led title, meta description, canonical, robots, geo, full Open Graph + Twitter cards, social share image (og-cover.jpg).
- AEO: JSON-LD (RealEstateAgent/LocalBusiness, WebSite, BreadcrumbList, Service, FAQPage) + llms.txt; robots.txt opened to AI/answer-engine crawlers.
- Content: FAQ expanded to 12 answer-engine-optimized Q&As (matched in page + schema).
- Contact: removed all email; WhatsApp + phone (+91 95336 86567) + Instagram (@neopolis_infra) only.
- UX/A11y: skip link, anchor scroll offset, image lazy-loading + alt + dimensions, form autocomplete, PWA manifest.

# Changelog

All notable changes to this project are documented here.

## [2.0.0] — 2025  ·  "Master Plan" creative rebuild
### Changed
- Rebuilt as a single-file app (`index.html`) with client-side hash routing —
  Home, The Share, Corridors, About, Contact all live in one deployable file.
- New creative direction: an architect's **blueprint / master-plan** theme —
  drafting-grid backgrounds, "FIG.0X" annotations, an animated site-plan hero
  with a survey scan-line, and draw-on SVG line work.

### Added
- **Interactive savings calculator** — drag a target price, pick a corridor, and
  see resale-vs-direct bars with the rupee saving and a pre-filled WhatsApp CTA.
- **Clickable master-plan map** — select a corridor parcel to load its stats
  (₹/sq.ft, ticket range, highlights) in a live side panel.
- **Filterable listings** by corridor and an **auto-advancing testimonial slider**.
- Scroll-progress bar, animated counters, reveal-on-enter, back-to-top.
- `tools/build.py` → emits `dist/neopolis-infra.html`, one self-contained file
  (logo inlined) that deploys by drag-and-drop.

### Notes
- Listing prices, corridor ranges and photography are indicative placeholders.
  Swap in real inventory and owned imagery before going live.

## [1.0.0] — 2025
- Initial multi-page static site (Home, The Share, Corridors, About, Contact, 404)
  with the navy/orange brand system extracted from neopolisinfra.com.
