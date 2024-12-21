import { render } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import { describe, expect, test, vi } from 'vitest';

import Search, {
    getSearchParams,
} from '../../../app/components/posts/post-search';

vi.mock('next/navigation', () => ({
    usePathname: vi.fn(),
    useRouter: vi.fn(() => ({
        replace: vi.fn(),
    })),
    useSearchParams: vi.fn(() => new URLSearchParams()),
}));

describe('Search Component', () => {
    test('should render the search component matching the snapshot', () => {
        const { container } = render(<Search placeholder="Search posts" />);
        expect(container).toMatchSnapshot();
    });

    test('should call usePathname', () => {
        render(<Search placeholder="Search posts" />);
        expect(usePathname).toHaveBeenCalled();
    });
});

describe('getSearchParams', () => {
    test('should set page to 1 and add query parameter if term is provided', () => {
        const searchParams = new URLSearchParams();
        const term = 'test';
        const result = getSearchParams(searchParams, term);
        expect(result.get('page')).toBe('1');
        expect(result.get('query')).toBe(term);
    });

    test('should set page to 1 and remove query parameter if term is empty', () => {
        const searchParams = new URLSearchParams({ query: 'test' });
        const term = '';
        const result = getSearchParams(searchParams, term);
        expect(result.get('page')).toBe('1');
        expect(result.has('query')).toBe(false);
    });

    test('should preserve other existing parameters', () => {
        const searchParams = new URLSearchParams({ other: 'value' });
        const term = 'test';
        const result = getSearchParams(searchParams, term);
        expect(result.get('page')).toBe('1');
        expect(result.get('query')).toBe(term);
        expect(result.get('other')).toBe('value');
    });
});
