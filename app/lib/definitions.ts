export type Tag = {
  name: string;
};

export type Post = {
  title: string;
  slug: string;
  date: string;
  tags: Tag[];
  content: string;
  meta_description: string;
};

export type PostsAPIResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Post[];
};
