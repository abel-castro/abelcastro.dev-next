import { MetadataRoute } from 'next';

import activeDataProvider from '../data-providers/active';
import { Post } from './lib/definitions';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const postsResponse = await activeDataProvider.getAll({ pageSize: 100 });
    const posts = postsResponse.posts;

    return [
        ...posts.map((post: Post) => ({
            key: post.slug,
            url: `${process.env.ROOT_URL}/${post.slug}`,
            lastmod: post.date,
            changefreq: 'weekly',
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
