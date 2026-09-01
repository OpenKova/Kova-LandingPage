"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import linesLogo from "../../public/kova-logo.png";
import { DOWNLOAD_URL, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 flex h-[52px] items-center justify-between px-6 md:px-7"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--oc-bg-page) 72%, transparent)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--oc-border-subtle)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
      }}
    >
      <Link href="/" className="flex items-center gap-2.5" aria-label="Kova home">
        <Image src={linesLogo} alt="" className="h-[22px] w-auto object-contain" style={{ width: "auto", height: "22px" }} priority />
        <span
          className="text-[15px] font-semibold tracking-tight"
          style={{ fontFamily: "var(--oc-font-display)", color: "var(--oc-text-primary)" }}
        >
          Kova
        </span>
      </Link>

      <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors hover:bg-[var(--oc-surface-interactive)]"
            style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-body)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://github.com/OpenKova/kova"
          target="_blank"
          rel="noopener"
          className="rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors hover:bg-[var(--oc-surface-interactive)]"
          style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-body)" }}
        >
          GitHub
        </a>
        <a
          href="https://kova-agent.neuralstudio.in/docs"
          target="_blank"
          rel="noopener"
          className="rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors hover:bg-[var(--oc-surface-interactive)]"
          style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-body)" }}
        >
          Docs
        </a>
        <a
          href={DOWNLOAD_URL}
          download
          className="ml-1 inline-flex h-8 items-center rounded-md px-4 text-[13px] font-semibold"
          style={{ background: "var(--oc-accent-primary)", color: "var(--oc-text-on-accent)", fontFamily: "var(--oc-font-mono)" }}
        >
          Download
        </a>
      </nav>

      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="md:hidden rounded-md border px-3 py-1.5 text-xs font-medium"
        style={{ borderColor: "var(--oc-border-subtle)", color: "var(--oc-text-primary)" }}
        aria-expanded={menuOpen}
        aria-label="Menu"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {menuOpen && (
        <div
          className="absolute inset-x-0 top-[52px] flex flex-col gap-1 border-b p-4 md:hidden"
          style={{ background: "var(--oc-bg-page)", borderColor: "var(--oc-border-subtle)" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm"
              style={{ color: "var(--oc-text-primary)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={DOWNLOAD_URL}
            download
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-md px-3 py-2 text-center text-sm font-semibold"
            style={{ background: "var(--oc-accent-primary)", color: "var(--oc-text-on-accent)" }}
          >
            Download Kova
          </a>
        </div>
      )}
    </header>
  );
}
