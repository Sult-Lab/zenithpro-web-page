"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Wordmark } from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Offline-first", href: "#offline" },
  { label: "Payments", href: "#payments" },
  { label: "Who it's for", href: "#segments" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)]/70 bg-[var(--color-paper)]/85 backdrop-blur-md">
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#top" className="shrink-0">
          <Wordmark className="text-lg md:text-xl" />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[15px] text-[var(--color-ink)]/75 transition-colors hover:text-[var(--color-teal-deep)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#waitlist"
            className="rounded-full px-5 py-2.5 text-[15px] font-medium text-[var(--color-ink)]/80 transition-colors hover:text-[var(--color-teal-deep)]"
          >
            Log in
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-[var(--color-teal-deep)] px-5 py-2.5 text-[15px] font-medium text-[var(--color-paper)] shadow-sm transition-transform hover:scale-[1.03] hover:bg-[var(--color-teal-grad-a)]"
          >
            Get started
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-teal-deep)] md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M2 6H20M2 11H20M2 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--color-line)]/70 bg-[var(--color-paper)] md:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base text-[var(--color-ink)]/80 hover:bg-[var(--color-paper-raised)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-3 px-2">
                <a
                  href="#waitlist"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full border border-[var(--color-line)] px-4 py-2.5 text-center text-[15px] font-medium text-[var(--color-ink)]/80"
                >
                  Log in
                </a>
                <a
                  href="#waitlist"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-[var(--color-teal-deep)] px-4 py-2.5 text-center text-[15px] font-medium text-[var(--color-paper)]"
                >
                  Get started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
