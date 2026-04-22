import { sanityClient } from "./sanity";
import type { PortableTextBlock } from "@portabletext/react";

export type SanityPost = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  category: string;
  readTime: string;
  excerpt: string;
  body: PortableTextBlock[];
};

function estimateReadTime(body: PortableTextBlock[]): string {
  const text = body
    .filter((b: any) => b._type === "block")
    .flatMap((b: any) => b.children ?? [])
    .map((span: any) => span.text ?? "")
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function normalize(raw: any): SanityPost {
  return {
    slug: raw.slug?.current ?? raw.slug,
    title: raw.title,
    date: formatDate(raw.publishedAt),
    author: raw.author ?? undefined,
    category: raw.category ?? "Insights",
    readTime: raw.body ? estimateReadTime(raw.body) : "1 min read",
    excerpt: raw.description,
    body: raw.body ?? [],
  };
}

const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    description,
    publishedAt,
    category,
    "author": author->name,
    body
  }
`;

const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    slug,
    description,
    publishedAt,
    category,
    "author": author->name,
    body
  }
`;

const ALL_SLUGS_QUERY = `
  *[_type == "post"] { "slug": slug.current }
`;

export async function getAllPosts(): Promise<SanityPost[]> {
  const raw = await sanityClient.fetch(ALL_POSTS_QUERY);
  return (raw ?? []).map(normalize);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const raw = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });
  return raw ? normalize(raw) : null;
}

export async function getAllSlugs(): Promise<string[]> {
  const raw = await sanityClient.fetch(ALL_SLUGS_QUERY);
  return (raw ?? []).map((r: any) => r.slug).filter(Boolean);
}
