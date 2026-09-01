export function IntegrationsPreview() {
  const tools = ["Telegram", "Discord", "Slack", "WhatsApp", "Signal", "Matrix", "Mattermost", "Teams", "Google Chat", "Line", "IRC", "DingTalk", "Feishu", "WeCom", "SMS", "Email", "iMessage", "OpenRouter", "Anthropic", "OpenAI", "Google", "DeepSeek", "xAI", "Nous"];

  return (
    <section id="integrations">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="oc-eyebrow">Everywhere You Are</h2>
        <a href="#features" className="text-xs font-medium" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
          Your bots, your platforms →
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--oc-border-subtle)", background: "var(--oc-surface-card)" }}>
        <div className="flex gap-3 overflow-x-auto p-4" style={{ scrollbarWidth: "none" }}>
          {tools.map((t) => (
            <div
              key={t}
              className="shrink-0 rounded-full border px-4 py-2 text-xs font-medium whitespace-nowrap"
              style={{
                borderColor: "var(--oc-border-subtle)",
                background: "var(--oc-bg-elevated)",
                color: "var(--oc-text-secondary)",
                fontFamily: "var(--oc-font-mono)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div className="border-t px-4 py-3 text-xs" style={{ borderColor: "var(--oc-border-subtle)", color: "var(--oc-text-muted)" }}>
          One agent core, every surface. The same Kova answers from your terminal, your desktop app, and every
          messaging platform you already use.
        </div>
      </div>
    </section>
  );
}
