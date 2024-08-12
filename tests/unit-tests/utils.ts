import { Post, PostsAPIResponse } from "../../app/lib/definitions";

export function generateMockPostAPIResponse(): PostsAPIResponse {
  return {
    count: 5,
    results: generateMockPosts(),
    next: "?page=2",
    previous: null,
  };
}

export function generateMockPosts(): Post[] {
  return [
    {
      slug: "post-1",
      title: "Post 1",
      date: "2023-08-07",
      tags: [{ name: "Tag 1" }, { name: "Tag 2" }],
      meta_description: "Meta description of post 1",
      content: "Content of post 1",
    },
    {
      slug: "post-2",
      title: "Post 2",
      date: "2023-08-08",
      tags: [{ name: "Tag 3" }, { name: "Tag 24" }],
      meta_description: "Meta description of post 2",
      content: "Content of post 2",
    },
  ];
}
