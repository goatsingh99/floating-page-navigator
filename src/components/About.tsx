
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "React.js", "TypeScript", "Node.js", "Python", 
    "GraphQL", "SQL", "MongoDB", "AWS", 
    "Docker", "CI/CD", "Tailwind CSS", "Next.js"
  ];

  return (
    <section id="about" className="min-h-screen py-20 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a Software Developer with a passion for creating elegant solutions to complex problems. With a strong foundation in Computer Science, I specialize in building scalable, efficient, and user-friendly applications.
              </p>
              <p>
                My journey in technology began during my undergraduate studies, where I discovered my love for programming and problem-solving. Since then, I've been continuously expanding my knowledge and skills across various technologies and domains.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical articles and mentoring.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-secondary border-none hover:bg-secondary/80 transition-colors">
                  <CardContent className="p-4 text-center">
                    <span>{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
