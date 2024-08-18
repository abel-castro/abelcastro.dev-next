import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { activeDataProvider } from '../../data-providers/active';
import { IDataProvider } from '../../data-providers/interface';
import PostSingle from '../components/posts/post-single';

export interface SinglePostPageProps {
    dataProvider?: IDataProvider;
    params: { slug: string };
}

export async function generateMetadata({
    dataProvider = activeDataProvider,
    params,
}: SinglePostPageProps): Promise<Metadata | null> {
    const slug = params.slug;
    const post = await dataProvider.getBySlug(slug);

    if (!post) {
        return null;
    }

    return {
        title: post.title,
        description: post.meta_description,
    };
}

export default async function SinglePostPage({
    dataProvider = activeDataProvider,
    params,
}: SinglePostPageProps) {
    const slug = params.slug;
    const post = await dataProvider.getBySlug(slug);

    if (!post) {
        notFound();
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
