import { MetadataRoute } from "next";
import { fetchAllPosts } from "./lib/fetchPosts";
import { Post } from "./lib/definitions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsResponse = await fetchAllPosts({ page_size: 100 });
  const posts = postsResponse.results;

  return [
    ...posts.map((post: Post) => ({
      key: post.slug,
      url: `${process.env.ROOT_URL}/${post.slug}`,
      lastmod: post.date,
      changefreq: "weekly",
      priority: 0.8,
    })),
  ];
}
