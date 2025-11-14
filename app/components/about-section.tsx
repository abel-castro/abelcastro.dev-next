import { Code, Database, Languages, TestTube } from "lucide-react";
import { Card, CardContent } from "./card";

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, Next.js",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Django, FastAPI, NestJS",
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Testing",
      description: "pytest, vitest, jest, Playwright",
    },
    {
      icon: <Languages className="h-8 w-8" />,
      title: "Languages",
      description: "Spanish, German, English",
    },
  ];

  return (
    <section id="about-me" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm passionate about creating innovative solutions mostly using
              languages like Python and TypeScript. I build robust, well-tested
              applications and follow Test-Driven Development (TDD) practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
             In my more than 10 years as a Full Stack Developer, 
             I've had the privilege of working with many smart and talented people. 
             Thanks to them, I've learned to see software development as a craft that requires dedication, 
             continuous learning, and great attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At the same time, I've learned that building software is a team effort that depends on collaboration, 
              clear communication, and empathy. It's crucial to find the right balance between these aspects to deliver 
              successful solutions while maintaining a sense of fulfillment and confidence in the work we do.
            </p>
            <p className="text-muted-foreground leading-relaxed">
These learnings form the foundation of my approach to software development: craftsmanship, collaboration, and a strong focus on delivering real value.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
