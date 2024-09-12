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
          {
            protocol: 'https',
            hostname: 'cmdxd98sb0x3yprd.mangadex.network',
          },
          {
            protocol: 'https',
            hostname: 'media1.tenor.com',
          },
        ],
      },
};

export default nextConfig;
