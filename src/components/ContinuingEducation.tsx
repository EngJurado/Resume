'use client'

import { useTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function ContinuingEducation() {
  const { t } = useTranslation()
  const [forceUpdate, setForceUpdate] = useState(0)

  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1)
    }

    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  return (
    <section id="continuing-education">
      <h2>{t('continuing-education')}</h2>
      <ul>
        <li>{t('ce-1')}</li>
        <li>{t('ce-2')}</li>
        <li>{t('ce-3')}</li>
        <li>{t('ce-4')}</li>
        <li>{t('ce-5')}</li>
        <li>{t('ce-6')}</li>
      </ul>
    </section>
  )
}