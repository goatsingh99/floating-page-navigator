
import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: [
        "Led a team of 5 engineers in developing a cloud-based analytics platform",
        "Implemented microservices architecture, reducing system downtime by 40%",
        "Established CI/CD pipelines that improved deployment frequency by 300%"
      ],
      skills: ["React", "Node.js", "AWS", "Kubernetes"]
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description: [
        "Developed and maintained multiple web applications with React and TypeScript",
        "Optimized database queries, resulting in a 60% performance improvement",
        "Created RESTful APIs using Node.js and Express"
      ],
      skills: ["React", "TypeScript", "Node.js", "SQL"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Web",
      period: "2016 - 2018",
      description: [
        "Built responsive UI components for e-commerce websites",
        "Participated in code reviews and testing procedures",
        "Assisted in migrating legacy systems to modern frameworks"
      ],
      skills: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative border-l border-gray-700 ml-4 md:ml-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 ml-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute w-5 h-5 bg-white rounded-full -left-[10.5px] border-4 border-background"></div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-lg text-primary mb-4">{exp.company}</p>
                <ul className="list-disc ml-5 space-y-1 text-gray-300 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
