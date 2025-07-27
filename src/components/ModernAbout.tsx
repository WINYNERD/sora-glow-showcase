import { Briefcase, Heart, Coffee, Camera, Gamepad2, Zap } from "lucide-react";

const ModernAbout = () => {
  return (
    <section id="about" className="fluid-section">
      <div className="fluid-container">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
            Sobre Mim
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl">
            Uma mistura de método, criatividade e muito café ☕
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {/* Professional Side */}
          <div className="glass-card p-6 lg:p-8 hover-glow transition-smooth">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">Lado Profissional</h3>
                <p className="text-muted-foreground">Séria e focada em resultados</p>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2 flex items-center">
                  <Zap className="w-4 h-4 text-primary mr-2" />
                  Experiência & Expertise
                </h4>
                <p className="text-sm lg:text-base">
                  5+ anos transformando ideias complexas em produtos digitais que realmente funcionam. 
                  Especializada em UX Research, Design Systems e Product Strategy, com foco especial 
                  em produtos data-driven e IA.
                </p>
              </div>
              
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Métodos & Abordagem</h4>
                <p className="text-sm lg:text-base">
                  Trabalho com Discovery, Design Thinking, IA, Lean UX e Jobs-to-be-Done. Acredito que dados + 
                  intuição = decisões melhores. Sempre validando hipóteses com usuários reais 
                  antes de partir para a execução.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Side */}
          <div className="glass-card p-6 lg:p-8 hover-glow transition-smooth">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">Lado Pessoal</h3>
                <p className="text-muted-foreground">Humana e curiosa por natureza</p>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Valores que me movem</h4>
                <p className="text-sm lg:text-base">
                  Empatia em primeiro lugar - sempre. Acredito que tecnologia deve amplificar 
                  nossa humanidade, não substituí-la. Transparência, colaboração e aprendizado 
                  contínuo são meus pilares.
                </p>
              </div>
              
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Quando não estou designando</h4>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg text-xs lg:text-sm">
                    <Camera className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="truncate">Fotografia</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg text-xs lg:text-sm">
                    <Coffee className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="truncate">Cafés especiais</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg text-xs lg:text-sm">
                    <Gamepad2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="truncate">Indie games</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg text-xs lg:text-sm">
                    <span className="w-4 h-4 text-primary flex items-center justify-center text-xs flex-shrink-0">🧩</span>
                    <span className="truncate">Quebra-cabeças</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;