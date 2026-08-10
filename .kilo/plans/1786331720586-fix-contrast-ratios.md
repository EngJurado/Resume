# Fix SEO metadata: Spanish description and remove "Portfolio"

## Current state
- `src/pages/index.astro` passes `title="Carlos"` and `buildJsonLd('Portfolio', profile.bio)`
- JSON-LD `WebSite.name` is `"Portfolio"` → Google combines it with Person name to show "Carlos Mateo Jurado Díaz - Portfolio"
- `src/components/ui/SEO.astro` has `fullTitle = title === 'Carlos' ? title : \`${title} | Carlos\``
- `src/utils/seo.ts` uses the passed `title` for both `ProfilePage.isPartOf.WebSite.name` and `WebSite.name`

## Goal
1. Remove "Portfolio" from search result title
2. Ensure description is served in Spanish (already is in code; Google may show cached English translation)
3. Keep titles clean and descriptive

## Changes

### 1. `src/pages/index.astro`
- Change `title="Carlos"` → `title="Carlos Mateo Jurado Díaz"`
- Change `buildJsonLd('Portfolio', profile.bio)` → `buildJsonLd('Carlos Mateo Jurado Díaz', profile.bio)`

### 2. `src/components/ui/SEO.astro`
- Update `fullTitle` logic so it doesn't append `| Carlos` when title is already the full name:
  ```astro
  const fullTitle = title === 'Carlos' ? title : `${title} | Carlos`;
  ```
  → Since title will now be `'Carlos Mateo Jurado Díaz'`, it will correctly produce `'Carlos Mateo Jurado Díaz | Carlos'`
  
  Wait, that's not what we want. We want just `'Carlos Mateo Jurado Díaz'` or a clean Spanish title without redundant "Carlos".
  
  Better approach:
  ```astro
  const fullTitle = title === 'Carlos Mateo Jurado Díaz' ? title : `${title} | Carlos Mateo Jurado Díaz`;
  ```
  Or even simpler, just use the title directly and remove the suffix logic since the homepage is the main site.

  Actually, simplest: change the condition to match the new title value:
  ```astro
  const fullTitle = title === 'Carlos Mateo Jurado Díaz' ? title : `${title} | Carlos Mateo Jurado Díaz`;
  ```

### 3. `src/utils/seo.ts`
- No changes needed; it will receive the new title string and use it for JSON-LD WebSite names.

## Validation
1. Rebuild site (`npm run build`)
2. Check `<title>` and meta description in `dist/index.html`
3. Verify JSON-LD `WebSite.name` is `"Carlos Mateo Jurado Díaz"` (not "Portfolio")
4. Use Google Search Console URL Inspection to request re-indexing
5. Note: Google may still show English description until it re-crawls and stops auto-translating
