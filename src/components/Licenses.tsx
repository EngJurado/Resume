'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Licenses() {
  const { resumeData } = useTranslation()

  return (
    <section id="licenses">
      <h2>{resumeData.sectionTitles.licenses}</h2>
      <ul>
        {resumeData.licenses.map((license, index) => (
          <li key={index}>{license}</li>
        ))}
      </ul>
    </section>
  )
}