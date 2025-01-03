import Link from 'next/link';

import HomeAnchors from './home-anchors';
import PageTitle from './page-title';
import Search from './posts/post-search';

export default function BlogHeader() {
    const rootURL = process.env.ROOT_URL ?? '';
    return (
        <header className="flex flex-col justify-between sm:flex-row sm:justify-between pl-4 pr-4">
            <PageTitle />
            <HomeAnchors />
        </header>
    );
}
