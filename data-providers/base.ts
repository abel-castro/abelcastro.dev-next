import { Post } from '../app/lib/definitions';
import { IDataProvider, PaginatedPosts, PostSearchOptions } from './interface';

export abstract class BaseDataProvider implements IDataProvider {
    abstract getPostsFromStorage(
        options: PostSearchOptions,
    ): Promise<PaginatedPosts>;
    abstract getSinglePostFromStorage(slug: string): Promise<Post | null>;

    async getAll(options: PostSearchOptions): Promise<PaginatedPosts> {
        return new Promise(async (resolve, reject) => {
            const paginatedPosts = await this.getPostsFromStorage(options);

            resolve(paginatedPosts);
        });
    }

    async getBySlug(slug: string): Promise<Post | null> {
        return new Promise(async (resolve, reject) => {
            const matchingPost = await this.getSinglePostFromStorage(slug);
            if (matchingPost) {
                resolve(matchingPost);
            } else {
                resolve(null);
            }
        });
    }
}
