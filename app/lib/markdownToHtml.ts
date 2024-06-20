import { remark } from "remark";
import html from "remark-html";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

import "prismjs/themes/prism-tomorrow.css";

export default async function markdownToHtml(
  markdownContent: string
): Promise<string> {
  const result = await remark()
    .use(html)
    .use(remarkParse) // Parse markdown content to a syntax tree
    .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    // See https://github.com/sergioramos/remark-prism/issues/457#issuecomment-1835239321
    .use(rehypePrism as any) // Highlight code blocks (requires rehype-stringify plugin
    .use(rehypeStringify) // Serialize HTML syntax tree
    .process(markdownContent);
  return result.toString();
}
