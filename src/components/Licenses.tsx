'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Licenses() {
  const { t } = useTranslation()

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