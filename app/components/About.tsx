export default function About() {
  const values = [
    {
      title: "Clarity",
      body: "Every step should be understood by both parties before it happens - not explained after the fact.",
    },
    {
      title: "Trust",
      body: "Both sides deserve to feel protected. Not one side, not the stronger side. Both.",
    },
    {
      title: "Accountability",
      body: "When expectations are clear and documented, everyone moves forward with more care.",
    },
    {
      title: "Simplicity",
      body: "A process that is too complicated to follow is a process waiting to fail. We keep it human.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-20 md:grid-cols-2">
        <div className="md:sticky md:top-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            Who We Are
          </p>
          <h2 className="mb-6 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            We believe trust should be the foundation of every transaction.
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-500">
            <p>
              Close Safely was created after seeing too many transactions break
              down - not because either party had bad intentions, but because
              the process itself did not protect them. Confusion crept in.
              Communication stalled. Expectations went unspoken. Deals fell apart.
            </p>
            <p>
              Most transaction platforms are built for speed or compliance.
              Very few are built for the relationship between the two people
              on either side of the deal. That is what we set out to change.
            </p>
            <p>
              Close Safely exists to give both brokers and borrowers a shared,
              transparent environment - one where every step is visible, every
              expectation is documented, and neither party ever feels like
              they are operating in the dark.
            </p>
          </div>
          <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-700">
              Our Mission
            </p>
            <p className="text-[15px] leading-relaxed text-gray-600">
              To create a safer, more transparent way for people to complete
              transactions - where trust is built into the process by design,
              not left to chance.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {values.map(({ title, body }, index) => (
            <div
              key={title}
              className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-100 hover:shadow-md"
            >
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50">
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
    </section>
  );
}
