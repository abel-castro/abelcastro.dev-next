import Link from 'next/link';

export default function PageTitle() {
    const rootURL = process.env.ROOT_URL ?? '';
    return (
        <h1 className="text-3xl font-bold rainbow-text text-center sm:text-left content-center">
            <Link href={rootURL}>abelcastro.dev</Link>
        </h1>
    );
}
