/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: ''
      }
    ]
  },
  favicon: 'public/next.svg'
}

module.exports = nextConfig
