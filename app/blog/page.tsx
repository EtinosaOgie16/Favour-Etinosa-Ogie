import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { getAllPosts } from "@/lib/hashnode";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts(30);

  return (
    <>
      <PageHeader
        eyebrow="From the Blog"
        title={
          <>
            Writing about <em className="italic">B2B content strategy</em>.
          </>
        }
        subtitle="Live posts pulled from my Hashnode publication."
      />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-black/10 bg-blush/40 p-16 text-center">
              <p className="font-serif text-xl italic text-ink/60">
                New posts coming soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-black/5 bg-cream transition-all duration-300 hover:border-accent/40 hover:shadow-[0_16px_50px_-12px_rgba(238,111,160,0.5)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-blush">
                    {post.coverImage?.url ? (
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-serif italic text-ink/30">
                        Favour Ogie
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow text-ink/40">
                      {formatDate(post.publishedAt)} · {post.readTimeInMinutes} min read
                    </p>
                    <h3 className="mt-3 font-serif text-lg font-bold leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/60">
                      {post.brief}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
