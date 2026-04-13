"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_KEY = "close-safely-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = (value: "accepted" | "rejected" | "managed") => {
    window.localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
    setExpanded(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl">

        {/* Main banner */}
        <div className="p-5">
          <p className="mb-1 text-sm font-semibold text-gray-900">
            We use cookies and similar technologies
          </p>
          <p className="text-sm leading-relaxed text-gray-500">
            We use cookies and similar technologies to operate our website, analyze usage, and
            enhance your experience. You can accept all cookies, reject non‑essential cookies, or
            manage your preferences. For more information, see our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-green-700 transition-colors hover:text-green-800"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => dismiss("accepted")}
              className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-green-800 hover:shadow-md active:scale-[0.99]"
            >
              Accept All Cookies
            </button>
            <button
              onClick={() => dismiss("rejected")}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.99]"
            >
              Reject Non‑Essential Cookies
            </button>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.99]"
            >
              {expanded ? "Hide Preferences" : "Manage Preferences"}
            </button>
          </div>
        </div>

        {/* Expanded preference centre */}
        {expanded && (
          <div className="border-t border-gray-100 px-5 pb-5 pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-700">
              Cookie Preference Centre
            </p>

            {/* Essential */}
            <div className="mb-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Essential Cookies</p>
                <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                  Always On
                </span>
              </div>
              <p className="text-xs leading-relaxed text-gray-500">
                Required for the website and platform to function. These cannot be disabled.
              </p>
            </div>

            {/* Non-essential */}
            <div className="mb-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Non‑Essential Cookies</p>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
                  Optional
                </span>
              </div>
              <p className="text-xs leading-relaxed text-gray-500">
                Help us understand how our website is used and improve performance and user
                experience. Where required by law, we use these only with your consent.
              </p>
            </div>

            <p className="mb-4 text-xs leading-relaxed text-gray-400">
              You may withdraw or update your consent at any time through your browser settings
              or our cookie preference tools.
            </p>

            {/* Data Usage Disclosure */}
            <details className="mb-2 rounded-xl border border-gray-100">
              <summary className="cursor-pointer select-none rounded-xl px-4 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                Themis Lending Inc. — Data Usage Disclosure · Effective March 2026
              </summary>
              <div className="space-y-3 px-4 pb-4 pt-2 text-xs leading-relaxed text-gray-500">
                <p><strong className="text-gray-700">1. Purpose</strong><br />This Disclosure explains how Themis Lending Inc. uses personal information within its platform, complementing our Privacy Policy and Terms of Service.</p>
                <p><strong className="text-gray-700">2. Relationship to Terms of Service</strong><br />By using Themis's website or platform, you agree to our Terms of Service and acknowledge the data practices described here and in our Privacy Policy.</p>
                <p><strong className="text-gray-700">3. How We Use Data</strong><br />We use personal information to create and manage accounts; perform income calculations and affordability analysis; generate summaries and reports; enable borrower‑authorized sharing with mortgage professionals; secure the platform and prevent fraud; comply with legal obligations; and improve product functionality.</p>
                <p><strong className="text-gray-700">4. No Lending Decisions</strong><br />Themis does not approve, underwrite, or fund mortgages. Data processed supports decision‑making by borrowers and licensed professionals only.</p>
                <p><strong className="text-gray-700">5. AI‑Assisted Processing</strong><br />Certain features may use AI‑assisted tools to organize information or generate summaries. Core affordability calculations rely on deterministic, versioned rule sets. AI‑assisted features do not make lending decisions.</p>
                <p><strong className="text-gray-700">6. Data Sharing</strong><br />Personal information is shared only with professionals explicitly authorized by the borrower; with service providers under contractual safeguards; or where required by law.</p>
                <p><strong className="text-gray-700">7. Data Retention and Deletion</strong><br />We retain personal information only as long as necessary or as required by law. Deletion requests are assessed in accordance with our Privacy Policy.</p>
                <p><strong className="text-gray-700">8. Your Control and Choices</strong><br />Borrowers control what information is provided and with whom it is shared. You may revoke sharing permissions at any time through platform controls, subject to legal obligations.</p>
                <p><strong className="text-gray-700">9. Contact</strong><br />Privacy Officer, Themis Lending Inc. ·{" "}<a href="mailto:privacy@themislending.ca" className="text-green-700 hover:underline">privacy@themislending.ca</a></p>
              </div>
            </details>

            {/* Privacy Policy */}
            <details className="mb-4 rounded-xl border border-gray-100">
              <summary className="cursor-pointer select-none rounded-xl px-4 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50">
                Themis Lending Inc. — Privacy Policy · Last updated March 2026
              </summary>
              <div className="space-y-3 px-4 pb-4 pt-2 text-xs leading-relaxed text-gray-500">
                <p><strong className="text-gray-700">1. Our Commitment</strong><br />Themis Lending Inc. is committed to protecting personal information in compliance with PIPEDA and applicable provincial laws, including Québec&apos;s Law 25.</p>
                <p><strong className="text-gray-700">2. What Themis Does</strong><br />Themis provides an income calculation and mortgage‑qualification workspace. Themis is not a lender and does not approve, underwrite, or fund mortgages.</p>
                <p><strong className="text-gray-700">3. Information We Collect</strong><br />We collect information you provide (identity, financial, documents, professional details), information generated by the platform (outputs, audit logs, consent history), and information collected automatically (device identifiers, IP address, usage data, cookies).</p>
                <p><strong className="text-gray-700">4. How We Use Personal Information</strong><br />To provide and operate the Services; perform calculations; process documents; enable borrower‑directed sharing; improve functionality; detect fraud; communicate service messages; and comply with legal requirements.</p>
                <p><strong className="text-gray-700">5. Consent and Your Choices</strong><br />We rely on meaningful consent, including express consent for sensitive financial information. You may control what information is provided and revoke access previously granted.</p>
                <p><strong className="text-gray-700">6. How We Share Personal Information</strong><br />We do not sell personal information. We may share with professionals you authorize, service providers under contractual safeguards, where required by law, or in connection with a corporate transaction.</p>
                <p><strong className="text-gray-700">7. AI‑Assisted Features</strong><br />Themis may use AI‑assisted tools for information intake and document extraction. Affordability calculations use deterministic rule sets. Themis does not make automated lending decisions.</p>
                <p><strong className="text-gray-700">8. Cross‑Border Processing</strong><br />Some service providers may process personal information outside Canada under contractual and technical safeguards.</p>
                <p><strong className="text-gray-700">9. Data Retention</strong><br />We retain personal information only as long as necessary or required by law. Deletion requests are subject to legal and security requirements.</p>
                <p><strong className="text-gray-700">10. Security Safeguards</strong><br />We use administrative, technical, and physical safeguards with reference to SOC 2 and ISO/IEC 27001 frameworks.</p>
                <p><strong className="text-gray-700">11. Your Privacy Rights</strong><br />Depending on your jurisdiction, you may have the right to access, correct, request portability, withdraw consent, request deletion, obtain explanations of automated processing, and file a complaint with the Office of the Privacy Commissioner of Canada.</p>
                <p><strong className="text-gray-700">12. Contact</strong><br />Privacy Officer, Themis Lending Inc. ·{" "}<a href="mailto:privacy@themislending.ca" className="text-green-700 hover:underline">privacy@themislending.ca</a></p>
                <p><strong className="text-gray-700">13. Updates</strong><br />We may update this Privacy Policy from time to time. The most current version will be posted on our website with the revised effective date.</p>
              </div>
            </details>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => dismiss("accepted")}
                className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-green-800 active:scale-[0.99]"
              >
                Accept All Cookies
              </button>
              <button
                onClick={() => dismiss("rejected")}
                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.99]"
              >
                Reject Non‑Essential Cookies
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
