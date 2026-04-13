import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Blog | Close Safely",
  description:
    "Insights on real estate closing security, wire fraud prevention, and best practices for brokers and buyers.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-700 text-xs font-bold text-white">
            CS
          </span>
          Back to Close Safely
        </Link>

        <div className="mb-12 border-b border-gray-100 pb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
            Close Safely Blog
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Insights on closing security
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">
            Wire fraud prevention, best practices for brokers, and what buyers
            need to know before wiring funds.
          </p>
        </div>

        <BlogPostList posts={posts} />
              <Link href={`/blog/${post.slug}`}>
                <h2 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-green-700">
                  {post.title}
                </h2>
              </Link>
              <p className="mb-4 leading-relaxed text-gray-500">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
              >
                Read more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
