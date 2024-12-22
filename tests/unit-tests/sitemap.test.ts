import { readFileSync } from 'fs';
import { MetadataRoute } from 'next';
import { describe, expect, test } from 'vitest';

import sitemap, { getStaticProps } from '../../app/sitemap';
import { MemoryDataProvider } from '../../data-providers/memory';

const jsonData = JSON.parse(readFileSync('tests/test-data.json', 'utf-8'));
const testDataProvider = new MemoryDataProvider(jsonData);

describe('sitemap', () => {
    test('should generate the sitemap with correct entries', async () => {
        const result = await sitemap({ dataProvider: testDataProvider });

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

    test('should handle an empty posts array', async () => {
        const emptyEmptyDataProvider = new MemoryDataProvider([]);
        const result = await sitemap({ dataProvider: emptyEmptyDataProvider });

        const expectedResult: MetadataRoute.Sitemap = [];

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
