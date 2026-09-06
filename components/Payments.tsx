"use client";

import { motion } from "framer-motion";

const POINTS = [
  {
    title: "Bank transfer, first-class",
    desc: "Not an afterthought bolted onto a card-first flow. A dedicated virtual account per terminal, with instant push confirmation the second a transfer lands.",
  },
  {
    title: "You keep your money",
    desc: "ZenithPro never holds customer funds. Payments settle straight to your own Nomba sub-account every decision runs through that filter, no exceptions.",
  },
  {
    title: "Cashier confirms first",
    desc: "No polling, no guesswork on which transfer belongs to which sale. The cashier confirms, the push notification does the rest.",
  },
];

export default function Payments() {
  return (
    <section id="payments" className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="order-2 md:order-1"
        >
          <div className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-8">
            <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-muted)]">
              Checkout — payment method
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Cash", "Card", "Transfer", "Split", "Debt"].map((m, i) => (
                <span
                  key={m}
                  className={`rounded-xl border px-4 py-3 text-center text-[14px] font-medium ${
                    i === 2
                      ? "border-[var(--color-teal-deep)] bg-[var(--color-teal-deep)] text-white"
                      : "border-[var(--color-line)] text-[var(--color-ink)]/60"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-[var(--color-teal-deep)]/[0.06] p-4">
              <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-teal-deep)]">
                Virtual account
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-[var(--color-ink)]">
                6991 5267 83
              </p>
              <p className="mt-1 text-[13px] text-[var(--color-ink)]/55">
                Awaiting ₦42,000 — confirms automatically on receipt
              </p>
            </div>
          </div>
        </motion.div>

        <div className="order-1 md:order-2">
          <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-gold-dark)]">
            Payments
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Built around how Nigeria actually pays
          </h2>
          <div className="mt-8 space-y-7">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--color-ink)]/65">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
