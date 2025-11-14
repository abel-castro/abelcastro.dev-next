import { MetadataRoute } from 'next';

import activeDataProvider from '../data-providers/active';
import { Post } from './lib/definitions';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const postsResponse = await activeDataProvider.getAll({ pageSize: 100 });
    const posts = postsResponse.posts;

    return [
        {
            url: process.env.NEXT_PUBLIC_ROOT_URL || '',
            priority: 1.0,
        },
        ...posts.map((post: Post) => ({
            url: `${process.env.NEXT_PUBLIC_ROOT_URL}/blog/${post.slug}`,
            priority: 0.8,
        })),
    ];
}

export const getStaticProps = async () => {
    return {
        props: {},
        revalidate: 3600,
    };
};
