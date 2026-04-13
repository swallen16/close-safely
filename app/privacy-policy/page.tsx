import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Close Safely",
  description:
    "Themis Lending Inc. Privacy Policy — how we collect, use, disclose, retain, and protect personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-700 text-xs font-bold text-white">
            CS
          </span>
          Back to Close Safely
        </Link>

        <div className="mb-10 border-b border-gray-100 pb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Themis Lending Inc. Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: March 2026</p>
        </div>

        <div className="space-y-10 text-gray-600">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Our Commitment to Privacy</h2>
            <p className="leading-8">
              Themis Lending Inc. (&ldquo;Themis&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy
              and security of personal information in our custody or control. We maintain a privacy
              management program designed to comply with Canada&apos;s Personal Information Protection
              and Electronic Documents Act (PIPEDA) and applicable provincial private‑sector privacy
              laws, including Québec&apos;s Act Respecting the Protection of Personal Information in the
              Private Sector, as amended by Law 25.
            </p>
            <p className="mt-4 leading-8">
              This Privacy Policy explains how we collect, use, disclose, retain, and protect personal
              information when you visit our website or use our products and services (collectively,
              the &ldquo;Services&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">2. What Themis Does</h2>
            <p className="leading-8">
              Themis provides an income calculation and mortgage‑qualification workspace intended to
              help borrowers — including self‑employed borrowers — organize financial information and
              generate lender‑aligned summaries. Borrowers may choose to share certain information
              with mortgage professionals such as mortgage brokers or agents, real estate
              professionals, lawyers or notaries, and lender representatives.
            </p>
            <p className="mt-4 leading-8 font-medium text-gray-700">
              Important: Themis is not a lender and does not approve, underwrite, or fund mortgages.
              All lending and underwriting decisions are made independently by licensed professionals
              and/or financial institutions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Scope and Roles</h2>
            <p className="mb-4 leading-8">This Privacy Policy applies when you:</p>
            <ul className="ml-4 list-disc space-y-1.5 leading-7 text-gray-600">
              <li>visit our website;</li>
              <li>create or use a workspace or account;</li>
              <li>upload documents or use calculators;</li>
              <li>receive affordability or eligibility outputs;</li>
              <li>contact us for support, privacy, or security inquiries; or</li>
              <li>use an invitation issued by a mortgage professional.</li>
            </ul>
            <p className="mt-4 leading-8">
              <span className="font-medium text-gray-700">Borrower‑controlled sharing:</span>{" "}
              Professionals may only access personal information when you explicitly authorize sharing
              through platform controls, except where disclosure is required by law.
            </p>
            <p className="mt-4 leading-8">
              <span className="font-medium text-gray-700">Third‑party services:</span>{" "}
              This Policy does not apply to third‑party websites or services linked from our website,
              or to how mortgage professionals or lenders use personal information outside the Themis
              platform under their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Personal Information We Collect</h2>

            <h3 className="mb-2 mt-4 text-base font-semibold text-gray-800">4.1 Information You Provide</h3>
            <p className="leading-8">
              We may collect identity and contact information (such as name, email address, phone
              number, province, and language preference); mortgage and financial information (including
              income details, expenses, assets, liabilities, and property details); documents you
              upload (such as pay stubs, tax records, bank statements, and financial statements); and
              professional user details (such as role, brokerage, and license number, where applicable).
            </p>

            <h3 className="mb-2 mt-4 text-base font-semibold text-gray-800">4.2 Information Generated by the Platform</h3>
            <p className="leading-8">
              We may generate and store affordability and eligibility outputs, calculation metadata,
              audit logs, access records, and consent or sharing history.
            </p>

            <h3 className="mb-2 mt-4 text-base font-semibold text-gray-800">4.3 Information Collected Automatically</h3>
            <p className="leading-8">
              We may automatically collect device identifiers, browser type, IP address, timestamps,
              usage data, and information collected through cookies or similar technologies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">5. How We Use Personal Information</h2>
            <p className="mb-4 leading-8">We use personal information to:</p>
            <ul className="ml-4 list-disc space-y-1.5 leading-7 text-gray-600">
              <li>provide, operate, and support the Services;</li>
              <li>perform affordability and income calculations;</li>
              <li>process document uploads and generate summaries;</li>
              <li>enable borrower‑directed sharing with professionals;</li>
              <li>improve functionality, performance, and user experience;</li>
              <li>detect, prevent, and investigate fraud or misuse;</li>
              <li>communicate service‑related and support messages; and</li>
              <li>comply with legal and regulatory requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Consent and Your Choices</h2>
            <p className="leading-8">
              We rely primarily on meaningful consent, including express consent for sensitive
              financial or tax‑related information. You may choose what information to provide,
              control whether and with whom it is shared, and revoke access previously granted to a
              professional, subject to legal retention requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">7. How We Share Personal Information</h2>
            <p className="mb-4 leading-8">
              We do not sell personal information. We may share personal information:
            </p>
            <ul className="ml-4 list-disc space-y-1.5 leading-7 text-gray-600">
              <li>with professionals you explicitly authorize;</li>
              <li>
                with service providers who process information on our behalf subject to contractual
                safeguards;
              </li>
              <li>where required by law or to protect our rights, users, or platform; or</li>
              <li>
                in connection with a corporate transaction, such as a merger or acquisition, subject
                to appropriate safeguards.
              </li>
            </ul>
            <p className="mt-4 leading-8">
              Professionals who receive information may retain it in accordance with their own legal
              and regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">8. AI‑Assisted Features and Automated Processing</h2>
            <p className="leading-8">
              Themis may use AI‑assisted tools to support information intake, document data
              extraction, and the generation of summaries or explanations. Affordability and
              qualifying‑income calculations rely on deterministic, versioned rule sets. Themis
              provides decision‑support tools only and does not make automated lending decisions.
            </p>
            <p className="mt-4 leading-8">
              Where required by Québec Law 25 or other laws, we will provide notice of automated
              processing and meaningful explanations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">9. Cross‑Border Processing</h2>
            <p className="leading-8">
              Some service providers supporting our Services may process personal information outside
              Canada. When this occurs, we use contractual and technical safeguards to protect
              personal information in accordance with Canadian privacy laws.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">10. Data Retention</h2>
            <p className="leading-8">
              We retain personal information only as long as necessary to fulfill the purposes
              described in this Policy, or as required or permitted by law. You may request deletion,
              subject to legal, security, and audit retention requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">11. Security Safeguards</h2>
            <p className="leading-8">
              We use administrative, technical, and physical safeguards appropriate to the sensitivity
              of the information we handle. Our safeguards are designed with reference to recognized
              frameworks such as SOC 2 and ISO/IEC 27001. No method of transmission or storage is
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">12. Cookies and Marketing Communications</h2>
            <p className="leading-8">
              Cookies and similar technologies are used to maintain sessions, remember preferences,
              and understand website usage. You may manage cookies through your browser settings.
              Marketing communications are sent only where permitted by law, and you may opt out at
              any time using the unsubscribe mechanism provided.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">13. Your Privacy Rights</h2>
            <p className="mb-4 leading-8">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="ml-4 list-disc space-y-1.5 leading-7 text-gray-600">
              <li>access, correct, or request portability of your personal information;</li>
              <li>withdraw consent;</li>
              <li>request deletion or de‑identification (subject to legal requirements);</li>
              <li>obtain explanations of automated processing; and</li>
              <li>
                file a complaint with the appropriate privacy regulator, including the Office of the
                Privacy Commissioner of Canada.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">14. Contact Us</h2>
            <p className="leading-8">
              Questions about this Policy or our data practices may be directed to:
            </p>
            <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm leading-7">
              <p className="font-semibold text-gray-900">Privacy Officer</p>
              <p>Themis Lending Inc.</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@themislending.ca"
                  className="font-medium text-green-700 transition-colors hover:text-green-800"
                >
                  privacy@themislending.ca
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">15. Updates to This Policy</h2>
            <p className="leading-8">
              We may update this Privacy Policy from time to time. The most current version will be
              posted on our website with the revised effective date.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
