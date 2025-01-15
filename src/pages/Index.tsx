import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { SoftSkills } from "@/components/SoftSkills";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <SoftSkills />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
};

export default Index;