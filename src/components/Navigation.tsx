import { motion } from "framer-motion";

export function Navigation() {
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
            <NavLink href="#skills">Compétences</NavLink>
            <NavLink href="#projects">Projets</NavLink>
            <NavLink href="#experiences">Expérience</NavLink>
            <NavLink href="#education">Diplômes</NavLink>
            <NavLink href="#soft-skills">Soft Skills</NavLink>
            <NavLink href="#hobbies">Hobbies</NavLink>
            <NavLink href="#contact" className="text-primary hover:text-primary/80">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.a
      href={href}
      className={`text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.a>
  );
}