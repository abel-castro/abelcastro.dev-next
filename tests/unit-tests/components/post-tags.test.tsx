import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import PostTags from '../../../app/components/posts/post-tags';

const tags = [
    { name: 'spec-driven-development' },
    { name: 'monorepo' },
    { name: 'microservices' },
    { name: 'architecture' },
    { name: 'ai-first-development' },
];

describe('PostTags', () => {
    test('shows only three tags and a +N button by default', () => {
        render(<PostTags tags={tags} />);

        expect(screen.getByText('spec-driven-development')).toBeInTheDocument();
        expect(screen.getByText('monorepo')).toBeInTheDocument();
        expect(screen.getByText('microservices')).toBeInTheDocument();
        expect(screen.queryByText('architecture')).not.toBeInTheDocument();
        expect(screen.queryByText('ai-first-development')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Show all tags' })).toHaveTextContent('+ 2');
    });

    test('expands and shows all tags when +N is clicked', () => {
        render(<PostTags tags={tags} />);

        fireEvent.click(screen.getByRole('button', { name: 'Show all tags' }));

        expect(screen.getByText('architecture')).toBeInTheDocument();
        expect(screen.getByText('ai-first-development')).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Show all tags' })).not.toBeInTheDocument();
    });
});
