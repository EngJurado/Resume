'use client'

import { useTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function Education() {
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
    <section id="education">
      <h2>{t('education')}</h2>
      <div className="education-item">
        <h3>{t('education-1-title')}</h3>
        <p className="date">{t('education-1-date')}</p>
        <p>{t('education-1-desc')}</p>
      </div>
      <div className="education-item">
        <h3>{t('education-2-title')}</h3>
        <p className="date">{t('education-2-date')}</p>
        <p>{t('education-2-desc')}</p>
      </div>
    </section>
  )
}