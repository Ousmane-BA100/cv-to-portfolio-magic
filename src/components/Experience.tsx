import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Engineer/Analyst - Alternance",
    company: "Alcatel-Lucent Enterprise",
    period: "09/2023 - 09/2025",
    location: "Colombes, 92700",
    description: [
      "Mise en œuvre de workflows ETL : Sources de données Salesforce, SAP, MySQL et fichiers plats vers MySQL,
      "Création d'un entrepôt de données avec un modèle en étoile",
      "Conception de tableaux de bord via SAP BI 4.3.",
      "Développement de sites web multipages avec Streamlit et déploiement sur AWS (CI/CD GitLab).",
      "Technologies : Pycharm, AWS (EC2, Lambda, Fargate), Pycharm, Python, JSON, MySQL Workbench", APIs (Salesforce, SAP)
    ],
  },
  {
    title: "Data Analyst/Scientist - Stage",
    company: "Stage CIC Sud-Ouest (Banque)",
    period: "04/2023 - 06/2023",
    location: "Bordeaux, 33300",
    description: [
      "Extraction de données clients inactifs via des requêtes SQL",
      "Préparation de données : nettoyage des variables, gestion des valeurs manquantes",
      "Segmentation des clients inactifs avec K-means et HAC",
      "Modélisation prédictive pour optimiser le personnel du centre d'appels",
      "Outils utilisés : R, Python, SPSS, SQL, Excel",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiences">
      <div className="section-container">
        <h2 className="section-title">Expériences Professionnelles</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  {exp.title}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {exp.company} | {exp.location}
                </div>
                <div className="text-sm font-medium text-primary">
                  {exp.period}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
