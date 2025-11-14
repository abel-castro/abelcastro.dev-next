import { Github, Linkedin } from 'lucide-react';

export default function HomeAnchors() {
    const rootURL = process.env.ROOT_URL ?? '';
    return (
        <div className="relative flex mt-4 sm:mt-0 w-full sm:w-auto sm:flex justify-center">
            <ul className="menu menu-vertical sm:menu-horizontal font-bold text-lg link">
                <li>
                    <a
                        href="https://github.com/abel-castro"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        <Github />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/abelcastrodev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin />
                    </a>
                </li>
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
