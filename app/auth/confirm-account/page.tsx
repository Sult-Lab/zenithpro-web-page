import Link from "next/link";
import { Wordmark } from "@/components/Logo";

type ConfirmPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function ConfirmPage({ searchParams }: ConfirmPageProps) {
  const { error } = await searchParams;
  const isInvalidLink = error === "invalid_link";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-paper)] px-5 py-10">
      <section className="w-full max-w-md rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-8 text-center shadow-[0_20px_60px_rgba(13,22,20,0.07)] md:p-10">
        <Link href="/" aria-label="ZenithPro home" className="inline-flex">
          <Wordmark className="text-xl" />
        </Link>

        <div className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-teal-deep)]">
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14.5 11.5 20 22 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-gold-dark)]">
          Account confirmation
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          {error ? (isInvalidLink ? "This link is incomplete" : "This link has expired") : "Your account is confirmed"}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink)]/65">
          {error
            ? "Request a new confirmation email from the ZenithPro app and try again."
            : "You can return to the ZenithPro app to finish setting up your workspace."}
        </p>

        <Link
          href="/"
          className="btn-tap mt-8 inline-flex rounded-full bg-[var(--color-teal-deep)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--color-teal-grad-a)]"
        >
          Back to ZenithPro
        </Link>
      </section>
    </main>
  );
}