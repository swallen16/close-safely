import { CheckIcon } from "./Icons";

const differentiators = [
  {
    number: "01",
    title: "Workspace, Not Software",
    body: "We bring all stakeholders into one environment — not another silo. Buyers, brokers, realtors, lawyers, and lenders operate from the same source of truth.",
    items: ["Unified deal environment", "All parties connected", "No more fragmented tools"],
  },
  {
    number: "02",
    title: "Intelligence Built-In",
    body: "From deal structuring to renewal insights, we surface what matters — when it matters. Our platform learns from every interaction to create smarter outcomes.",
    items: ["AI-driven renewal pipeline", "Proactive opportunity alerts", "Data-backed recommendations"],
  },
  {
    number: "03",
    title: "Designed for Real Workflows",
    body: "Built with brokers, realtors, and lawyers — not in isolation. Every feature reflects how deals actually flow, not how we imagined they might.",
    items: ["Practitioner-driven design", "Fast onboarding", "Intuitive from day one"],
  },
  {
    number: "04",
    title: "A Growing Data Advantage",
    body: "Every interaction strengthens the system — creating smarter outcomes over time. The more teams use Close Safely, the more powerful it becomes for everyone.",
    items: ["Continuous learning", "Portfolio intelligence", "Smarter decisions over time"],
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            Why Close Safely
          </p>
          <h2 className="mb-4 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            Because the industry doesn&apos;t need another tool.
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            It needs a connected system. Here&apos;s what makes Close Safely different.
          </p>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          {differentiators.map(({ number, title, body, items }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-100 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-green-100 bg-green-50 text-xs font-bold text-green-700">
                  {number}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">{title}</h3>
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-500">{body}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Unlocking Hidden Revenue */}
        <div className="rounded-2xl bg-green-700 px-8 py-12 shadow-[0_22px_60px_rgba(22,101,52,0.18)]">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-300">
                Unlocking Hidden Revenue
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-white">
                Mortgage Renewals: The lowest-hanging fruit in mortgage growth.
              </h3>
              <p className="text-[15px] leading-relaxed text-green-100">
                Most brokers lose high-value clients not because of competition — but because of timing and visibility. Close Safely introduces a smarter way to identify renewal opportunities early, prioritize high-value clients, and nurture relationships proactively.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              {[
                { stat: "25%", label: "Improvement in client retention" },
                { stat: "20%", label: "Increase in refinance opportunities" },
                { stat: "40%", label: "Reduction in admin workload" },
              ].map(({ stat, label }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl bg-green-600/40 px-5 py-4">
                  <span className="text-2xl font-bold text-white">Up to {stat}</span>
                  <span className="text-sm text-green-100">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Outcome */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            "Faster deal execution",
            "Higher approval confidence",
            "Stronger client relationships",
            "Measurable ROI improvement",
          ].map((outcome) => (
            <div key={outcome} className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
              <span className="text-sm font-semibold text-gray-700">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
