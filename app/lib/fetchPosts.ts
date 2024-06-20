export async function fetchAllPosts() {
  console.log("fetching posts");
  console.log(process.env.BLOG_API_URL);
  const res = await fetch(`${process.env.BLOG_API_URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export async function fetchSinglePost(slug: string) {
  const res = await fetch(`${process.env.BLOG_API_URL}/${slug}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}
