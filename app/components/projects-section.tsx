
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Button from "./button";
import Badge from "./badge";

export function ProjectsSection() {
  const projects = [
    {
      title: "TheBest.Ink",
      description:
        "A platform for making easier to find tattoo artists and studios near you.",
      image: "/images/the-best-ink.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Django",
      ],
      liveUrl: "https://thebest.ink",
    },
    {
      title: "Sports Dashboard",
      description:
        "Small app that displays the results and standings of the most popular football (soccer) leagues in Europa.",
      image: "/images/sports-dashboard.png",
      technologies: ["Next.js", "MUI", "Django", "PostgreSQL"],
      liveUrl: "https://sports-dashboard.abelcastro.dev",
      githubUrl: "https://github.com/abel-castro/sports-dashboard",
    },
    {
      title: "Basic Analytics",
      description:
        "My self made and hosted alternative to Google Analytics. Made with Django, DRF, Bootstrap and Chart.js.",
      image: "/images/basic-analytics.png",
      technologies: ["Django", "Bootstrap", "Chart.js"],
      liveUrl:
        "https://abelcastro.dev/blog/my-self-made-hosted-google-analytics-alternative",
      githubUrl: "https://github.com/abel-castro/basic_analytics",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            One of my favorites ways to learn and grow as a developer is by
            building side projects. Here are some of them:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      See More
                    </Button>
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        <Github className="h-3 w-3" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="http://github.com/abel-castro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              View All My Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
