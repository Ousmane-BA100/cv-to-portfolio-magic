import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";

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
      </main>
    </div>
  );
};

export default Index;