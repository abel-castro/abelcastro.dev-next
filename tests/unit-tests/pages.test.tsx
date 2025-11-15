import { render, screen } from '@testing-library/react';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import SinglePostPage, {
    SinglePostPageProps,
    generateMetadata,
} from '../../app/blog/[slug]/page';
import BlogHome from '../../app/blog/page';
import Home from '../../app/page';
import PrivacyPolicyPage from '../../app/privacy-policy/page';

describe('Home page', () => {
    test('Home page component should match the snapshot', async () => {
        const { container } = render(<Home />);

        expect(container).toMatchSnapshot();
    });
});
describe('Blog page', () => {
    afterEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks();
    });

    test.skip('Blog page component should match the snapshot', async () => {
        const searchParams = Promise.resolve({
            query: '',
            page: '1',
        });

        const { container } = render(
            <Suspense>
                <BlogHome searchParams={searchParams} />
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

    test.skip('Component should match the snapshot', async () => {
        const postSlug = 'post-1';
        const params = Promise.resolve({
            slug: postSlug,
        });

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
        const params = Promise.resolve({
            slug: postSlug,
        });

        const { container } = render(<SinglePostPage params={params} />);

        expect(container).toMatchSnapshot();
    });

    test('generateMetadata should return metadata for a valid post', async () => {
        const postSlug = 'post-1';

        const props: SinglePostPageProps = {
            params: Promise.resolve({ slug: postSlug }),
        };

        const expectedMetadata: Metadata = {
            title: 'Post 1 | abelcastro.dev',
            description: 'Post 1 meta description',
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_ROOT_URL}/blog/post-1`,
            },
        };

        const result = await generateMetadata(props);

        expect(result).toEqual(expectedMetadata);
    });

    test('generateMetadata should return null if the post is not found', async () => {
        const props: SinglePostPageProps = {
            params: Promise.resolve({ slug: 'non-existent-post' }),
        };

        const result = await generateMetadata(props);

        expect(result).toBeNull();
    });
});

test('Privacy policy page component should match the snapshot', async () => {
    const { container } = render(<PrivacyPolicyPage />);

    expect(container).toMatchSnapshot();
});
