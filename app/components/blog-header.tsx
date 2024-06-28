import Link from "next/link";
import Search from "./posts/post-search";

export default async function BlogHeader() {
  const rootURL = process.env.ROOT_URL ?? "";
  return (
    <header className="flex flex-col justify-between sm:flex-row sm:justify-between p-4 mb-8">
      <h1 className="text-3xl font-bold rainbow-text text-center sm:text-left">
        <Link href={rootURL}>abelcastro.dev</Link>
      </h1>
      <Search placeholder="Search in posts..." />
    </header>
  );
}
