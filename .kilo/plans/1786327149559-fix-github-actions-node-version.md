# Fix deployment/runtime errors

## Current state
- `.github/workflows/deploy.yml` already uses `node-version: lts/*` (line 30).
- `src/styles/global.css` no longer contains the `@font-face` block for `/fonts/Inter.woff2`.
- `src/layouts/MainLayout.astro` already loads Inter from Google Fonts.
- Both fixes are committed locally (`0ccdbcb`, `15a0389`) but were **not pushed** to `origin/main` because the last push failed with authentication.
- Cloudflare is proxying `engjurado.me` and injecting `beacon.min.js` and an unknown `/9s4i/` script. These are not present in the repo.

## Plan

### 1. Push existing fixes to GitHub
The source changes are already committed. Resolve git authentication and push:
```bash
git push origin main
```
After pushing, GitHub Actions will rebuild and redeploy. The font 404 will disappear once the new artifact is live.

### 2. Silence Cloudflare beacon errors (Cloudflare dashboard)
- Cloudflare Dashboard > **Analytics** > **Web Analytics** (or **Speed** > **Optimization** > **RUM**)
- Disable for `engjurado.me`
- Save. This stops `beacon.min.js` injection and removes the CORS/SRI console errors.

### 3. Investigate `/9s4i/` injection (Cloudflare dashboard)
- Cloudflare > **Workers & Pages** > **Workers**: delete any unknown/recent workers
- Cloudflare > **Rules** > **Page Rules**: remove rules modifying response bodies
- Cloudflare > **Security** > **WAF**: review managed/custom rules
- Cloudflare > **Scrape Shield**: temporarily disable **Email Address Obfuscation** and **Server-side excludes**
- Rotate Cloudflare account password and all API tokens
- Check **Notifications** for unauthorized access
- Use Cloudflare **Logs** / **Logpush** to trace `/9s4i` origin

### 4. Investigate `file:///` security error
No `file://` references exist in the repo. This is likely injected by Cloudflare or a browser extension. After completing step 3, retest. If it persists, capture the exact request/response in browser DevTools Network tab to identify the injecting source.

## Validation
1. `git push origin main` succeeds and GitHub Actions completes without Node version errors.
2. Live site no longer requests `/fonts/Inter.woff2`.
3. Cloudflare Web Analytics disabled; beacon console errors gone.
4. `/9s4i/` no longer appears after Cloudflare audit.
