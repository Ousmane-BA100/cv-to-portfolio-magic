import { motion } from "framer-motion";
import { MapPin, User, Car, Flag } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-6"
        >
          <h1 className="text-6xl font-bold text-gray-900">
            Ousmane BA
          </h1>
          
          <h2 className="text-3xl text-gray-700">
            Data Engineer / Analytics
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl">
            Passionné par la gestion et l'optimisation des données, je conçois et maintiens des infrastructures
            performantes pour transformer des données brutes en insights exploitables. Expert en création de pipelines robustes,
            modélisation de données, et intégration de solutions analytiques, je mets la puissance des données au service des décisions stratégiques des entreprises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <InfoCard icon={<User className="w-5 h-5" />} text="28 ans" />
            <InfoCard icon={<MapPin className="w-5 h-5" />} text="Paris, France" />
            <InfoCard icon={<Car className="w-5 h-5" />} text="Permis B" />
            <InfoCard icon={<Flag className="w-5 h-5" />} text="Sénégalais" />
          </div>

          <div className="flex gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/CV_Ousmane.pdf"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Me contacter
            </motion.a>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[400px] h-[400px] mx-auto"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-black shadow-2xl">
              <img
                src="/lovable-uploads/ea77dc57-d261-45b9-8a8f-63a4c6e8365c.png"
                alt="Ousmane BA"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: [0, 10, 0] 
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <p className="text-2xl font-heading italic text-gray-800">
              "Turning Data into Insights, Code into Innovation"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-full">
      {icon}
      <span>{text}</span>
    </div>
  );
}