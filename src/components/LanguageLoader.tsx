'use client'

import { useTranslation } from '@/lib/languageContext'

export default function LanguageLoader() {
  const { i18n } = useTranslation()

  if (i18n.isLoading) {
    return (
      <div className="language-loader">
        <div className="loader-spinner"></div>
        <span>Loading...</span>
      </div>
    )
  }

  return null
}