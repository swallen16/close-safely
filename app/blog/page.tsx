import Link from "next/link";
import { getAllPosts } from "../lib/queries";
import { posts as staticPosts } from "./posts";
import BlogPostList from "./BlogPostList";

export const revalidate = 60;

export const metadata = {
  title: "Blog | Close Safely",
  description:
    "Data-backed insights on mortgage inefficiencies, trends shaping lending across Canada, the U.S., and the U.K., and practical strategies to improve deal flow, retention, and client outcomes.",
};

export default async function BlogPage() {
  const sanityPosts = await getAllPosts();
  const sanitySlugs = new Set(sanityPosts.map((p) => p.slug));

  const fallbackPosts = staticPosts
    .filter((p) => !sanitySlugs.has(p.slug))
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      author: p.author,
      category: p.category,
      readTime: p.readTime,
      excerpt: p.excerpt,
      body: [],
    }));

  const posts = [...sanityPosts, ...fallbackPosts];

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
            Insights That Actually Matter
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">
            We don&apos;t publish noise. We share data-backed insights on mortgage inefficiencies, trends shaping lending across Canada, the U.S., and the U.K., and practical strategies to improve deal flow, retention, and client outcomes.
          </p>
        </div>

        <BlogPostList posts={posts} />
      </div>
    </main>
  );
}
