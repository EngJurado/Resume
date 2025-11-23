'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Skills() {
  const { resumeData } = useTranslation()

  return (
    <section id="skills">
      <h2>{resumeData.sectionTitles.skills}</h2>

      {resumeData.skills.map((skill, index) => (
        <div className="skill-category" key={index}>
          <h3>{skill.title}</h3>
          <p>{skill.desc}</p>
        </div>
      ))}
    </section>
  )
}