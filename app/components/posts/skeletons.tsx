export function PostContentSkeleton() {
  return (
    <div className="animate-pulse flex flex-col space-y-4 shadow-md">
      <div className="h-4 bg-sky-100 rounded w-full" />
      <div className="flex rounded bg-sky-100 px-8 py-12 mt-2" />
      <div className="h-4 bg-sky-100 rounded w-full" />
      <div className="h-4 bg-sky-100 rounded w-5/6" />
      <div className="h-4 bg-sky-100 rounded w-4/6" />
      <div className="flex rounded bg-sky-100 px-8 py-12 mt-2" />
      <div className="h-4 bg-sky-100 rounded w-full" />
      <div className="h-4 bg-sky-100 rounded w-full" />
      <div className="h-4 bg-sky-100 rounded w-5/6" />
      <div className="h-4 bg-sky-100 rounded w-4/6" />
    </div>
  );
}


export function PostListSkeleton() {
  return (
    <>
      <div className="animate-pulse flex flex-col space-y-4 shadow-md">
        <div className="h-6 bg-gray-300 rounded w-1/3 shimmer"></div>
        <PostContentSkeleton />
      </div>
      <div className="animate-pulse flex flex-col space-y-4 shadow-md">
        <div className="h-6 bg-gray-300 rounded w-1/3 shimmer"></div>
        <PostContentSkeleton />
      </div>
    </>
  );
}
