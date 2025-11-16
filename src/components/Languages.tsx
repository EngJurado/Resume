'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Languages() {
  const { t } = useTranslation()

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