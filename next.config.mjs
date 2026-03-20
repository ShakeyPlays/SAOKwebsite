/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  basePath: '/SAOKwebsite',
  assetPrefix: '/SAOKwebsite',

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
