/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/search",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
