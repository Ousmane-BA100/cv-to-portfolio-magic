import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Big Data & Cloud",
    skills: [
      { name: "ETL Pipelines", value: 85 },
      { name: "PySpark", value: 90 },
      { name: "Hadoop", value: 80 },
      { name: "AWS (EC2, Lambda, Fargate)", value: 85 },
      { name: "GCP (BigQuery, Compute Engine, Cloud Run...)", value: 80 },
      { name: "Databricks", value: 85 },
      { name: "SnowFlake", value: 80 },
    ]
  },
  {
    title: "Programmation & Outils",
    skills: [
      { name: "Python", value: 90 },
      { name: "POO", value: 70 },
      { name: "SQL/NoSQL", value: 85 },
      { name: "Git", value: 80 },
      { name: "MySQL, PostgreSQL", value: 90 },
      { name: "SQL Server, SQLite", value: 80 },
      { name: "MongoDB, Elasticsearch", value: 70 },
    ]
  },
  {
    title: "Data Science",
    skills: [
      { name: "Machine Learning", value: 85 },
      { name: "Deep Learning", value: 80 },
      { name: "Scikit-learn", value: 85 },
      { name: "TensorFlow/PyTorch", value: 80 },
      { name: "Traitement d'images", value: 75 },
      { name: "Pandas, NumPy", value: 95}
    ]
  },
  {
    title: "Expertise Technique",
    skills: [
      { name: " Talend", value: 80 },
      { name: " Alteryx", value: 75 },
      { name: "Dataiku", value: 70 },
      { name: " Data Buil Tool", value: 65 },
      { name: "Docker", value: 75 },
      { name: "FastAPI/Flask/Django", value: 80},
      { name: "CI/CD", value: 70}
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">
          Compétences
        </h2>
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm font-medium">{skill.value}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.value}%` }}
                          />
                        </div>
                      </div>
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
