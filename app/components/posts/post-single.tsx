import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

import { Tag } from '../../lib/definitions';
import PostDate from './post-date';
import PostTags from './post-tags';
import PostTitle from './post-title';
import { PostContentSkeleton } from './skeletons';

const rehypePlugins = [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight];

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
