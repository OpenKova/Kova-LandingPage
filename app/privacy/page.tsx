import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy — ${SITE.name}`,
  description: "How Kova handles data: no ads, no analytics SDKs, permission-based access, and your gateway, not a central cloud.",
  alternates: { canonical: "/privacy" },
};

const effectiveDate = "September 1, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="rail">
        <section style={{ borderTop: "none" }}>
          <Link
            href="/"
            className="text-xs font-medium"
            style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}
          >
            ← Back to home
          </Link>
          <p className="oc-eyebrow" style={{ marginTop: "20px" }}>
            Privacy Policy
          </p>
          <h1
            className="hero-title"
            style={{
              marginTop: "12px",
              marginBottom: "16px",
              fontFamily: "var(--oc-font-serif)",
            }}
          >
            Your data, <em>your</em> gateway
          </h1>
          <p className="hero-desc">
            Kova runs on a gateway you choose — local, self-hosted, or wherever you point it. We
            do not run a central cloud that aggregates your conversations, we do not show ads, and
            the desktop builds do not include analytics or crash-reporting SDKs. Where a feature
            needs data, it&apos;s because you turned that feature on.
          </p>
        </section>

        <section
          className="rounded-xl p-6 md:p-8"
          style={{
            border: "1px solid var(--oc-border-subtle)",
            background: "var(--oc-surface-card)",
          }}
        >
          <div
            className="flex flex-wrap items-center gap-3 pb-5 mb-6"
            style={{
              borderBottom: "1px solid var(--oc-border-subtle)",
              color: "var(--oc-text-muted)",
              fontSize: "0.92rem",
            }}
          >
            <span>Effective date: {effectiveDate}</span>
            <span aria-hidden="true">·</span>
            <span>Applies to the Kova desktop app, CLI, gateway, and website</span>
          </div>

          <PolicySection title="1. Scope">
            <p>
              This policy covers the Kova desktop app, CLI, the Kova gateway, and the kova-agent.com
              website. It does not cover the privacy practices of any AI model provider, messaging
              platform, or third-party service you choose to connect to through Kova — those are
              governed by their own policies.
            </p>
          </PolicySection>

          <PolicySection title="2. What Kova does not do">
            <ul>
              <li>We do not sell your data. Ever.</li>
              <li>We do not include ad SDKs in the desktop builds.</li>
              <li>
                We do not include analytics or crash-reporting SDKs in the desktop builds.
              </li>
              <li>
                We do not run a central Kova cloud that aggregates your conversations across
                gateways.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Where your data goes">
            <p>
              Kova runs on a gateway you configure. The gateway is the only system that sees your
              conversations, files, and commands by default. It can be local, on your tailnet,
              self-hosted on a $5 VPS, or operated by someone you trust.
            </p>
            <p>
              When you connect a messaging channel (Telegram, Discord, Slack, etc.) or an AI
              provider (OpenAI, Anthropic, Google, etc.), Kova exchanges the minimum data needed to
              deliver the message and produce a reply. The receiving service handles that data
              under its own terms and privacy policy.
            </p>
          </PolicySection>

          <PolicySection title="4. Local storage and secrets">
            <p>
              The desktop app stores connection secrets (gateway tokens, channel tokens, provider
              keys) in platform-encrypted storage. On macOS that is the Keychain; on Windows,
              credential manager; on Linux, the secret service. Settings, memories, and skill
              artifacts are stored in app-private directories.
            </p>
            <p>
              Temporary files may be written to the app cache while a feature runs (for example
              media output, update packages, or debug artifacts) and are removed when no longer
              needed.
            </p>
          </PolicySection>

          <PolicySection title="5. Permissions">
            <p>
              Kova only requests operating-system permissions it needs and only when the related
              feature is enabled. Examples: microphone and speech recognition for voice mode;
              camera for snapshots; location for location-aware tasks; notification access on
              macOS to read or surface notifications; accessibility on macOS for input
              automation. Revoke any permission in system settings at any time.
            </p>
          </PolicySection>

          <PolicySection title="6. Telemetry in the website">
            <p>
              The kova-agent.com website does not run third-party analytics scripts and does not
              set tracking cookies. The site is static and is served by a CDN. Standard CDN
              access logs (request path, status, IP) are retained for a short period for abuse
              protection and capacity planning.
            </p>
          </PolicySection>

          <PolicySection title="7. Updates to your gateway">
            <p>
              The desktop app checks for gateway and skill updates over an HTTPS endpoint you can
              configure or disable. Update checks send the current app version, the platform, and
              the gateway version. They do not send message content or your data.
            </p>
          </PolicySection>

          <PolicySection title="8. Children">
            <p>
              Kova is not directed at children. You must meet the minimum age of digital consent in
              your country to use it.
            </p>
          </PolicySection>

          <PolicySection title="9. Your choices">
            <ul>
              <li>Inspect, export, or delete anything the gateway has stored.</li>
              <li>Disconnect any channel or provider at any time.</li>
              <li>Run the gateway offline, on a private network, or fully air-gapped.</li>
              <li>Clear app data or uninstall the desktop app.</li>
            </ul>
          </PolicySection>

          <PolicySection title="10. Changes and contact">
            <p>
              We may update this policy. If we do, the effective date above changes and the diff
              is published alongside the source. For privacy or security questions, email{" "}
              <a
                href="mailto:chiragborse877@gmail.com"
                style={{ color: "var(--oc-accent-primary)" }}
              >
                chiragborse877@gmail.com
              </a>
              .
            </p>
          </PolicySection>
        </section>
      </div>
      <Footer />
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: "32px" }}>
      <h2
        style={{
          fontFamily: "var(--oc-font-serif)",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--oc-text-primary)",
          marginBottom: "12px",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: "var(--oc-text-secondary)",
          fontSize: "1rem",
          lineHeight: 1.72,
        }}
      >
        {children}
      </div>
    </section>
  );
}
