/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_HOSTNAME}`,
        port: '',
        pathname: `/${process.env.NEXT_PUBLIC_FIREBASE_PATHNAME}/**`
      }
    ]
  }
};

export default nextConfig;
