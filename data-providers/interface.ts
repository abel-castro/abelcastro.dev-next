import { Post } from '../app/lib/definitions';

export interface IDataProvider {
    getAll(options: PostSearchOptions): Promise<PaginatedPosts>;
    getOneBySlug(slug: string): Promise<Post | null>;
    getPostMetadata(slug: string): Promise<Post | null>;
    create?(data: Partial<Post>): Promise<Post>;
    update?(slug: string, data: Partial<Post>): Promise<Post | null>;
    delete?(slug: string): Promise<boolean>;
}

export interface PostSearchOptions {
    currentPage?: number;
    query?: string;
    pageSize?: number;
}

export interface PaginatedPosts {
    totalPages: number;
    posts: Post[];
}
