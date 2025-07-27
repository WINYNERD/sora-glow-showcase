import AppSidebar from "@/components/AppSidebar";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import ModernEducation from "@/components/ModernEducation";
import ModernProjects from "@/components/ModernProjects";
import ModernSkillsBadges from "@/components/ModernSkillsBadges";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AppSidebar />
      <main className="ml-0 lg:ml-72 transition-smooth">
        <ModernHero />
        <ModernAbout />
        <ModernEducation />
        <ModernProjects />
        <ModernSkillsBadges />
        <ModernContact />
      </main>
    </div>
  );
};

export default Index;
