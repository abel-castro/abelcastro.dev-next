import { Tag } from "../../lib/definitions";
import PostTitle from "./post-title";
import PostDate from "./post-date";
import PostTags from "./post-tags";
import PostContent from "./post-content";
import { Suspense } from "react";
import { PostContentSkeleton } from "./skeletons";

export default async function PostSingle({
  title,
  slug,
  date,
  tags,
  content,
  hasLink = true,
}: {
  title: string;
  slug: string;
  date: string;
  tags: Tag[];
  content: string;
  hasLink?: boolean;
}) {
  return (
    <div key={slug} className="mb-8">
      <PostTitle title={title} slug={slug} hasLink={hasLink} />
      <PostDate date={date} />
      <PostTags tags={tags} />
      <Suspense fallback={<PostContentSkeleton />}>
        <PostContent content={content} />
      </Suspense>
    </div>
  );
}
