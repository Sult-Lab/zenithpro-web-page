import Link from "next/link";
import { Wordmark } from "./Logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Sales & checkout", href: "#product" },
      { label: "Inventory", href: "#product" },
      { label: "Customers & debt", href: "#product" },
      { label: "Reports", href: "#product" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Hackathon submission", href: "#top" },
      { label: "Contact", href: "#top" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Delete account", href: "/delete-account" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper-raised)]">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark className="text-lg" />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[var(--color-ink)]/55">
              Offline-first business management for Nigerian SMEs. Sales,
              stock, and customers built to keep working, signal or not.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-muted)]">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[var(--color-ink)]/65 transition-colors hover:text-[var(--color-teal-deep)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-line)] pt-6 text-[13px] text-[var(--color-ink)]/45 md:flex-row">
          <p>© 2026 ZenithPro.</p>
          <p>ZenithPro does not hold customer funds.</p>
        </div>
      </div>
    </footer>
  );
}
