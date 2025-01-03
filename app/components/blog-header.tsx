import Link from 'next/link';

import PageTitle from './page-title';
import Search from './posts/post-search';

export default function BlogHeader() {
    const rootURL = process.env.ROOT_URL ?? '';
    return (
        <header className="flex flex-col justify-between sm:flex-row sm:justify-between p-4">
            <PageTitle />
            <Search placeholder="Search in posts..." />
        </header>
    );
}
