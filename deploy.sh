#!/usr/bin/env bash
# ───────────────────────────────────────────────────────────────
# Neopolis Infra — one-command deploy to Netlify (free, instant URL)
# Usage:   bash deploy.sh <NETLIFY_TOKEN>
#   or:    NETLIFY_AUTH_TOKEN=xxx bash deploy.sh
# Get a token: app.netlify.com → User settings → Applications →
#              Personal access tokens → New access token
# ───────────────────────────────────────────────────────────────
set -euo pipefail
TOKEN="${1:-${NETLIFY_AUTH_TOKEN:-}}"
if [ -z "$TOKEN" ]; then
  echo "Usage: bash deploy.sh <netlify-token>   (or set NETLIFY_AUTH_TOKEN)"; exit 1
fi
DIR="$(cd "$(dirname "$0")" && pwd)"; cd "$DIR"

echo "→ Packaging site…"
TMP="$(mktemp -d)"
cp index.html "$TMP/index.html"
mkdir -p "$TMP/assets/img"; cp assets/img/* "$TMP/assets/img/" 2>/dev/null || true
cp netlify.toml "$TMP/" 2>/dev/null || true
( cd "$TMP" && zip -rq site.zip . )

echo "→ Creating Netlify site…"
SITE=$(curl -fsS -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -X POST https://api.netlify.com/api/v1/sites -d '{}')
SITE_ID=$(printf '%s' "$SITE" | python3 -c "import sys,json;print(json.load(sys.stdin)['id'])")
NAME=$(printf '%s' "$SITE" | python3 -c "import sys,json;print(json.load(sys.stdin)['name'])")
echo "   provisioned: https://$NAME.netlify.app"

echo "→ Deploying files…"
DEPLOY=$(curl -fsS -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/zip" \
  --data-binary @"$TMP/site.zip" -X POST "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys")
URL=$(printf '%s' "$DEPLOY" | python3 -c "import sys,json;d=json.load(sys.stdin);print(d.get('ssl_url') or d.get('url') or '')")
rm -rf "$TMP"

echo ""
echo "✅ LIVE: ${URL:-https://$NAME.netlify.app}"
echo "   (manage it at app.netlify.com — you can rename the site or add your domain)"
