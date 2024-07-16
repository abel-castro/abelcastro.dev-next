import "../globals.css";
import BlogHeader from "../components/blog-header";
import BlogFooter from "../components/blog-footer";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900">
      <BlogHeader />

      <main className="flex-grow p-4">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>

      <BlogFooter />
    </div>
  );
}
