import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Pipeline de Streaming de Données",
    period: "2023",
    technologies: ["Python", "Apache Spark", "MongoDB", "Streamlit"],
    description: "Développement d'une pipeline de streaming de données en temps réel pour le traitement et l'analyse de flux de données massives.",
    details: [
      "Mise en place d'une architecture de streaming avec Apache Spark",
      "Intégration avec MongoDB pour le stockage des données",
      "Interface de visualisation en temps réel avec Streamlit",
      "Optimisation des performances de traitement"
    ]
  },
  {
    title: "Mise en place d'une plateforme Interne",
    period: "2023",
    technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
    description: "Mise en place d'une plateforme web pour la gestion des cours pour les étudiants.",
    details: [
      "Développement backend avec Django et PostgreSQL",
      "Système de gestion des utilisateurs et des rôles",
      "Interface d'administration pour les formateurs",
      "Suivi des progrès des étudiants"
    ]
  },
  {
    title: "Big Data avec PySpark",
    period: "2022",
    technologies: ["Python", "PySpark", "Pandas", "Matplotlib"],
    description: "Analyse des trajets de bus et prédiction du temps de trajet en charge.",
    details: [
      "Traitement de données massives avec PySpark",
      "Analyse statistique des temps de trajets",
      "Développement de modèles prédictifs",
      "Visualisation des résultats avec Matplotlib"
    ]
  },
  {
    title: "Classification d'images",
    period: "2022",
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
    description: "Classification d'éléments (big data vision) et en satellite.",
    details: [
      "Prétraitement des images avec OpenCV",
      "Développement de modèles de classification",
      "Optimisation des performances",
      "Validation des résultats"
    ]
  },
  {
    title: "Apprentissage Supervisé",
    period: "2022",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    description: "Analyse de la consommation de gaz dans divers départements français.",
    details: [
      "Analyse exploratoire des données",
      "Développement de modèles prédictifs",
      "Visualisation des résultats",
      "Optimisation des modèles"
    ]
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

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          Projets Académiques
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.period}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-text-light">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-black hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-text-light">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}