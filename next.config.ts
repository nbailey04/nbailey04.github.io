import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nbailey.github.io', // replace with your actual GitHub repo name
};

export default nextConfig;