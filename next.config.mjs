/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.wiloke.com', 'plugins.wiloke.com', 'plus.unsplash.com', 'via.placeholder.com'],
  },
  reactStrictMode: true,
  env: {
    domain: 'https://theroyal-niks-nikhil-anands-projects.vercel.app/',
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, './src');
    return config;
  },
};

module.exports = nextConfig;
