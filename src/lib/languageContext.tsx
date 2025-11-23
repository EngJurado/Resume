'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
  detectPreferredLanguage,
  saveLanguagePreference,
  getSavedLanguagePreference,
  type SupportedLanguage
} from './languageDetection'
import { RESUME_DATA } from '@/data/resume-data'

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

  const resumeData = language === 'es' ? RESUME_DATA.translations.es : RESUME_DATA.translations.en

  const t = (key: string) => {
    // Helper for legacy support
    if (key === 'name') return resumeData.name;
    if (key === 'bio') return resumeData.bio;
    if (key === 'profile-image-alt') return resumeData.sectionTitles.profileImageAlt;
    if (key === 'email-link') return `Send email to ${resumeData.name}`;
    if (key === 'github-link') return `Visit ${resumeData.name}'s GitHub profile`;
    if (key === 'linkedin-link') return `Visit ${resumeData.name}'s LinkedIn profile`;
    if (key === 'telegram-link') return `Contact ${resumeData.name} on Telegram`;
    if (key === 'whatsapp-link') return `Contact ${resumeData.name} on WhatsApp`;
    if (key === 'x-link') return `Visit ${resumeData.name}'s X (Twitter) profile`;

    // Section titles
    if (key === 'experience') return resumeData.sectionTitles.experience;
    if (key === 'education') return resumeData.sectionTitles.education;
    if (key === 'continuing-education') return resumeData.sectionTitles.continuingEducation;
    if (key === 'licenses') return resumeData.sectionTitles.licenses;
    if (key === 'languages') return resumeData.sectionTitles.languages;
    if (key === 'skills') return resumeData.sectionTitles.skills;
    if (key === 'recognitions') return resumeData.sectionTitles.recognitions;

    // Fallback for other keys if necessary, or return key
    return key
  }

  return { t, i18n: { language, changeLanguage, isLoading }, resumeData }
}