import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const hobbiesCategories = [
  {
    title: "Loisirs Créatifs",
    skills: [
      { name: "Cuisine", value: 85 },
      { name: "Lecture", value: 80 },
    ]
  },
  {
    title: "Sport et Bien-être",
    skills: [
      {name: "Basic-fit", value: 90 },
      { name: "Basket", value: 85 },
      {name: "Foot", value: 70 },
    ]
  },
  {
    title: "Culture et Actualités",
    skills: [
      { name: "Veille technologique", value: 95 },
      { name: "Actualité dans le monde", value: 85 },
      { name: "Podcasts & musique", value: 90 },
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

export function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">
          Hobbies
        </h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {hobbiesCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm font-medium">{skill.value}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                          <div 
                            className="bg-primary h-2.5 rounded-full transition-all duration-500"
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
