import { POST_PAGE_SIZE } from '../app/constants';
import { Post } from '../app/lib/definitions';
import { BaseDataProvider } from './base';
import { PaginatedPosts, PostSearchOptions } from './interface';
import { calculateTotalPages } from './utils';

export class MemoryDataProvider extends BaseDataProvider {
    private postsFromJson: Post[];

    constructor(postsFromJson: Post[]) {
        super();

        this.postsFromJson = postsFromJson as Post[];
    }

    async getPosts(options: PostSearchOptions): Promise<PaginatedPosts> {
        const posts = this.postsFromJson.map((post: Post) => {
            return {
                title: post.title,
                slug: post.slug,
                content: post.content,
                meta_description: post.meta_description,
                date: post.date,
                tags: post.tags,
            };
        });

        return {
            posts: posts,
            totalPages: calculateTotalPages(posts.length, POST_PAGE_SIZE),
        };
    }

    async getPost(slug: string): Promise<Post | null> {
        const post = this.postsFromJson.find(
            (post: Post) => post.slug === slug,
        );
        if (post) {
            return post;
        } else {
            return null;
        }
    }
}
