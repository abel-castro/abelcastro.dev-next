import Link from 'next/link';

type PageTitleProps = {
    href?: string;
};

export default function PageTitle({ href }: PageTitleProps) {
    const rootURL = process.env.NEXT_PUBLIC_ROOT_URL ?? '';
    const titleHref = href ?? rootURL;

    return (
        <h1 className="text-3xl font-bold rainbow-text text-center sm:text-left content-center">
            <Link href={titleHref}>abelcastro.dev</Link>
        </h1>
    );
}
