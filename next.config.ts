import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfigurasi ini sudah benar
  allowedDevOrigins: ['http://192.168.1.7:3000'], 
  /* Opsi konfigurasi lainnya bisa ditambahkan di sini */


  

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
        hostname: 'github-readme-stats.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-streak-stats.herokuapp.com',
      },
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
      },
    ],
  },

  
};


export default nextConfig;