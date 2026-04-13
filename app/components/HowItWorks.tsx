"use client";

import Link from "next/link";
import { pushEvent } from "../lib/gtm";
import { ArrowRight } from "./Icons";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Initiate",
      body: "Create a secure transaction room and invite the other party. Set out everything that will be required - documents, expectations, and conditions - before anything begins.",
      tag: "Takes under 2 minutes",
    },
    {
      number: "02",
      title: "Define",
      body: "Both parties review and agree on the terms before the process moves forward. Nothing is assumed. Nothing is left vague. Everything is on record from the start.",
      tag: "Full document exchange",
    },
    {
      number: "03",
      title: "Monitor",
      body: "Track progress in real time. Both sides see the same view - every update, every approval, every required action. No chasing. No uncertainty about where things stand.",
      tag: "Live status for both parties",
    },
    {
      number: "04",
      title: "Complete",
      body: "The transaction closes only when both parties confirm they are ready. Nothing is released early. Nothing is forced through. A clean, mutual finish - every time.",
      tag: "Dual confirmation required",
      highlight: true,
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            How It Works
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            A simple process, built around both sides.
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Four clear steps. No system to learn. No jargon to decode.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map(({ number, title, body, tag, highlight }) => (
            <div
              key={number}
              className={`flex items-start gap-6 rounded-2xl border p-7 transition-all ${
                highlight
                  ? "border-green-600 bg-green-700"
                  : "border-gray-100 bg-white shadow-sm hover:border-green-100 hover:shadow-md"
              }`}
            >
              <div
                className={`mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                  highlight
                    ? "bg-green-600 text-white"
                    : "border border-gray-100 bg-gray-50 text-gray-400"
                }`}
              >
                {number}
              </div>
              <div className="flex-1">
                <div className="mb-2.5 flex flex-wrap items-center gap-3">
                  <h3 className={`text-lg font-semibold tracking-tight ${highlight ? "text-white" : "text-gray-900"}`}>
                    {title}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                      highlight
                        ? "bg-green-600 text-green-100"
                        : "border border-green-100 bg-green-50 text-green-700"
                    }`}
                  >
                    {tag}
                  </span>
                </div>
                <p className={`text-[15px] leading-relaxed ${highlight ? "text-green-100" : "text-gray-500"}`}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-sm font-medium text-gray-400">
            No confusion. No guessing. Just a clear path from start to finish.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://app.closesafely.ai/register/"
              onClick={() => pushEvent({ event: "cta_click", button_text: "Start Your First Transaction with Close Safely", section_name: "How It Works", page_location: window.location.pathname, link_url: "https://app.closesafely.ai/register/" })}
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-800"
            >
              Start Your First Transaction with Close Safely
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
