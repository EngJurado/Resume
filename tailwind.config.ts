import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--bg-page) / <alpha-value>)",
                surface: "rgb(var(--bg-surface) / <alpha-value>)",
                primary: "rgb(var(--primary) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                border: "rgb(var(--border-color) / <alpha-value>)",
                // Custom text colors
                main: "rgb(var(--text-main) / <alpha-value>)",
                muted: "rgb(var(--text-muted) / <alpha-value>)",
            },
        },
    },
    plugins: [],
}
export default config
