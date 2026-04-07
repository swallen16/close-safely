import { CheckIcon } from "./Icons";

export default function Features() {
  const pillars = [
    {
      title: "Security",
      body: "AES-256 encryption, SOC 2 Type II certified, and TLS 1.3 in transit. Your data is protected at every layer - not as an afterthought, but as a foundation.",
      items: ["End-to-end encryption", "Immutable audit trail", "Role-based access"],
    },
    {
      title: "Transparency",
      body: "Both parties see the same real-time view. Every action is logged and visible. No information advantage. No one operating in the dark.",
      items: ["Live status for both sides", "Full action history", "Shared document access"],
    },
    {
      title: "Efficiency",
      body: "A structured process means fewer back-and-forth emails, fewer misunderstandings, and faster completions - without cutting corners.",
      items: ["Guided step-by-step flow", "Automated status updates", "No training required"],
    },
    {
      title: "Trust Framework",
      body: "Every feature is designed to make both parties feel equally protected. The platform does not favour one side - it holds both accountable.",
      items: ["Dual-confirmation close", "Neutral platform design", "Dispute-ready records"],
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            Features
          </p>
          <h2 className="mb-4 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            Built to protect - not just to process.
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            The features are here to serve the relationship, not impress a pitch deck.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map(({ title, body, items }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-100 hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">{title}</h3>
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
      </div>
    </section>
  );
}
