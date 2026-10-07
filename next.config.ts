import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 정적 호스팅 — `next build` 결과가 out/ 에 생성된다
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
