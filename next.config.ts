import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // if hosting on github pages without custom domain, they might need basePath.
  // but if they just upload the files, let's keep it simple.
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
