import BlogFooter from './components/footer';
import Separator from './components/separator';
import { ProjectsSection } from './components/projects-section';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { MyBlogSection } from './components/my-blog-section';
import { HomeHeader } from './components/home-header';

export default function Home() {
    return (
        <>
            <HomeHeader />

            <HeroSection />
            
            <Separator />

            <AboutSection />

            <Separator />

            <MyBlogSection />

            <Separator />

            <ProjectsSection />
            
            <BlogFooter />
        </>
    );
}
