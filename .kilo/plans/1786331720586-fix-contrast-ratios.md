# Fix contrast ratios

## Problem
Light-mode text fails WCAG AA on white background:
- `text-teal-600` → ratio ~3.0:1 (needs 4.5:1)
- `text-slate-400` → ratio ~2.3:1 (needs 4.5:1)

## Changes

### Light mode
Replace the following classes:

| From | To | Ratio |
|------|----|-------|
| `text-teal-600` | `text-teal-700` | 4.6:1 |
| `text-slate-400` | `text-slate-600` | 5.8:1 |

### Dark mode
Keep unchanged — already passes:
- `dark:text-teal-400` → 8.2:1
- `dark:text-slate-500` → 5.7:1

## Files to edit

1. `src/components/sections/Experience.astro`
   - Line 18: `text-teal-600` → `text-teal-700`
   - Line 19: `text-slate-400` → `text-slate-600`
   - Lines 38-39: same replacements

2. `src/components/sections/Education.astro`
   - Line 18: `text-teal-600` → `text-teal-700`
   - Line 19: `text-slate-400` → `text-slate-600`
   - Lines 47-48: same replacements

3. `src/components/sections/Memberships.astro`
   - Line 16: `text-teal-600` → `text-teal-700`
   - Line 17: `text-slate-400` → `text-slate-600`
   - Lines 32-33: same replacements

4. `src/components/sections/Courses.astro`
   - Line 13: `text-teal-600` → `text-teal-700`
   - Line 14: `text-slate-400` → `text-slate-600`

5. `src/components/sections/Certifications.astro`
   - Line 13: `text-teal-600` → `text-teal-700`
   - Line 14: `text-slate-400` → `text-slate-600`

6. `src/components/sections/Skills.astro`
   - Line 12: `text-slate-400` → `text-slate-600`

7. `src/components/layout/Footer.astro`
   - Line 7: `text-slate-400` → `text-slate-600`

8. `src/components/ui/SocialLinks.astro`
   - Line 33: `text-slate-400` → `text-slate-600`

9. `src/components/ui/DarkModeToggle.astro`
   - Line 12: `text-slate-400` → `text-slate-600`

## Validation
- Rebuild and run Lighthouse/axe
- Verify no contrast failures in light mode
- Confirm dark mode still renders correctly
