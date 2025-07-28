import { Briefcase, Heart, Coffee, Camera, Gamepad2, Zap, User } from "lucide-react";

const ModernAbout = () => {
  return (
    <section id="about" className="fluid-section">
      <div className="fluid-container">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Sobre Mim
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            Uma mistura de método, criatividade e muito café ☕
          </p>
        </div>

        {/* Single unified card */}
        <div className="glass-card p-8 lg:p-12 hover-glow transition-smooth">
          {/* Main content */}
          <div className="space-y-8">
            {/* Who I am section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="text-fluid-2xl font-bold text-gradient">Quem eu sou</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-fluid-base font-semibold text-foreground mb-2">Experiência & Expertise</h4>
                      <p className="text-fluid-base">
                        5+ anos transformando ideias complexas em produtos digitais que realmente funcionam. 
                        Especializada em UX Research, Design Systems e Product Strategy.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-fluid-base font-semibold text-foreground mb-2">Abordagem</h4>
                      <p className="text-fluid-base">
                        Trabalho com Discovery, Design Thinking, IA e Lean UX. Acredito que dados + 
                        intuição = decisões melhores. Sempre validando com usuários reais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Values tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Empatia</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Transparência</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Colaboração</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Aprendizado contínuo</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Data-driven</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Hobbies and interests section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="text-fluid-2xl font-bold text-gradient">Meus hobbies & gostos</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-fluid-base">
                Quando não estou designando, você pode me encontrar explorando o mundo através de diferentes lentes 
                e experiências. Cada hobby alimenta minha criatividade de formas únicas.
              </p>
              
              {/* Hobby grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-smooth group">
                  <Camera className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground text-center">Fotografia</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Capturando momentos</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-smooth group">
                  <Coffee className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground text-center">Cafés especiais</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Rituais matinais</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-smooth group">
                  <Gamepad2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground text-center">Indie games</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Narrativas únicas</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-smooth group">
                  <span className="w-8 h-8 text-2xl mb-3 group-hover:scale-110 transition-transform">🧩</span>
                  <span className="text-sm font-medium text-foreground text-center">Quebra-cabeças</span>
                  <span className="text-xs text-muted-foreground text-center mt-1">Desafios mentais</span>
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