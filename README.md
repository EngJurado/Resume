# React Resume

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Internationalization**: Support for English and Spanish languages
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Built with Next.js for better search engine visibility
- **TypeScript**: Type-safe development for better code quality

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-resume
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Hero section with profile
│   ├── Experience.tsx   # Work experience
│   ├── Education.tsx    # Education background
│   ├── ContinuingEducation.tsx # Additional certifications
│   ├── Licenses.tsx     # Professional licenses
│   ├── Languages.tsx    # Language proficiency
│   ├── Skills.tsx       # Technical and soft skills
│   ├── Recognitions.tsx # Awards and recognitions
│   └── Footer.tsx       # Footer with copyright
└── lib/
    └── i18n.ts          # Internationalization utilities
public/
├── favicon.ico          # Favicon
├── profile.webp         # Profile image
└── scon.webp           # Society logo
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **@tabler/icons-react**: Icon library
- **Custom i18n**: Simple internationalization solution

## Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add translations in `src/lib/i18n.ts`
3. Import and include the component in `src/app/page.tsx`

### Changing Colors/Themes

Edit the CSS custom properties in `src/app/globals.css` under the `:root` selector.

### Adding Languages

1. Add new language keys in `src/lib/i18n.ts`
2. Update the language toggle logic in `src/components/Header.tsx`

## Deployment

This app can be deployed to Vercel, Netlify, or any platform that supports Next.js.

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## License

This project is private and proprietary.