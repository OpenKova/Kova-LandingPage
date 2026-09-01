export function CTA() {
  const cards = [
    { kicker: "Quick Start", title: "Get Kova in 30 seconds.", desc: "One command or one download. No signup.", href: "#download", cta: "Download" },
    { kicker: "Documentation", title: "Learn the workflows.", desc: "Setup, shortcuts, and pro tips.", href: "https://github.com/OpenKova/kova", cta: "Read docs" },
    { kicker: "Open Source", title: "Own your data.", desc: "MIT licensed. Local-first. Forever.", href: "https://github.com/OpenKova/kova", cta: "Star on GitHub" },
    { kicker: "Community", title: "Join the builders.", desc: "Share profiles, request features.", href: "https://x.com/Kevin_rh0", cta: "Follow" },
  ];
  return (
    <section id="cta" style={{ borderTop: "none", paddingTop: 64 }}>
      <div className="cta-grid">
        {cards.map((c) => (
          <a key={c.kicker} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="cta-card group">
            <div>
              <div className="oc-eyebrow text-[11px]">{c.kicker}</div>
              <h3 className="mt-3 text-[1.05rem] font-semibold leading-tight" style={{ color: "var(--oc-text-primary)" }}>
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--oc-text-muted)" }}>
                {c.desc}
              </p>
            </div>
            <span
              className="mt-6 inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
              style={{ color: "var(--oc-accent-primary)", fontFamily: "var(--oc-font-mono)" }}
            >
              {c.cta} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
