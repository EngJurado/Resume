'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Recognitions() {
  const { t } = useTranslation()

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