"use client";

import Link from "next/link";
import { pushEvent } from "../lib/gtm";

const personas = [
  {
    role: "Mortgage Brokers",
    emoji: "🏦",
    items: [
      "Reduce admin by up to 40%",
      "Increase funded volume through structured deal flow",
      "Capture renewal opportunities before competitors",
    ],
    highlight: false,
  },
  {
    role: "Realtors",
    emoji: "🏡",
    items: [
      "Gain visibility into deal readiness",
      "Close faster with fewer surprises",
      "Strengthen client trust through transparency",
    ],
    highlight: false,
  },
  {
    role: "Real Estate Lawyers",
    emoji: "⚖️",
    items: [
      "Receive cleaner, structured files",
      "Reduce back-and-forth communication",
      "Improve turnaround time and client experience",
    ],
    highlight: false,
  },
  {
    role: "Buyers & Borrowers",
    emoji: "🔑",
    items: [
      "Understand affordability clearly",
      "Avoid unnecessary declines",
      "Navigate the process with confidence and control",
    ],
    highlight: true,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            Who We Serve
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            Built for every stakeholder in the deal.
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Close Safely connects every professional and participant in a mortgage transaction into one intelligent workspace.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {personas.map(({ role, emoji, items, highlight }) => (
            <div
              key={role}
              className={`rounded-2xl border p-7 transition-all ${
                highlight
                  ? "border-green-600 bg-green-700"
                  : "border-gray-100 bg-white shadow-sm hover:border-green-100 hover:shadow-md"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{emoji}</span>
                <h3 className={`text-lg font-semibold tracking-tight ${highlight ? "text-white" : "text-gray-900"}`}>
                  {role}
                </h3>
              </div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${highlight ? "bg-green-300" : "bg-green-500"}`} />
                    <span className={`text-[15px] leading-snug ${highlight ? "text-green-100" : "text-gray-500"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-sm font-medium text-gray-400">
            One platform. Every participant. Zero fragmentation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://app.closesafely.ai/register/"
              onClick={() => pushEvent({ event: "cta_click", button_text: "Get Early Access", section_name: "Who We Serve", page_location: window.location.pathname, link_url: "https://app.closesafely.ai/register/" })}
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-800"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
