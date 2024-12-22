import { describe } from 'node:test';
import { expect, test, vi } from 'vitest';

import {
    GET_POST,
    GET_POSTS,
    GET_POST_METADATA,
    GraphqlDataProvider,
} from '../../../data-providers/graphql';
import { generateMockPosts, generateMockRestAPIResponse } from '../utils';

// Mock the global fetch function
global.fetch = vi.fn();

describe('GraphqlDataProvider.getPosts tests', () => {
    test('getPosts should fetch posts with query and page size', async () => {
        const mockClient = {
            query: vi.fn().mockResolvedValue({
                data: {
                    posts: generateMockPosts(6),
                    totalPosts: 6,
                },
            }),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const expectedResponse = {
            totalPages: 2,
            posts: generateMockPosts(6),
        };

        const response = await graphqlDataProvider.getAllFromStorage({
            query: 'test',
            pageSize: 3,
            currentPage: 1,
        });

        expect(response).toEqual(expectedResponse);
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POSTS,
            variables: { search: 'test', limit: 3, offset: 0 },
        });
    });

    test('getPosts should fetch posts without query', async () => {
        const mockClient = {
            query: vi.fn().mockResolvedValue({
                data: {
                    posts: generateMockPosts(6),
                    totalPosts: 6,
                },
            }),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const expectedResponse = {
            totalPages: 2,
            posts: generateMockPosts(6),
        };

        const response = await graphqlDataProvider.getAllFromStorage({
            pageSize: 3,
            currentPage: 1,
        });

        expect(response).toEqual(expectedResponse);
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POSTS,
            variables: { limit: 3, offset: 0 },
        });
    });

    test('getPosts should handle errors gracefully', async () => {
        const mockClient = {
            query: vi.fn().mockRejectedValue(new Error('GraphQL error')),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        await expect(
            graphqlDataProvider.getAllFromStorage({
                query: 'test',
                pageSize: 3,
                currentPage: 1,
            }),
        ).rejects.toThrow('GraphQL error');
    });
});

describe('GraphqlDataProvider.getPost tests', () => {
    test('getPost should fetch a post by slug', async () => {
        const mockPost = { title: 'Test Post', slug: 'test-post' };
        const mockClient = {
            query: vi.fn().mockResolvedValue({
                data: { post: mockPost },
            }),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const response =
            await graphqlDataProvider.getOneBySlugFromStorage('test-post');

        expect(response).toEqual(mockPost);
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POST,
            variables: { slug: 'test-post' },
        });
    });

    test('getPost should return null if post not found', async () => {
        const mockClient = {
            query: vi.fn().mockResolvedValue({
                data: { post: null },
            }),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const response =
            await graphqlDataProvider.getOneBySlugFromStorage(
                'non-existent-post',
            );

        expect(response).toBeNull();
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POST,
            variables: { slug: 'non-existent-post' },
        });
    });

    test('getPost should handle errors gracefully', async () => {
        const mockClient = {
            query: vi.fn().mockRejectedValue(new Error('GraphQL error')),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const response =
            await graphqlDataProvider.getOneBySlugFromStorage('test-post');

        expect(response).toBeNull();
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POST,
            variables: { slug: 'test-post' },
        });
    });
});

describe('GraphqlDataProvider.getPostMetadata tests', () => {
    test('getPostMetadata should fetch post metadata by slug', async () => {
        const mockMetadata = {
            title: 'Test Post',
            metaDescription: 'Test Description',
        };
        const mockClient = {
            query: vi.fn().mockResolvedValue({
                data: { post: mockMetadata },
            }),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const response = await graphqlDataProvider.getPostMetadata('test-post');

        expect(response).toEqual(mockMetadata);
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POST_METADATA,
            variables: { slug: 'test-post' },
        });
    });

    test('getPostMetadata should return null if metadata not found', async () => {
        const mockClient = {
            query: vi.fn().mockResolvedValue({
                data: { post: null },
            }),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const response =
            await graphqlDataProvider.getPostMetadata('non-existent-post');

        expect(response).toBeNull();
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POST_METADATA,
            variables: { slug: 'non-existent-post' },
        });
    });

    test('getPostMetadata should handle errors gracefully', async () => {
        const mockClient = {
            query: vi.fn().mockRejectedValue(new Error('GraphQL error')),
        };

        const graphqlDataProvider = new GraphqlDataProvider(mockClient as any);

        const response = await graphqlDataProvider.getPostMetadata('test-post');

        expect(response).toBeNull();
        expect(mockClient.query).toHaveBeenCalledWith({
            query: GET_POST_METADATA,
            variables: { slug: 'test-post' },
        });
    });
});
