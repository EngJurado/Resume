'use client'

import { useTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function Skills() {
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
    <section id="skills">
      <h2>{t('skills')}</h2>

      <div className="skill-category">
        <h3>{t('clinical-title')}</h3>
        <p>{t('clinical-desc')}</p>
      </div>

      <div className="skill-category">
        <h3>{t('data-title')}</h3>
        <p>{t('data-desc')}</p>
      </div>

      <div className="skill-category">
        <h3>{t('programming-title')}</h3>
        <p>{t('programming-desc')}</p>
      </div>

      <div className="skill-category">
        <h3>{t('cloud-title')}</h3>
        <p>{t('cloud-desc')}</p>
      </div>

      <div className="skill-category">
        <h3>{t('interpersonal-title')}</h3>
        <p>{t('interpersonal-desc')}</p>
      </div>
    </section>
  )
}