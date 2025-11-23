'use client'

import { useTranslation } from '@/lib/languageContext'

export default function ContinuingEducation() {
  const { resumeData } = useTranslation()

  return (
    <section id="continuing-education">
      <h2>{resumeData.sectionTitles.continuingEducation}</h2>
      <ul>
        {resumeData.continuingEducation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  )
}