
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavLink = ({ href, children, isActive, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth"
        });
        onClick();
      }}
      className={cn("nav-link", isActive && "active")}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better UX
      const sections = document.querySelectorAll("section[id]");

      setIsScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "floating-nav",
      isScrolled ? "shadow-xl" : "shadow-md"
    )}>
      <nav className="flex items-center justify-center">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                href={`#${link.id}`}
                isActive={activeSection === link.id}
                onClick={() => setActiveSection(link.id)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
