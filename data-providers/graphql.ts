import { ApolloClient, gql } from '@apollo/client';

import { POST_PAGE_SIZE } from '../app/constants';
import { Post, PostsAPIResponse } from '../app/lib/definitions';
import { BaseDataProvider } from './base';
import { PaginatedPosts, PostSearchOptions } from './interface';
import { calculateTotalPages } from './utils';

const POST_FRAGMENT = gql`
    fragment PostFragment on PostType {
        title
        date
        content
        slug
        tags {
            name
        }
    }
`;

export const GET_POST = gql`
    query GetPosts($slug: String!) {
        post(slug: $slug) {
            ...PostFragment
        }
    }
    ${POST_FRAGMENT}
`;

export const GET_POSTS = gql`
    query GetPost($search: String, $limit: Int, $offset: Int) {
        posts(search: $search, limit: $limit, offset: $offset) {
            ...PostFragment
        }
        totalPosts(search: $search)
    }
    ${POST_FRAGMENT}
`;

export const GET_POST_METADATA = gql`
    query GetPostMetadata($slug: String!) {
        post(slug: $slug) {
            title
            metaDescription
        }
    }
`;

type PostsOffsetBased = {
    posts: Post[];
    totalPosts: number;
};

export class GraphqlDataProvider extends BaseDataProvider {
    private client: ApolloClient;

    constructor(client: ApolloClient) {
        super();
        this.client = client;
    }

    async getAllFromStorage(
        options: PostSearchOptions,
    ): Promise<PaginatedPosts> {
        const currentPage = options.currentPage || 1;
        const limit = options.pageSize || POST_PAGE_SIZE;

        const offset = (currentPage - 1) * limit;

        const variables = options.query
            ? { search: options.query, limit, offset }
            : { limit, offset };

        const { data } = await this.client.query<PostsOffsetBased>({
            query: GET_POSTS,
            variables,
        });

        if (!data) {
            return { posts: [], totalPages: 0 };
        }

        return {
            posts: data.posts,
            totalPages: calculateTotalPages(data.totalPosts, POST_PAGE_SIZE),
        };
    }

    async getOneBySlugFromStorage(slug: string): Promise<Post | null> {
        try {
            const { data } = await this.client.query<{ post: Post }>({
                query: GET_POST,
                variables: { slug },
            });

            return data?.post || null;
        } catch (error) {
            console.error('Error fetching post:', error);
            return null;
        }
    }

    async getPostMetadataFromStorage(slug: string): Promise<Post | null> {
        try {
            const { data } = await this.client.query<{ post: Post }>({
                query: GET_POST_METADATA,
                variables: { slug },
            });

            return data?.post || null;
        } catch (error) {
            console.error('Error fetching post metadata:', error);
            return null;
        }
    }
}
