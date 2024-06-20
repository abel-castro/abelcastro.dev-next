export type Tag = {
  name: string;
};

export type Post = {
  title: string;
  slug: string;
  date: string;
  tags: Tag[];
  content: string;
};
