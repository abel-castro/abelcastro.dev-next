import { expect, test } from 'vitest';

import { getPageNumberFromUrl } from '../../../data-providers/rest-api';

test.each([
    { url: 'http://localhost:8000/api/posts/?page=2', expected: 2 },
    { url: null, expected: null },
    { url: 'http://localhost:8000/api/posts/', expected: null },
    { url: 'http://localhost:8000/', expected: null },
])('getPageNumberFromUrl(%url) -> %expected', ({ url, expected }) => {
    expect(getPageNumberFromUrl(url)).toBe(expected);
});
