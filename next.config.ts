import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mor-new",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/mor-new",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
