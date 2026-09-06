"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-4">
      <div
        className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-20"
        style={{
          background: "linear-gradient(150deg, var(--color-teal-grad-a), var(--color-teal-grad-b))",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-gold)" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/50"
        >
          Built for the Nomba x DevCareer Hackathon 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mx-auto mt-4 max-w-xl text-balance font-display text-3xl font-semibold leading-tight text-white md:text-4xl"
        >
          Let&apos;s get your business running — online or off.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            id="waitlist"
            href="#"
            className="btn-tap rounded-full bg-[var(--color-gold)] px-8 py-3.5 text-[15px] font-medium text-[var(--color-teal-grad-b)] shadow-sm"
          >
            Get started free
          </a>
          <a
            href="#product"
            className="btn-tap rounded-full border border-white/25 px-8 py-3.5 text-[15px] font-medium text-white hover:border-white/50"
          >
            Explore the product
          </a>
        </motion.div>
      </div>
    </section>
  );
}
