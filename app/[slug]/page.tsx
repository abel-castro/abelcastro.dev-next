import { notFound } from "next/navigation";
import PostSingle from "../components/posts/post-single";
import { fetchSinglePost } from "../lib/fetchPosts";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await fetchSinglePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PostSingle
        key={post.slug}
        title={post.title}
        slug={post.slug}
        date={post.date}
        tags={post.tags}
        content={post.content}
        hasLink={false}
      />
    </main>
  );
}
