import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/hashnode";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.brief };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="bg-paper py-16">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-accent hover:underline"
        >
          ← Back to blog
        </Link>

        <p className="eyebrow mt-8 text-ink/40">
          {formatDate(post.publishedAt)} · {post.readTimeInMinutes} min read
        </p>
        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
          {post.title}
        </h1>

        {post.coverImage?.url && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-neutral mt-10 max-w-none prose-headings:font-serif prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
