import { notFound } from "next/navigation";
import PostSingle from "../components/posts/post-single";
import { fetchSinglePost } from "../lib/fetchPosts";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | null> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = await fetchSinglePost(slug);

  if (!post) {
    return null;
  }

  return {
    title: post.title,
    description: post.meta_description,
  };
}

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await fetchSinglePost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
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
    </>
  );
}
