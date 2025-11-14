import LinkAsButton from "./link-as-button";

export function MyBlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Blog
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground text-pretty">
              In my blog I (and LLMs) write about coding-related topics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The primary goal of my blog has always been to experiment and
              explore new technologies rather than getting more views.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The initial version of my blog was launched in 2021 using Django,
              Django templates, and Bootstrap. Over time, the blog evolved
              significantly: it incorporated htmx and even implemented a REST
              API. Both the blog and this page were part of the same Django
              project.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But similarly to my career path, the blog and the frameworks I
              work with have evolved significantly. When I discovered the charm
              of Next.js, I decided to re-implement it using Next.js. Check it
              out using the link below!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please note that all opinions expressed on the blog are my own.
            </p>
          </div>
          <div className="mt-8">
            <LinkAsButton
              href="/blog"
              text="To the blog"
              extraClasses=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
