'use client'

import { useTranslation } from '@/lib/languageContext'
import { RESUME_DATA } from '@/data/resume-data'
import { IconWorld } from '@tabler/icons-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const { i18n, resumeData } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentLang(i18n.language)
  }, [i18n.language])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang)
    setCurrentLang(lang)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleDropdown()
    } else if (event.key === 'Escape') {
      setIsDropdownOpen(false)
    }
  }

  return (
    <header>
      <div className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <Image
              src={RESUME_DATA.avatarUrl}
              alt={resumeData.sectionTitles.profileImageAlt}
              className="hero-image"
              width={250}
              height={250}
              priority
            />
            <div className="text-content">
              <h1>{resumeData.name}</h1>
              <div className="about-content">
                <p>{resumeData.bio}</p>
                <div className="social-links">
                  {RESUME_DATA.contact.social.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name} link`}
                    >
                      <social.icon size={40} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="controls-container">
        <ThemeToggle />
        <div className="language-selector" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            onKeyDown={handleKeyDown}
            className="language-toggle"
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            aria-label={`Select language. Current language: ${currentLang === 'en' ? 'English' : 'Español'}`}
          >
            <IconWorld size={20} />
            <span className="language-text">{currentLang === 'en' ? 'English' : 'Español'}</span>
          </button>
          {isDropdownOpen && (
            <ul className="language-dropdown" role="listbox" aria-label="Language selection">
              <li
                role="option"
                aria-selected={currentLang === 'en'}
                onClick={() => handleLanguageChange('en')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleLanguageChange('en')
                  }
                }}
                tabIndex={0}
              >
                English
              </li>
              <li
                role="option"
                aria-selected={currentLang === 'es'}
                onClick={() => handleLanguageChange('es')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleLanguageChange('es')
                  }
                }}
                tabIndex={0}
              >
                Español
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}