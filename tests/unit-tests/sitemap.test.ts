import { MetadataRoute } from 'next';
import { describe, expect, test } from 'vitest';

import sitemap, { getStaticProps } from '../../app/sitemap';

describe('sitemap', () => {
    test('should generate the sitemap with correct entries', async () => {
        const result = await sitemap();

        const expectedResult = [
            {
                key: 'post-1',
                url: `${process.env.ROOT_URL}/post-1`,
                lastmod: '2024-08-16',
                changefreq: 'weekly',
                priority: 0.8,
            },
            {
                key: 'post-2',
                url: `${process.env.ROOT_URL}/post-2`,
                lastmod: '2024-08-17',
                changefreq: 'weekly',
                priority: 0.8,
            },
        ];

        expect(result).toEqual(expectedResult);
    });
});
describe('getStaticProps', () => {
    test('should return props with revalidate set to 3600', async () => {
        const result = await getStaticProps();

        const expectedResult = {
            props: {},
            revalidate: 3600,
        };

        expect(result).toEqual(expectedResult);
    });
});
