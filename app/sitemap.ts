import { IDataProvider } from '@/data-providers/interface';
import { MetadataRoute } from 'next';

import { activeDataProvider } from '../data-providers/active';
import { Post } from './lib/definitions';

interface SitemapProps {
    dataProvider?: IDataProvider;
}
export default async function sitemap({
    dataProvider = activeDataProvider,
}: SitemapProps): Promise<MetadataRoute.Sitemap> {
    const postsResponse = await dataProvider.getAll({ pageSize: 100 });
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
