import { describe, it, expect, vi, Mock } from "vitest";
import {
  fetchAllPosts,
  fetchSinglePost,
  getPostsAndTotalPages,
} from "../../../app/lib/fetchPosts";
import { POST_PAGE_SIZE } from "../../../app/constants";
import { Post, PostsAPIResponse } from "../../../app/lib/definitions";
import { generateMockPostAPIResponse, generateMockPosts } from "../utils";

// Mock the global fetch function
global.fetch = vi.fn();

describe("fetchAllPosts", () => {
  it("should throw an error if BLOG_API_URL is not set", async () => {
    delete process.env.BLOG_API_URL;
    await expect(fetchAllPosts()).rejects.toThrow("BLOG_API_URL is not set");
  });

  it("should fetch posts with query and page size", async () => {
    process.env.BLOG_API_URL = "https://api.example.com/posts";

    const mockResponse: PostsAPIResponse = generateMockPostAPIResponse();
    (global.fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const response = await fetchAllPosts({ query: "test", page_size: 10 });
    expect(response).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.example.com/posts?query=test&page_size=10&page=1"
    );
  });

  it("should handle fetch errors", async () => {
    process.env.BLOG_API_URL = "https://api.example.com/posts";

    (global.fetch as Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchAllPosts()).rejects.toThrow("Failed to fetch posts");
  });
});

describe("fetchSinglePost", () => {
  it("should fetch a single post by slug", async () => {
    process.env.BLOG_API_URL = "https://api.example.com/posts";

    const mockPost: Post = generateMockPosts()[0];
    (global.fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPost,
    });

    const response = await fetchSinglePost("post-1");
    expect(response).toEqual(mockPost);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.example.com/posts/post-1"
    );
  });

  it("should return null if the fetch fails", async () => {
    process.env.BLOG_API_URL = "https://api.example.com/posts";

    (global.fetch as Mock).mockResolvedValueOnce({
      ok: false,
    });

    const response = await fetchSinglePost("post-1");
    expect(response).toBeNull();
  });
});

describe("getPostsAndTotalPages", () => {
  it("should fetch posts and calculate total pages", async () => {
    process.env.BLOG_API_URL = "https://api.example.com/posts";

    const mockResponse: PostsAPIResponse = generateMockPostAPIResponse();
    (global.fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const response = await getPostsAndTotalPages("test-query", 1);
    expect(response).toEqual({
      posts: mockResponse.results,
      totalPages: Math.ceil(mockResponse.count / POST_PAGE_SIZE),
    });
  });
});
