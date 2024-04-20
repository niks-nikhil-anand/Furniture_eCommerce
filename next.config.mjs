/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'images.wiloke.com', 'plugins.wiloke.com' , 'plus.unsplash.com' , "via.placeholder.com" ]
      },
      reactStrictMode: true,
      env: {
        domain: 'http://localhost:3000/',
      },
};

export default nextConfig;
