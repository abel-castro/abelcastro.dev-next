import BlogFooter from './components/footer';
import HomeHeader from './components/home-header';
import Separator from './components/separator';
import { ProjectsSection } from './components/projects-section';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { MyBlogSection } from './components/my-blog-section';

export default function Home() {
    return (
        <>
            <HomeHeader />
            <main className="lg:container mx-auto lg:max-w-8xl">
                <HeroSection />
              
                <Separator />

                <AboutSection />

                <Separator />

                <MyBlogSection />

                <Separator />

                <ProjectsSection />
              
                <BlogFooter />
            </main>
        </>
    );
}
