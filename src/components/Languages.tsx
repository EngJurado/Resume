'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Languages() {
  const { resumeData } = useTranslation()

  return (
    <section id="languages">
      <h2>{resumeData.sectionTitles.languages}</h2>
      <ul>
        {resumeData.languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </section>
  )
}