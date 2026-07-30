const origin = "https://kova-agent.ai";

const pages = [
  ["Home", "/"],
  ["Integrations", "/integrations/"],
  ["Showcase", "/showcase/"],
  ["Shoutouts", "/shoutouts/"],
  ["Press", "/press/"],
  ["Privacy", "/privacy/"],
];

export function GET() {
  const lines = [
    "# Kova Agent",
    "",
    "Kova Agent is a personal AI assistant for messaging, browser, desktop, and automation workflows.",
    "",
    "Canonical pages:",
    ...pages.map(([title, path]) => `- ${title}: ${origin}${path}`),
    "",
    "Docs:",
    "- Kova Agent documentation: https://docs.kova-agent.ai/llms.txt",
    "- Kova Agent markdown index: https://documentation.kova-agent.ai/llms.txt",
    "",
    "Source: https://github.com/OpenKova/kova-agent.landing",
    "",
    "Guidance for agents:",
    "- Use docs.kova-agent.ai or documentation.kova-agent.ai for product documentation.",
    "- Use this file as a site index, not a full-site corpus.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
