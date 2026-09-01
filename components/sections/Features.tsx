"use client";

import { BENTO_FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="oc-eyebrow">What It Does</h2>
        <a
          href="#download"
          className="hidden items-center gap-1 text-xs font-medium md:inline-flex"
          style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}
        >
          See all features →
        </a>
      </div>

      <div className="section-grid">
        {BENTO_FEATURES.filter((f) => f.id !== "coming-soon").map((f) => (
          <div key={f.id} className="feature-card">
            <div
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm"
              style={{ background: "var(--oc-surface-interactive)", border: "1px solid var(--oc-border-subtle)" }}
            >
              {f.badge[0]}
            </div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
            {f.video && (
              <div
                className="mt-2 overflow-hidden rounded-md border text-[11px]"
                style={{
                  borderColor: "var(--oc-border-subtle)",
                  background: "var(--oc-bg-surface)",
                  fontFamily: "var(--oc-font-mono)",
                  padding: "10px 12px",
                  color: "var(--oc-text-muted)",
                }}
              >
                ▶ {f.video.src.replace("/", "")} · {f.video.orientation}
              </div>
            )}
          </div>
        ))}
        <div className="feature-card" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div className="text-sm font-medium" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
            More tools on the way
          </div>
          <p className="text-xs">Clipboard sync, AI actions, and plugin marketplace coming soon.</p>
        </div>
      </div>
    </section>
  );
}
