'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Education() {
  const { t } = useTranslation()

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