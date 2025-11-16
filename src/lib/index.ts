// Re-export the main i18n functionality
export * from './i18n'

// Export the new language context functionality
export { LanguageProvider, useLanguage } from './languageContext'

// Export language detection functionality
export * from './languageDetection'

// Export server-side language detection
export * from './serverLanguageDetection'

// Export geolocation functionality
export * from './geolocation'