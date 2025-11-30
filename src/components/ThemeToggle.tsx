'use client'

import { useTheme } from 'next-themes'
import { IconSun, IconMoon } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="theme-toggle-button"
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
        </button>
    )
}
