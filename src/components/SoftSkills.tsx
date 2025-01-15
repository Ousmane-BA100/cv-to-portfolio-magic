import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const softSkills = [
  "Esprit d'équipe",
  "Capacité d'adaptation rapide",
  "Rigueur et sens de l'organisation",
  "Communication efficace et relationnel naturel",
  "Anglais (B2)",
  "Méthodologie Agile (Scrum)"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function SoftSkills() {
  return (
    <section id="soft-skills" className="py-20 bg-background">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          Soft Skills
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-primary/10 text-black hover:bg-primary/20 border-none"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}