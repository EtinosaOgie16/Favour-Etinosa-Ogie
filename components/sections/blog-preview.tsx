import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { getLatestPosts } from "@/lib/hashnode";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function BlogPreview() {
  const posts = await getLatestPosts(3);

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Eyebrow>From the Blog</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Writing about <em className="italic">B2B content strategy</em>.
            </h2>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-dashed border-black/10 bg-blush/40 p-16 text-center">
            <p className="font-serif text-xl italic text-ink/60">
              New posts coming soon.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-cream transition-shadow hover:shadow-lg"
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
                  <p className="eyebrow text-ink/40">{formatDate(post.publishedAt)}</p>
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

        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-serif text-lg italic text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Read all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
