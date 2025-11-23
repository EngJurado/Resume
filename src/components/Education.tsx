'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Education() {
  const { resumeData } = useTranslation()

  return (
    <section id="education">
      <h2>{resumeData.sectionTitles.education}</h2>
      {resumeData.education.map((edu, index) => (
        <div className="education-item" key={index}>
          <h3>{edu.title}</h3>
          <p className="date">{edu.date}</p>
          <p>{edu.desc}</p>
        </div>
      ))}
    </section>
  )
}