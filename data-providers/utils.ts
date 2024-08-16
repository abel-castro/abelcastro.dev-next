export function getPreviousPage(currentPage: number): number | null {
    if (currentPage > 1) {
        return currentPage - 1;
    } else {
        return null;
    }
}

export function getNextPage(
    totalPosts: number,
    currentPage: number,
    pageSize: number,
): number | null {
    const totalPages = calculateTotalPages(totalPosts, pageSize);
    const nextPage = currentPage + 1;

    if (nextPage <= totalPages) {
        return nextPage;
    } else {
        return null;
    }
}

export function calculateTotalPages(
    totalPosts: number,
    pageSize: number,
): number {
    return Math.ceil(totalPosts / pageSize);
}
