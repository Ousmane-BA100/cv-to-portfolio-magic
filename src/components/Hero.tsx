import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ousmane BA
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Data Engineer / Analytics
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Passionné par l'analyse de données et le machine learning, je transforme les données en insights actionnables.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <a href="#contact">Me contacter</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#experiences">Voir mes expériences</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}