import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sujeitoprogramador.com',
        port: '',
        search: ''
      }
    ]
  }
};

export default nextConfig;
