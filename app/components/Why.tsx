import { CheckIcon, CrossIcon } from "./Icons";

export default function Why() {
  return (
    <section className="bg-white px-6 pb-14 pt-16 sm:pb-16 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            Why Close Safely
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            Most transactions do not fail because of bad faith. They fail because of{" "}
            <span className="text-green-700">poor structure.</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-500">
            Confusion, misaligned expectations, and a lack of visibility are
            the real reasons deals fall apart. Close Safely removes each one.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Without Close Safely
            </p>
            <ul className="space-y-4">
              {[
                "Expectations are not set clearly upfront",
                "One party is always less informed than the other",
                "Communication breaks down mid-process",
                "Deals collapse at the last moment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50">
                    <CrossIcon />
                  </span>
                  <span className="text-[15px] leading-snug text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-green-700 p-8 shadow-[0_22px_60px_rgba(22,101,52,0.18)]">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-green-300">
              With Close Safely
            </p>
            <ul className="space-y-4">
              {[
                "Terms and conditions are locked in before anything moves forward",
                "Both parties see the same real-time view at every step",
                "Every action is logged, visible, and accountable",
                "Nothing closes until both sides explicitly confirm",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-600">
                    <CheckIcon color="white" />
                  </span>
                  <span className="text-[15px] leading-snug text-green-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
