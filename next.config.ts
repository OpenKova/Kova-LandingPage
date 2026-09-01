import type { NextConfig } from "next";

const DOCS_ORIGIN = "https://docs.neuralstudio.in";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Docs pages (HTML)
      {
        source: "/docs/:path*",
        destination: `${DOCS_ORIGIN}/docs/:path*`,
      },
      // Docusaurus static assets (CSS, JS bundles)
      {
        source: "/assets/:path*",
        destination: `${DOCS_ORIGIN}/assets/:path*`,
      },
      // Docusaurus image assets
      {
        source: "/img/:path*",
        destination: `${DOCS_ORIGIN}/img/:path*`,
      },
      // Docusaurus search plugin endpoint
      {
        source: "/opensearch.xml",
        destination: `${DOCS_ORIGIN}/opensearch.xml`,
      },
      // Docusaurus search index files
      {
        source: "/search-index-:hash.json",
        destination: `${DOCS_ORIGIN}/search-index-:hash.json`,
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
