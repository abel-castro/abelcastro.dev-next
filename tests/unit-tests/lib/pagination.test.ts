import { describe, expect, it } from 'vitest';

import { generatePagination } from '../../../app/lib/pagination';

describe('generatePagination', () => {
    it('should return all pages if totalPages is 7 or less', () => {
        expect(generatePagination(1, 1)).toEqual([1]);
        expect(generatePagination(2, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(generatePagination(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should handle pages when currentPage is among the first 3 pages', () => {
        expect(generatePagination(1, 10)).toEqual([1, 2, 3, '...', 9, 10]);
        expect(generatePagination(2, 10)).toEqual([1, 2, 3, '...', 9, 10]);
        expect(generatePagination(3, 10)).toEqual([1, 2, 3, '...', 9, 10]);
    });

    it('should handle pages when currentPage is among the last 3 pages', () => {
        expect(generatePagination(8, 10)).toEqual([1, 2, '...', 8, 9, 10]);
        expect(generatePagination(9, 10)).toEqual([1, 2, '...', 8, 9, 10]);
        expect(generatePagination(10, 10)).toEqual([1, 2, '...', 8, 9, 10]);
    });

    it('should handle pages when currentPage is in the middle', () => {
        expect(generatePagination(4, 10)).toEqual([
            1,
            '...',
            3,
            4,
            5,
            '...',
            10,
        ]);
        expect(generatePagination(5, 10)).toEqual([
            1,
            '...',
            4,
            5,
            6,
            '...',
            10,
        ]);
        expect(generatePagination(6, 10)).toEqual([
            1,
            '...',
            5,
            6,
            7,
            '...',
            10,
        ]);
    });
});
