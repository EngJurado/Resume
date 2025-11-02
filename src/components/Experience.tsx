'use client'

import { useTranslation } from '@/lib/i18n'
import { useState, useEffect } from 'react'

export default function Experience() {
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
    <section id="experience">
      <h2>{t('experience')}</h2>
      <div className="job">
        <h3>{t('experience-1-title')}</h3>
        <p className="date">{t('experience-1-date')}</p>
        <ul>
          <li>{t('experience-1-desc-1')}</li>
          <li>{t('experience-1-desc-2')}</li>
          <li>{t('experience-1-desc-3')}</li>
          <li>{t('experience-1-desc-4')}</li>
        </ul>
      </div>
      <div className="job">
        <h3>{t('experience-2-title')}</h3>
        <p className="date">{t('experience-2-date')}</p>
        <ul>
          <li>{t('experience-2-desc-1')}</li>
          <li>{t('experience-2-desc-2')}</li>
          <li>{t('experience-2-desc-3')}</li>
          <li>{t('experience-2-desc-4')}</li>
        </ul>
      </div>
      <div className="job">
        <h3>{t('experience-3-title')}</h3>
        <p className="date">{t('experience-3-date')}</p>
        <ul>
          <li>{t('experience-3-desc-1')}</li>
          <li>{t('experience-3-desc-2')}</li>
        </ul>
      </div>
      <div className="job">
        <h3>{t('experience-4-title')}</h3>
        <p className="date">{t('experience-4-date')}</p>
        <ul>
          <li>{t('experience-4-desc-1')}</li>
        </ul>
      </div>
    </section>
  )
}