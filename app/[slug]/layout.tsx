import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BlogHeader from "../components/blog-header";
import BlogFooter from "../components/blog-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AbelCastro.Dev",
  description:
    "My personal blog where I (and LLMs 🤖) write about coding-related topics.",
};

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
