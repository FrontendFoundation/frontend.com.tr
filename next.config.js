/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/frontend.com.tr',
  assetPrefix: '/frontend.com.tr',
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
