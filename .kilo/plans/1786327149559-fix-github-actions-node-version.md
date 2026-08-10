# Fix deployment/runtime errors

## Current state
- `.github/workflows/deploy.yml` already uses `node-version: lts/*` (line 30). If the workflow is still failing with `Unable to find Node version 'lts'`, the fix exists locally but may not have been pushed, or GitHub Actions is running a cached/old commit.
- `src/styles/global.css` still contains `@font-face` referencing `/fonts/Inter.woff2`, and `public/fonts/` is empty. This causes the 404 at runtime.
- `src/layouts/MainLayout.astro` does not load Inter from Google Fonts.
- Cloudflare is proxying `engjurado.me` and injecting `beacon.min.js` and an unknown `/9s4i/` script. These are not present in the repo and cannot be fixed with source changes.

## Plan

### 1. Push the workflow fix
If the latest commit with `lts/*` is not on `origin/main`, push it:
```bash
git push origin main
```
Then verify the next GitHub Actions run uses Node LTS successfully.

### 2. Fix the font 404 (repo changes)
Edit `src/styles/global.css`:
- Remove the entire `@font-face` block (lines 36-42).

Edit `src/layouts/MainLayout.astro`:
- After `<link rel="icon" ... />`, add:
  ```astro
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet" />
  ```
- Keep `--font-sans: "Inter", system-ui, ...` in `global.css` unchanged.

Rebuild and redeploy. Verify the console no longer reports `/fonts/Inter.woff2` 404.

### 3. Silence Cloudflare beacon errors (Cloudflare dashboard)
These CORS/SRI errors are harmless but noisy. They happen because privacy tools block `static.cloudflareinsights.com`.
- Log in to Cloudflare > **Analytics** > **Web Analytics** (or **Speed** > **Optimization** > **RUM**).
- Disable it for `engjurado.me`.
- Save. The `beacon.min.js` script will stop injecting and the console errors disappear.

### 4. Investigate `/9s4i/` injection and `file:///` security error (Cloudflare dashboard)
These indicate a compromised delivery layer or misconfiguration. Source code cannot fix them.
- Cloudflare > **Workers & Pages** > **Workers**: delete any unknown or recently created workers.
- Cloudflare > **Rules** > **Page Rules**: remove rules that modify HTML/response bodies.
- Cloudflare > **Security** > **WAF**: review managed and custom rules for body-injection rules.
- Cloudflare > **Scrape Shield**: temporarily disable **Email Address Obfuscation** and **Server-side excludes** to test.
- Rotate the Cloudflare account password and all API tokens immediately.
- Check **Notifications** for unauthorized access.
- Use Cloudflare **Logs** / **Logpush** to trace where `/9s4i` originates.

## Validation
1. `git push origin main` and confirm the GitHub Actions workflow completes without the Node version error.
2. Run `npm run build` and confirm no font 404 references remain in `dist/`.
3. Open the deployed site with ad blockers disabled and confirm the beacon errors are gone after disabling Cloudflare RUM.
4. Confirm `/9s4i/` no longer appears after the Cloudflare audit.
