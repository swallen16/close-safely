"use client";

import Link from "next/link";
import { pushEvent } from "../lib/gtm";
import { ArrowRight, CheckIcon } from "./Icons";

type CTAProps = {
  setActive?: (section: string) => void;
};

export default function CTA({ setActive }: CTAProps) {
  return (
    <section className="bg-gray-50 px-6 pb-20 pt-12">
      <div className="mx-auto max-w-5xl rounded-4xl border border-gray-100 bg-white px-8 py-14 text-center shadow-sm sm:px-12">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-green-700">
          The Bigger Vision
        </p>
        <h2 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 md:text-5xl">
          Be part of the next evolution
          <br />
          in <span className="text-green-700">mortgage transactions.</span>
        </h2>
        <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-gray-500">
          We&apos;re building more than a tool we&apos;re building the infrastructure layer for modern mortgage operations.
        </p>
        <p className="mx-auto mb-10 max-w-xl text-[15px] leading-relaxed text-gray-400">
          A system where data works for people, decisions are informed not reactive, and every participant operates with clarity.
        </p>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Link
            href="https://app.closesafely.ai/register/"
            onClick={() => pushEvent({ event: "cta_click", button_text: "Get Early Access", section_name: "CTA", page_location: window.location.pathname, link_url: "https://app.closesafely.ai/register/" })}
            className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-green-800 hover:shadow-lg active:scale-[0.99]"
          >
            Get Early Access <ArrowRight />
          </Link>
          <button
            onClick={() => {
              pushEvent({ event: "cta_click", button_text: "Request a Demo", section_name: "CTA", page_location: window.location.pathname, link_url: "" });
              setActive?.("Contact");
            }}
            className="rounded-xl border border-gray-200 px-7 py-3.5 text-[15px] font-semibold text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm active:scale-[0.99]"
          >
            Request a Demo
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["No credit card required", "Free to get started", "Setup in under 2 minutes"].map((text) => (
            <span key={text} className="flex items-center gap-1.5 text-sm font-medium text-gray-400">
              <CheckIcon /> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
