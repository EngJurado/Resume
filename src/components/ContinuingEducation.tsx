'use client'

import { useTranslation } from '@/lib/languageContext'

export default function ContinuingEducation() {
  const { t } = useTranslation()

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