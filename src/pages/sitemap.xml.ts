import { sitemapUrl } from '../lib/seo';

const staticPaths = [
  '/',
  '/integrations',
  '/press',
  '/publications/clawhub-security-signals.pdf',
  '/privacy',
  '/showcase',
  '/shoutouts',
  '/cat',
  '/cats',
];

export async function GET() {
  const urls = [
    ...staticPaths.map((pathname) => sitemapUrl(pathname)),
  ];

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
