import Image from "next/image";
import appIcon from "../../public/icon.png";
import { DOWNLOAD_URL, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section id="download" className="hero">
      <div className="hero-content">
        <Image
          src={appIcon}
          alt="Kova app icon"
          width={192}
          height={128}
          className="mb-4 h-[96px] w-auto rounded-[16px] shadow-[0_16px_32px_-8px_rgba(0,0,0,0.5)] object-contain"
          style={{ width: "auto", height: "96px" }}
          priority
        />
        <h1 className="hero-title">
          The self-improving <em>AI agent.</em>
        </h1>
        <p className="hero-desc">
          {SITE.description}
        </p>
        <p className="hero-ownership">
          Your bots. Your cloud. Your rules. The longer you use it, the more it becomes <em style={{ color: "var(--oc-accent-primary)", fontStyle: "normal", fontFamily: "var(--oc-font-mono)", fontSize: "0.8rem", letterSpacing: "0.04em" }}>yours</em>.
        </p>
        <div className="hero-actions">
          <a href={DOWNLOAD_URL} download className="hero-cta">
            Get Kova
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="https://kova-agent.neuralstudio.in/docs" target="_blank" rel="noopener" className="hero-cta hero-cta-ghost">
            Read the docs
          </a>
        </div>
        <p className="mt-4 text-xs" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
          v0.2.0 · CLI · Desktop · Any model, any provider
        </p>
      </div>
    </section>
  );
}
