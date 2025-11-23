'use client'

import { useTranslation } from '@/lib/languageContext'

export default function Experience() {
  const { resumeData } = useTranslation()

  return (
    <section id="experience">
      <h2>{resumeData.sectionTitles.experience}</h2>
      {resumeData.experience.map((job, index) => (
        <div className="job" key={index}>
          <h3>{job.title}</h3>
          <p className="date">{job.date}</p>
          <ul>
            {job.descriptions.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}