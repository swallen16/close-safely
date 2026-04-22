"use client";

import Link from "next/link";
import { pushEvent } from "../lib/gtm";
import { ArrowRight } from "./Icons";

type HeroProps = {
  setActive?: (section: string) => void;
};

export default function Hero({ setActive }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf7_42%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(220,252,231,0.75),transparent_30%),radial-gradient(circle_at_78%_40%,rgba(187,247,208,0.4),transparent_28%),radial-gradient(circle_at_50%_88%,rgba(240,253,244,0.75),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.9)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-100/80 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-green-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Connecting buyers, brokers, realtors, and legal professionals
          </div>
          <h1 className="mb-6 max-w-xl text-5xl font-semibold leading-[1.02] tracking-tight text-gray-900 lg:text-[4.35rem]">
            Mortgage deals shouldn&apos;t feel like{" "}
            <span className="text-green-700">guesswork.</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-500 sm:text-[1.15rem]">
            Close Safely brings clarity, transparency, and collaboration into one intelligent workspace connecting buyers, brokers, realtors, and legal professionals to execute property transactions with confidence.
          </p>
          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              href="https://app.closesafely.ai/register/"
              onClick={() => pushEvent({ event: "cta_click", button_text: "Get Early Access", section_name: "Hero", page_location: window.location.pathname, link_url: "https://app.closesafely.ai/register/" })}
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-green-800 hover:shadow-lg active:scale-[0.99]"
            >
              Get Early Access <ArrowRight />
            </Link>
            <button
              onClick={() => setActive?.("Contact")}
              className="rounded-xl border border-gray-200 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-green-200 hover:bg-green-50 hover:text-green-800 hover:shadow-md active:scale-[0.99] active:border-green-300 active:bg-green-100"
            >
              Request a Demo
            </button>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-0 z-0 scale-95 rounded-[2rem] bg-[radial-gradient(circle,rgba(134,239,172,0.34)_0%,rgba(220,252,231,0.12)_42%,transparent_72%)] blur-3xl" />
          <div className="animate-float absolute -left-3 top-6 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3.5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:block">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Renewals Tracked</p>
            <p className="text-xl font-bold text-gray-900">2,400+</p>
            <p className="mt-0.5 text-[11px] font-semibold text-green-600">25% retention lift</p>
          </div>
          <div className="animate-float relative z-10 w-full max-w-sm rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(15,23,42,0.16)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="mb-0.5 text-xs font-medium text-gray-400">Deal Pipeline</p>
                <p className="text-2xl font-bold text-gray-900">Active Workspace</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-lg border border-green-100 bg-green-50 px-2.5 py-1.5 text-xs font-semibold text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Live
              </span>
            </div>
            <div className="mb-4 border-t border-gray-50" />
            <div className="space-y-3.5">
              {[
                { label: "Sarah M. — Renewal", note: "Broker notified · 90 days out", status: "On track", positive: true, badge: "SM" },
                { label: "James K. — Purchase", note: "Docs verified · Lawyer added", status: "In review", positive: true, badge: "JK" },
                { label: "Priya L. — Refinance", note: "Rate comparison ready", status: "Action needed", positive: false, badge: "PL" },
              ].map(({ label, note, status, positive, badge }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 text-[10px] font-semibold text-gray-500">
                    {badge}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-800">{label}</p>
                    <p className="truncate text-xs text-gray-400">{note}</p>
                  </div>
                  <p className={`flex-shrink-0 text-xs font-bold ${positive ? "text-green-600" : "text-amber-500"}`}>
                    {status}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-float absolute -right-2 bottom-8 z-20 hidden items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-3 py-2.5 shadow-[0_16px_35px_rgba(15,23,42,0.1)] backdrop-blur-xl lg:flex">
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
            <div>
              <p className="text-[11px] font-bold leading-none text-gray-800">All Stakeholders Connected</p>
              <p className="mt-0.5 text-[10px] text-gray-400">Broker · Realtor · Lawyer · Buyer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 border-t border-gray-100/80 pt-10 sm:grid-cols-3">
        {[
          { value: "$4B+", label: "Lost annually in Canada from incomplete mortgage applications" },
          { value: "70%", label: "Of mortgages renew every 3–5 years, with most borrowers leaving money on the table" },
          { value: "40%+", label: "Admin time wasted across fragmented workflows" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="text-3xl font-bold tracking-tight text-gray-900">{value}</p>
            <p className="mt-1.5 text-sm font-medium text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
