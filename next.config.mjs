/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's4.anilist.co',
          },
          {
            protocol: 'https',
            hostname: 'media.kitsu.app',
          },
          {
            protocol: 'https',
            hostname: 'tenor.com',
          },
        ],
      },
};

export default nextConfig;
