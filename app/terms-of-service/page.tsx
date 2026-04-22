import Link from "next/link";

export default function TermsOfServicePage() {
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
            Terms of Service
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Terms for using Close Safely
          </h1>
          <p className="mt-4 text-sm text-gray-500">Effective date: April 2, 2026</p>
        </div>

        <div className="space-y-10 text-gray-600">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
            <p className="leading-8">
              By accessing or using Close Safely, you agree to these Terms of Service. If you do not
              agree, you should not use the platform.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Use of the Platform</h2>
            <p className="leading-8">
              You may use the platform only for lawful business purposes related to secure transaction
              workflows. You agree not to misuse the service, interfere with its operation, or attempt
              to access data or systems without authorization.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Accounts</h2>
            <p className="leading-8">
              You are responsible for maintaining the confidentiality of your login credentials and for
              activities that occur under your account. You agree to provide accurate information and to
              notify us promptly of any unauthorized access or suspected security issue.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Content and Documents</h2>
            <p className="leading-8">
              You retain responsibility for the documents, messages, and transaction materials you upload
              or share through the service. You represent that you have the rights needed to use that
              content and that it does not violate applicable law or third-party rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Availability and Changes</h2>
            <p className="leading-8">
              We may update, suspend, or modify parts of the service from time to time. We aim to keep
              the platform available and reliable, but we do not guarantee uninterrupted or error-free access.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
            <p className="leading-8">
              To the fullest extent permitted by law, Close Safely is not liable for indirect,
              incidental, special, consequential, or punitive damages arising from use of the platform.
              The service is provided on an as-available basis unless otherwise stated in writing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Contact</h2>
            <p className="leading-8">
              If you have questions about these terms, contact us at{" "}
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
