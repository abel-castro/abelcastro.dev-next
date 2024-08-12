import { describe, it, expect, test, vi, Mock } from "vitest";
import React, { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../app/page";
import SinglePostPage, { generateMetadata } from "../../app/[slug]/page";
import PrivacyPolicyPage from "../../app/privacy-policy/page";
import { generateMockPostAPIResponse } from "./utils";
import {
  fetchSinglePost,
  getPostsAndTotalPages,
} from "../../app/lib/fetchPosts";
import { Metadata, ResolvingMetadata } from "next";

vi.mock("server-only", () => ({}));

//Mock Next.js useSearchParams
vi.mock("next/navigation", () => {
  const actual = vi.importActual("next/navigation");
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});

// Mock the fetchAllPosts and MDXRemote
vi.mock("../../app/lib/fetchPosts", () => ({
  getPostsAndTotalPages: vi.fn(),
  fetchSinglePost: vi.fn(),
}));

vi.mock("next-mdx-remote/rsc", () => ({
  MDXRemote: ({ source }: { source: string }) => <div>{source}</div>,
}));

test("Home page component should match the snapshot", async () => {
  const searchParams = {
    query: "",
    page: "1",
  };

  const getPostsAndTotalPagesMock = getPostsAndTotalPages as Mock;
  getPostsAndTotalPagesMock.mockResolvedValue({
    posts: generateMockPostAPIResponse().results,
    totalPages: 2,
  });
  const { container } = render(
    <Suspense>
      <Home searchParams={searchParams} />
    </Suspense>
  );

  // it is necessary access to the screen first.
  // Otherwise, toMatchSnapshot will generate an empty snapshot
  await screen.findByText("Post 1");
  expect(container).toMatchSnapshot();
});

describe("Single Post Page", () => {
  test("Component should match the snapshot", async () => {
    const params = {
      slug: "post-slug",
    };

    const fetchSinglePostMock = fetchSinglePost as Mock;
    fetchSinglePostMock.mockResolvedValue(
      generateMockPostAPIResponse().results[0]
    );

    const { container } = render(
      <Suspense>
        <SinglePostPage params={params} />
      </Suspense>
    );

    // it is necessary access to the screen first.
    // Otherwise, toMatchSnapshot will generate an empty snapshot
    await screen.findByText("Post 1");
    expect(container).toMatchSnapshot();
  });

  it("generateMetadata should return metadata for a valid post", async () => {
    // Mock data for fetchSinglePost
    const mockPost = {
      title: "Test Post",
      meta_description: "This is a test post description.",
    };

    // Mock implementation of fetchSinglePost
    (fetchSinglePost as Mock).mockResolvedValue(mockPost);

    // Define input props and parent metadata
    const props = { params: { slug: "test-post" } };

    // Expected metadata
    const expectedMetadata: Metadata = {
      title: "Test Post",
      description: "This is a test post description.",
    };

    // Call the generateMetadata function
    const result = await generateMetadata(props, {} as ResolvingMetadata);

    // Verify the result
    expect(result).toEqual(expectedMetadata);
  });

  it("generateMetadata should return null if the post is not found", async () => {
    // Mock implementation of fetchSinglePost to return null
    (fetchSinglePost as Mock).mockResolvedValue(null);

    // Define input props and parent metadata
    const props = { params: { slug: "non-existent-post" } };
    const parent = {}; // Adjust if parent is used

    // Call the generateMetadata function
    const result = await generateMetadata(props, {} as ResolvingMetadata);

    // Verify the result
    expect(result).toBeNull();
  });
});

test("Privacy policy page component should match the snapshot", async () => {
  const { container } = render(<PrivacyPolicyPage />);

  expect(container).toMatchSnapshot();
});
