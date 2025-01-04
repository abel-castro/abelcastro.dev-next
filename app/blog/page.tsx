import { Metadata } from 'next';
import { Suspense } from 'react';

import activeDataProvider from '../../data-providers/active';
import { PostSearchOptions } from '../../data-providers/interface';
import BlogHeader from '../components/blog-header';
import BlogFooter from '../components/footer';
import PostList from '../components/posts/post-list';
import Pagination from '../components/posts/post-pagination';
import { PostListSkeleton } from '../components/posts/skeletons';

export type HomeSearchParams = {
    query?: string;
    page?: string;
};

interface HomeProps {
    searchParams: HomeSearchParams;
}

export const metadata: Metadata = {
    title: {
        template: '%s | abelcastro.dev',
        default: 'blog | abelcastro.dev',
    },
    description:
        'My personal blog where I (and LLMs 🤖) write about coding-related topics.',
};

export default async function BlogHome({ searchParams }: HomeProps) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const options: PostSearchOptions = {
        currentPage: currentPage,
        query: query,
    };
    const { posts, totalPages } =
        await activeDataProvider.getAllFromStorage(options);

    return (
        <>
            <BlogHeader />
            <main className="flex-grow p-4">
                <div
                    id="post-container"
                    data-testid="post-container"
                    className="max-w-4xl mx-auto"
                >
                    <Suspense
                        key={query + currentPage}
                        fallback={<PostListSkeleton />}
                    >
                        <PostList posts={posts} />
                    </Suspense>
                    <div className="mt-12 flex w-full justify-center">
                        <Pagination totalPages={totalPages} />
                    </div>
                </div>
            </main>
            <BlogFooter />
        </>
    );
}
