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

module.exports = nextConfig;
