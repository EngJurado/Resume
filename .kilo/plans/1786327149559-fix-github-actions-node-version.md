# Fix deployment errors

## Problems
1. **Missing font**: `GET https://engjurado.me/fonts/Inter.woff2` returns 404. The `public/fonts/` directory is empty, but `src/styles/global.css` references `/fonts/Inter.woff2`.
2. **Cloudflare beacon CORS/SRI**: `static.cloudflareinsights.com/beacon.min.js` fails with CORS and integrity mismatch. The computed hash `z4PhNX7vuL3xVChQ1m2AB9Yg5AULVxXcg/SpIdNs6c5H0NE8XYXysP+DGNKHfuwvY7kxvUdBeoGlODJ6+SfaPg==` is the SHA-512 of empty content, meaning the request is blocked before reaching Cloudflare (likely by privacy tools / ad blockers / Firefox Enhanced Tracking Protection).
3. **Unexpected `9s4i` script**: `https://engjurado.me/9s4i/` is not in the source code or built HTML. It is being injected dynamically. The site is behind Cloudflare proxy (confirmed via `server: cloudflare` header and `rosalyn.ns.cloudflare.com` nameservers). This is a security concern — likely a compromised Cloudflare Worker, Page Rule, or account.

## Fixes

### 1. Font 404
**Option A (recommended)**: Switch to Google Fonts CDN to avoid self-hosting.
- Remove `@font-face` from `src/styles/global.css`
- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` to `src/layouts/MainLayout.astro`
- Add `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet">` to `src/layouts/MainLayout.astro`
- Update `@theme { --font-sans: ... }` in `src/styles/global.css` to keep `"Inter", system-ui, ...`

**Option B**: Add the `Inter.woff2` file to `public/fonts/`. Note: you must provide or generate the font file; this repo does not contain it.

### 2. Cloudflare beacon errors
These errors are **harmless** if caused by privacy tools. The site functions normally; only RUM (Real User Monitoring) data is lost.

**To silence the errors**: Disable Cloudflare Web Analytics / RUM in the Cloudflare dashboard for `engjurado.me`.

**To keep it**: No code change needed. Inform users that the errors are expected when using privacy extensions.

### 3. `9s4i` script injection (security)
This requires immediate investigation of your Cloudflare account:
- Log in to the Cloudflare dashboard for `engjurado.me`
- Review **Workers** — check for any unknown or recently created Workers that inject scripts
- Review **Page Rules** — check for any rules that modify response bodies
- Review **Security > WAF** — check for managed rules or custom rules that inject scripts
- Review **Analytics > Logs** — look for unusual requests to `/9s4i/`
- Rotate all Cloudflare API tokens and account password
- Check if the Cloudflare account email was compromised

Do **not** ignore this. A script injected from your own domain with no trace in the repo indicates a compromised delivery layer.

## Validation
1. Build and deploy after applying the font fix.
2. Verify `/fonts/Inter.woff2` returns 200 or that Google Fonts loads correctly.
3. Confirm the site works in a browser with ad blockers disabled.
4. Audit Cloudflare dashboard for the `9s4i` injection source.
