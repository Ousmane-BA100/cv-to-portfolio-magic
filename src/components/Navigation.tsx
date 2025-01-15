import { Home, Database, Briefcase, GraduationCap } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Accueil", icon: Home, href: "#home" },
  { title: "Compétences", icon: Database, href: "#skills" },
  { title: "Expériences", icon: Briefcase, href: "#experiences" },
  { title: "Formation", icon: GraduationCap, href: "#education" },
];

export function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationMenu className="relative flex h-16 items-center justify-between">
          <NavigationMenuList className="flex space-x-8">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink asChild>
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#2563eb] transition-colors relative"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-sans">{item.title}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#2563eb]"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </motion.nav>
  );
}