import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/languageContext'
import { getInitialLanguage } from '@/lib/serverLanguageDetection'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get initial language for SSR
  const initialLanguage = getInitialLanguage()

  return (
    <html lang={initialLanguage}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carlos Mateo Jurado Díaz",
              "jobTitle": "Bioengineer",
              "description": "Bioengineer with expertise in neuromodulation, AI, and biomedical solutions. Professional experience in medical devices, machine learning, and clinical technical support.",
              "image": "/profile.webp",
              "url": "https://yourdomain.com",
              "sameAs": [
                "https://github.com/EngJurado",
                "https://www.linkedin.com/in/engjurado/",
                "https://x.com/EngJurado",
                "https://telegram.me/engjurado",
                "https://wa.me/qr/Y57EJ6RVNLYQI1"
              ],
              "knowsAbout": [
                "Neuromodulation",
                "Artificial Intelligence",
                "Machine Learning",
                "Biomedical Engineering",
                "Medical Devices",
                "Data Science"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Bioengineer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Colombia"
                }
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Antioquia"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "International University of La Rioja"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Carlos Mateo Jurado Díaz - Portfolio',
  description: 'Bioengineer with expertise in neuromodulation, AI, and biomedical solutions. Professional portfolio showcasing experience in medical devices, machine learning, and clinical support.',
  keywords: ['bioengineer', 'neuromodulation', 'artificial intelligence', 'biomedical engineering', 'machine learning', 'medical devices', 'portfolio'],
  authors: [{ name: 'Carlos Mateo Jurado Díaz' }],
  creator: 'Carlos Mateo Jurado Díaz',
  publisher: 'Carlos Mateo Jurado Díaz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://engjurado.me/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Carlos Mateo Jurado Díaz - Bioengineer Portfolio',
    description: 'Bioengineer specializing in neuromodulation, AI, and biomedical solutions. Experience in medical devices, machine learning, and clinical technical support.',
    url: 'https://engjurado.me/',
    siteName: 'Carlos Mateo Jurado Díaz Portfolio',
    images: [
      {
        url: '/profile.webp',
        width: 250,
        height: 250,
        alt: 'Professional headshot of Carlos Mateo Jurado Díaz, Bioengineer',
      },
    ],
    locale: getInitialLanguage() === 'es' ? 'es_ES' : 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Mateo Jurado Díaz - Bioengineer Portfolio',
    description: 'Bioengineer with expertise in neuromodulation, AI, and biomedical solutions.',
    images: ['/profile.webp'],
    creator: '@EngJurado',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}