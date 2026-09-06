import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font — no external @import, no FOUC, and it
// sidesteps the "@import must precede all rules" CSS build error
// that a plain @import url(...) in globals.css runs into with Tailwind v4.
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "ZenithPro Business management that works offline",
  description:
    "ZenithPro is offline-first business management for Nigerian SMEs sales, stock, customer debt, and reports that keep working even when the network doesn't.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
