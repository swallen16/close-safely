"use client";

import Link from "next/link";
import { useState } from "react";

const COOKIE_KEY = "close-safely-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.localStorage.getItem(COOKIE_KEY);
  });
  const [expanded, setExpanded] = useState(false);

  const dismiss = (value: "accepted" | "rejected" | "managed") => {
    window.localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
    setExpanded(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="p-5">
          <p className="mb-1 text-sm font-semibold text-gray-900">
            We use cookies and similar technologies
          </p>
          <p className="text-sm leading-relaxed text-gray-500">
            We use cookies and similar technologies to operate our website, analyze usage, and
            enhance your experience. You can accept all cookies, reject non-essential cookies, or
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
              Reject Non-Essential Cookies
            </button>
            <button
              onClick={() => setExpanded((value) => !value)}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.99]"
            >
              {expanded ? "Hide Preferences" : "Manage Preferences"}
            </button>
          </div>
        </div>

        {expanded && (
          <div className="border-t border-gray-100 px-5 pb-5 pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-700">
              Cookie Preference Centre
            </p>

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

            <div className="mb-3 rounded-xl border border-gray-100 bg-gray-50 p-4">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Non-Essential Cookies</p>
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
              You may withdraw or update your consent at any time through your browser settings or
              our cookie preference tools.
            </p>

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
                Reject Non-Essential Cookies
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
