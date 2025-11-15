"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Button from "./button";
import PageTitle from "./page-title";

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background backdrop-blur-lg border-b border-teal-900 border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <PageTitle />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about-me")}
              className="text-foreground hover:text-teal-400 transition-all duration-200 hover:scale-110 relative group"
            >
              About me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection("blog")}
              className="text-foreground hover:text-teal-400 transition-all duration-200 hover:scale-110 relative group"
            >
              My blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
             <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-teal-400 transition-all duration-200 hover:scale-110 relative group"
            >
              My projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="group hover:scale-110 transition-all duration-200 hover:text-teal-400">
              <a
                href="http://github.com/abel-castro"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-teal-400 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="group hover:scale-110 transition-all duration-200 hover:text-teal-400">
              <a
                href="https://linkedin.com/in/abelcastrodev"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:text-teal-400 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4"/>
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="group hover:scale-110 transition-all duration-200 hover:text-teal-400">
              <a href="mailto:hi@abelcastro.dev" className="group-hover:text-teal-400 transition-colors duration-200">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-teal-900 border-border">
              <button
                onClick={() => scrollToSection("about-me")}
                className="block px-3 py-2 text-foreground hover:text-teal-400 hover:bg-accent/10 transition-all duration-200 w-full text-left rounded-md"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block px-3 py-2 text-foreground hover:text-teal-400 hover:bg-accent/10 transition-all duration-200 w-full text-left rounded-md"
              >
                My blog
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block px-3 py-2 text-foreground hover:text-teal-400 hover:bg-accent/10 transition-all duration-200 w-full text-left rounded-md"
              >
                My projects
              </button>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="sm" className="group hover:scale-110 transition-all duration-200 hover:text-teal-400">
                  <a
                    href="http://github.com/abel-castro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-teal-400 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="group hover:scale-110 transition-all duration-200 hover:text-teal-400">
                  <a
                    href="https://linkedin.com/in/abelcastrodev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-teal-400 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="group hover:scale-110 transition-all duration-200 hover:text-teal-400">
                  <a href="mailto:hi@abelcastro.dev" className="group-hover:text-teal-400 transition-colors duration-200">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
