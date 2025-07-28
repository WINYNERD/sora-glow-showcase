import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernHero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-dark/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-deeper/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="fluid-container relative z-10">
        <div className="fluid-grid items-center min-h-[80vh]">
          {/* Main content */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Disponível para novos projetos
              </span>
            </div>

            {/* Main heading */}
            <div className="mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-fluid-5xl font-bold leading-tight mb-4">
                Oi! Eu sou{" "}
                <span className="text-gradient relative">
                  Anna Machado, Product Designer
                  <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-primary rounded-full opacity-60"></div>
                </span>{" "}
                que une design, dados e tecnologia para resolver problemas reais.
              </h1>
            </div>

            {/* Description */}
            <p className="text-fluid-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{animationDelay: '0.4s'}}>
              Especializada em transformar ideias complexas em experiências digitais 
              que impactam pessoas e geram resultados mensuráveis para o negócio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="gradient-primary hover-lift transition-bounce text-primary-foreground px-8 py-4 text-lg font-medium group"
              >
                Ver meus projetos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="glass-card hover-glow transition-smooth px-8 py-4 text-lg font-medium group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <MousePointer2 className="mr-2 h-5 w-5 group-hover:rotate-12 transition-smooth" />
                Bora conversar?
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="text-fluid-3xl font-bold text-gradient mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-fluid-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projetos entregues</div>
              </div>
              <div className="text-center">
                <div className="text-fluid-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Empresas impactadas</div>
              </div>
            </div>
          </div>

          {/* Decorative side content */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-32 h-32 glass-card rounded-3xl p-6 animate-float">
                <div className="w-full h-full gradient-primary rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="absolute top-40 right-20 w-24 h-24 glass-card rounded-2xl p-4 animate-float" style={{animationDelay: '1s'}}>
                <div className="w-full h-full bg-primary/20 rounded-xl"></div>
              </div>
              
              <div className="absolute bottom-20 right-10 w-28 h-28 glass-card rounded-3xl p-5 animate-float" style={{animationDelay: '3s'}}>
                <div className="w-full h-full gradient-glow rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;