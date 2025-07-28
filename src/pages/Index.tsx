import AppSidebar from "@/components/AppSidebar";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import ModernExperience from "@/components/ModernExperience";
import ModernEducation from "@/components/ModernEducation";
import ModernBlog from "@/components/ModernBlog";
import ModernProjects from "@/components/ModernProjects";
import ModernSkillsBadges from "@/components/ModernSkillsBadges";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="transition-smooth lg:ml-72 ml-0">
        <ModernHero />
        <ModernAbout />
        <ModernProjects />
        <ModernEducation />
        <ModernSkillsBadges />
        <ModernBlog />
        <ModernContact />
      </main>
    </div>
  );
};

export default Index;
