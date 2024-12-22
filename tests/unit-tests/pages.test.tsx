import { render, screen } from '@testing-library/react';
import { readFileSync } from 'fs';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import SinglePostPage, {
    SinglePostPageProps,
    generateMetadata,
} from '../../app/[slug]/page';
import Home from '../../app/page';
import PrivacyPolicyPage from '../../app/privacy-policy/page';
import activeDataProvider from '../../data-providers/active';
import { MemoryDataProvider } from '../../data-providers/memory';

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
        notFound: vi.fn(),
    };
});

vi.mock('next-mdx-remote/rsc', () => ({
    MDXRemote: ({ source }: { source: string }) => <div>{source}</div>,
}));

const jsonData = JSON.parse(readFileSync('tests/test-data.json', 'utf-8'));
const memoryDataProvider = new MemoryDataProvider(jsonData);

describe('Home page', () => {
    afterEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks();
    });

    test('Home page component should match the snapshot', async () => {
        const searchParams = {
            query: '',
            page: '1',
        };

        vi.spyOn(activeDataProvider, 'getAllFromStorage').mockImplementation(
            () => memoryDataProvider.getAllFromStorage(searchParams),
        );
        const { container } = render(
            <Suspense>
                <Home searchParams={searchParams} />
            </Suspense>,
        );

        // it is necessary access to the screen first.
        // Otherwise, toMatchSnapshot will generate an empty snapshot
        await screen.findByText('Post 1');
        expect(container).toMatchSnapshot();
    });
});

describe('Single Post Page', () => {
    afterEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks();
    });

    test('Component should match the snapshot', async () => {
        const postSlug = 'post-1';
        const params = {
            slug: postSlug,
        };

        vi.spyOn(
            activeDataProvider,
            'getOneBySlugFromStorage',
        ).mockImplementation(() =>
            memoryDataProvider.getOneBySlugFromStorage(postSlug),
        );

        const { container } = render(
            <Suspense>
                <SinglePostPage params={params} />
            </Suspense>,
        );

        // it is necessary access to the screen first.
        // Otherwise, toMatchSnapshot will generate an empty snapshot
        await screen.findByText('Post 1');
        expect(container).toMatchSnapshot();
    });

    test('Component should raise not found', async () => {
        const postSlug = 'post-not-found';
        const params = {
            slug: postSlug,
        };

        vi.spyOn(
            activeDataProvider,
            'getOneBySlugFromStorage',
        ).mockResolvedValue(null);

        const { container } = render(<SinglePostPage params={params} />);

        expect(container).toMatchSnapshot();
    });

    test('generateMetadata should return metadata for a valid post', async () => {
        const postSlug = 'post-1';

        vi.spyOn(activeDataProvider, 'getPostMetadata').mockImplementation(() =>
            memoryDataProvider.getPostMetadata(postSlug),
        );

        const props: SinglePostPageProps = {
            params: { slug: postSlug },
        };

        const expectedMetadata: Metadata = {
            title: 'Post 1 | abelcastro.dev',
            description: 'Post 1 meta description',
        };

        const result = await generateMetadata(props);

        expect(result).toEqual(expectedMetadata);
    });

    test('generateMetadata should return null if the post is not found', async () => {
        const props: SinglePostPageProps = {
            params: { slug: 'non-existent-post' },
        };

        vi.spyOn(activeDataProvider, 'getPostMetadata').mockResolvedValue(null);

        const result = await generateMetadata(props);

        expect(result).toBeNull();
    });
});

test('Privacy policy page component should match the snapshot', async () => {
    const { container } = render(<PrivacyPolicyPage />);

    expect(container).toMatchSnapshot();
});
