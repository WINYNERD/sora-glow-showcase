import { Briefcase, Coffee, Camera, Gamepad2, Zap, Building } from "lucide-react";

const ModernAbout = () => {
  return (
    <section id="about" className="fluid-section">
      <div className="fluid-container">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
            Perfil
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl">
            Uma mistura de método, criatividade e muito café ☕
          </p>
        </div>

        {/* Main layout with photo and content */}
        <div className="glass-card p-8 lg:p-12 hover-glow transition-smooth">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Photo section */}
            <div className="lg:col-span-4">
              <div className="aspect-square gradient-primary rounded-2xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-medium">Foto</span>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className="lg:col-span-8 space-y-8">
              {/* Experience and expertise */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-gradient">Experiência e expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  5+ anos transformando ideias complexas em produtos digitais que realmente funcionam. 
                  Especializada em UX Research, Design Systems e Product Strategy.
                </p>
              </div>

              {/* Approach */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-gradient">Abordagem</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Trabalho com Discovery, Design Thinking, IA e Lean UX. Acredito que dados + 
                  intuição = decisões melhores. Sempre validando com usuários reais.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-xl font-bold text-gradient mb-4">Meus valores</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Prototipagem</span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Prototipagem</span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Prototipagem</span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Prototipagem</span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Prototipagem</span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Prototipagem</span>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">Prototipagem</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies section */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <h3 className="text-xl font-bold text-gradient mb-6">Meus hobbies & gostos</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Quando não estou designando, você pode me encontrar explorando o mundo através de diferentes lentes 
              e experiências. Cada hobby alimenta minha criatividade de formas únicas.
            </p>
            
            {/* Hobby grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-smooth group">
                <Camera className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground text-center">Fotografia</span>
                <span className="text-xs text-muted-foreground text-center mt-1">Capturando momentos</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-smooth group">
                <Coffee className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground text-center">Cafés especiais</span>
                <span className="text-xs text-muted-foreground text-center mt-1">Rituais matinais</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-smooth group">
                <Gamepad2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground text-center">Indie games</span>
                <span className="text-xs text-muted-foreground text-center mt-1">Narrativas únicas</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-smooth group">
                <span className="w-8 h-8 text-2xl mb-3 group-hover:scale-110 transition-transform">🧩</span>
                <span className="text-sm font-medium text-foreground text-center">Quebra-cabeças</span>
                <span className="text-xs text-muted-foreground text-center mt-1">Desafios mentais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;