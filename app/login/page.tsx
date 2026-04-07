import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <section className="max-w-xl">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-green-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-700 text-xs font-bold text-white">
              CS
            </span>
            Back to Close Safely
          </Link>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
            Welcome Back
          </p>
          <h1 className="mb-5 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Log in to manage your active transactions.
          </h1>
          <p className="text-lg leading-relaxed text-gray-500">
            Pick up where you left off, check borrower milestones, and keep every deal moving with clarity.
          </p>
        </section>

        <section className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-green-100/40">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Log In</h2>
            <p className="mt-2 text-sm text-gray-500">Use your work email to access your dashboard.</p>
          </div>
          <form className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-400 focus:ring-4 focus:ring-green-50"
              />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <a href="#" className="text-xs font-semibold text-green-700">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-400 focus:ring-4 focus:ring-green-50"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Log In
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            New here?{" "}
            <Link href="/signup" className="font-semibold text-green-700">
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
