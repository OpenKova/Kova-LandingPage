---
name: openclaw-design
description: Route Kova Agent design work to canonical brand, Carapace product-interface, marketing-page, or design-audit guidance. Use when a task touches Kova Agent visual identity, shared CSS tokens, product UI, public web pages, or Carapace compliance.
---
# Kova Agent Design

This skill dispatches design tasks to the appropriate sub-skill.

## Skills

| Skill | Description |
|-------|-------------|
| `kova-brand` | Identity decisions, typography, logos, imagery, voice, and non-product brand artifacts |
| `kova-carapace` | Application UI, semantic tokens, themes, component reuse, and framework adapters |
| `kova-design-system` | Compatibility alias for projects upgrading an existing skill lock |
| `kova-marketing-pages` | Public-page composition, landing/content pages, navigation, SEO, and responsive layout |
| `kova-design-audit` | Design drift, token misuse, component substitution, accessibility, and recurring audits |

For a public website change, start with `kova-marketing-pages` and add
`kova-brand` only when the task changes identity, logo, imagery, typography,
or voice. For a product application, start with `kova-carapace` when it is
on Carapace tokens, or use `kova-design-system` as the compatibility alias.
`kova-design-system` as the `v0.1.x` compatibility alias.

## Shared Contract

- Install agent guidance from this repository's default branch and refresh it with
  `npx skills@1.5.16 update --project --yes`.
- Keep runtime CSS pinned to a semantic release tag.
- Prefer semantic tokens over raw palette values.
- Keep product-specific components and layouts in their consumer repository.
- Add shared implementation only after at least two consumers demonstrate the same interface.
- Preserve consumer behavior while changing the visual foundation.
- Validate rendered pages in a real browser at desktop and mobile sizes.
- Check both light and dark themes where the consumer supports them.
- Do not redistribute fonts, logos, or artwork without recorded permission.
