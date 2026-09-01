import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Messaging | Kova",
  description:
    "Connect Kova to the messaging apps you already use — Telegram, Discord, Slack, WhatsApp, Signal, and more.",
  alternates: { canonical: "/messaging" },
};

type MessagingApp = {
  name: string;
  description: string;
  tag?: string;
};

const chatChannels: MessagingApp[] = [
  {
    name: "Telegram",
    description: "Bot API conversations, groups, channels, and rich media. The fastest setup — just paste a bot token.",
    tag: "Verbose",
  },
  {
    name: "Discord",
    description: "Servers, channels, DMs, slash commands, and app events. Full conversation + voice surface.",
  },
  {
    name: "Slack",
    description: "Channels, threads, DMs, commands, and app events over Socket Mode or a custom relay.",
  },
  {
    name: "WhatsApp",
    description: "WhatsApp Web chats through QR pairing, or the Cloud API for a managed number.",
  },
  {
    name: "Signal",
    description: "Privacy-focused messaging through signal-cli — native daemon or container.",
  },
  {
    name: "Matrix",
    description: "Federated rooms and DMs over the Matrix protocol, with E2E-capable conversations.",
  },
  {
    name: "Mattermost",
    description: "Channels, groups, and DMs over the Mattermost Bot API and WebSocket.",
  },
  {
    name: "Microsoft Teams",
    description: "Teams channels, chats, and group conversations through the Bot Framework.",
  },
  {
    name: "Google Chat",
    description: "Spaces and direct messages through a Google Chat app.",
  },
  {
    name: "LINE",
    description: "LINE Messaging API bot conversations — a fixture across Japan, Taiwan, and Thailand.",
  },
  {
    name: "iMessage",
    description: "Native iMessage over the imsg bridge, or BlueBubbles for non-mac hosts.",
  },
  {
    name: "DingTalk",
    description: "DingTalk conversations used widely across Chinese workplaces.",
  },
  {
    name: "Feishu / Lark",
    description: "Feishu (Lark) group and personal chats — built for the APAC workplace.",
  },
  {
    name: "WeCom",
    description: "Tencent WeCom (WeChat Work) group and app messaging for businesses.",
  },
  {
    name: "IRC",
    description: "Classic IRC channels and DMs with access controls — the old standby.",
  },
  {
    name: "SMS",
    description: "Twilio-backed text and MMS messaging straight through the gateway.",
  },
  {
    name: "Email",
    description: "Send and receive via IMAP/SMTP, plus inbound webhooks for automation.",
  },
  {
    name: "WebChat",
    description: "Gateway-hosted browser chat over WebSocket — chat from any browser tab.",
  },
];

export default function MessagingPage() {
  return (
    <>
      <Header />
      <div className="rail">
        <section style={{ borderTop: "none" }}>
          <p className="oc-eyebrow">Message Kova anywhere</p>
          <h1 className="hero-title" style={{ marginBottom: "12px" }}>
            Connect Kova to <em>every</em> app you chat in
          </h1>
          <p className="hero-desc">
            Same agent, one core, every surface. Connect Kova to the messaging apps you already use — or run several at
            once and let Kova route each conversation through the gateway. Text everywhere; media and reactions vary by
            channel.
          </p>
        </section>

        <section>
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="oc-eyebrow">Chat channels</h2>
            <span className="text-xs font-medium" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
              {chatChannels.length} supported
            </span>
          </div>
          <div className="section-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {chatChannels.map((app) => (
              <div key={app.name} className="feature-card" style={{ gap: "8px", justifyContent: "space-between" }}>
                <div>
                  <h3>{app.name}</h3>
                  <p style={{ marginTop: "6px" }}>{app.description}</p>
                </div>
                {app.tag && (
                  <span
                    className="inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-medium tracking-widest"
                    style={{ fontFamily: "var(--oc-font-mono)", border: "1px solid var(--oc-border-accent)", color: "var(--oc-accent-primary)" }}
                  >
                    {app.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}