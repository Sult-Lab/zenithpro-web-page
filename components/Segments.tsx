"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEGMENTS = [
  {
    label: "Retail & shops",
    headline: "From Computer Village to your corner store",
    detail:
      "Variants, stock levels, and low-stock alerts that stay accurate whether you're behind a counter in Alaba or in a shop with one bar of signal.",
  },
  {
    label: "Food & production",
    headline: "Recipes that actually deduct stock",
    detail:
      "Materials, recipes, and production orders — complete a batch and watch the raw materials come off, and finished stock go on, atomically.",
  },
  {
    label: "Services",
    headline: "Customers, debt, and repeat business",
    detail:
      "Track every client's history and balance. Know who's paid, who owes, and who's due for a follow-up — without a notebook.",
  },
];

export default function Segments() {
  const [active, setActive] = useState(0);

  return (
    <section id="segments" className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--color-gold-dark)]">
          Who it&apos;s for
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[var(--color-ink)] md:text-4xl">
          One app, however your business runs
        </h2>
      </div>

      <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2">
        {SEGMENTS.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
              active === i
                ? "bg-[var(--color-teal-deep)] text-white"
                : "bg-[var(--color-paper-raised)] text-[var(--color-ink)]/60 hover:text-[var(--color-teal-deep)]"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-10 min-h-[220px] max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-10 text-center md:p-14"
          >
            <h3 className="text-balance font-display text-2xl font-semibold text-[var(--color-ink)] md:text-[1.75rem]">
              {SEGMENTS[active].headline}
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--color-ink)]/65">
              {SEGMENTS[active].detail}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
