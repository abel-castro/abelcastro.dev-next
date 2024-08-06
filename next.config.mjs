// next.config.mjs
import withMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight],
  },
};

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(mdxOptions)(nextConfig);
