import { POST_PAGE_SIZE } from '../app/constants';
import { Post, PostsAPIResponse } from '../app/lib/definitions';
import { BaseDataProvider } from './base';
import { PaginatedPosts, PostSearchOptions } from './interface';
import { calculateTotalPages } from './utils';

export class RestAPIDataProvider extends BaseDataProvider {
    async getPosts(options: PostSearchOptions): Promise<PaginatedPosts> {
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

        const baseUrl = process.env.ROOT_URL;
        if (!baseUrl) {
            throw new Error('ROOT_URL is not set');
        }

        return {
            posts: jsonResponse.results,
            totalPages: calculateTotalPages(jsonResponse.count, POST_PAGE_SIZE),
        };
    }

    async getPost(slug: string): Promise<Post | null> {
        const response = await fetch(`${process.env.BLOG_API_URL}/${slug}`);
        if (!response.ok) {
            return null;
        }

        const jsonResponse: Post = await response.json();

        return jsonResponse;
    }
}
