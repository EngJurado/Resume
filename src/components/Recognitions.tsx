'use client'

import { useTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function Recognitions() {
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
    <section id="recognitions">
      <h2>{t('recognitions')}</h2>
      <ul>
        <li>{t('recognition-1')}</li>
        <li>{t('recognition-2')}</li>
      </ul>
    </section>
  )
}