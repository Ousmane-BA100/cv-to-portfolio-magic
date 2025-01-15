import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Langages & Outils",
    skills: ["Python", "SQL/NoSQL", "Git", "R", "SGBD", "Big Data", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS EC2", "Lambda", "Fargate", "Spark", "Hadoop", "Streamlit", "Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
  {
    title: "Data Science",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV"],
  },
  {
    title: "Visualisation & BI",
    skills: ["Power BI", "Tableau", "SAP BI", "Streamlit", "D3.js", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Base de données",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Neo4j", "ElasticSearch"],
  },
  {
    title: "Méthodologies & Soft Skills",
    skills: ["Agile/Scrum", "DevOps", "Clean Code", "Design Patterns", "TDD", "Communication", "Travail d'équipe", "Gestion de projet"],
  }
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
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          Compétences
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 border-none"
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