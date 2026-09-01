export function Testimonials() {
  const quotes = [
    { name: "@morganlinton", text: "Kova's clipboard history alone saved me 2 hours this week. Everything stays local — no cloud nonsense.", handle: "Early user" },
    { name: "@kevin_rh0", text: "Workspace profiles that actually arrange my windows? Finally. One shortcut and my whole setup is back.", handle: "Founder" },
    { name: "@sarahcodes", text: "System monitor + disk cleanup in one tiny tray app. Native, fast, no Electron bloat.", handle: "Designer" },
  ];
  return (
    <section id="testimonials">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="oc-eyebrow">What People Say</h2>
        <span className="text-xs" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
          Loved by power users
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {quotes.map((q) => (
          <div
            key={q.name}
            className="rounded-xl border p-5"
            style={{ borderColor: "var(--oc-border-subtle)", background: "var(--oc-surface-card)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--oc-text-secondary)" }}>
              “{q.text}”
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-7 w-7 rounded-full" style={{ background: "var(--oc-surface-interactive)" }} />
              <div>
                <div className="text-xs font-semibold" style={{ color: "var(--oc-text-primary)" }}>
                  {q.name}
                </div>
                <div className="text-[11px]" style={{ color: "var(--oc-text-muted)" }}>
                  {q.handle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
