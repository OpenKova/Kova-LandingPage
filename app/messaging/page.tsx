import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Messaging | Kova",
  description:
    "Connect Kova to the messaging apps you already use — Telegram, Discord, Slack, WhatsApp, Signal, and 20+ more.",
  alternates: { canonical: "/messaging" },
};

type MessagingApp = {
  name: string;
  description: string;
  tag?: string;
};

const chatChannels: MessagingApp[] = [
  {
    name: "ClickClack",
    description: "Self-hosted ClickClack workspaces through first-class bot tokens.",
  },
  {
    name: "Discord",
    description: "Servers, channels, DMs, slash commands, and app events. Full conversation + voice surface.",
  },
  {
    name: "Feishu / Lark",
    description: "Feishu (Lark) workplace chats and group messages over WebSocket — built for the APAC workplace.",
  },
  {
    name: "Google Chat",
    description: "Spaces and direct messages through a Google Chat app.",
  },
  {
    name: "iMessage",
    description: "Native iMessage over the imsg bridge, or BlueBubbles for non-mac hosts.",
  },
  {
    name: "IRC",
    description: "Classic IRC channels and DMs with access controls — the old standby.",
  },
  {
    name: "LINE",
    description: "LINE Messaging API bot conversations — a fixture across Japan, Taiwan, and Thailand.",
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
    name: "Nextcloud Talk",
    description: "Self-hosted chat through Nextcloud Talk.",
  },
  {
    name: "Nostr",
    description: "Decentralized, encrypted direct messages over the Nostr protocol.",
  },
  {
    name: "QQ Bot",
    description: "Private chats, group chats, and rich media through the QQ Bot platform.",
  },
  {
    name: "Raft",
    description: "Raft External Agents through the Raft CLI wake bridge.",
  },
  {
    name: "Signal",
    description: "Privacy-focused messaging through signal-cli — native daemon or container.",
  },
  {
    name: "Slack",
    description: "Channels, threads, DMs, commands, and app events over Socket Mode or a custom relay.",
  },
  {
    name: "SMS",
    description: "Twilio-backed text and MMS messaging straight through the gateway.",
  },
  {
    name: "Synology Chat",
    description: "Synology NAS chat through incoming and outgoing webhooks.",
  },
  {
    name: "Telegram",
    description: "Bot API conversations, groups, channels, and rich media. The fastest setup — just paste a bot token.",
  },
  {
    name: "Tlon",
    description: "Urbit-based messaging for chat workflows.",
  },
  {
    name: "Twitch",
    description: "Live chat and moderation workflows on your streams.",
  },
  {
    name: "Voice Call",
    description: "Phone conversations through Twilio, Telnyx, or Plivo.",
  },
  {
    name: "WebChat",
    description: "Gateway-hosted browser chat over WebSocket — chat from any browser tab.",
  },
  {
    name: "WeChat / Weixin",
    description: "Tencent iLink messaging through QR login with a personal WeChat account.",
  },
  {
    name: "WhatsApp",
    description: "WhatsApp Web chats through QR pairing, or the Cloud API for a managed number.",
  },
  {
    name: "Yuanbao",
    description: "Tencent Yuanbao bot conversations.",
  },
  {
    name: "Zalo",
    description: "Zalo Bot API chats and webhooks — widely used in Vietnam.",
  },
  {
    name: "Zalo ClawBot",
    description: "Owner-bound personal Zalo assistant through QR login.",
  },
  {
    name: "Zalo Personal",
    description: "Personal-account messaging through native zca-js.",
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