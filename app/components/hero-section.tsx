"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Button from "./button";

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about-me");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-background to-muted pt-20 sm:pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Hi! I'm <span className="text-accent">Abel</span>, a Full Stack{" "}
              <span className="text-accent">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-pretty">
              That guy in the picture is me, back in 2008, before I began to
              code. I come from the beautiful Canary Island La Palma but for
              several years now, I have made Austria my home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToAbout} className="group">
                Learn More About Me
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-900 shadow-2xl">
                <Image
                  src="/images/banana-lifting.jpg"
                  alt="Abel Castro - Full Stack Developer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
