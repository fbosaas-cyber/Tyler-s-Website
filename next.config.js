/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/Tyler-s-Website',
  assetPrefix: '/Tyler-s-Website/',
  images: {
    unoptimized: true
  },
  output: 'export'
}

module.exports = nextConfig
