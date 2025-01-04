import Image from 'next/image';

import BlogFooter from './components/footer';
import HomeHeader from './components/home-header';
import LinkAsButton from './components/link-as-button';
import ProjectCard from './components/project-card';
import Separator from './components/separator';
import bananaLifting from '/public/images/banana-lifting.jpg';

export default function Home() {
    return (
        <>
            <HomeHeader />
            <main className="lg:container mx-auto lg:max-w-8xl">
                <div
                    id="about-me"
                    className="md:container md:max-w-5xl mx-auto hero min-h-screen"
                >
                    <div className="hero-content flex-col md:flex-row-reverse">
                        <Image
                            className="max-w-md mask mask-hexagon shadow-2xl p-6"
                            src={bananaLifting}
                            alt="My younger self lifting bananas"
                            width={800}
                            height={800}
                        />
                        <div>
                            <p className="text-xl">
                                Hi! I’m <span className="font-bold">Abel</span>,
                                a{' '}
                                <span className="font-bold">
                                    Full Stack Developer
                                </span>{' '}
                                who loves coding and technology in general.
                            </p>
                            <p className="py-6">
                                That guy in the picture is me, back in 2008,
                                before I began to code. I come from the
                                beautiful Canary Island La Palma but for several
                                years now, I have made Austria my home.
                            </p>
                            <p>
                                Throughout most of my career, I was quite
                                focused on developing with{' '}
                                <span className="font-bold">Python</span> and{' '}
                                <span className="font-bold">Django</span>, but
                                in the last years, I have been learned to love
                                <span className="font-bold">
                                    TypeScript
                                </span>{' '}
                                and frameworks like{' '}
                                <span className="font-bold">Next.js</span> and{' '}
                                <span className="font-bold">NestJS</span>.
                            </p>
                        </div>
                    </div>
                </div>

                <Separator />

                <div
                    id="blog"
                    className="md:container md:max-w-5xl mx-auto hero min-h-screen"
                >
                    <div className="hero-content">
                        <div>
                            <h2 className="text-3xl font-bold py-6">My blog</h2>
                            <p className="pb-3">
                                In my blog I (and LLMs 🤖) write about
                                coding-related topics.
                            </p>
                            <p>
                                The primary goal of my blog has always been to
                                experiment and explore new technologies rather
                                than getting more views.
                            </p>

                            <p>
                                The initial version of my blog was launched in
                                2021 using Django, Django templates, and
                                Bootstrap. Over time, the blog evolved
                                significantly: it incorporated htmx and even
                                implemented a REST API. Both the blog and this
                                page were part of the same Django project.
                            </p>

                            <p className="pb-3 pt-3">
                                But similarly to my career path, the blog and
                                the frameworks I work with have evolved
                                significantly. When I discovered the charm of
                                Next.js, I decided to re-implement it using
                                Next.js. Check it out using the link below!
                            </p>

                            <p>
                                Please note that all opinions expressed on the
                                blog are my own.
                            </p>

                            <LinkAsButton
                                href="/blog"
                                text="To the blog 🚀"
                                extraClasses="mt-6"
                            />
                        </div>
                    </div>
                </div>

                <Separator />

                <div
                    id="projects"
                    className="md:container md:max-w-5xl mx-auto hero min-h-screen mb-10"
                >
                    <div className="hero-content">
                        <div>
                            <h2 className="text-3xl font-bold py-6">
                                My projects
                            </h2>

                            <div className="columns-3xs">
                                <ProjectCard
                                    title="Fasting Timer 18:6"
                                    description="Is a simple application designed to help users manage their intermittent fasting schedules. 
                I used React and Next.js to build it."
                                    imageSrc="https://github.com/abel-castro/fasting-timer/blob/main/fasting-timer-screenshot.jpg?raw=true"
                                    imageAlt="Fasting Timer 18:6"
                                    buttonText="Read more"
                                    buttonHref="/blog/building-fasting-timer-for-learning-react-nextjs"
                                />
                                <ProjectCard
                                    title="Sports Dashboard"
                                    description="Displays the results and standings of the most popular sports
                leagues. Made with an Angular frontend and a Django backend."
                                    imageSrc="https://i.imgur.com/Zchxi4B.png"
                                    imageAlt="Sports Dashboard"
                                    buttonText="Read more"
                                    buttonHref="/blog/sports-dashboard-displays-last-matchday-results"
                                />
                                <ProjectCard
                                    title="Basic analytics"
                                    description=" My self made and hosted alternative to Google Analytics. Made
                with Django, DRF, Bootstrap and Chart.js."
                                    imageSrc="https://i.imgur.com/vqKIa0M.png"
                                    imageAlt="Basic analytics"
                                    buttonText="Read more"
                                    buttonHref="/blog/my-self-made-hosted-google-analytics-alternative"
                                />
                                <ProjectCard
                                    title="Kudos-Box"
                                    description="Anonymously send kudos to your colleagues and friends. The project is not online anymore but the source code is available on GitHub."
                                    imageSrc="https://raw.githubusercontent.com/abel-castro/kudos-box/main/screenshot.jpg"
                                    imageAlt="Kudos-Box"
                                    buttonText="Read more"
                                    buttonHref="https://github.com/abel-castro/kudos-box/"
                                />
                                <ProjectCard
                                    title="Other Stuff"
                                    description="I regularly work on other projects and experiment with new ideas.
                Check out my GitHub profile to see what I’ve been up to."
                                    buttonText="Go to GitHub"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <BlogFooter />
            </main>
        </>
    );
}
