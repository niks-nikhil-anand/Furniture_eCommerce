const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'images.wiloke.com', 'plugins.wiloke.com', 'plus.unsplash.com', 'via.placeholder.com' , "www.royalzig.com"],
  },
  reactStrictMode: true,
  env: {
    domain: 'https://theroyal.vercel.app/',
    NEXTAUTH_URL:'http://localhost:3000/api/auth' ,
    NEXTAUTH_SECRET: 'vjvjvjvbkbkkjggug',
  },
};

module.exports = nextConfig;
