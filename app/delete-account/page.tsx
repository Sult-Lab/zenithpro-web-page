import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Delete Your Account — ZenithPro",
  description: "How to request deletion of your ZenithPro account and business data.",
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]/70">
      {children}
    </p>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="text-[15px] leading-relaxed text-[var(--color-ink)]/70">{children}</li>;
}

const SUPPORT_EMAIL = "support@zenithpro.app"; // TODO: replace with your real support inbox

export default function DeleteAccountPage() {
  const mailtoHref = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    "Account deletion request"
  )}&body=${encodeURIComponent(
    "Business name:\nRegistered phone number:\nEmail on the account:\nRole (Admin / Manager / Staff):\n\nI would like to request deletion of my ZenithPro account and associated data."
  )}`;

  return (
    <LegalLayout title="Delete your account" updated="September 6, 2026">
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-5 text-[14px] leading-relaxed text-[var(--color-ink)]/65">
        Replace <code className="rounded bg-black/5 px-1.5 py-0.5">{SUPPORT_EMAIL}</code>{" "}
        with your real support inbox before publishing this page or submitting
        it to Google Play.
      </div>

      <section>
        <H2>1. Who this applies to</H2>
        <P>
          Every ZenithPro account belongs to a business and is assigned a
          role — Admin, Manager, or Staff. What gets deleted depends on your
          role:
        </P>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <Li>
            <strong>Business Admin:</strong> requesting deletion removes the
            entire business — all staff accounts, branches, products,
            sales records, and customer data tied to it.
          </Li>
          <Li>
            <strong>Manager or Staff:</strong> requesting deletion removes
            your individual staff account and login credentials. The
            business itself, and records of sales you processed while
            employed, remain with the business.
          </Li>
        </ul>
      </section>

      <section>
        <H2>2. How to request deletion</H2>
        <P>
          ZenithPro does not currently support self-service deletion inside
          the app. To request deletion, email us from the address
          associated with your account and include your business name,
          registered phone number, and role, so we can verify the request
          before acting on it.
        </P>
        <a
          href={mailtoHref}
          className="btn-tap mt-5 inline-flex rounded-full bg-[var(--color-teal-deep)] px-6 py-3 text-[15px] font-medium text-white hover:bg-[var(--color-teal-grad-a)]"
        >
          Request account deletion
        </a>
        <P>
          You can also send the request manually to{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-[var(--color-teal-deep)] underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </P>
      </section>

      <section>
        <H2>3. What gets deleted</H2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <Li>Your name, phone number, email, and login credentials;</Li>
          <Li>Your staff profile and role assignment;</Li>
          <Li>
            For a full business deletion: all products, stock records,
            branches, expenses, and customer records tied to that business.
          </Li>
        </ul>
      </section>

      <section>
        <H2>4. What we keep, and why</H2>
        <P>
          Some records can&apos;t be deleted immediately, even on request:
        </P>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <Li>
            <strong>Sales and payment records</strong> confirmed through
            Nomba are retained for a period consistent with Nigerian tax
            and financial recordkeeping obligations, even after an account
            or business is deleted.
          </Li>
          <Li>
            <strong>Fraud and dispute records</strong> may be retained
            longer where needed to resolve an active dispute or investigate
            suspected misuse.
          </Li>
        </ul>
        <P>
          Outside of these cases, your personal data is removed from active
          systems once the request is processed.
        </P>
      </section>

      <section>
        <H2>5. How long it takes</H2>
        <P>
          We aim to process deletion requests within 30 days of
          verification. You&apos;ll receive a confirmation email once
          deletion is complete.
        </P>
      </section>

      <section>
        <H2>6. Questions</H2>
        <P>
          For anything not covered here, see our{" "}
          <a href="/privacy" className="font-medium text-[var(--color-teal-deep)] underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          or contact{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-[var(--color-teal-deep)] underline underline-offset-2"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </P>
      </section>
    </LegalLayout>
  );
}
