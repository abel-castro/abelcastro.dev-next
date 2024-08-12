import { describe, it, expect, vi, Mock } from "vitest";
import { fetchAllPosts } from "../../app/lib/fetchPosts";
import sitemap from "../../app/sitemap"; // Adjust the path if necessary
import { Post } from "../../app/lib/definitions";
import { MetadataRoute } from "next";

// Mock the fetchAllPosts function
vi.mock("../../app/lib/fetchPosts", () => ({
  fetchAllPosts: vi.fn(),
}));

describe("sitemap", () => {
  it("should generate the sitemap with correct entries", async () => {
    // Mock data for fetchAllPosts
    const mockPosts = [
      {
        slug: "post-1",
        date: "2024-01-01T00:00:00Z",
      },
      {
        slug: "post-2",
        date: "2024-02-01T00:00:00Z",
      },
    ];

    // Mock implementation of fetchAllPosts
    (fetchAllPosts as Mock).mockResolvedValue({
      results: mockPosts,
    });

    // Call the sitemap function
    const result = await sitemap();

    // Expected output
    const expectedResult = [
      {
        key: "post-1",
        url: `${process.env.ROOT_URL}/post-1`,
        lastmod: "2024-01-01T00:00:00Z",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        key: "post-2",
        url: `${process.env.ROOT_URL}/post-2`,
        lastmod: "2024-02-01T00:00:00Z",
        changefreq: "weekly",
        priority: 0.8,
      },
    ];

    // Verify the result
    expect(result).toEqual(expectedResult);
  });

  it("should handle an empty posts array", async () => {
    // Mock implementation of fetchAllPosts
    (fetchAllPosts as Mock).mockResolvedValue({
      results: [],
    });

    // Call the sitemap function
    const result = await sitemap();

    // Expected output when there are no posts
    const expectedResult: MetadataRoute.Sitemap = [];

    // Verify the result
    expect(result).toEqual(expectedResult);
  });
});
