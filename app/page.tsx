import BlogFooter from "./components/blog-footer";
import BlogHeader from "./components/blog-header";
import PostList from "./components/posts/post-list";

export default await function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900">
      <BlogHeader />

      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">
          <PostList />
        </div>
      </main>
      
      <BlogFooter />
    </div>
  );
};
