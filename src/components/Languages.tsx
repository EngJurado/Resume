'use client'

import { useTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function Languages() {
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
    <section id="languages">
      <h2>{t('languages')}</h2>
      <ul>
        <li>{t('lang-1')}</li>
        <li>{t('lang-2')}</li>
      </ul>
    </section>
  )
}