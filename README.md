# Portfolio

Portfolio estático personal construido con Astro, TypeScript y Tailwind CSS v4.

## Prerrequisitos

- Node.js >= 22.12.0
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:4321 en tu navegador.

## Build

```bash
npm run build
```

Genera el sitio estático en `dist/`.

## GitHub Pages

1. Habilita GitHub Pages en la configuración del repositorio.
2. Fuente: **GitHub Actions**.
3. El archivo de workflow se encuentra en `.github/workflows/deploy.yml`.
4. Push a `main` dispara el despliegue automático.

## Configuración

- Cambia `site` y `base` en `astro.config.mjs` por tu usuario y repositorio de GitHub.
- Dominio personalizado: añade un archivo `CNAME` en `public/`.
- Actualiza los placeholders en `src/data/` con tu información real.
- Añade imágenes en `src/assets/images/` y fuentes en `src/assets/fonts/`.

## Estructura del proyecto

```
src/
├── assets/           # Fuentes e imágenes
├── components/       # Componentes reutilizables
│   ├── layout/       # Header, Footer, SkipLink
│   ├── ui/           # DarkModeToggle, SocialLinks, SEO, Icon
│   └── sections/     # Secciones de página
├── content/          # Colecciones de contenido (blog, projects)
├── data/             # Datos estructurados (perfil, experiencia, etc.)
├── layouts/          # Layouts base
├── pages/            # Rutas del sitio
├── styles/           # Estilos globales (Tailwind v4)
└── utils/            # Utilidades (SEO)
```

## Validación

- [ ] `npm run dev` inicia correctamente
- [ ] `npm run build` genera `dist/` sin errores
- [ ] Las 10 rutas se resuelven correctamente
- [ ] El toggle de modo oscuro funciona y persiste
- [ ] No hay solicitudes externas en la pestaña de red
- [ ] La navegación por teclado funciona
- [ ] `prefers-reduced-motion` deshabilita animaciones
- [ ] Meta tags presentes en las páginas
- [ ] GitHub Actions workflow es YAML válido
- [ ] `npm run preview` sirve el sitio correctamente
