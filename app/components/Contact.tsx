"use client";

import { useState } from "react";

import { CheckIcon } from "./Icons";
import { pushEvent } from "../lib/gtm";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Support Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:support@closesafely.ai?subject=${subject}&body=${body}`;

    pushEvent({
      event: "generate_lead",
      section_name: "Contact Form",
      page_location: window.location.pathname,
    });

    setSent(true);
  }

  return (
    <section className="bg-gray-50 px-6 py-28">
      <div className="mx-auto grid max-w-5xl items-start gap-20 md:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-green-700">
            Contact
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-gray-900">
            Let&apos;s talk about your next transaction.
          </h2>
          <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
            Whether you&apos;re a broker looking to protect your process, a borrower
            who wants more visibility, or an organization exploring a partnership -
            we&apos;d love to hear from you.
          </p>
          <div className="space-y-3">
            {[
              { icon: "EM", label: "support@closesafely.ai" },
              { icon: "ET", label: "Mon-Fri, 9am-6pm ET" },
              { icon: "EP", label: "Enterprise partnerships available" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm font-medium text-gray-500">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-100 bg-white text-[10px] text-green-600 shadow-sm">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          {sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
                <CheckIcon />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">Message received</h3>
              <p className="mb-6 text-sm text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              <button
                onClick={() => setSent(false)}
                className="text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-50"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Company <span className="normal-case font-normal text-gray-300">(optional)</span>
                </label>
                <input
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-50"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-green-700 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-800"
              >
                Send Message
              </button>
              <p className="pt-1 text-center text-xs text-gray-400">
                We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
