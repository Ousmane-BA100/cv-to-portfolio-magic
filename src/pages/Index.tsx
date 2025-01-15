import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger className="fixed top-4 left-4 z-50" />
          <div className="w-full">
            <Hero />
            <Skills />
            <Experience />
            <Education />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;