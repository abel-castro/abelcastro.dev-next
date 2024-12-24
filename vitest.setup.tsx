import '@testing-library/jest-dom';
import { readFileSync } from 'fs';
import { vi } from 'vitest';

import { MemoryDataProvider } from './data-providers/memory';

//Mock Next.js useSearchParams
vi.mock('next/navigation', () => {
    const actual = vi.importActual('next/navigation');
    return {
        ...actual,
        useRouter: vi.fn(() => ({
            push: vi.fn(),
        })),
        useSearchParams: vi.fn(() => ({
            get: vi.fn(),
        })),
        usePathname: vi.fn(),
        notFound: vi.fn(),
    };
});

// Mock mdx
vi.mock('next-mdx-remote/rsc', () => ({
    MDXRemote: ({ source }: { source: string }) => <div>{source}</div>,
}));

// Replace active dataProvider with MemoryDataProvider
vi.mock('./data-providers/active', async () => {
    const jsonData = JSON.parse(
        readFileSync('./tests/test-data.json', 'utf-8'),
    );
    return {
        default: new MemoryDataProvider(jsonData),
    };
});
