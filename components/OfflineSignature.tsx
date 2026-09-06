"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    label: "Write locally",
    detail: "Every sale, product, and customer record saves to the device first. The screen updates instantly no spinner, no waiting on a bar of signal.",
    status: "PENDING",
  },
  {
    label: "Keep working",
    detail: "Ring up the next customer, adjust stock, log an expense. The app doesn't know or care whether you're online.",
    status: "DIRTY",
  },
  {
    label: "Sync when it can",
    detail: "The moment connectivity returns, everything drains to the server automatically matched by ID, safe to retry, never duplicated.",
    status: "SYNCED",
  },
];

export default function OfflineSignature() {
  return (
    <section
      id="offline"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #EEF3F1 0%, var(--color-paper) 100%)" }}
    >
      <div className="container-px mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-tight text-[var(--color-ink)] md:text-4xl">
            Built for one bar of signal.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[var(--color-ink)]/70">
            Most business apps assume a steady connection. ZenithPro
            assumes the opposite.
          </p>

          <div className="mt-10 space-y-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center pt-1">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-teal-deep)] font-mono text-[11px] font-medium text-white">
                    {i + 1}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="mt-1 h-full w-px flex-1 bg-[var(--color-line)]" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-[var(--color-ink)]/65">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SyncVisual />
      </div>
    </section>
  );
}

function SyncVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-sm rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-8 shadow-[0_30px_60px_-30px_rgba(11,79,74,0.2)]"
    >
      <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-muted)]">
        Sync status
      </p>

      <div className="mt-6 space-y-3">
        {[
          { name: "Sale — #A241", status: "SYNCED" },
          { name: "Product — Yam tuber", status: "PENDING" },
          { name: "Expense — Diesel", status: "DIRTY" },
          { name: "Customer — Mrs. Adebayo", status: "SYNCED" },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-xl border border-[var(--color-line)] bg-white px-4 py-3"
          >
            <span className="text-[14px] text-[var(--color-ink)]/80">{row.name}</span>
            <StatusBadge status={row.status} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    SYNCED: "bg-[var(--color-teal-deep)]/10 text-[var(--color-teal-deep)]",
    PENDING: "bg-[var(--color-gold)]/15 text-[var(--color-gold-dark)]",
    DIRTY: "bg-[var(--color-ink)]/10 text-[var(--color-ink)]/60",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${styles[status]}`}>
      {status}
    </span>
  );
}
