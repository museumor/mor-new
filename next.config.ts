import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mor-new",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
