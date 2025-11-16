'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <p dangerouslySetInnerHTML={{ __html: t('footer') }} />
    </footer>
  )
}