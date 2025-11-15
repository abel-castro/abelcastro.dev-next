import { describe, expect, test } from 'vitest';

import sitemap, { getStaticProps } from '../../app/sitemap';

describe('sitemap', () => {
    test('should generate the sitemap with correct entries', async () => {
        const result = await sitemap();

        const expectedResult = [
            {
                url: process.env.NEXT_PUBLIC_ROOT_URL || '',
                priority: 1.0,
            },
            {
                url: `${process.env.NEXT_PUBLIC_ROOT_URL}/blog/post-1`,
                priority: 0.8,
            },
            {
                url: `${process.env.NEXT_PUBLIC_ROOT_URL}/blog/post-2`,
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
