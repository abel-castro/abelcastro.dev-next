import Link from 'next/link';

export default function BlogFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-slate-300 p-4 text-center text-sm">
            <p>
                Abel Castro {currentYear} - checkout the source code of this
                page on{' '}
                <Link
                    href="https://github.com/abel-castro/abelcastro.dev-next"
                    className="footer-link link"
                    target="_blank"
                    prefetch={false}
                >
                    GitHub
                </Link>{' '}
                -{' '}
                <Link className="footer-link link" href="/privacy-policy/">
                    Privacy Policy
                </Link>{' '}
            </p>
        </footer>
    );
}
