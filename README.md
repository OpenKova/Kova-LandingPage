# kova-agent.ai

Landing page for [Kova Agent](https://github.com/OpenKova/kova-agent) — your personal AI assistant.

**Live**: [kova-agent.ai](https://kova-agent.ai)

## Tech stack

- **Framework**: [Astro](https://astro.build) (static site)
- **Design system**: [Carapace](https://github.com/OpenKova/carapace) (`@kova/carapace` via GitHub)
- **Assets**: Static images, inline SVG icons, and simple-icons
- **Hosting**: [Vercel](https://vercel.com)
- **Package manager**: `pnpm`
- **Testing**: `bun test`

## Project status

Any branch may be force-pushed; this project has no stable API contract.

## Development

```sh
pnpm install
pnpm dev
```

Open `http://localhost:4321` in your browser. Edits are reflected in real time.

## Build

```sh
pnpm build
```

Built output lands in `dist/`.

## Preview the production build

```sh
pnpm preview
```

## Install Kova Agent

- **macOS/Linux**: `curl -fsSL --proto '=https' --tlsv1.2 https://kova-agent.ai/install.sh | bash`
- **macOS/Linux (CLI only, no onboarding)**: `curl -fsSL --proto '=https' --tlsv1.2 https://kova-agent.ai/install-cli.sh | bash`

## Test

```sh
bun test
```

Tests verify static asset integrity, redirect configuration, and mark-up structure.
