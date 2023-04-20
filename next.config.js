/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
