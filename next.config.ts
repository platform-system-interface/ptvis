import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // https://nextjs.org/docs/app/guides/css-in-js#styled-components
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
