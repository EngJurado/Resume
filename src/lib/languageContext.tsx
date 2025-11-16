'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { 
  detectPreferredLanguage, 
  saveLanguagePreference, 
  getSavedLanguagePreference,
  type SupportedLanguage 
} from './languageDetection'

interface LanguageContextType {
  language: SupportedLanguage
  changeLanguage: (lang: SupportedLanguage) => void
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  initialLanguage?: SupportedLanguage
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [language, setLanguage] = useState<SupportedLanguage>(initialLanguage || 'en')
  const [isLoading, setIsLoading] = useState(!initialLanguage)

  useEffect(() => {
    // Always detect language unless there's a saved preference
    const initializeLanguage = async () => {
      setIsLoading(true)
      
      try {
        // Check for saved preference first
        const savedLang = getSavedLanguagePreference()
        
        if (savedLang) {
          setLanguage(savedLang)
        } else {
          // Detect language from browser settings or geolocation
          const detectedLang = await detectPreferredLanguage()
          setLanguage(detectedLang)
          saveLanguagePreference(detectedLang)
        }
      } catch (error) {
        // Fallback to English if detection fails
        setLanguage('en')
      } finally {
        setIsLoading(false)
      }
    }

    initializeLanguage()
  }, [initialLanguage])

  const changeLanguage = (lang: SupportedLanguage) => {
    setLanguage(lang)
    saveLanguagePreference(lang)
    
    // Dispatch custom event for components that listen for language changes
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }))
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook for translation that works with the new context
export function useTranslation() {
  const { language, changeLanguage, isLoading } = useLanguage()
  const [translations, setTranslations] = useState<any>({})

  useEffect(() => {
    // Import translations dynamically to avoid circular dependencies
    import('./i18n').then((module) => {
      setTranslations(module.translations)
    })
  }, [])

  const t = (key: string) => {
    const translation = translations[language]?.[key] || translations['en']?.[key] || key
    return translation
  }

  return { t, i18n: { language, changeLanguage, isLoading } }
}