import type { CSSProperties, ReactNode } from "react";

type Integration = {
  name: string;
  kind: string;
  desc: string;
  color: string;
  icon: ReactNode;
};

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const channels: Integration[] = [
  {
    name: "Telegram",
    kind: "Channel",
    desc: "Your agent in chats and groups.",
    color: "#26A5E4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    kind: "Channel",
    desc: "Your agent inside WhatsApp.",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    kind: "Channel",
    desc: "Your agent in servers and DMs.",
    color: "#5865F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    kind: "Channel",
    desc: "Your agent where your team works.",
    color: "#E01E5A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" x2="20" y1="9" y2="9" />
        <line x1="4" x2="20" y1="15" y2="15" />
        <line x1="10" x2="8" y1="3" y2="21" />
        <line x1="16" x2="14" y1="3" y2="21" />
      </svg>
    ),
  },
  {
    name: "Signal",
    kind: "Channel",
    desc: "Private chats with your agent.",
    color: "#3A76F0",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-5.32 14.54a1.125 1.125 0 1 1 1.59-1.59 1.125 1.125 0 0 1-1.59 1.59zm1.172-4.176A7.534 7.534 0 0 1 11.24 9.5a1.004 1.004 0 1 1 .52-1.94 9.542 9.542 0 0 0-5.322 4.553 1.004 1.004 0 1 1-1.738 1.004zm4.418 4.686c-.35 0-.633-.284-.633-.633s.284-.633.633-.633h.006c1.41 0 2.782-.504 3.838-1.373a.633.633 0 0 1 .827.96 6.955 6.955 0 0 1-4.653 1.679zm8.03-13.36a12.004 12.004 0 0 0-8.3-3.44c.06-1.03 0-1.98 0-3a12.002 12.002 0 0 0-7.5 4.5l-.48.66-2.52-.36c1.02 1.5 1.62 2.52 2.04 3.42a9 9 0 0 0 .24 5.16l.3 1.02-1.2 1.02c2.22 1.74 3.3 2.22 6 3a12 12 0 0 0 5.4-21.42z" />
      </svg>
    ),
  },
  {
    name: "SMS",
    kind: "Channel",
    desc: "Text via Twilio / gateway.",
    color: "#F12E45",
    icon: <ChatIcon />,
  },
  {
    name: "iMessage",
    kind: "Channel",
    desc: "Your agent inside Messages.",
    color: "#007AFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
  },
  {
    name: "Matrix",
    kind: "Channel",
    desc: "Your agent on the open network.",
    color: "#0DBD8B",
    icon: <ChatIcon />,
  },
  {
    name: "Google Chat",
    kind: "Channel",
    desc: "Your agent in Spaces.",
    color: "#34A853",
    icon: <ChatIcon />,
  },
  {
    name: "Teams",
    kind: "Channel",
    desc: "Your agent in chats and meetings.",
    color: "#6264A7",
    icon: <ChatIcon />,
  },
  {
    name: "LINE",
    kind: "Channel",
    desc: "Your agent in chats and groups.",
    color: "#06C755",
    icon: <ChatIcon />,
  },
  {
    name: "Mattermost",
    kind: "Channel",
    desc: "Your agent on your team server.",
    color: "#0058CC",
    icon: <ChatIcon />,
  },
  {
    name: "IRC",
    kind: "Channel",
    desc: "Your agent on the classic nets.",
    color: "#8C8C8C",
    icon: <ChatIcon />,
  },
  {
    name: "Feishu / Lark",
    kind: "Channel",
    desc: "Your agent in Lark chats.",
    color: "#00A6FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
        <path d="M16 8 2 22" />
        <path d="M17.5 15H9" />
      </svg>
    ),
  },
  {
    name: "ClickClack",
    kind: "Channel",
    desc: "Self-hosted workspaces via bot tokens.",
    color: "#FF6B4A",
    icon: <ChatIcon />,
  },
  {
    name: "Nextcloud Talk",
    kind: "Channel",
    desc: "Self-hosted chat on Nextcloud.",
    color: "#0082C9",
    icon: <ChatIcon />,
  },
  {
    name: "Nostr",
    kind: "Channel",
    desc: "Decentralized encrypted DMs.",
    color: "#8F2CFF",
    icon: <ChatIcon />,
  },
  {
    name: "QQ Bot",
    kind: "Channel",
    desc: "Private and group chats.",
    color: "#1EBAFC",
    icon: <ChatIcon />,
  },
  {
    name: "Raft",
    kind: "Channel",
    desc: "Raft External Agents via wake bridge.",
    color: "#FBF6EE",
    icon: <ChatIcon />,
  },
  {
    name: "Synology Chat",
    kind: "Channel",
    desc: "NAS chat via webhooks.",
    color: "#B6D957",
    icon: <ChatIcon />,
  },
  {
    name: "Tlon",
    kind: "Channel",
    desc: "Urbit-based chat workflows.",
    color: "#8A63D2",
    icon: <ChatIcon />,
  },
  {
    name: "Twitch",
    kind: "Channel",
    desc: "Live chat and moderation.",
    color: "#9146FF",
    icon: <ChatIcon />,
  },
  {
    name: "Voice Call",
    kind: "Channel",
    desc: "Phone conversations via Twilio.",
    color: "#F97316",
    icon: <ChatIcon />,
  },
  {
    name: "WebChat",
    kind: "Channel",
    desc: "Browser chat over WebSocket.",
    color: "#00E5CC",
    icon: <ChatIcon />,
  },
  {
    name: "WeChat / Weixin",
    kind: "Channel",
    desc: "Tencent iLink via QR login.",
    color: "#07C160",
    icon: <ChatIcon />,
  },
  {
    name: "Yuanbao",
    kind: "Channel",
    desc: "Tencent Yuanbao bot chats.",
    color: "#00CC70",
    icon: <ChatIcon />,
  },
  {
    name: "Zalo",
    kind: "Channel",
    desc: "Zalo Bot API chats.",
    color: "#0068FF",
    icon: <ChatIcon />,
  },
  {
    name: "Zalo ClawBot",
    kind: "Channel",
    desc: "Personal Zalo assistant.",
    color: "#00A8FF",
    icon: <ChatIcon />,
  },
  {
    name: "Zalo Personal",
    kind: "Channel",
    desc: "Personal zca-js messaging.",
    color: "#0068FF",
    icon: <ChatIcon />,
  },
];

