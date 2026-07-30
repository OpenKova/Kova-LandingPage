import { absoluteUrl, xmlEscape } from '../lib/seo';

export async function GET() {
  const sitemaps = ['/sitemap.xml'].map((pathname) =>
    [
      '  <sitemap>',
      `    <loc>${xmlEscape(absoluteUrl(pathname))}</loc>`,
      '  </sitemap>',
    ].filter(Boolean).join('\n')
  );

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.join('\n')}
</sitemapindex>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
