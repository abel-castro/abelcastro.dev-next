import { render, screen } from '@testing-library/react';
import { readFileSync } from 'fs';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import { describe, expect, it, test, vi } from 'vitest';

import SinglePostPage, {
    SinglePostPageProps,
    generateMetadata,
} from '../../app/[slug]/page';
import Home from '../../app/page';
import PrivacyPolicyPage from '../../app/privacy-policy/page';
import { MemoryDataProvider } from '../../data-providers/memory';

const jsonData = JSON.parse(readFileSync('tests/test-data.json', 'utf-8'));
const testDataProvider = new MemoryDataProvider(jsonData);

//Mock Next.js useSearchParams
vi.mock('next/navigation', () => {
    const actual = vi.importActual('next/navigation');
    return {
        ...actual,
        useRouter: vi.fn(() => ({
            push: vi.fn(),
        })),
        useSearchParams: vi.fn(() => ({
            get: vi.fn(),
        })),
        usePathname: vi.fn(),
    };
});

vi.mock('next-mdx-remote/rsc', () => ({
    MDXRemote: ({ source }: { source: string }) => <div>{source}</div>,
}));

test('Home page component should match the snapshot', async () => {
    const searchParams = {
        query: '',
        page: '1',
    };

    const { container } = render(
        <Suspense>
            <Home searchParams={searchParams} dataProvider={testDataProvider} />
        </Suspense>,
    );

    // it is necessary access to the screen first.
    // Otherwise, toMatchSnapshot will generate an empty snapshot
    await screen.findByText('Post 1');
    expect(container).toMatchSnapshot();
});

describe('Single Post Page', () => {
    test('Component should match the snapshot', async () => {
        const params = {
            slug: 'post-1',
        };

        const { container } = render(
            <Suspense>
                <SinglePostPage
                    params={params}
                    dataProvider={testDataProvider}
                />
            </Suspense>,
        );

        // it is necessary access to the screen first.
        // Otherwise, toMatchSnapshot will generate an empty snapshot
        await screen.findByText('Post 1');
        expect(container).toMatchSnapshot();
    });

    it('generateMetadata should return metadata for a valid post', async () => {
        const props: SinglePostPageProps = {
            dataProvider: testDataProvider,
            params: { slug: 'post-1' },
        };

        // Expected metadata
        const expectedMetadata: Metadata = {
            title: 'Post 1',
            description: 'Post 1 meta description',
        };

        // Call the generateMetadata function
        const result = await generateMetadata(props);

        // Verify the result
        expect(result).toEqual(expectedMetadata);
    });

    it('generateMetadata should return null if the post is not found', async () => {
        const props: SinglePostPageProps = {
            dataProvider: testDataProvider,
            params: { slug: 'non-existent-post' },
        };

        // Call the generateMetadata function
        const result = await generateMetadata(props);

        // Verify the result
        expect(result).toBeNull();
    });
});

test('Privacy policy page component should match the snapshot', async () => {
    const { container } = render(<PrivacyPolicyPage />);

    expect(container).toMatchSnapshot();
});
