/**
 * Language Detection Service
 * Handles comprehensive language detection with fallback hierarchy:
 * 1. Geolocation-based (country → language)
 * 2. Browser language preferences
 * 3. English as final fallback
 */

import { detectUserLanguage } from './geolocation'

export const SUPPORTED_LANGUAGES = ['en', 'es'] as const
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]

/**
 * Extract preferred languages from browser
 * @returns Array of language codes ordered by preference
 */
export function getBrowserLanguages(): string[] {
  if (typeof window === 'undefined') {
    return []
  }
  
  const nav = navigator as any
  const languages = nav.languages || [nav.language || nav.userLanguage]
  
  return languages
    .map((lang: string) => lang.toLowerCase().split('-')[0])
    .filter((lang: string) => SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage))
}

/**
 * Detect language from browser settings
 * @returns Detected language or null if no supported languages found
 */
export function detectLanguageFromBrowser(): SupportedLanguage | null {
  const browserLangs = getBrowserLanguages()
  return browserLangs.length > 0 ? (browserLangs[0] as SupportedLanguage) : null
}

/**
 * Main language detection function with fallback hierarchy
 * @returns Promise that resolves to detected language
 */
export async function detectPreferredLanguage(): Promise<SupportedLanguage> {
  try {
    // First, try to get user's saved preference
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language')
      
      if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage as SupportedLanguage)) {
        return savedLanguage as SupportedLanguage
      }
    }

    // Second, try geolocation-based detection
    try {
      const geolocationLanguage = await detectUserLanguage()
      
      if (SUPPORTED_LANGUAGES.includes(geolocationLanguage as SupportedLanguage)) {
        return geolocationLanguage as SupportedLanguage
      }
    } catch (error) {
      // Silently fail geolocation
    }

    // Third, try browser language preferences
    const browserLanguage = detectLanguageFromBrowser()
    if (browserLanguage) {
      return browserLanguage
    }

    // Final fallback to English
    return 'en'
  } catch (error) {
    // Silently fail and use English
    return 'en'
  }
}

/**
 * Save user's language preference
 * @param language - Language code to save
 */
export function saveLanguagePreference(language: SupportedLanguage): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', language)
  }
}

/**
 * Get user's saved language preference
 * @returns Saved language preference or null
 */
export function getSavedLanguagePreference(): SupportedLanguage | null {
  if (typeof window === 'undefined') {
    return null
  }
  
  const savedLanguage = localStorage.getItem('preferred-language')
  return savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage as SupportedLanguage)
    ? (savedLanguage as SupportedLanguage)
    : null
}