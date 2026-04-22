"use client";

import Link from "next/link";
import { pushEvent } from "../lib/gtm";
import type { SanityPost } from "../lib/queries";

export default function BlogPostList({ posts }: { posts: SanityPost[] }) {
  return (
    <div className="space-y-10">
      {posts.map((post, index) => (
        <article
          key={post.slug}
          className="group border-b border-gray-100 pb-10 last:border-none"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.date}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            onClick={() =>
              pushEvent({
                event: "blog_click",
                button_text: post.title,
                section_name: "Blog",
                page_location: window.location.pathname,
                link_url: `/blog/${post.slug}`,
                position: index + 1,
              })
            }
          >
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 transition-colors group-hover:text-green-700">
              {post.title}
            </h2>
          </Link>
          <p className="mb-4 leading-relaxed text-gray-500">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            onClick={() =>
              pushEvent({
                event: "blog_click",
                button_text: post.title,
                section_name: "Blog",
                page_location: window.location.pathname,
                link_url: `/blog/${post.slug}`,
                position: index + 1,
              })
            }
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
  );
}
