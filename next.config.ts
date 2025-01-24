import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  },
  images: {
    domains: ["avatars.githubusercontent.com", 'lh3.googleusercontent.com'],
  },
};

export default nextConfig;
