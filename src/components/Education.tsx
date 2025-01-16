import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Master 2 : Data Engineer",
    school: "Ynov Campus",
    period: "09/2023 - 07/2025",
    details: [
      "Administration de bases de données SQL/NoSQL",
      "Architecture distribuée, Data Lake, Big Data, ",
      "Machine Learning, Deep Learning, Programmation AI ",
      "ETL, Sécurité des données, Gouvernance des données",
      "Visualisation de données",
    ],
  },
  {
    degree: "Master 2 : Modélisation Statistique et Stochastique (Data Science)",
    school: "Université de Bordeaux",
    period: "09/2021 - 09/2022",
    details: [
      "Modèles linéaires et logistiques",
      "Réseaux neuronaux (Deep Learning)",
      "Traitement d'images",
      "Machine Learning",
      "Statistiques avancées",
    ],
  },
  {
    degree: "Licence 3 : Ingénierie Mathématique",
    school: "Université de Bordeaux",
    period: "09/2020 - 07/2021",
    details: [
      "Algèbre Linéaire",
      "Probabilités et Statistiques",
      "C++",
      "Python",
      "Mathématiques appliquées",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="bg-muted/50">
      <div className="section-container">
        <h2 className="section-title">Diplômes</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.degree} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">
                  {edu.degree}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {edu.school}
                </div>
                <div className="text-sm font-medium text-primary">
                  {edu.period}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {edu.details.map((detail, index) => (
                    <li key={index} className="text-muted-foreground">
                      {detail}
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
