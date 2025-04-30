
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product catalog, user authentication, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "#",
      liveDemo: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Task Management App",
      description: "A productivity tool for organizing tasks with features like drag-and-drop, filters, and team collaboration.",
      technologies: ["TypeScript", "Next.js", "GraphQL", "PostgreSQL"],
      github: "#",
      liveDemo: "#",
      image: "/placeholder.svg",
    },
    {
      title: "Real-Time Chat Application",
      description: "A messaging platform with real-time communication, user presence indicators, and file sharing capabilities.",
      technologies: ["React", "Firebase", "WebSockets", "Tailwind CSS"],
      github: "#",
      liveDemo: "#",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-secondary border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-black/20">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-4">
                {project.github && (
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveDemo && (
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
