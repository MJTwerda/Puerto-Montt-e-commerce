/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.FIREBASE_STORAGE_HOSTNAME}`,
        port: '',
        pathname: `/${process.env.FIREBASE_PATHNAME}/**`
      }
    ]
  }
};

export default nextConfig;
