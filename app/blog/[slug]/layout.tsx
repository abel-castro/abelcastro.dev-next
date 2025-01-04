import BlogHeader from '@/app/components/blog-header';
import BlogFooter from '@/app/components/footer';
import '@/app/globals.css';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col dark:bg-slate-900">
            <BlogHeader />
            <div className="flex-grow p-4">
                <div className="max-w-4xl mx-auto">{children}</div>
            </div>
            <BlogFooter />
        </div>
    );
}
