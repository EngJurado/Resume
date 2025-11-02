/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['engjurado.me'],
    unoptimized: true,
  },
  distDir: 'build',
}

module.exports = nextConfig