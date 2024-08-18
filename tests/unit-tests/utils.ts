import { Post, PostsAPIResponse } from '../../app/lib/definitions';

export function generateMockRestAPIResponse(amount: number): PostsAPIResponse {
    const amountPostsToBeGenerated = amount;
    return {
        count: amountPostsToBeGenerated,
        results: generateMockPosts(amountPostsToBeGenerated),
        next: '?page=2',
        previous: null,
    };
}

export function generateMockPosts(amount: number): Post[] {
    const posts: Post[] = [];
    for (let i = 1; i <= amount; i++) {
        const post: Post = {
            slug: `post-${i}`,
            title: `Post ${i}`,
            date: '2023-08-07',
            tags: [{ name: `Tag ${i}` }, { name: `Tag ${i + 1}` }],
            meta_description: `Meta description of post ${i}`,
            content: `Content of post ${i}`,
        };
        posts.push(post);
    }
    return posts;
}
