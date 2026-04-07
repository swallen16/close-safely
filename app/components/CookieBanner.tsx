"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_KEY = "close-safely-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(COOKIE_KEY);
    if (!savedPreference) {
      setVisible(true);
    }
  }, []);

  const dismissBanner = (value: "accepted" | "managed") => {
    window.localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between sm:p-5">
        <div className="max-w-2xl">
          <p className="mb-1 text-sm font-semibold text-gray-900">
            We use cookies to keep Close Safely secure and improve your experience.
          </p>
          <p className="text-sm leading-relaxed text-gray-500">
            You can accept them now or review your preferences any time in our{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-green-700 transition-colors hover:text-green-800"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:justify-end">
          <button
            onClick={() => dismissBanner("managed")}
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.99]"
          >
            Manage Preferences
          </button>
          <button
            onClick={() => dismissBanner("accepted")}
            className="rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-green-800 hover:shadow-lg active:scale-[0.99]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
