"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Sales & checkout",
    desc: "Cash, card, transfer, split, or debt a four-step checkout built around how customers actually pay.",
    icon: (
      <path d="M4 8H24M4 8V22C4 23.1 4.9 24 6 24H22C23.1 24 24 23.1 24 22V8M4 8L6 4H22L24 8M10 14C10 15.66 11.79 17 14 17C16.21 17 18 15.66 18 14" />
    ),
  },
  {
    title: "Inventory & stock",
    desc: "Products with variants, live stock levels, and low-stock alerts that sync the moment you're back online.",
    icon: <path d="M4 8L14 3L24 8V20L14 25L4 20V8ZM4 8L14 13L24 8M14 13V25" />,
  },
  {
    title: "Customers & debt",
    desc: "Track every customer's history, balances, and repayments no spreadsheet, no forgetting who owes what.",
    icon: (
      <path d="M14 14C16.76 14 19 11.76 19 9C19 6.24 16.76 4 14 4C11.24 4 9 6.24 9 9C9 11.76 11.24 14 14 14ZM14 14C8.5 14 4 17.13 4 21V24H24V21C24 17.13 19.5 14 14 14Z" />
    ),
  },
  {
    title: "Expenses",
    desc: "Log spend by category, filter by date or amount, and see where the money's actually going.",
    icon: <path d="M4 14H24M4 14C4 8.48 8.48 4 14 4C19.52 4 24 8.48 24 14M4 14C4 19.52 8.48 24 14 24C19.52 24 24 19.52 24 14M14 8V20" />,
  },
  {
    title: "Materials & production",
    desc: "Recipes, material movements, and production orders that deduct stock atomically the moment a batch completes.",
    icon: <path d="M6 24V12L14 4L22 12V24H17V17H11V24H6Z" />,
  },
  {
    title: "Reports & insights",
    desc: "Sales summaries, profit vs. expenses, and customer overviews read the business, not just the receipts.",
    icon: <path d="M5 24V14M12 24V8M19 24V17M26 24V4" />,
  },
];

export default function FeatureGrid() {
  return (
    <section id="product" className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-gold-dark)]">
          Built in, not bolted on
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
          Everything a Nigerian SME runs on, in one app
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-7 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(11,79,74,0.25)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-teal-deep)]/[0.08] text-[var(--color-teal-deep)] transition-colors group-hover:bg-[var(--color-teal-deep)] group-hover:text-white">
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {f.icon}
              </svg>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-[var(--color-ink)]">
              {f.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink)]/65">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
