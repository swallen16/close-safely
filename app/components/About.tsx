export default function About() {
  const values = [
    {
      title: "Transparency over opacity",
      body: "We believe every borrower deserves to fully understand the process, their options, and their outcomes not just the parts that are convenient to share.",
    },
    {
      title: "Collaboration over fragmentation",
      body: "The mortgage ecosystem has too many silos. We bring every stakeholder into one connected environment so nothing falls through the cracks.",
    },
    {
      title: "Insight over guesswork",
      body: "Better systems create better financial outcomes and ultimately, better lives. We build with data and practitioner insight at the core.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Our Story */}
        <div className="mb-20 grid items-start gap-16 md:grid-cols-2">
          <div className="md:sticky md:top-24">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
              Our Story
            </p>
            <h2 className="mb-6 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
              We&apos;ve worked inside the system. We decided to rebuild it.
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-gray-500">
              <p>
                Close Safely was founded by a team with an average of 23+ years of experience across banking, lending, product, and financial services.
              </p>
              <p>
                We&apos;ve seen the inefficiencies firsthand. And we&apos;ve experienced the consequences missed opportunities, frustrated clients, and billions in wasted effort.
              </p>
              <p>
                We noticed a system where transparency to the end borrower has been lacking. The process should be simple for any borrower to get into their dream home with ease and understanding. We champion the ability to bring that transparency, act as an expert guide throughout the process, and drive innovation for the betterment of the life cycle of buying and selling a home keeping families financially literate every step of the way.
              </p>
            </div>
            <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-700">
                Our Mission
              </p>
              <p className="text-[15px] leading-relaxed text-gray-600">
                To empower individuals and professionals across Canada, the United States, and the United Kingdom with a more transparent, intelligent, and collaborative way to navigate mortgage and property transactions.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              What Drives Us
            </p>
            {values.map(({ title, body }, index) => (
              <div
                key={title}
                className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-100 hover:shadow-md"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50">
                  <span className="text-sm font-bold text-green-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client First */}
        <div className="rounded-2xl bg-green-700 px-8 py-12 shadow-[0_22px_60px_rgba(22,101,52,0.18)]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-300">
              Client First. Always.
            </p>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Every feature is designed to empower not replace professionals.
            </h3>
            <p className="mb-8 text-[15px] leading-relaxed text-green-100">
              Close Safely enables brokers, realtors, and legal professionals to understand their clients at a deeper level, deliver tailored high-confidence outcomes, and grow their portfolios with precision not volume chaos.
            </p>
            <div className="inline-flex items-center gap-2 rounded-xl border border-green-600 bg-green-600/40 px-5 py-3 text-sm font-medium text-green-100">
              Better decisions → Better client outcomes → Stronger long-term ROI
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
