/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img001.prntscr.com',
        port: '',
        pathname: '/file/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.leonardo.ai',
        port: '',
        pathname: '/users/**',
      },
    ],
  },
};

export default nextConfig;
