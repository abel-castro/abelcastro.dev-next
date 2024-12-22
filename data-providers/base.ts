import { Post } from '../app/lib/definitions';
import { IDataProvider, PaginatedPosts, PostSearchOptions } from './interface';

export abstract class BaseDataProvider implements IDataProvider {
    create?(data: Partial<Post>): Promise<Post> {
        throw new Error('Method not implemented.');
    }
    update?(slug: string, data: Partial<Post>): Promise<Post | null> {
        throw new Error('Method not implemented.');
    }
    delete?(slug: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    abstract getAllFromStorage(
        options: PostSearchOptions,
    ): Promise<PaginatedPosts>;
    abstract getOneBySlugFromStorage(slug: string): Promise<Post | null>;
    abstract getPostMetadataFromStorage(slug: string): Promise<Post | null>;

    async getAll(options: PostSearchOptions): Promise<PaginatedPosts> {
        return new Promise(async (resolve, reject) => {
            const paginatedPosts = await this.getAllFromStorage(options);

            resolve(paginatedPosts);
        });
    }

    async getOneBySlug(slug: string): Promise<Post | null> {
        return new Promise(async (resolve, reject) => {
            const matchingPost = await this.getOneBySlugFromStorage(slug);
            if (matchingPost) {
                resolve(matchingPost);
            } else {
                resolve(null);
            }
        });
    }

    async getPostMetadata(slug: string): Promise<Post | null> {
        return new Promise(async (resolve, reject) => {
            const matchingPost = await this.getPostMetadataFromStorage(slug);
            if (matchingPost) {
                resolve(matchingPost);
            } else {
                resolve(null);
            }
        });
    }
}
