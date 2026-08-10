# Fix SEO: Spanish title, remove "Portfolio"

## Problem
Google shows "Carlos Mateo Jurado Díaz - Portfolio" because:
- `src/pages/index.astro` passes `buildJsonLd('Portfolio', ...)`
- JSON-LD `WebSite.name` is `"Portfolio"`, which Google combines with the Person name

## Changes

### `src/pages/index.astro`
- Line 18: `title="Carlos"` → `title="Carlos Mateo Jurado Díaz"`
- Line 21: `buildJsonLd('Portfolio', profile.bio)` → `buildJsonLd('Carlos Mateo Jurado Díaz', profile.bio)`

### `src/components/ui/SEO.astro`
- Line 3: default `title = 'Carlos'` → `title = 'Carlos Mateo Jurado Díaz'`
- Line 11: `const fullTitle = title === 'Carlos' ? title : \`${title} | Carlos\`;` → `const fullTitle = title === 'Carlos Mateo Jurado Díaz' ? title : \`${title} | Carlos Mateo Jurado Díaz\`;`

### `src/utils/seo.ts`
- No changes needed

## Result
- `<title>` and JSON-LD `WebSite.name` become `"Carlos Mateo Jurado Díaz"`
- Google stops appending `- Portfolio`
- Description stays in Spanish (`profile.bio` is already Spanish)

## Validation
1. `npm run build` → inspect `dist/index.html` for `<title>` and JSON-LD
2. Google Search Console → URL Inspection → Request re-indexing
3. Note: Google may still show cached English description until it re-crawls
