import { CheckIcon, CrossIcon } from "./Icons";

export default function Why() {
  return (
    <section className="bg-white px-6 pb-14 pt-16 sm:pb-16 sm:pt-20">
      <div className="mx-auto max-w-6xl">

        {/* The Problem */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            The Problem We Solve
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            Mortgage transactions are one of the largest financial decisions people make—yet the process is still{" "}
            <span className="text-green-700">fragmented, opaque, and inefficient.</span>
          </h2>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              The Reality Today
            </p>
            <ul className="space-y-4">
              {[
                "Buyers are overwhelmed, under informed, and often rejected without clarity",
                "Brokers and realtors operate across disconnected tools and manual workflows",
                "Lawyers, lenders, and appraisers lack a shared source of truth",
                "Billions are lost annually due to incomplete applications, missed renewals, and poor coordination",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50">
                    <CrossIcon />
                  </span>
                  <span className="text-[15px] leading-snug text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium italic text-gray-400">
              The reality: the system was never designed for collaboration.
            </p>
          </div>

          <div className="rounded-2xl bg-green-700 p-8 shadow-[0_22px_60px_rgba(22,101,52,0.18)]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-300">
              Our Solution
            </p>
            <h3 className="mb-4 text-lg font-semibold text-white">A Collaborative Deal Workspace</h3>
            <p className="mb-6 text-[15px] leading-relaxed text-green-100">
              We unify every stakeholder—buyers, mortgage brokers, realtors, lawyers, and financial professionals—into a single, structured environment to:
            </p>
            <ul className="space-y-4">
              {[
                "Discover opportunities",
                "Share verified information",
                "Execute transactions seamlessly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600">
                    <CheckIcon color="white" />
                  </span>
                  <span className="text-[15px] leading-snug text-green-50">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-green-200">
              This isn&apos;t another point solution. It&apos;s a connected ecosystem designed for real-world deal execution.
            </p>
          </div>
        </div>

        {/* Built with Design Partners */}
        <div className="rounded-2xl border border-green-100 bg-green-50 px-8 py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-700">
              Built with Design Partners
            </p>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
              We&apos;re building alongside the industry.
            </h3>
            <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
              We&apos;re working closely with leading brokers, realtors, and legal professionals across Canada, the U.S., and the U.K. to reimagine how deals should flow.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: "Real workflows, not theoretical features" },
                { label: "Simplicity driven by practitioner insight" },
                { label: "Transparency embedded into every step" },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
