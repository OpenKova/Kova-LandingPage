import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101012",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://appkova.com"),
  title: `${SITE.name} — ${SITE.tagline} · Open source · Runs on your machine`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — The workspace that really does things.`,
    description: SITE.description,
    type: "website",
    siteName: SITE.name,
    url: "https://appkova.com",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${plexMono.variable} h-full antialiased`}>
      <head>
        {/* Switzer + Sentient — same as openclaw.ai */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&f[]=sentient@400i&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { const k='oc-theme'; const s=localStorage.getItem(k); const t=s==='light'||s==='dark'?s:'dark'; document.documentElement.dataset.theme=t; document.documentElement.style.colorScheme=t; })();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--oc-bg-page)] text-[var(--oc-text-primary)]">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
