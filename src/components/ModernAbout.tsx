import { Briefcase, Heart, Coffee, Camera, Gamepad2, Zap, User, Star } from "lucide-react";

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

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
          
          {/* Main card - Experiência */}
          <div className="glass-card p-6 hover-glow transition-smooth md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="text-fluid-xl font-bold text-gradient">Experiência & Expertise</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-fluid-base mb-4">
              5+ anos transformando ideias complexas em produtos digitais que realmente funcionam. 
              Especializada em UX Research, Design Systems e Product Strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed text-fluid-base">
              Trabalho com Discovery, Design Thinking, IA e Lean UX. Acredito que dados + 
              intuição = decisões melhores. Sempre validando com usuários reais.
            </p>
          </div>

          {/* Values card */}
          <div className="glass-card p-6 hover-glow transition-smooth md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Star className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="text-fluid-xl font-bold text-gradient">Valores</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-fluid-base mb-4">
              Acredito que design é sobre pessoas, conexões e impacto positivo. 
              Meus valores guiam cada decisão e cada projeto que toco.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Empatia</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Transparência</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Colaboração</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Aprendizado contínuo</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Data-driven</span>
            </div>
          </div>

          {/* Hobby cards */}
          <div className="glass-card p-6 hover-glow transition-smooth group">
            <Camera className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-foreground mb-1">Fotografia</h4>
            <p className="text-xs text-muted-foreground">Capturando momentos únicos</p>
          </div>

          <div className="glass-card p-6 hover-glow transition-smooth group">
            <Coffee className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-foreground mb-1">Cafés especiais</h4>
            <p className="text-xs text-muted-foreground">Rituais matinais</p>
          </div>

          <div className="glass-card p-6 hover-glow transition-smooth group">
            <Gamepad2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-foreground mb-1">Indie games</h4>
            <p className="text-xs text-muted-foreground">Narrativas únicas</p>
          </div>

          <div className="glass-card p-6 hover-glow transition-smooth group">
            <span className="w-8 h-8 text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">🧩</span>
            <h4 className="text-sm font-medium text-foreground mb-1">Quebra-cabeças</h4>
            <p className="text-xs text-muted-foreground">Desafios mentais</p>
          </div>

          {/* Quote/Philosophy card */}
          <div className="glass-card p-6 hover-glow transition-smooth md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="text-fluid-xl font-bold text-gradient">Filosofia</h3>
            </div>
            <blockquote className="text-muted-foreground leading-relaxed text-fluid-base italic">
              "Quando não estou designando, você pode me encontrar explorando o mundo através de diferentes lentes 
              e experiências. Cada hobby alimenta minha criatividade de formas únicas."
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernAbout;