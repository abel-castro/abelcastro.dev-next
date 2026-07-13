import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Video } from '../../../app/components/posts/post-single';

describe('Video', () => {
    test('renders a video element with the given src and sane defaults', () => {
        const { container } = render(
            <Video src="/videos/discoverydemo.mp4" />,
        );

        const video = container.querySelector('video');

        expect(video).not.toBeNull();
        expect(video).toHaveAttribute('src', '/videos/discoverydemo.mp4');
        expect(video).toHaveAttribute('controls');
        expect(video).toHaveAttribute('preload', 'metadata');
        expect(video).toHaveAttribute('playsInline');
    });

    test('forwards extra props and allows overriding defaults', () => {
        const { container } = render(
            <Video src="/videos/loop.mp4" loop muted className="custom" />,
        );

        const video = container.querySelector('video');

        expect(video).toHaveAttribute('loop');
        // React sets `muted` as a DOM property rather than an attribute.
        expect((video as HTMLVideoElement).muted).toBe(true);
        expect(video).toHaveClass('custom');
    });
});
