"use client";

import Link from "next/link";
import { pushEvent } from "../lib/gtm";

export default function SignupPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    pushEvent({
      event: "sign_up",
      button_text: "Create Account",
      section_name: "Signup Page",
      page_location: window.location.href,
    });
  }

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
            Start Securely
          </p>
          <h1 className="mb-5 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Create your account and open your first secure transaction room.
          </h1>
          <p className="text-lg leading-relaxed text-gray-500">
            Set up your profile, invite clients, and keep Toronto-area closings organized from day one.
          </p>
        </section>

        <section className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-green-100/40">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Create Account</h2>
            <p className="mt-2 text-sm text-gray-500">It only takes a minute to get started.</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-400 focus:ring-4 focus:ring-green-50"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Work email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-400 focus:ring-4 focus:ring-green-50"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-green-400 focus:ring-4 focus:ring-green-50"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Create Account
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="https://app.closesafely.ai/login" className="font-semibold text-green-700">
              Log in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
