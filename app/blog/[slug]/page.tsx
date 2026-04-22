import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";
import { getAllSlugs, getPostBySlug } from "../../lib/queries";
import { posts as staticPosts, getPost } from "../posts";
import BackToTop from "../BackToTop";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const sanitySlugs = await getAllSlugs();
  const staticSlugs = staticPosts.map((p) => p.slug);
  const all = Array.from(new Set([...sanitySlugs, ...staticSlugs]));
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (await getPostBySlug(slug)) ?? getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Close Safely Blog`,
    description: post.excerpt,
  };
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-green-600 pl-5 text-gray-600 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-8 text-gray-600">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-4 list-disc pl-6 space-y-1.5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-4 list-decimal pl-6 space-y-1.5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed text-gray-600">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed text-gray-600">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <span className="underline">{children}</span>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-green-700 underline hover:text-green-800"
      >
        {children}
      </a>
    ),
  },
};

function renderStaticBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-gray-900">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="mt-6 mb-2 text-lg font-semibold text-gray-900">
          {line.slice(4)}
        </h3>
      );
    } else if (/^\d+\.\s\*\*/.test(line)) {
      const match = line.match(/^(\d+)\.\s\*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <p key={key++} className="mb-2 leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">{match[1]}. {match[2]}</span>
            {match[3]}
          </p>
        );
      }
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
      if (match) {
        elements.push(
          <li key={key++} className="mb-1.5 leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-900">{match[1]}</span>
            {match[2]}
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="mb-1.5 leading-relaxed text-gray-600">
          {line.slice(2)}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      elements.push(
        <p key={key++} className="mb-4 leading-8 text-gray-600">{line}</p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sanityPost = await getPostBySlug(slug);
  const staticPost = getPost(slug);
  const post = sanityPost ?? staticPost;

  if (!post) notFound();

  const isSanity = !!sanityPost;

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div className="mb-10 border-b border-gray-100 pb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {post.category}
            </span>
            {post.author && (
              <>
                <span className="text-xs text-gray-400">By {post.author}</span>
                <span className="text-xs text-gray-400">·</span>
              </>
            )}
            <span className="text-xs text-gray-400">{post.date}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{post.excerpt}</p>
        </div>

        <div className="prose-custom">
          {isSanity && sanityPost.body?.length > 0 ? (
            <PortableText value={sanityPost.body as PortableTextBlock[]} components={portableTextComponents} />
          ) : (
            renderStaticBody((staticPost as any)?.body ?? "")
          )}
        </div>

        <div className="mt-16 rounded-2xl border border-green-100 bg-green-50 p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-700">
            Close Safely
          </p>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Be part of the next evolution in mortgage transactions.
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-gray-600">
            Close Safely brings clarity, transparency, and collaboration into one intelligent workspace for buyers, brokers, realtors, and legal professionals.
          </p>
          <Link
            href="https://app.closesafely.ai/register/"
            className="inline-flex rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800"
          >
            Get Early Access
          </Link>
        </div>
      </div>
      <BackToTop />
    </main>
  );
}
