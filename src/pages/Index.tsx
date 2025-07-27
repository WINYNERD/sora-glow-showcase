import AppSidebar from "@/components/AppSidebar";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import ModernExperience from "@/components/ModernExperience";
import ModernEducation from "@/components/ModernEducation";
import ModernProjects from "@/components/ModernProjects";
import ModernSkillsBadges from "@/components/ModernSkillsBadges";
import ModernContact from "@/components/ModernContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="lg:ml-16 xl:ml-72 transition-smooth">
        <ModernHero />
        <ModernAbout />
        
        {/* Experience and Education in 2 columns */}
        <section id="experience" className="fluid-section">
          <div className="fluid-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <ModernExperience />
              <ModernEducation />
            </div>
          </div>
        </section>
        
        <ModernProjects />
        <ModernSkillsBadges />
        <ModernContact />
      </main>
    </div>
  );
};

export default Index;
