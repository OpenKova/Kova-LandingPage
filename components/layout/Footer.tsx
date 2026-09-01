import { FOOTER_COLUMNS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-12 border-t" style={{ borderColor: "var(--oc-border-subtle)", background: "var(--oc-bg-surface)" }}>
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-10 md:flex-row md:justify-between md:px-7">
        <div>
          <div className="flex items-center gap-2">
            <img src="/kova-logo.png" alt="" className="h-5 w-auto object-contain" style={{ width: "auto", height: "20px" }} />
            <span className="text-sm font-semibold" style={{ fontFamily: "var(--oc-font-display)" }}>
              Kova
            </span>
          </div>
          <p className="mt-4 text-[11px]" style={{ color: "var(--oc-text-muted)", fontFamily: "var(--oc-font-mono)" }}>
            © {new Date().getFullYear()} Kova · MIT · Open source · v{SITE.version}
          </p>
        </div>
        <div className="flex gap-10">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="oc-eyebrow text-[11px]">{col.title}</div>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href || "#"}
                      className="text-xs hover:underline"
                      style={{ color: "var(--oc-text-muted)" }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
