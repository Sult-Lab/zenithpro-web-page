export function LogoMark({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 15H16L21 6L26 15H36M36 15L6 33M6 33H36"
        stroke="currentColor"
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="6" r="2.6" fill="var(--color-gold)" />
    </svg>
  );
}

export function Wordmark({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-semibold tracking-tight ${className}`}
      style={{ color: dark ? "#F7F5EF" : "var(--color-teal-deep)" }}
    >
      <LogoMark className={dark ? "text-[color:#F7F5EF]" : "text-[color:var(--color-teal-deep)]"} />
      <span>
        Zenith<span style={{ color: "var(--color-gold)" }}>Pro</span>
      </span>
    </span>
  );
}
