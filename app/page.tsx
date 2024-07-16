import BlogFooter from "./components/blog-footer";
import BlogHeader from "./components/blog-header";
import PostList from "./components/posts/post-list";
import { Suspense } from "react";
import { PostListSkeleton } from "./components/posts/skeletons";
import { fetchAllPosts } from "./lib/fetchPosts";
import Pagination from "./components/posts/post-pagination";
import { POST_PAGE_SIZE } from "./constants";

async function getTotalPages(query: string): Promise<number> {
  const posts = await fetchAllPosts({ query });
  return Math.ceil(posts.count / POST_PAGE_SIZE);
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getTotalPages(query);

  return (
    <>
      <BlogHeader />
      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">
          <Suspense key={query + currentPage} fallback={<PostListSkeleton />}>
            <PostList query={query} currentPage={currentPage} />
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
