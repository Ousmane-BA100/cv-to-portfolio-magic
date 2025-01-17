import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Challenge Machine Learning - Prédiction des prix hôteliers",
    period: "2023",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Kaggle", "Matplotlib"],
    description: "Participation à un challenge Kaggle pour prédire les prix de réservation d'hôtels en utilisant des techniques avancées de Machine Learning.",
    details: [
      "Analyse exploratoire approfondie des données hôtelières",
      "Prétraitement des données et feature engineering",
      "Implémentation de plusieurs modèles ML (Random Forest, XGBoost)",
      "Optimisation des hyperparamètres avec GridSearchCV",
      "Visualisation des résultats et analyse des performances"
    ]
  },
  {
    title: "Pipeline de Streaming de Données - ETL et dataviz",
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
    title: "Mise en place d'une plateforme In-learning",
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
    technologies: ["Python", "PySpark", "Streamlit", "GCP", "Docker", "Flask", "CI/CD"],
    description: "Analyse des trajets de taxi NYC et prédiction sur la prise des passagers et les montants des courses.",
    details: [
      "Traitement de données massives avec PySpark",
      "Analyse statistique de l'historique des trajets",
      "Développement de modèles prédictifs",
      "Visualisation des résultats avec Streamlit",
      "Deploiement sur GCP via github action (CI/CD)"
    ]
  },
  {
    title: "Classification d'images",
    period: "2022",
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
    description: "Classification d'images provenant d'un satellite.",
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
        <h2 className="section-title">
          Projets Académiques
        </h2>
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
