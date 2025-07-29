import { Briefcase, Heart, Coffee, Camera, Gamepad2, Zap, User, Star, Plane, PawPrint, Clapperboard } from "lucide-react";

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
              Tenho 13 anos de experiência em design digital e, nos últimos 8 anos, me dedico a criar produtos digitais. Comecei minha carreira como web designer, mas, com o tempo, me apaixonei pelo universo de produto, onde encontrei meu lugar unindo criatividade, dados e estratégia.<br></br><br></br>

              Sou formada em Publicidade e Marketing, o que me trouxe uma visão de negócio, e sou pós-graduada em tecnologia. Ao longo da minha jornada, desenvolvi expertise em UX, UI e trabalhei com dados para guiar decisões e gerar impacto real.<br></br><br></br>

              Hoje, atuo como Product Designer estratégica, transformando insights em soluções que melhoram a experiência do usuário e trazem resultados para o negócio.

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
              Acredito que, na vida e no trabalho, tudo precisa ter propósito e gerar impacto real. Busco criar conexões verdadeiras em tudo que faço — com pessoas, produtos ou ideias.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Empatia</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Transparência</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Colaboração</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Aprendizado contínuo</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Data-driven</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Curiosidade</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Foco em resultados</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Criatividade estratégica</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Sinceridade</span>
            </div>
          </div>

          {/* Hobby cards */}
          <div className="glass-card p-6 hover-glow transition-smooth group">
            <Plane className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-foreground mb-1">Viajar</h4>
            <p className="text-xs mb-3 text-muted-foreground">Amo descobrir novos lugares e culturas</p>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Hobbies</span>
          </div>

          <div className="glass-card p-6 hover-glow transition-smooth group">
            <PawPrint className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-foreground mb-1">Gateira</h4>
            <p className="text-xs mb-3 text-muted-foreground">tenho 2 gatos. eu juro, eles são lindos</p>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Curiosidade</span>
          </div>

          <div className="glass-card p-6 hover-glow transition-smooth group">
            <Gamepad2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-foreground mb-1">Jogos</h4>
            <p className="text-xs mb-3 text-muted-foreground">Adoro uma gameplayzinha</p>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Hobbies</span>
          </div>

          <div className="glass-card p-6 hover-glow transition-smooth group">
            <Clapperboard className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="text-sm font-medium text-foreground mb-1">Séries & Filmes</h4>
            <p className="text-xs mb-3 text-muted-foreground">Sempre explorando novas histórias</p>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Hobbies</span>
          </div>

          {/* Quote/Philosophy card */}
          <div className="glass-card p-6 hover-glow transition-smooth md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <h3 className="text-fluid-xl font-bold text-gradient">Eu lírico</h3>
            </div>
            <blockquote className="text-muted-foreground leading-relaxed text-fluid-base italic">
              Quero ser uma peça essencial no motor que faz produtos digitais acontecerem, criando conexões que alcançam milhões de pessoas.
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernAbout;