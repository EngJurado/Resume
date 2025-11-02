'use client'

import { useTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function Licenses() {
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
    <section id="licenses">
      <h2>{t('licenses')}</h2>
      <ul>
        <li>{t('license-1')}</li>
        <li>{t('license-2')}</li>
        <li>{t('license-3')}</li>
      </ul>
    </section>
  )
}