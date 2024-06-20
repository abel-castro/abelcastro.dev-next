import { fetchAllPosts } from "../../lib/fetchPosts";
import PostSeparator from "./post-separator";
import PostSingle from "./post-single";

export default async function PostList() {
  const posts = await fetchAllPosts();
  return (
    <>
      {posts.map((post) => (
        <>
          <PostSingle
            key={post.slug}
            title={post.title}
            slug={post.slug}
            date={post.date}
            tags={post.tags}
            content={post.content}
          />
          <PostSeparator />
        </>
      ))}
    </>
  );
}
