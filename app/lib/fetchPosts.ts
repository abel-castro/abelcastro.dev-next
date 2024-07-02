import { Post, PostsAPIResponse } from "./definitions";

export async function fetchAllPosts(
  query?: string | undefined,
  page: number = 1
): Promise<PostsAPIResponse> {
  const url = new URL(process.env.BLOG_API_URL);

  if (query) {
    url.searchParams.append('query', query);
  }
  url.searchParams.append('page', page.toString());

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  
  return res.json();
}

export async function fetchSinglePost(slug: string): Promise<Post | null> {
  const res = await fetch(`${process.env.BLOG_API_URL}/${slug}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}
