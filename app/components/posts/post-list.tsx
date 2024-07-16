import { Post } from "@/app/lib/definitions";
import PostSeparator from "./post-separator";
import PostSingle from "./post-single";
import { fetchAllPosts } from "@/app/lib/fetchPosts";
import { Fragment } from "react";

export default async function PostList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const postsResponse = await fetchAllPosts({
    query: query,
    page: currentPage,
  });
  const posts = postsResponse.results;

  return (
    <>
      {posts.map((post: Post, index: number) => (
        <Fragment key={post.slug}>
          <PostSingle
            key={post.slug}
            title={post.title}
            slug={post.slug}
            date={post.date}
            tags={post.tags}
            content={post.content}
          />
          {index < 2 && <PostSeparator />}
        </Fragment>
      ))}
    </>
  );
}
