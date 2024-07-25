/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'directus',
        port: '8055',
        pathname: '/assets/**',
      },
    ],
  },
};
export default nextConfig;