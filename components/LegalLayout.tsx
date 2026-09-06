import Link from "next/link";
import { Wordmark } from "./Logo";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[var(--color-paper)]">
      <header className="border-b border-[var(--color-line)]/70 bg-[var(--color-paper)]/85 backdrop-blur-md">
        <div className="container-px mx-auto flex h-16 max-w-3xl items-center justify-between md:h-20">
          <Link href="/">
            <Wordmark className="text-lg" />
          </Link>
          <Link
            href="/"
            className="text-[14px] font-medium text-[var(--color-ink)]/60 hover:text-[var(--color-teal-deep)]"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <article className="container-px mx-auto max-w-3xl py-16 md:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-gold-dark)]">
          Legal
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-[14px] text-[var(--color-ink)]/50">
          Last updated {updated}
        </p>

        <div className="prose-legal mt-10 space-y-8">{children}</div>
      </article>
    </main>
  );
}
