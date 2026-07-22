const HASHNODE_ENDPOINT = "https://gql.hashnode.com/";

function resolveHost(): string {
  const raw = process.env.HASHNODE_PUBLICATION_HOST || "favourogie.hashnode.dev";
  return raw.replace(/^https?:\/\//, "").replace(/\/+$/, "");
}

export type HashnodePost = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage: { url: string } | null;
};

export type HashnodePostDetail = HashnodePost & {
  contentHtml: string;
};

const POST_FIELDS = `
  id
  title
  brief
  slug
  publishedAt
  readTimeInMinutes
  coverImage {
    url
  }
`;

async function hashnodeFetch<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T | null> {
  try {
    const res = await fetch(HASHNODE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    if (json.errors) return null;

    return json.data as T;
  } catch {
    return null;
  }
}

export async function getLatestPosts(count = 3): Promise<HashnodePost[]> {
  const query = `
    query LatestPosts($host: String!, $first: Int!) {
      publication(host: $host) {
        posts(first: $first) {
          edges {
            node {
              ${POST_FIELDS}
            }
          }
        }
      }
    }
  `;

  const data = await hashnodeFetch<{
    publication: { posts: { edges: { node: HashnodePost }[] } } | null;
  }>(query, { host: resolveHost(), first: count });

  return data?.publication?.posts.edges.map((edge) => edge.node) ?? [];
}

export async function getAllPosts(count = 20): Promise<HashnodePost[]> {
  return getLatestPosts(count);
}

export async function getPostBySlug(
  slug: string
): Promise<HashnodePostDetail | null> {
  const query = `
    query PostBySlug($host: String!, $slug: String!) {
      publication(host: $host) {
        post(slug: $slug) {
          ${POST_FIELDS}
          content {
            html
          }
        }
      }
    }
  `;

  const data = await hashnodeFetch<{
    publication: {
      post: (HashnodePost & { content: { html: string } }) | null;
    } | null;
  }>(query, { host: resolveHost(), slug });

  const post = data?.publication?.post;
  if (!post) return null;

  return { ...post, contentHtml: post.content.html };
}
