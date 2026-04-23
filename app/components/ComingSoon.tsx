"use client";

import Link from "next/link";
import { pushEvent } from "../lib/gtm";
import { ArrowRight } from "./Icons";

const innovations = [
  {
    title: "Smarter pathways for underserved borrowers",
    body: "New tools to help buyers who've been overlooked by the traditional system access the guidance and options they deserve.",
  },
  {
    title: "New approaches to home equity access",
    body: "Innovative ways for homeowners to unlock the value in their properties with full transparency and professional guidance.",
  },
  {
    title: "Optimization tools for mortgage terms and financial planning",
    body: "Help clients understand their options at every stage of the mortgage lifecycle, not just at origination.",
  },
  {
    title: "Data-driven insights for institutions and professionals",
    body: "Portfolio intelligence and market signals that help lenders and advisors make better, faster decisions.",
  },
];

export default function ComingSoon() {
  return (
    <section className="bg-white px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            Coming Soon
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            What We&apos;re Building Next
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Close Safely is just the beginning. We&apos;re actively developing solutions to unlock new opportunities across the mortgage lifecycle. We don&apos;t just follow the market we anticipate where it&apos;s going.
          </p>
        </div>

        <div className="mb-14 grid gap-5 md:grid-cols-2">
          {innovations.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-green-100 hover:bg-white hover:shadow-md"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-green-100 bg-green-50">
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-green-100 bg-green-50 px-8 py-10 text-center">
          <h3 className="mb-3 text-xl font-semibold text-gray-900">Be First to See What&apos;s Next</h3>
          <p className="mx-auto mb-8 max-w-lg text-[15px] leading-relaxed text-gray-500">
            Join our waitlist, request early demo access, or become a design partner and help shape the future of mortgage transactions.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://app.closesafely.ai/register/"
              onClick={() => pushEvent({ event: "cta_click", button_text: "Join the Waitlist", section_name: "Coming Soon", page_location: window.location.pathname, link_url: "https://app.closesafely.ai/register/" })}
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-green-800 hover:shadow-lg active:scale-[0.99]"
            >
              Join the Waitlist <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
