
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/40 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex space-x-4">
            <a 
              href="#" 
              className="bg-secondary text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="bg-secondary text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="bg-secondary text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="bg-secondary text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Saksham Agarwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
