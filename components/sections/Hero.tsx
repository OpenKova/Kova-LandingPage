import Image from "next/image";
import appIcon from "../../public/icon.png";
import { SITE } from "@/lib/constants";

const ASCII_ART = ` ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 ░░░░  KOVA  ·  SYSTEM  ·  TRAY  ░░░░░
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
   ▓▓▓▓▓  ▓▓▓▓▓   ▓▓▓▓   ▓▓▓▓  ▓▓▓▓▓
   ▓▓     ▓▓ ▓▓  ▓▓ ▓▓  ▓▓ ▓▓  ▓▓
   ▓▓▓▓   ▓▓ ▓▓  ▓▓ ▓▓  ▓▓ ▓▓  ▓▓▓▓
   ▓▓     ▓▓ ▓▓  ▓▓ ▓▓   ▓▓▓▓  ▓▓
 ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`;

export function Hero() {
  return (
    <section id="download" className="hero">
      <div className="hero-art" aria-hidden>
        <pre>{ASCII_ART}</pre>
      </div>
      <div className="hero-content">
        <Image
          src={appIcon}
          alt="Kova app icon"
          width={64}
          height={64}
          className="mb-4 rounded-[16px] shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5)]"
          priority
        />
        <span className="hero-eyebrow">Open source · Runs on your machine</span>
        <h1 className="hero-title">
          The workspace that <em>really does things.</em>
        </h1>
        <p className="hero-desc">
          {SITE.description} Your workflows. Your clipboard. Your machine. Your data — never a vendor
          cloud.
        </p>
        <p className="hero-ownership">
          The longer you use it, the more it becomes <em style={{ color: "var(--oc-accent-primary)", fontStyle: "normal", fontFamily: "var(--oc-font-mono)", fontSize: "0.8rem", letterSpacing: "0.04em" }}>yours</em>.
        </p>
        <div className="hero-actions">
          <a href="https://github.com/OpenKova/kova/releases" className="hero-cta">
            Download Kova
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="https://github.com/OpenKova/kova" target="_blank" rel="noopener" className="hero-cta hero-cta-ghost">
            View on GitHub
          </a>
        </div>
        <p className="mt-4 text-xs" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
          v0.1.1 · Windows & macOS · Free forever, Pro $2.99/mo
        </p>
      </div>
    </section>
  );
}