const models: Integration[] = [
  {
    name: "Claude",
    kind: "Model",
    desc: "Claude, connected to your tools.",
    color: "#D4A574",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456z" />
      </svg>
    ),
  },
  {
    name: "GPT",
    kind: "Model",
    desc: "GPT, connected to your tools.",
    color: "#00A67E",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    kind: "Model",
    desc: "Gemini, connected to your tools.",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c.8 4.6 3.4 7.2 8 8-4.6.8-7.2 3.4-8 8-.8-4.6-3.4-7.2-8-8 4.6-.8 7.2-3.4 8-8z" />
      </svg>
    ),
  },
  {
    name: "DeepSeek",
    kind: "Model",
    desc: "DeepSeek, connected to your tools.",
    color: "#4D6BFE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </svg>
    ),
  },
  {
    name: "Grok",
    kind: "Model",
    desc: "Grok, connected to your tools.",
    color: "#D9D9E3",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "Nous",
    kind: "Model",
    desc: "Hermes, from the Kova builders.",
    color: "#F5654A",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    name: "OpenRouter",
    kind: "Provider",
    desc: "One key, hundreds of models.",
    color: "#6E56CF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    ),
  },
  {
    name: "Local Models",
    kind: "Provider",
    desc: "Bring your own, fully offline.",
    color: "var(--oc-text-primary)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
  },
];

const Arrow = () => (
  <svg className="link-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

function Tile({ item }: { item: Integration }) {
  return (
    <button
      type="button"
      className="integration-card"
      data-name={item.name}
      aria-pressed="false"
      style={{ "--integration-color": item.color } as CSSProperties}
    >
      <span className="integration-icon">{item.icon}</span>
      <span className="integration-name">{item.name}</span>
      <span className="integration-meta">
        <span className="integration-kind">{item.kind}</span>
        <span className="integration-desc">{item.desc}</span>
      </span>
    </button>
  );
}

export function IntegrationsPreview() {
  return (
    <section id="integrations" className="integrations-section">
      <div className="integrations-copy">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="oc-eyebrow">Everywhere You Are</h2>
          <a className="section-link" href="/messaging">
            messaging <Arrow />
          </a>
        </div>
      </div>

      <div className="integrations-railboard" aria-label="Supported integrations">
        <div className="integration-track integration-track-top" data-dir="left">
          {[...channels, ...channels].map((item, i) => (
            <Tile key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
        <div className="integration-scrubber" aria-hidden="true">
          {Array.from({ length: 72 }).map((_, i) => (
            <span key={i} className={i % 10 === 0 ? "major" : undefined} />
          ))}
        </div>
        <div className="integration-track integration-track-bottom" data-dir="right">
          {[...models, ...models].map((item, i) => (
            <Tile key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <div className="integrations-links">
        <a className="integrations-link" href="/messaging">
          Explore all apps <Arrow />
        </a>
        <a className="integrations-link" href="https://kova-agent.neuralstudio.in/docs/user-guide/messaging/">
          Read the docs <Arrow />
        </a>
      </div>
    </section>
  );
}