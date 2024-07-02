import { error } from "console";
import { Post, PostsAPIResponse } from "./definitions";

export async function fetchAllPosts(
  query?: string | undefined,
  page: number = 1
): Promise<PostsAPIResponse> {
  const apiUrl = process.env.BLOG_API_URL;
  if (!apiUrl) {
    throw new Error("BLOG_API_URL is not set");
  }

  const urlWithParams = new URL(apiUrl);

  if (query) {
    urlWithParams.searchParams.append("query", query);
  }
  urlWithParams.searchParams.append("page", page.toString());

  const res = await fetch(urlWithParams.toString());

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
