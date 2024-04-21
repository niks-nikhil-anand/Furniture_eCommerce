/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.wiloke.com', 'plugins.wiloke.com', 'plus.unsplash.com', 'via.placeholder.com'],
  },
  reactStrictMode: true,
  env: {
    domain: 'https://theroyal-niks-nikhil-anands-projects.vercel.app/',
  },
};

export default nextConfig;
