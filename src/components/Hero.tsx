
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 py-20 animate-fade-in">
      <div className="text-center max-w-4xl">
        <p className="text-gray-400 mb-4 font-medium">Hello, This is</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          <span className="block sm:inline">Saksham</span>{" "}
          <span className="block sm:inline">Mawari</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I am a passionate Software Developer with a background in Computer Science, 
          eager to collaborate and create impactful solutions. I thrive on solving 
          complex problems and bringing innovative concepts to life. With every line 
          of code, I aim to push boundaries, learn, and explore new possibilities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" className="border-white hover:bg-white/10 py-6 px-8 text-lg">
            Download CV
          </Button>
          <Button 
            variant="secondary"
            className="bg-white text-black hover:bg-gray-200 py-6 px-8 text-lg"
            asChild
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <button onClick={scrollToNextSection} className="text-white bg-transparent border-none">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
