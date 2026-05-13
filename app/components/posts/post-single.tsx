import { MDXRemote } from 'next-mdx-remote/rsc';
import {
    isValidElement,
    Suspense,
    type HTMLAttributes,
    type ReactNode,
} from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

import { Tag } from '../../lib/definitions';
import MermaidChart from './mermaid-chart';
import PostDate from './post-date';
import PostTags from './post-tags';
import PostTitle from './post-title';
import { PostContentSkeleton } from './skeletons';

const rehypePlugins = [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight];

type CodeElementProps = {
    className?: string;
    children?: ReactNode;
};

function getTextContent(node: ReactNode): string {
    if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
    }

    if (Array.isArray(node)) {
        return node.map(getTextContent).join('');
    }

    if (isValidElement<{ children?: ReactNode }>(node)) {
        return getTextContent(node.props.children);
    }

    return '';
}

function Pre({ children, ...props }: HTMLAttributes<HTMLPreElement>) {
    if (
        isValidElement<CodeElementProps>(children) &&
        children.props.className?.split(' ').includes('language-mermaid')
    ) {
        return (
            <MermaidChart
                chart={getTextContent(children.props.children).trim()}
            />
        );
    }

    return <pre {...props}>{children}</pre>;
}

export default async function PostSingle({
    title,
    slug,
    date,
    tags,
    content,
    hasLink = true,
}: {
    title: string;
    slug: string;
    date: string;
    tags: Tag[];
    content: string;
    hasLink?: boolean;
}) {
    return (
        <div key={slug} className="post-element mb-8">
            <PostTitle title={title} slug={slug} hasLink={hasLink} />
            <PostDate date={date} />
            <PostTags tags={tags} />
            <Suspense fallback={<PostContentSkeleton />}>
                <div className="from-markdown max-w-none mt-4">
                    <MDXRemote
                        source={content}
                        components={{
                            pre: Pre,
                        }}
                        options={{
                            mdxOptions: {
                                rehypePlugins,
                            },
                        }}
                    />
                </div>
            </Suspense>
        </div>
    );
}
