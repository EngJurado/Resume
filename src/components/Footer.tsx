'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Footer() {
  const { resumeData } = useTranslation()

  return (
    <footer>
      <p dangerouslySetInnerHTML={{ __html: resumeData.sectionTitles.footer }} />
    </footer>
  )
}