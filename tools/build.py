#!/usr/bin/env python3
"""
Neopolis Infra — build step.
Produces dist/neopolis-infra.html: a single, fully self-contained file with the
logo embedded as a data URI. That one file renders anywhere and can be
drag-and-dropped onto any static host (Netlify Drop, tiiny.host, etc.).
Run:  python3 tools/build.py   (or: npm run build)
"""
import base64, pathlib, shutil
ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"

def main():
    html = (ROOT / "index.html").read_text(encoding="utf-8")
    logo = base64.b64encode((ROOT / "assets/img/logo.png").read_bytes()).decode()
    html = html.replace("assets/img/logo.png", "data:image/png;base64," + logo)
    if DIST.exists(): shutil.rmtree(DIST)
    DIST.mkdir(parents=True)
    (DIST / "neopolis-infra.html").write_text(html, encoding="utf-8")
    for f in ("robots.txt", "sitemap.xml"):
        shutil.copy(ROOT / f, DIST / f)
    print(f"  built  dist/neopolis-infra.html  ({len(html)//1024} KB, self-contained)")

if __name__ == "__main__":
    main()
