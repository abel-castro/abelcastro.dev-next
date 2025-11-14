import PageTitle from './page-title';
import Search from './posts/post-search';

export default function BlogHeader() {
    return (
        <header className="flex flex-col justify-between sm:flex-row sm:justify-between p-4">
            <PageTitle />
            <Search placeholder="Search in posts..." />
        </header>
    );
}
