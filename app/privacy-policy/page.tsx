import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-700">
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
            How we collect, use, and protect information
          </h1>
          <p className="mt-4 text-sm text-gray-500">Effective date: April 2, 2026</p>
        </div>

        <div className="space-y-10 text-gray-600">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Overview</h2>
            <p className="leading-8">
              Close Safely respects your privacy. This policy explains what information we collect,
              how we use it, and the steps we take to keep it secure when you use our platform,
              website, and related services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="leading-8">
              We may collect account details such as your name, email address, company information,
              transaction-related documents, communications you send through the platform, and basic
              technical data such as device type, browser information, and IP address.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">How We Use Information</h2>
            <p className="leading-8">
              We use information to provide and improve the service, authenticate users, support
              secure transaction workflows, respond to inquiries, monitor platform performance, and
              comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Sharing and Disclosure</h2>
            <p className="leading-8">
              We do not sell personal information. We may share information with trusted service
              providers who help operate the platform, with transaction participants as required by
              the service, or when disclosure is required by law or needed to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Security</h2>
            <p className="leading-8">
              We use administrative, technical, and organizational safeguards designed to protect
              information from unauthorized access, loss, misuse, or disclosure. No method of
              transmission or storage is completely secure, but we work to maintain appropriate protections.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Your Choices</h2>
            <p className="leading-8">
              You may request access to, correction of, or deletion of certain personal information,
              subject to legal and operational requirements. You may also contact us to update your
              account details or ask privacy-related questions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Contact</h2>
            <p className="leading-8">
              For privacy questions, contact us at{" "}
              <a
                href="mailto:support@closesafely.ai"
                className="font-semibold text-green-700"
              >
                support@closesafely.ai
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
