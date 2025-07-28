import { Lightbulb, Users, Zap, Target } from "lucide-react";

const ModernAbout = () => {
  return (
    <section id="about" className="fluid-section">
      <div className="fluid-container">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-fluid-4xl font-bold mb-6">
            Sobre <span className="text-gradient">mim</span>
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Com mais de 8 anos de experiência, especializo-me em criar produtos digitais 
            que realmente fazem a diferença na vida das pessoas.
          </p>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Journey section */}
          <div className="glass-card p-8 lg:p-12">
            <h3 className="text-fluid-2xl font-bold text-foreground mb-6">Minha jornada</h3>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-fluid-base">
                Comecei minha carreira como designer gráfico, mas rapidamente 
                me apaixonei pelo design de produtos digitais. Trabalhei em startups 
                e grandes corporações, sempre focada em criar experiências que 
                sejam não apenas bonitas, mas funcionalmente superiores.
              </p>
              
              <p className="text-fluid-base">
                Minha abordagem combina pesquisa profunda com experimentação 
                rápida, garantindo que cada solução seja tanto inovadora quanto 
                viável.
              </p>
            </div>

            {/* Skills tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Product Strategy</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">User Research</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">UI/UX Design</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Prototyping</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Design Systems</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Figma</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Sketch</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Adobe Creative Suite</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">User Testing</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">A/B Testing</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Analytics</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">Agile Methodology</span>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 lg:p-8 hover-glow transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-fluid-xl font-bold text-foreground mb-3">Inovação</h4>
              <p className="text-muted-foreground leading-relaxed">
                Busco constantemente novas maneiras de resolver problemas complexos
              </p>
            </div>

            <div className="glass-card p-6 lg:p-8 hover-glow transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-fluid-xl font-bold text-foreground mb-3">Colaboração</h4>
              <p className="text-muted-foreground leading-relaxed">
                Acredito que os melhores produtos nascem do trabalho em equipe
              </p>
            </div>

            <div className="glass-card p-6 lg:p-8 hover-glow transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-fluid-xl font-bold text-foreground mb-3">Agilidade</h4>
              <p className="text-muted-foreground leading-relaxed">
                Prototipo rapidamente para validar ideias e iterar soluções
              </p>
            </div>

            <div className="glass-card p-6 lg:p-8 hover-glow transition-smooth">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h4 className="text-fluid-xl font-bold text-foreground mb-3">Foco no usuário</h4>
              <p className="text-muted-foreground leading-relaxed">
                Todas as decisões de design são baseadas em dados e feedback real
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;