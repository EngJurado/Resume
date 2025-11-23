# React Resume

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS.

Repository: [https://github.com/EngJurado/Resume](https://github.com/EngJurado/Resume)

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Internationalization**: Support for English and Spanish languages
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Built with Next.js for better search engine visibility
- **TypeScript**: Type-safe development for better code quality

## Branches

This repository uses two branches for different purposes:

- **main**: Contains the built and optimized version ready for deployment. This branch is used for production hosting.
- **source**: Contains the source code. This is where development happens.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EngJurado/Resume.git
cd react-resume
```

2. Switch to the source branch:
```bash
git checkout source
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Before building, ensure you are on the source branch and have made your changes.

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `build/` directory.

3. To deploy, switch to the main branch and copy the build files:
```bash
git checkout main
cp -r build/* .
git add .
git commit -m "Deploy latest build"
git push origin main
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── not-found.tsx    # 404 Page
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
├── data/
│   └── resume-data.tsx  # Structured resume data (Edit this file!)
└── lib/
    └── languageContext.tsx # Language state management
public/
├── favicon.ico          # Favicon
└── profile.webp         # Profile image
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **@tabler/icons-react**: Icon library
- **Custom i18n**: Simple internationalization solution

## Customization

### Updating Resume Information

All resume data is located in `src/data/resume-data.tsx`. To update your information:

1. Open `src/data/resume-data.tsx`.
2. Edit the `RESUME_DATA` object.
3. You can update personal details, experience, education, skills, etc.
4. The data is structured to support both English (`en`) and Spanish (`es`).

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the new section data to `src/data/resume-data.tsx` (you may need to update the interface if adding new types)
3. Import and include the component in `src/app/page.tsx`

### Changing Colors/Themes

Edit the CSS custom properties in `src/app/globals.css` under the `:root` selector.

### Adding Languages

1. Add new language keys in `src/data/resume-data.tsx`
2. Update `src/lib/languageContext.tsx` to handle the new language.
3. Update the language toggle logic in `src/components/Header.tsx`

## Deployment

The main branch is configured for GitHub Pages deployment. The build process generates static files that are served directly from the main branch.

### Automatic Deployment

The repository includes GitHub Actions for automated deployment. When you push changes to the source branch, the CI/CD pipeline will:

1. Build the project
2. Copy build files to the main branch
3. Deploy to GitHub Pages

### Manual Deployment

If you prefer manual deployment:

1. Make changes on the source branch
2. Build the project: `npm run build`
3. Switch to main branch: `git checkout main`
4. Copy build files: `cp -r build/* .`
5. Commit and push: `git add . && git commit -m "Deploy" && git push origin main`

The site will be available at: [https://engjurado.github.io/Resume](https://engjurado.github.io/Resume)

## License


This project is licensed under the MIT License.
