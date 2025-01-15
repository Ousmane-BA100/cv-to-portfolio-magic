import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programmation et Outils",
    skills: ["Python (+4 ans)", "SQL/NoSQL (+3)", "Git (+3)", "C/C++", "GitHub Actions", "GitLab CI"],
  },
  {
    title: "SGBD",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Big Data et Cloud",
    skills: ["DataBricks", "SnowFlake", "AWS (EC2, Lambda, Fargate)", "S3", "RDS", "RedShift", "SageMaker", "GCP (Compute Engine, BigQuery)", "Kubernetes Engine", "Cloud Storage", "AI Platform", "Spark", "Hadoop"],
  },
  {
    title: "Expertise Technique",
    skills: ["React", "Django", "Airflow", "API", "Docker", "FastAPI", "Flask", "Django", "culture DevOps (déploiement via CI/CD)"],
  },
  {
    title: "Visualisation",
    skills: ["Power BI", "Tableau", "SAP BI", "Streamlit"],
  },
  {
    title: "Data Science",
    skills: ["Scikit-learn", "Machine Learning", "TensorFlow", "Pytorch", "Scikit-learn"],
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
                        className="bg-primary/10 text-black hover:bg-primary/20 border-none"
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