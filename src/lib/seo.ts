export const SITE_URL = 'https://kova-agent.ai';

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).href;
}

export function xmlEscape(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function sitemapUrl(pathname: string, lastmod?: Date): string {
  return [
    '  <url>',
    `    <loc>${xmlEscape(absoluteUrl(pathname))}</loc>`,
    lastmod ? `    <lastmod>${lastmod.toISOString()}</lastmod>` : null,
    '  </url>',
  ].filter(Boolean).join('\n');
}
