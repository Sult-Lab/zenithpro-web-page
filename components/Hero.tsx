"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      {/* Ambient gradient wash, kept subtle to stay light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-grad-a), transparent 70%)" }}
      />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 md:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-paper-raised)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-muted)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            Offline-first business management
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance font-display text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--color-ink)] md:text-[3.4rem]"
          >
            Run your business.
            <br />
            Even when the network doesn&apos;t.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-md text-balance text-lg leading-relaxed text-[var(--color-ink)]/70"
          >
            ZenithPro keeps sales, stock, and customer debt moving whether
            you&apos;re online or not — built for how business actually
            happens in Balogun, Computer Village, and every market in
            between.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#waitlist"
              className="btn-tap rounded-full bg-[var(--color-teal-deep)] px-7 py-3.5 text-[15px] font-medium text-[var(--color-paper)] shadow-sm hover:bg-[var(--color-teal-grad-a)]"
            >
              Get started free
            </a>
            <a
              href="#offline"
              className="btn-tap rounded-full border border-[var(--color-line)] px-7 py-3.5 text-[15px] font-medium text-[var(--color-ink)]/80 hover:border-[var(--color-teal-deep)] hover:text-[var(--color-teal-deep)]"
            >
              See how offline sync works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--color-muted)]"
          >
            <span>Room + Supabase sync</span>
            <span>Bank transfer native</span>
            <span>Never holds your funds</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <PhoneMock />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative rounded-[2.25rem] border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-3 shadow-[0_30px_60px_-20px_rgba(11,79,74,0.25)]"
    >
      <div
        className="rounded-[1.6rem] p-5"
        style={{
          background:
            "linear-gradient(160deg, var(--color-teal-grad-a), var(--color-teal-grad-b))",
        }}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-medium text-white/90">
            Today
          </span>
          <SyncPill />
        </div>

        <div className="mt-5">
          <p className="font-mono text-[11px] uppercase tracking-wide text-white/50">
            Sales today
          </p>
          <p className="font-display text-3xl font-semibold text-white">
            ₦184,200
          </p>
        </div>

        <AscendingLine />

        <div className="mt-4 space-y-2">
          {[
            ["Bag of rice — 50kg", "₦42,000", "Transfer"],
            ["Cooking gas refill", "₦8,500", "Cash"],
            ["Phone case ×3", "₦6,000", "Debt"],
          ].map(([item, amount, method]) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl bg-white/[0.07] px-3 py-2.5"
            >
              <span className="text-[13px] text-white/85">{item}</span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-[12px] text-white/60">{method}</span>
                <span className="text-[13px] font-medium text-white">{amount}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SyncPill() {
  return (
    <motion.span
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.4, repeat: Infinity }}
      className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-gold)]"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
      Synced
    </motion.span>
  );
}

function AscendingLine() {
  return (
    <svg viewBox="0 0 280 70" className="mt-4 w-full" aria-hidden="true">
      <motion.path
        d="M4 55 L60 42 L100 48 L150 20 L200 26 L240 8 L276 14"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
      />
      <circle cx="276" cy="14" r="3.5" fill="var(--color-gold)" />
    </svg>
  );
}
