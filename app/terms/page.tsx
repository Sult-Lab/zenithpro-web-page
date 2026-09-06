import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — ZenithPro",
  description: "Terms of Service for the ZenithPro business management platform and terminal hardware program.",
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

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="September 6, 2026">
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper-raised)] p-5 text-[14px] leading-relaxed text-[var(--color-ink)]/65">
        This is a general-purpose template provided for a pilot-stage
        product and has not been reviewed by a lawyer. Before onboarding
        real merchants or processing live payments, have it reviewed by
        counsel familiar with Nigerian commercial and data protection
        law.
      </div>

      <section>
        <H2>1. Agreement to terms</H2>
        <P>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use
          of the ZenithPro mobile application, web admin portal, and
          associated hardware terminals (together, the &quot;Service&quot;),
          operated for use by registered businesses (&quot;you&quot;, &quot;your
          business&quot;) and their staff. By registering a business,
          activating a terminal, or otherwise using the Service, you
          agree to be bound by these Terms.
        </P>
      </section>

      <section>
        <H2>2. Who can use ZenithPro</H2>
        <P>
          ZenithPro is built for business use — retailers, artisans,
          small producers, and food businesses operating in Nigeria. The
          person registering a business confirms they are authorized to
          act on its behalf and to add staff accounts under
          role-based access (Admin, Manager, Staff).
        </P>
      </section>

      <section>
        <H2>3. Hardware terminals</H2>
        <P>
          ZenithPro is hardware-led: on onboarding, your business
          receives one or more managed Android terminals with a built-in
          receipt printer. Terminals are provided against a one-time
          rental fee and remain the property of ZenithPro (or its
          hardware partners) unless otherwise agreed in writing. You are
          responsible for the reasonable care of terminals issued to
          your business, and for reporting loss, theft, or damage
          promptly.
        </P>
      </section>

      <section>
        <H2>4. Subscription and fees</H2>
        <P>
          Continued access to the Service requires an active,
          recurring per-terminal subscription (billed monthly,
          quarterly, or yearly, as selected at onboarding). There is no
          free tier. Fees are disclosed before you subscribe and may
          change with advance notice; continued use after a fee change
          takes effect constitutes acceptance of the new fee.
        </P>
      </section>

      <section>
        <H2>5. Payments and settlement</H2>
        <P>
          Customer payments processed through ZenithPro move directly
          through Nomba&apos;s regulated payment rails via a dedicated
          virtual account assigned to each terminal.{" "}
          <strong>ZenithPro does not hold, custody, or have access to
          your business&apos;s transaction funds at any point</strong> —
          funds settle directly to your own Nomba sub-account. ZenithPro
          is not a bank, payment institution, or holder of customer
          funds, and is not liable for delays, failures, or disputes
          arising from the underlying payment rail, which are subject to
          Nomba&apos;s own terms.
        </P>
      </section>

      <section>
        <H2>6. Offline operation and data sync</H2>
        <P>
          ZenithPro is designed to keep working during intermittent
          connectivity by storing records locally on the terminal and
          syncing to our servers once a connection is available. You
          are responsible for keeping terminals reasonably connected so
          that sales, stock, and customer records sync in a timely
          manner. Some actions — including finalizing a sale and
          completing a production order — require an active network
          connection, since stock and material deductions are processed
          atomically on our servers to prevent double-counting.
        </P>
      </section>

      <section>
        <H2>7. Acceptable use</H2>
        <P>You agree not to:</P>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <Li>Use the Service for any unlawful purpose or in violation of Nigerian law;</Li>
          <Li>Attempt to reverse-engineer, tamper with, or circumvent terminal security or payment reconciliation;</Li>
          <Li>Misrepresent transaction records, inventory, or staff identities;</Li>
          <Li>Resell or transfer a terminal to another business without authorization.</Li>
        </ul>
      </section>

      <section>
        <H2>8. Termination</H2>
        <P>
          Either party may terminate the subscription with notice as
          set out in your onboarding agreement. On termination, terminal
          hardware must be returned or settled per the hardware
          agreement, and you may request an export of your business
          data within a reasonable period before it is deleted from our
          systems.
        </P>
      </section>

      <section>
        <H2>9. Limitation of liability</H2>
        <P>
          The Service is provided on an &quot;as is&quot; basis during this pilot
          phase. To the maximum extent permitted by law, ZenithPro is
          not liable for indirect, incidental, or consequential losses,
          including lost profits or lost sales data arising from
          connectivity interruptions, third-party payment rail issues,
          or hardware failure, beyond amounts actually paid for the
          Service in the preceding three months.
        </P>
      </section>

      <section>
        <H2>10. Changes to these terms</H2>
        <P>
          We may update these Terms as the product moves from pilot to
          general availability. Material changes will be communicated
          through the app or admin portal before they take effect.
        </P>
      </section>

      <section>
        <H2>11. Contact</H2>
        <P>
          Questions about these Terms can be sent to the contact address
          listed in the ZenithPro app or admin portal.
        </P>
      </section>
    </LegalLayout>
  );
}