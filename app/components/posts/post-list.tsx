import { Post } from '@/app/lib/definitions';
import { Fragment } from 'react';

import Separator from '../separator';
import PostSingle from './post-single';

export default function PostList({ posts }: { posts: Post[] }) {
    return (
        <>
            {posts.map((post: Post, index: number) => (
                <Fragment key={post.slug}>
                    <PostSingle
                        key={post.slug}
                        title={post.title}
                        slug={post.slug}
                        date={post.date}
                        tags={post.tags}
                        content={post.content}
                    />
                    {index < 2 && <Separator />}
                </Fragment>
            ))}
        </>
    );
}
