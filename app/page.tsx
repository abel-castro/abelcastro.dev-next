import BlogFooter from "./components/blog-footer";
import BlogHeader from "./components/blog-header";
import PostList from "./components/posts/post-list";
import { Suspense } from "react";
import { PostListSkeleton } from "./components/posts/skeletons";
import { getPostsAndTotalPages } from "./lib/fetchPosts";
import Pagination from "./components/posts/post-pagination";

export type HomeSearchParams = {
  query?: string;
  page?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams?: HomeSearchParams;
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const { posts, totalPages } = await getPostsAndTotalPages(query, currentPage);

  return (
    <>
      <BlogHeader />
      <main className="flex-grow p-4">
        <div
          id="post-container"
          data-testid="post-container"
          className="max-w-4xl mx-auto"
        >
          <Suspense key={query + currentPage} fallback={<PostListSkeleton />}>
            <PostList posts={posts} />
          </Suspense>
          <div className="mt-12 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </main>
      <BlogFooter />
    </>
  );
}
