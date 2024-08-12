/// <reference types="vitest/globals" />
import React, { Suspense } from "react";
import { render } from "@testing-library/react";
import Home from "../../app/page";
import SinglePostPage from "../../app/[slug]/page";
import PrivacyPolicyPage from "../../app/privacy-policy/page";

vi.mock("server-only", () => ({}));

//Mock Next.js useSearchParams
vi.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams("page=1&query="),
  usePathname: () => "blog.abelcastro.dev",
}));

// Mock the fetchAllPosts and MDXRemote
vi.mock("../../app/lib/fetchPosts", () => ({
  getPostsAndTotalPages: vi.fn().mockResolvedValue({
    totalPages: 5,
    posts: [
      {
        slug: "post-1",
        title: "Post 1",
        date: "2023-08-07",
        tags: ["tag1", "tag2"],
        content: "Content of post 1",
      },
      {
        slug: "post-2",
        title: "Post 2",
        date: "2023-08-08",
        tags: ["tag3", "tag4"],
        content: "Content of post 2",
      },
    ],
  }),
}));

vi.mock("next-mdx-remote/rsc", () => ({
  MDXRemote: ({ source }: { source: string }) => <div>{source}</div>,
}));


const searchParams = {
  query: "",
  page: "1",
};

test("Home page component should match the snapshot", async () => {
  const searchParams = {
    query: "",
    page: "1",
  };

  const { container } = render(
    <Suspense>
      <Home searchParams={searchParams} />
    </Suspense>
  );

  await expect(container).toMatchSnapshot();
});

test("Single post page component should match the snapshot", async () => {
  const params = {
    slug: "post-slug",
  };

  const { container } = render(
    <Suspense>
      <SinglePostPage params={params} />
    </Suspense>
  );

  await expect(container).toMatchSnapshot();
});

test("Privacy policy page component should match the snapshot", async () => {
  const { container } = render(<PrivacyPolicyPage />);

  await expect(container).toMatchSnapshot();
});
