export const SITE = {
  name: "Kova",
  tagline: "agent that evolves with you.",
  version: "0.2.0",
  description:
    "The self-improving AI agent. One agent core, every surface: CLI, desktop, Telegram, Discord, Slack, WhatsApp and more. It creates skills from experience, remembers who you are, runs scheduled routines, and drives a real terminal and browser.",
} as const;

export const NAV_LINKS = [
  { label: "Messaging", href: "/messaging" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
] as const;

export const BENTO_FEATURES = [
  {
    id: "workflow",
    badge: "Skills",
    title: "Learns your workflows.",
    description:
      "Saves reusable procedures as skills it reloads in future sessions — improving them as it uses them.",
    layout: "wide",
    video: { src: "/Workspaces.mp4", orientation: "horizontal" },
  },
  {
    id: "monitoring",
    badge: "Bots",
    title: "A team, not a chatbot.",
    description:
      "Spawn specialist bots with their own persona, memory, and model. They message each other; you get the summary.",
    layout: "narrow",
    video: { src: "/Metrics.mp4", orientation: "vertical" },
  },
  {
    id: "clipboard",
    badge: "Routines",
    title: "Works while you're away.",
    description:
      "Scheduled routines run on a $5 VPS or your own server — even when your machine is off.",
    layout: "narrow",
    video: { src: "/Clipboard.mp4", orientation: "vertical" },
  },
  {
    id: "tray",
    badge: "Terminal + Browser",
    title: "Drives a real terminal and browser.",
    description: "Not just chat — Kova executes, inspects, and navigates for real.",
    layout: "wide",
    video: { src: "/Tray.mp4", orientation: "horizontal" },
  },
  {
    id: "cleanup",
    badge: "Memory",
    title: "Remembers who you are.",
    description:
      "Long-lived memory and context across sessions, profiles, and conversations.",
    layout: "narrow",
    video: { src: "/Disk.mp4", orientation: "vertical" },
  },
  {
    id: "coming-soon",
    badge: "Coming Soon",
    title: "More surfaces on the way.",
    description: "",
    layout: "wide" as const,
    video: null,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do I need an account?",
    answer:
      "No. Bring your own API keys from any provider and run locally. Your keys, your rules.",
  },
  {
    question: "Which models can I use?",
    answer:
      "Any model, any provider — OpenRouter, Anthropic, OpenAI, Google, Nous, local models, and 20 more. Swap mid-workflow and bring your own keys, always.",
  },
  {
    question: "Where can I use Kova?",
    answer:
      "Everywhere you are. The same agent answers from your terminal, desktop app, and messaging platforms like Telegram, Discord and Slack.",
  },
  {
    question: "Does it work while I'm away?",
    answer:
      "Yes. Routines run on a $5 VPS or your own server even when your machine is off.",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Messaging", href: "/messaging" },
      { label: "Features", href: "#features" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Docs", href: "https://kova-agent.neuralstudio.in/docs" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "chiragborse877@gmail.com", href: "mailto:chiragborse877@gmail.com" },
      { label: "@getkova_ai", href: "https://x.com/getkova_ai" },
    ],
  },
] as const;
