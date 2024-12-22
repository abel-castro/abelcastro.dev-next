import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import activeDataProvider from '../../data-providers/active';
import PostSingle from '../components/posts/post-single';

export interface SinglePostPageProps {
    params: { slug: string };
}

export async function generateMetadata({
    params,
}: SinglePostPageProps): Promise<Metadata | null> {
    const slug = params.slug;
    const post = await activeDataProvider.getPostMetadata(slug);

    if (!post) {
        notFound();
        return null;
    }

    return {
        title: `${post.title} | abelcastro.dev`,
        description: post.meta_description,
    };
}

export default async function SinglePostPage({ params }: SinglePostPageProps) {
    const slug = params.slug;
    const post = await activeDataProvider.getOneBySlug(slug);

    if (!post) {
        notFound();
        return null;
    }

    return (
        <>
            <main>
                <PostSingle
                    key={post.slug}
                    title={post.title}
                    slug={post.slug}
                    date={post.date}
                    tags={post.tags}
                    content={post.content}
                    hasLink={false}
                />
            </main>
        </>
    );
}
