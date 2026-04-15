#!/bin/bash
# -----------------------------------------------------------------------------
# One-shot deploy script for the Rhahavy portfolio.
# Handles: GitHub auth → repo creation → push → GitHub Pages enablement.
# You only need to interact with one browser window (for auth).
# -----------------------------------------------------------------------------
set -e

GH=~/bin/gh
REPO="rhahavy.github.io"
USER="rhahavy"

# Colors for readability
BLUE="\033[0;34m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
RESET="\033[0m"

step() { echo -e "\n${BLUE}▸ $1${RESET}"; }
ok() { echo -e "${GREEN}✓ $1${RESET}"; }
warn() { echo -e "${YELLOW}! $1${RESET}"; }

cd "$(dirname "$0")"

# ---------- 1. Auth ----------
step "Step 1/4 — Logging into GitHub"
if $GH auth status >/dev/null 2>&1; then
  ok "Already authenticated."
else
  echo ""
  echo "A browser window will open. Sign in with your GitHub account,"
  echo "then copy the one-time code shown here and paste it in the browser."
  echo ""
  $GH auth login --web --hostname github.com --git-protocol https
fi

# ---------- 2. Create repo ----------
step "Step 2/4 — Creating repo $USER/$REPO"
if $GH repo view "$USER/$REPO" >/dev/null 2>&1; then
  warn "Repo already exists on GitHub. Skipping creation."
else
  $GH repo create "$REPO" --public --description "Personal portfolio — data analyst and dashboard developer."
  ok "Repo created: https://github.com/$USER/$REPO"
fi

# ---------- 3. Push ----------
step "Step 3/4 — Pushing code"
git push -u origin main
ok "Code pushed to main."

# ---------- 4. Enable Pages ----------
step "Step 4/4 — Enabling GitHub Pages (Actions source)"
if $GH api "repos/$USER/$REPO/pages" >/dev/null 2>&1; then
  warn "Pages already enabled. Skipping."
else
  $GH api -X POST "repos/$USER/$REPO/pages" -f "build_type=workflow" >/dev/null
  ok "GitHub Pages enabled with Actions as source."
fi

# ---------- Done ----------
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${GREEN}✅ Deploy kicked off!${RESET}"
echo ""
echo "   Your site will be live at: https://$REPO"
echo "   Build progress:            https://github.com/$USER/$REPO/actions"
echo ""
echo "   The first build takes about 90 seconds."
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
