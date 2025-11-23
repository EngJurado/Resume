'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Recognitions() {
  const { resumeData } = useTranslation()

  return (
    <section id="recognitions">
      <h2>{resumeData.sectionTitles.recognitions}</h2>
      <ul>
        {resumeData.recognitions.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </section>
  )
}