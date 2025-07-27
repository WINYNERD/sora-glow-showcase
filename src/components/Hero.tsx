import { ArrowDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name and title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Alex Silva
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Product Designer
            </h2>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Transformo ideias complexas em experiências digitais intuitivas e impactantes. 
            Especialista em design centrado no usuário com foco em resultados de negócio.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="gradient-primary hover-glow transition-smooth text-primary-foreground px-8 py-6 text-lg font-medium group"
          >
            <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Ver Projetos
          </Button>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;