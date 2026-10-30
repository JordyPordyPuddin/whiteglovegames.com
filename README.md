# whiteglovegames.com

Static site for White Glove Game Studio (plain HTML/CSS, one tiny JS file for the mobile menu). No build step.

## Preview locally
    python3 -m http.server 8080   # then open http://localhost:8080

## Status
First draft (local only). HedgeRow price/date are drafts pending Jordan's OK; press@ address is a placeholder. Everything marked with a yellow dashed **TODO** box needs a real value or Jordan's sign-off.
Art is work-in-progress (art gate ~Nov 13, 2026): don't make the repo/site public until Jordan approves the images.

## Publish on GitHub Pages
1. Create a repo (e.g. `whiteglove-site`) on GitHub and push this folder to `main`.
2. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Custom domain: `whiteglovegames.com` (already in `CNAME`). After DNS resolves, tick **Enforce HTTPS**.
4. Optional but recommended: verify the domain under your GitHub account Settings → Pages → Verified domains (adds a TXT record) to prevent takeover.

## Porkbun DNS (Domain Management → whiteglovegames.com → DNS)
Delete Porkbun's default parking records (the ALIAS/CNAME pointing to `pixie.porkbun.com`) first, then add:

| Type  | Host  | Answer                 |
|-------|-------|------------------------|
| A     | (blank) | 185.199.108.153 |
| A     | (blank) | 185.199.109.153 |
| A     | (blank) | 185.199.110.153 |
| A     | (blank) | 185.199.111.153 |
| AAAA (optional) | (blank) | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www   | `<github-username>.github.io` |

DNS usually takes minutes to an hour. Check with `dig whiteglovegames.com +short`.
Email forwarding (e.g. press@) is set up separately in Porkbun and uses MX records; it doesn't conflict with the above.

## Files
- `merelybeasts/` (not in the nav; merelybeasts.com forwards here, see /workspace/merelybeasts-site/README.md; Porkbun URL forwarding is simplest)
- `index.html`, `hedgerow/`, `joiner/`, `press/`, `about/`, `contact/`, `404.html`
- `assets/site.css`, `assets/site.js`, `assets/img/` (web-size copies; originals untouched)
- `CNAME`, `.nojekyll`
