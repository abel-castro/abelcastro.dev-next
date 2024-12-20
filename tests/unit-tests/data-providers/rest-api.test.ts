import { describe } from 'node:test';
import { Mock, expect, test, vi } from 'vitest';

import { POST_PAGE_SIZE } from '../../../app/constants';
import { Post, PostsAPIResponse } from '../../../app/lib/definitions';
import { RestAPIDataProvider } from '../../../data-providers/rest-api';
import { generateMockPosts, generateMockRestAPIResponse } from '../utils';

// Mock the global fetch function
global.fetch = vi.fn();

const restAPIDataProvider = new RestAPIDataProvider();

describe('RestAPIDataProvider.getPostsFromStorage tests', () => {
    test('getPostsFromStorage should throw an error if BLOG_API_URL is not set', async () => {
        delete process.env.BLOG_API_URL;
        await expect(restAPIDataProvider.getPosts({})).rejects.toThrow(
            'BLOG_API_URL is not set',
        );
    });

    test('getPostsFromStorage should fetch posts with query and page size', async () => {
        process.env.BLOG_API_URL = 'https://api.example.com/posts';
        process.env.ROOT_URL = 'https://example.com';

        const mockRestAPIResponse: PostsAPIResponse =
            generateMockRestAPIResponse(6);
        (global.fetch as Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockRestAPIResponse,
        });

        const expectedResponse = {
            totalPages: mockRestAPIResponse.count / POST_PAGE_SIZE,
            posts: mockRestAPIResponse.results,
        };

        const response = await restAPIDataProvider.getPosts({
            query: 'test',
            pageSize: 3,
        });

        expect(response).toEqual(expectedResponse);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.example.com/posts?query=test&page_size=3&page=1',
        );
    });

    test('getPostsFromStorage should handle fetch errors', async () => {
        process.env.BLOG_API_URL = 'https://api.example.com/posts';

        (global.fetch as Mock).mockResolvedValueOnce({
            ok: false,
        });

        await expect(restAPIDataProvider.getPosts({})).rejects.toThrow(
            'Failed to fetch posts',
        );
    });
});

describe('RestAPIDataProvider.getSinglePostFromStorage tests', () => {
    test('should fetch a single post by slug', async () => {
        process.env.BLOG_API_URL = 'https://api.example.com/posts';

        const mockPost: Post = generateMockPosts(1)[0];
        (global.fetch as Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockPost,
        });

        const response = await restAPIDataProvider.getPost('post-1');
        expect(response).toEqual(mockPost);
        expect(global.fetch).toHaveBeenCalledWith(
            'https://api.example.com/posts/post-1',
        );
    });

    test('should return null if the fetch fails', async () => {
        process.env.BLOG_API_URL = 'https://api.example.com/posts';

        (global.fetch as Mock).mockResolvedValueOnce({
            ok: false,
        });

        const response = await restAPIDataProvider.getPost('post-1');
        expect(response).toBeNull();
    });
});
