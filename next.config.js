/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['prod-ripcut-delivery.disney-plus.net'],
  },
};

module.exports = nextConfig;
