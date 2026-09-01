"use client";

import { useState } from "react";

type Tab = "apps" | "one-liner" | "npm" | "hackable";

const CODE: Record<Tab, string> = {
  apps: `# Desktop apps — gateway, tray, setup, all included
# Download from GitHub releases, double-click, done.
open https://github.com/OpenKova/kova/releases`,
  "one-liner": `# One-liner (macOS & Windows via PowerShell)
curl -fsSL https://appkova.com/install.sh | bash

# then
kova onboard`,
  npm: `# Via npm / pnpm
npm i -g kova
# or
pnpm add -g kova

kova onboard`,
  hackable: `# Hackable — clone and run from source
git clone https://github.com/OpenKova/kova.git
cd kova && pnpm install
pnpm kova onboard`,
};

const TABS: { id: Tab; label: string }[] = [
  { id: "apps", label: "Apps" },
  { id: "one-liner", label: "One-liner" },
  { id: "npm", label: "npm" },
  { id: "hackable", label: "Hackable" },
];

export function QuickStart() {
  const [tab, setTab] = useState<Tab>("one-liner");
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(CODE[tab].replace(/^#.*\n/gm, "").trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section id="quickstart">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="oc-eyebrow">Quick Start</h2>
        <span className="hidden text-xs md:inline" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
          Windows 10+ · macOS 13+ · Tauri + Rust
        </span>
      </div>

      <div className="qs-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`qs-tab ${tab === t.id ? "active" : ""}`}
            aria-selected={tab === t.id}
          >
            {t.label}
          </button>
        ))}
        <button
          onClick={copy}
          className="qs-tab ml-auto"
          style={{ borderStyle: "dashed" }}
          aria-label="Copy command"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      <pre className="qs-code">
        <code>{CODE[tab]}</code>
      </pre>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          { title: "macOS Stable", desc: "macOS 13+ · Universal", cta: "Download .dmg" },
          { title: "Windows Stable", desc: "Windows 10 20H2+ · Tray native", cta: "Download .exe" },
          { title: "Works everywhere", desc: "No cloud. All data stays on device.", cta: "Why local →" },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-lg border p-4"
            style={{ borderColor: "var(--oc-border-subtle)", background: "var(--oc-surface-card)" }}
          >
            <div className="text-sm font-semibold" style={{ color: "var(--oc-text-primary)" }}>
              {c.title}
            </div>
            <div className="mt-1 text-xs" style={{ color: "var(--oc-text-muted)" }}>
              {c.desc}
            </div>
            <div className="mt-3 text-xs font-medium" style={{ color: "var(--oc-accent-primary)", fontFamily: "var(--oc-font-mono)" }}>
              {c.cta}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
