import Link from "next/link";
import { ArrowRight, CheckIcon } from "./Icons";

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
            Trusted by brokers and borrowers across the country
          </div>
          <h1 className="mb-6 max-w-xl text-5xl font-semibold leading-[1.02] tracking-tight text-gray-900 lg:text-[4.35rem]">
            Transactions that
            <br />
            both sides can <span className="text-green-700">trust.</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-500 sm:text-[1.15rem]">
            Close Safely gives brokers and borrowers a shared, transparent
            space to move through transactions with clarity and finish with
            confidence.
          </p>
          <div className="mb-12 flex flex-wrap gap-3">
            <Link
              href="https://app.closesafely.ai/register/"
              className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-green-800 hover:shadow-lg active:scale-[0.99]"
            >
              Get Started Free <ArrowRight />
            </Link>
            <button
              onClick={() => setActive?.("About")}
              className="rounded-xl border border-gray-200 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-green-200 hover:bg-green-50 hover:text-green-800 hover:shadow-md active:scale-[0.99] active:border-green-300 active:bg-green-100"
            >
              Learn More About Us
            </button>
          </div>
          <div className="flex flex-wrap gap-5">
            {["End-to-end encrypted", "SOC 2 Certified", "No hidden fees"].map((text) => (
              <span key={text} className="flex items-center gap-1.5 text-sm font-medium text-gray-400">
                <CheckIcon /> {text}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-0 z-0 scale-95 rounded-[2rem] bg-[radial-gradient(circle,rgba(134,239,172,0.34)_0%,rgba(220,252,231,0.12)_42%,transparent_72%)] blur-3xl" />
          <div className="animate-float absolute -left-3 top-6 z-20 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3.5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:block">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Total Secured</p>
            <p className="text-xl font-bold text-gray-900">$2.4B+</p>
            <p className="mt-0.5 text-[11px] font-semibold text-green-600">+34% this quarter</p>
          </div>
          <div className="animate-float relative z-10 w-full max-w-sm rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(15,23,42,0.16)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="mb-0.5 text-xs font-medium text-gray-400">Portfolio Balance</p>
                <p className="text-2xl font-bold text-gray-900">$3,444.00</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-lg border border-green-100 bg-green-50 px-2.5 py-1.5 text-xs font-semibold text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Secure
              </span>
            </div>
            <div className="mb-4 border-t border-gray-50" />
            <div className="space-y-3.5">
              {[
                { label: "Toronto Condo", note: "Queen West - Verified", amount: "+$1,200", positive: true, badge: "T" },
                { label: "Brampton Stay", note: "Bramalea - Review", amount: "-$800", positive: false, badge: "B" },
                { label: "Scarborough Home", note: "Guildwood - Docs sent", amount: "+$3,044", positive: true, badge: "S" },
              ].map(({ label, note, amount, positive, badge }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 text-sm">
                    {badge}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-800">{label}</p>
                    <p className="truncate text-xs text-gray-400">{note}</p>
                  </div>
                  <p className={`flex-shrink-0 text-sm font-bold ${positive ? "text-green-600" : "text-red-500"}`}>
                    {amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-float absolute -right-2 bottom-8 z-20 hidden items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-3 py-2.5 shadow-[0_16px_35px_rgba(15,23,42,0.1)] backdrop-blur-xl lg:flex">
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
            <div>
              <p className="text-[11px] font-bold leading-none text-gray-800">All Systems Secure</p>
              <p className="mt-0.5 text-[10px] text-gray-400">AES-256 - SOC 2 - TLS 1.3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-8 border-t border-gray-100/80 pt-10 md:grid-cols-4">
        {[
          { value: "$2.4B+", label: "Transactions secured" },
          { value: "18K+", label: "Active brokers" },
          { value: "99.9%", label: "Platform uptime" },
          { value: "0", label: "Unresolved fraud cases" },
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
