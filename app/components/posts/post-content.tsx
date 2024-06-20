"use client";

import { useEffect, useState } from "react";
import markdownToHtml from "../../lib/markdownToHtml";

export default async function PostContent({ content }: { content: string }) {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const convertContentToHtml = async () => {
      const html = await markdownToHtml(content);
      setHtmlContent(html);
    };

    convertContentToHtml();
  }, [content]);
  return (
    <div
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  );
}
