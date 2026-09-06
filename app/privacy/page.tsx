import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — ZenithPro",
  description: "How ZenithPro collects, uses, and protects business and transaction data.",
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

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 6, 2026">
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-5 text-[14px] leading-relaxed text-[var(--color-ink)]/65">
        This is a general-purpose template provided for a pilot-stage
        product and has not been reviewed by a lawyer. Given that
        ZenithPro handles transaction and payment-adjacent data, have
        this reviewed against the Nigeria Data Protection Act (NDPA
        2023) before onboarding real merchants.
      </div>

      <section>
        <H2>1. What this policy covers</H2>
        <P>
          This Privacy Policy explains what data ZenithPro collects
          through its Android application, web admin portal, and
          terminal hardware, why we collect it, and how it is stored,
          shared, and protected. It applies to registered businesses,
          their staff, and, where relevant, their customers whose
          transaction records are stored in the system.
        </P>
      </section>

      <section>
        <H2>2. Data we collect</H2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <Li><strong>Business & staff data:</strong> business name, address, phone, staff names, roles, login credentials, and branch assignments.</Li>
          <Li><strong>Transaction data:</strong> sales, sale items, payment method, amounts, customer debt records, and expense entries recorded through the app.</Li>
          <Li><strong>Payment metadata:</strong> virtual account references and webhook confirmations from Nomba. ZenithPro receives confirmation that a payment occurred, not access to the underlying bank account or card details.</Li>
          <Li><strong>Device & usage data:</strong> device identifiers, crash reports, and app analytics collected via Firebase Crashlytics and Analytics, used to diagnose issues and improve reliability.</Li>
          <Li><strong>Customer records entered by merchants:</strong> names, phone numbers, and purchase history that a business chooses to record for its own customers.</Li>
        </ul>
      </section>

      <section>
        <H2>3. How we use this data</H2>
        <P>We use the data described above to:</P>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <Li>Operate core features — sales processing, inventory, debt tracking, and reporting;</Li>
          <Li>Reconcile payments confirmed through Nomba&apos;s webhook notifications;</Li>
          <Li>Send push notifications for payment confirmations, low stock, and sync status;</Li>
          <Li>Diagnose crashes and improve app stability and performance;</Li>
          <Li>Meet legal, tax, or regulatory obligations where applicable.</Li>
        </ul>
      </section>

      <section>
        <H2>4. Where data lives, including offline</H2>
        <P>
          ZenithPro is offline-first: records are written to a local
          database on the terminal first, so the app keeps working
          without a connection. This means transaction data may exist
          on the physical device before it syncs to our servers.
          Terminals should be kept reasonably secure, since locally
          stored data is only as protected as the device itself until
          it syncs. Once synced, data is stored on our backend
          infrastructure (Supabase, hosted on its underlying cloud
          provider) with access controls scoped per business.
        </P>
      </section>

      <section>
        <H2>5. Who we share data with</H2>
        <P>
          We do not sell business or customer data. We share data only
          with service providers necessary to run ZenithPro:
        </P>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <Li><strong>Nomba</strong> — to process payments and provision virtual accounts. ZenithPro never holds the underlying funds.</Li>
          <Li><strong>Supabase</strong> — our database, authentication, and backend infrastructure provider.</Li>
          <Li><strong>Firebase (Google)</strong> — crash reporting, analytics, and push notification delivery.</Li>
        </ul>
        <P>
          We may also disclose data if required by law or to protect
          the rights, safety, or property of ZenithPro, its merchants,
          or others.
        </P>
      </section>

      <section>
        <H2>6. Data retention</H2>
        <P>
          We retain business and transaction data for as long as an
          account is active, and for a reasonable period after
          termination to comply with tax, accounting, or legal
          obligations, or to allow a business to export its records.
          You may request deletion of your business&apos;s data subject to
          those obligations.
        </P>
      </section>

      <section>
        <H2>7. Your rights</H2>
        <P>
          Depending on applicable law, including the Nigeria Data
          Protection Act 2023, you may have the right to access,
          correct, export, or request deletion of personal data held
          about you or your business. Requests can be made through the
          contact details below.
        </P>
      </section>

      <section>
        <H2>8. Security</H2>
        <P>
          We use role-based access control, row-level security on our
          database, and encrypted connections between the app and our
          servers. No system is perfectly secure, and we encourage
          businesses to use strong staff credentials and report any
          suspected unauthorized access immediately.
        </P>
      </section>

      <section>
        <H2>9. Children&apos;s privacy</H2>
        <P>
          ZenithPro is a business tool and is not directed at children.
          We do not knowingly collect personal data from individuals
          under 18 acting in a personal capacity.
        </P>
      </section>

      <section>
        <H2>10. Changes to this policy</H2>
        <P>
          As ZenithPro moves from pilot to general availability, this
          policy may be updated. Material changes will be communicated
          through the app or admin portal.
        </P>
      </section>

      <section>
        <H2>11. Contact</H2>
        <P>
          Questions or data requests can be sent to the contact address
          listed in the ZenithPro app or admin portal.
        </P>
      </section>
    </LegalLayout>
  );
}