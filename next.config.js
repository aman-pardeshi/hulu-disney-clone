/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'prod-ripcut-delivery.disney-plus.net',
      'https://prod-ripcut-delivery.disney-plus.net/',
      'https://res.cloudinary.com',
      'res.cloudinary.com',
      'images5.alphacoders.com',
      'https://lh3.googleusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
