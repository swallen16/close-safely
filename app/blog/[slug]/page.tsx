import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Close Safely Blog`,
    description: post.excerpt,
  };
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-gray-900"
        >
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
            <span className="font-semibold text-gray-900">
              {match[1]}. {match[2]}
            </span>
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
        <p key={key++} className="mb-4 leading-8 text-gray-600">
          {line}
        </p>
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
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-green-700"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <div className="mb-10 border-b border-gray-100 pb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.date}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">{post.excerpt}</p>
        </div>

        <div className="prose-custom">{renderBody(post.body)}</div>

        <div className="mt-16 rounded-2xl border border-green-100 bg-green-50 p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green-700">
            Close Safely
          </p>
          <h3 className="mb-3 text-xl font-semibold text-gray-900">
            Protect your next closing
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-gray-600">
            Every deal deserves secure transaction infrastructure. See how Close Safely
            protects brokers and borrowers from wire fraud and closing-day risk.
          </p>
          <Link
            href="https://app.closesafely.ai/register/"
            className="inline-flex rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
