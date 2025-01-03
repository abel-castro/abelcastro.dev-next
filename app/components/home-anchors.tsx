import Link from 'next/link';

export default function HomeAnchors() {
    const rootURL = process.env.ROOT_URL ?? '';
    return (
        <div className="relative flex mt-4 sm:mt-0 w-full sm:w-auto sm:flex justify-center">
            <ul className="menu menu-vertical sm:menu-horizontal font-bold text-lg link">
                <li>
                    <a href="#about-me">About me</a>
                </li>
                <li>
                    <a href="#blog">My blog</a>
                </li>
                <li>
                    <a href="#projects">My projects</a>
                </li>
            </ul>
        </div>
    );
}
