import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'highlight.js/styles/github-dark.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'abelcastro.dev',
    description:
        'Hi! I’m Abel, a Full Stack Developer who loves coding and technology in general.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased min-h-screen flex flex-col dark text-white bg-slate-900`}
            >
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
