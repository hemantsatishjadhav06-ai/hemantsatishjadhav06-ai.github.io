#!/usr/bin/env bash
# Run:  bash push-to-github.sh
# Pushes this folder to a GitHub repo. When git asks for a PASSWORD, paste your
# GitHub Personal Access Token (create one at github.com/settings/tokens, scope: repo).
set -e
read -p "Your new GitHub repo URL (e.g. https://github.com/<you>/neopolis-infra.git): " REPO
git init -b main 2>/dev/null || true
git add -A
git commit -m "Neopolis Infra — landlord-share site (SEO/AEO, Morespace images, live)" || true
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO"
git push -u origin main
echo ""
echo "Done. Now connect this repo in Netlify (Add new site -> Import from Git) for auto-deploy,"
echo "or it's already live at https://neopolis-infra.netlify.app"
