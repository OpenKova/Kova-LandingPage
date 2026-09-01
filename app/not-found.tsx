import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Page not found — ${SITE.name}`,
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="hero-glow relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          <Container className="relative z-10">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <div
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-full"
                style={{ background: "var(--oc-surface-card)", border: "1px solid var(--oc-border-subtle)" }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--oc-accent-primary)" }}
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>

              <p
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}
              >
                404
              </p>

              <h1
                className="mt-4 text-[2.75rem] leading-[1.08] tracking-tight sm:text-6xl"
                style={{ color: "var(--oc-text-primary)", fontFamily: "var(--oc-font-serif)" }}
              >
                Page not found
              </h1>

              <p
                className="mt-6 max-w-md text-base leading-relaxed md:text-lg"
                style={{ color: "var(--oc-text-secondary)" }}
              >
                We couldn&apos;t find what you were looking for. The link may be broken, or the
                page may have moved.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ background: "var(--oc-accent-primary)", color: "var(--oc-text-on-accent)" }}
                >
                  Back to {SITE.name}
                </Link>
                <Link
                  href="/messaging"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--oc-surface-card)",
                    color: "var(--oc-text-primary)",
                    border: "1px solid var(--oc-border-subtle)",
                  }}
                >
                  Browse messaging channels
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
