import { expect, test } from 'vitest';

import {
    calculateTotalPages,
    getNextPage,
    getPreviousPage,
} from '../../../data-providers/utils';

test.each([
    { currentPage: 1, expected: null },
    { currentPage: 2, expected: 1 },
    { currentPage: 10, expected: 9 },
    { currentPage: 0, expected: null },
])(
    'getPreviousPage($currentPage) -> $expected',
    ({ currentPage, expected }) => {
        expect(getPreviousPage(currentPage)).toBe(expected);
    },
);

test.each([
    { totalPosts: 1, currentPage: 1, pageSize: 1, expected: null },
    { totalPosts: 10, currentPage: 1, pageSize: 2, expected: 2 },
    { totalPosts: 1, currentPage: 2, pageSize: 1, expected: null }, // invalid currentPage
    { totalPosts: 0, currentPage: 1, pageSize: 1, expected: null }, // invalid totalPosts
])(
    'getNextPage(%totalPosts, %currentPage, %pageSize) -> %expected',
    ({ totalPosts, currentPage, pageSize, expected }) => {
        expect(getNextPage(totalPosts, currentPage, pageSize)).toBe(expected);
    },
);

test.each([
    { totalPosts: 1, pageSize: 1, expected: 1 },
    { totalPosts: 2, pageSize: 1, expected: 2 },
    { totalPosts: 3, pageSize: 5, expected: 1 },
])(
    'calculateTotalPages(%totalPosts, %pageSize) -> %expected',
    ({ totalPosts, pageSize, expected }) => {
        expect(calculateTotalPages(totalPosts, pageSize)).toBe(expected);
    },
);
