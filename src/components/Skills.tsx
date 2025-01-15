import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export function Skills() {
  return (
    <section id="skills" className="bg-muted/50">
      <div className="section-container">
        <h2 className="section-title">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}