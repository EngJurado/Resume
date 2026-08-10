# Improve WebSpeedTest performance and accessibility

## WebSpeedTest findings

### Render-blocking requests (880 ms savings)
- `/_astro/index.D-ku0t4H.css` — 5.3 KiB, 180 ms
- Google Fonts `/css2?family=Inter:wght@400&display=swap` — 1.3 KiB, 750 ms

### Cache lifetimes (21 KiB savings)
- `/images/avatar.jpg` — 4h cache TTL
- `/_astro/index.D-ku0t4H.css` — 4h cache TTL

### Network dependency tree (846 ms max critical path)
- Font CSS → font file chain
- Cloudflare injected scripts add latency

### Reduce unused JavaScript (95 KiB savings)
- `/9s4i/` — 173.7 KiB (injected by Cloudflare, not in repo)

### Image optimization (5 KiB savings)
- `avatar.jpg` is 400×400 but displayed at 336×336

### Accessibility failures
- Skip link not focusable
- No `<main>` landmark

## Plan

### 1. Eliminate Google Fonts render-blocking request
Switch from Google Fonts CDN to system font stack, removing the external CSS request entirely.
- Edit `src/layouts/MainLayout.astro`: remove Google Fonts `<link>` tags
- Edit `src/styles/global.css`: update `--font-sans` to use system fonts only
- This removes ~750 ms from critical path

### 2. Add `<main>` landmark
- Edit `src/pages/index.astro`: wrap page content in `<main id="main">` so the skip link has a target and the page has a proper landmark

### 3. Fix skip link focusability
- Edit `src/components/layout/SkipLink.astro`: ensure it has proper focus styles and is not hidden with `display:none` (current `.skip-link` uses `-top-full` which should work, but verify)

### 4. Optimize avatar image
- Resize `public/images/avatar.jpg` from 400×400 to 336×336 (or smaller, e.g., 256×256)
- Compress to reduce file size from 17.5 KiB to ~5 KiB
- Update `src/components/sections/Hero.astro` image classes if needed

### 5. Add cache headers
Create `public/_headers` with cache policies for static assets:
```
/images/*
  Cache-Control: public, max-age=31536000, immutable

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
```
This addresses the 4h cache TTL issue for avatar.jpg and CSS.

### 6. Inline critical CSS (optional, if needed after step 1)
If the CSS is still render-blocking after removing Google Fonts, consider inlining critical styles in `MainLayout.astro`. Astro v7 with `output: 'static'` and `build.format: 'file'` should handle this reasonably well.

## Validation
1. Run `npm run build` and verify no Google Fonts references remain
2. Check `dist/` for optimized avatar size
3. Verify `_headers` file is copied to `dist/` (may need `public/` copy config)
4. Run WebSpeedTest again and confirm:
   - No Google Fonts render-blocking request
   - Cache TTLs for images/CSS are 1 year
   - `<main>` landmark present
   - Skip link is focusable
   - `/9s4i/` warning remains (Cloudflare-side, not fixable in code)
