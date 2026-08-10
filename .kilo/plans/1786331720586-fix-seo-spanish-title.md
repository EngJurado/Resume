# Fix SEO: Spanish title, remove "Portfolio", fix JSON-LD mainEntity

## Problem 1: Search result title
Google shows "Carlos Mateo Jurado Díaz - Portfolio" because:
- `src/pages/index.astro` passes `buildJsonLd('Portfolio', ...)`
- JSON-LD `WebSite.name` is `"Portfolio"`, which Google combines with the Person name

## Problem 2: Structured data validation error
Rich Results Test / Schema validator reports: `ProfilePage` missing required field `mainEntity`.

## Changes

### `src/pages/index.astro`
- Line 18: `title="Carlos"` → `title="Carlos Mateo Jurado Díaz"`
- Line 21: `buildJsonLd('Portfolio', profile.bio)` → `buildJsonLd('Carlos Mateo Jurado Díaz', profile.bio)`

### `src/components/ui/SEO.astro`
- Line 3: default `title = 'Carlos'` → `title = 'Carlos Mateo Jurado Díaz'`
- Line 11: `const fullTitle = title === 'Carlos' ? title : \`${title} | Carlos\`;` → `const fullTitle = title === 'Carlos Mateo Jurado Díaz' ? title : \`${title} | Carlos Mateo Jurado Díaz\`;`

### `src/utils/seo.ts`
- Add `"@id": siteUrl` to the `Person` node so it can be referenced
- Add `mainEntity: { "@id": siteUrl }` to the `ProfilePage` node to satisfy Schema.org requirement
- Keep the `WebSite` node (it provides site-level metadata that `isPartOf` references)

Resulting JSON-LD structure:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://engjurado.me",
      "name": "Carlos Mateo Jurado Díaz",
      "jobTitle": "Bioingeniero",
      "url": "https://engjurado.me",
      "sameAs": [...]
    },
    {
      "@type": "ProfilePage",
      "mainEntity": { "@id": "https://engjurado.me" },
      "description": "...",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Carlos Mateo Jurado Díaz",
        "url": "https://engjurado.me"
      }
    },
    {
      "@type": "WebSite",
      "name": "Carlos Mateo Jurado Díaz",
      "url": "https://engjurado.me",
      "description": "..."
    }
  ]
}
```

## Result
- `<title>` and JSON-LD `WebSite.name` become `"Carlos Mateo Jurado Díaz"`
- Google stops appending `- Portfolio`
- `ProfilePage` now has `mainEntity` pointing to the `Person`, fixing the validator error
- Description stays in Spanish (`profile.bio` is already Spanish)

## Validation
1. `npm run build` → inspect `dist/index.html` for `<title>` and JSON-LD
2. Run [Rich Results Test](https://search.google.com/test/rich-results) or [Schema.org validator](https://validator.schema.org/) on `https://engjurado.me/` and confirm no `mainEntity` error
3. Google Search Console → URL Inspection → Request re-indexing
4. Note: Google may still show cached English description until it re-crawls
