import type { NextConfig } from "next";

const DOCS_ORIGIN = "https://docs.neuralstudio.in";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs/:path*",
        destination: `${DOCS_ORIGIN}/:path*`,
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
