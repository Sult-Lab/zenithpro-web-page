"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";

type ConfirmationState = "checking" | "confirmed" | "error";

export default function ConfirmPage() {
  const [state, setState] = useState<ConfirmationState>("checking");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function confirmAccount() {
      const params = new URLSearchParams(window.location.hash.slice(1));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (!accessToken || !refreshToken) {
        if (!cancelled) {
          setErrorMessage("This confirmation link is incomplete or has expired.");
          setState("error");
        }
        return;
      }

      const supabase = createClient();
      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (cancelled) return;

      if (error) {
        setErrorMessage("This confirmation link is invalid or has expired.");
        setState("error");
        return;
      }

      window.history.replaceState({}, document.title, "/auth/confirm-account");
      setState("confirmed");
      window.location.assign("zenithpro://auth/confirm");
    }

    void confirmAccount();

    return () => {
      cancelled = true;
    };
  }, []);

  const isChecking = state === "checking";
  const isConfirmed = state === "confirmed";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-paper)] px-5 py-10">
      <section className="w-full max-w-md rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-8 text-center shadow-[0_20px_60px_rgba(13,22,20,0.07)] md:p-10">
        <Link href="/" aria-label="ZenithPro home" className="inline-flex">
          <Wordmark className="text-xl" />
        </Link>

        <div className="mx-auto mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold)]/15 text-[var(--color-teal-deep)]">
          {isChecking ? (
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-teal-deep)]" />
          ) : (
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 14.5 11.5 20 22 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-gold-dark)]">
          Account confirmation
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
          {isChecking ? "Confirming your account" : isConfirmed ? "Your account is confirmed" : "Confirmation failed"}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink)]/65">
          {isChecking
            ? "One moment while we verify your email."
            : isConfirmed
              ? "You can return to the ZenithPro app to finish setting up your workspace."
              : errorMessage}
        </p>

        {!isChecking && (
          <Link
            href="/"
            className="btn-tap mt-8 inline-flex rounded-full bg-[var(--color-teal-deep)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--color-teal-grad-a)]"
          >
            Back to ZenithPro
          </Link>
        )}
      </section>
    </main>
  );
}