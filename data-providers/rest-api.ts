import { POST_PAGE_SIZE } from '../app/constants';
import { Post, PostsAPIResponse } from '../app/lib/definitions';
import { BaseDataProvider } from './base';
import { PaginatedPosts, PostSearchOptions } from './interface';
import { calculateTotalPages } from './utils';

export class RestAPIDataProvider extends BaseDataProvider {
    async getPostsFromStorage(
        options: PostSearchOptions,
    ): Promise<PaginatedPosts> {
        const apiUrl = process.env.BLOG_API_URL;
        if (!apiUrl) {
            throw new Error('BLOG_API_URL is not set');
        }

        const urlWithParams = new URL(apiUrl);

        if (options.query) {
            urlWithParams.searchParams.append('query', options.query);
        }

        if (options.pageSize) {
            urlWithParams.searchParams.append(
                'page_size',
                options.pageSize.toString(),
            );
        }
        urlWithParams.searchParams.append(
            'page',
            (options.currentPage ?? 1).toString(),
        );

        const response = await fetch(urlWithParams.toString());

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const jsonResponse: PostsAPIResponse = await response.json();

        return {
            posts: jsonResponse.results,
            totalPages: calculateTotalPages(jsonResponse.count, POST_PAGE_SIZE),
            previous: getPageNumberFromUrl(jsonResponse.previous),
            next: getPageNumberFromUrl(jsonResponse.next),
        };
    }

    async getSinglePostFromStorage(slug: string): Promise<Post | null> {
        const response = await fetch(`${process.env.BLOG_API_URL}/${slug}`);
        if (!response.ok) {
            return null;
        }

        const jsonResponse: Post = await response.json();

        return jsonResponse;
    }
}

export function getPageNumberFromUrl(next: string | null): number | null {
    if (next) {
        const url = new URL(next);
        const pageParam = url.searchParams.get('page');
        if (pageParam) {
            return parseInt(pageParam);
        }
    }
    return null;
}
