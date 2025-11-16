'use client'

import { useTranslation } from '@/lib/languageContext'
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandWhatsapp, IconBrandX, IconWorld } from '@tabler/icons-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const { t, i18n } = useTranslation()
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
              src="/profile.webp"
              alt={t('profile-image-alt') || "Professional headshot of Carlos Mateo Jurado Díaz, Bioengineer"}
              className="hero-image"
              width={250}
              height={250}
            />
            <div className="text-content">
              <h1>{t('name')}</h1>
              <div className="about-content">
                <p>{t('bio')}</p>
                <div className="social-links">
                  <a href="mailto:eng.jurado@gmail.com" target="_blank" rel="noopener noreferrer" aria-label={t('email-link')}>
                    <IconMail size={40} />
                  </a>
                  <a href="https://github.com/EngJurado" target="_blank" rel="noopener noreferrer" aria-label={t('github-link')}>
                    <IconBrandGithub size={40} />
                  </a>
                  <a href="https://www.linkedin.com/in/engjurado/" target="_blank" rel="noopener noreferrer" aria-label={t('linkedin-link')}>
                    <IconBrandLinkedin size={40} />
                  </a>
                  <a href="https://telegram.me/engjurado" target="_blank" rel="noopener noreferrer" aria-label={t('telegram-link')}>
                    <IconBrandTelegram size={40} />
                  </a>
                  <a href="https://wa.me/qr/Y57EJ6RVNLYQI1" target="_blank" rel="noopener noreferrer" aria-label={t('whatsapp-link')}>
                    <IconBrandWhatsapp size={40} />
                  </a>
                  <a href="https://x.com/EngJurado" target="_blank" rel="noopener noreferrer" aria-label={t('x-link')}>
                    <IconBrandX size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </header>
  )
}