import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Langages & Outils",
    skills: ["Python", "SQL/NoSQL", "Git", "R", "SGBD", "Big Data"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS EC2", "Lambda", "Fargate", "Spark", "Hadoop", "Streamlit"],
  },
  {
    title: "Data Science",
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
  },
  {
    title: "Visualisation",
    skills: ["Power BI", "Tableau", "SAP BI", "Streamlit"],
  },
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

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background-dark">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Compétences
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card className="bg-white/5 backdrop-blur-sm border-none hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary-light">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-primary/20 text-primary-light hover:bg-primary/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}