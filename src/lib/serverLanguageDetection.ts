/**
 * Server-side language detection utilities
 * Simplified approach that avoids static generation issues
 * Default to English for SSR, client-side will detect and override
 */

/**
 * Get initial language for server-side rendering
 * Uses English for SSR to avoid static generation issues
 * Client-side detection will override this with more accurate detection
 * @returns Language code for SSR (default is English)
 */
export function getInitialLanguage(): 'en' | 'es' {
  return 'en'
}