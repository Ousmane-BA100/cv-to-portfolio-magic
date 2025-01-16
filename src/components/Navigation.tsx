import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.a
              href="#"
              className="text-xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Ousmane BA
            </motion.a>
          </div>
          
          <div className="flex items-center space-x-8">
            <NavLink href="#skills" isActive={activeSection === "skills"}>
              Compétences
            </NavLink>
            <NavLink href="#projects" isActive={activeSection === "projects"}>
              Projets
            </NavLink>
            <NavLink href="#experiences" isActive={activeSection === "experiences"}>
              Expérience
            </NavLink>
            <NavLink href="#education" isActive={activeSection === "education"}>
              Diplômes
            </NavLink>
            <NavLink href="#soft-skills" isActive={activeSection === "soft-skills"}>
              Soft Skills
            </NavLink>
            <NavLink href="#hobbies" isActive={activeSection === "hobbies"}>
              Hobbies
            </NavLink>
            <NavLink href="#contact" isActive={activeSection === "contact"}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ 
  href, 
  children, 
  isActive,
  className = "" 
}: { 
  href: string; 
  children: React.ReactNode; 
  isActive: boolean;
  className?: string 
}) {
  return (
    <motion.a
      href={href}
      className={`text-sm font-medium transition-colors ${
        isActive 
          ? "text-primary hover:text-primary/80" 
          : "text-gray-700 hover:text-gray-900"
      } ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.a>
  );
}