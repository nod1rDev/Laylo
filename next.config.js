/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure static files in the public directory are served correctly
  async rewrites() {
    return [
      {
        source: "/constants/locales/:path*",
        destination: "/constants/locales/:path*",
      },
    ]
  },
}

module.exports = nextConfig
