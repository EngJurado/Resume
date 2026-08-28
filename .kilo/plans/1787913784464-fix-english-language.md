# Fix English Language in Website

## Problem
Several content files contain Spanish text that appears on the English version of the website (`/en/`).

## Issues Found

### 1. `src/data/experience.ts`
- `endDate` is hardcoded as `'Presente'` (Spanish) for all entries.
- **Fix**: Convert `endDate` to an object with `es` and `en` keys, or use a translatable label.

### 2. `src/data/courses.ts`
- Course `name` and `institution` fields have no `en` translations.
- Component renders `{course.name}` and `{course.institution}` directly without language lookup.
- **Fix**: Add `en` translations for each course name and institution. Update component to use `{course.name[lang]}` and `{course.institution[lang]}`.

### 3. `src/data/memberships.ts`
- `society`, `role`, and hardcoded `Desde` in the component are all Spanish.
- Component does not use `lang` for content lookup.
- **Fix**: Add `en` translations for `society` and `role`. Replace hardcoded `Desde {membership.since}` with a localized label (e.g., add `sinceLabel` to data or use a translation key).

### 4. `src/data/certifications.ts`
- One certification `name` is entirely in Spanish:
  - "Recurso Humano para Mantenimiento y Verificación de la calibración para Equipos Biomédicos de Tecnología Controlada de clases IIb y III"
- **Fix**: Add an English translation for this certification name.

## Implementation Steps

1. Update `src/data/experience.ts`:
   - Change `endDate` from `string` to `{ es: string, en: string }`.
   - Set English value to `'Present'`.

2. Update `src/data/courses.ts`:
   - Add `en` translations for all `name` and `institution` fields.
   - Update `src/components/sections/Courses.astro` to use `{course.name[lang]}` and `{course.institution[lang]}`.

3. Update `src/data/memberships.ts`:
   - Change `society` and `role` to `{ es: string, en: string }`.
   - Add English translations.
   - Update `src/components/sections/Memberships.astro` to use `{membership.society[lang]}`, `{membership.role[lang]}`, and replace hardcoded `Desde` with a localized label (add translation key or use `lang === 'es' ? 'Desde ' : 'Since '`).

4. Update `src/data/certifications.ts`:
   - Add English translation for the Spanish certification name.

## Validation
- Run `npm run dev` and visit `/en/` to verify all content renders in English.
- Visit `/es/` to verify Spanish content remains unchanged.
