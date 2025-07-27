import AppSidebar from "@/components/AppSidebar";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import ModernExperience from "@/components/ModernExperience";
import ModernProjects from "@/components/ModernProjects";
import ModernSkills from "@/components/ModernSkills";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AppSidebar />
      <main className="ml-0 lg:ml-72 transition-smooth">
        <ModernHero />
        <ModernAbout />
        <ModernExperience />
        <ModernProjects />
        <ModernSkills />
        <ModernContact />
      </main>
    </div>
  );
};

export default Index;
