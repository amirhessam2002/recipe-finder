// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true, // فعال کردن minification برای SWC
  experimental: {
    styledComponents: true, // فعال کردن پشتیبانی از styled-components
  },
};

export default nextConfig;
