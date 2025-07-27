import { Briefcase, Heart, Coffee, Camera, Gamepad2, Zap } from "lucide-react";

const ModernAbout = () => {
  return (
    <section id="about" className="fluid-section">
      <div className="fluid-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
            Sobre Mim
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
            Uma mistura de método, criatividade e muito café ☕
          </p>
        </div>

        <div className="fluid-grid gap-12 lg:gap-20">
          {/* Professional Side */}
          <div className="col-span-12 lg:col-span-6">
            <div className="glass-card p-8 lg:p-12 hover-glow transition-smooth h-full">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mr-4">
                  <Briefcase className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-fluid-2xl font-bold text-foreground">Lado Profissional</h3>
                  <p className="text-muted-foreground">Séria e focada em resultados</p>
                </div>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Zap className="w-5 h-5 text-primary mr-2" />
                    Experiência & Expertise
                  </h4>
                  <p>
                    5+ anos transformando ideias complexas em produtos digitais que realmente funcionam. 
                    Especializada em UX Research, Design Systems e Product Strategy, com foco especial 
                    em produtos data-driven e IA.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Métodos & Abordagem</h4>
                  <p>
                    Trabalho com Design Thinking, Lean UX e Jobs-to-be-Done. Acredito que dados + 
                    intuição = decisões melhores. Sempre validando hipóteses com usuários reais 
                    antes de partir para a execução.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Filosofia de Design</h4>
                  <p>
                    "O melhor design é invisível". Busco simplicidade que funciona, acessibilidade 
                    que inclui e performance que encanta. Design não é só sobre pixels bonitos - 
                    é sobre resolver problemas reais de pessoas reais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Side */}
          <div className="col-span-12 lg:col-span-6">
            <div className="glass-card p-8 lg:p-12 hover-glow transition-smooth h-full">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mr-4">
                  <Heart className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-fluid-2xl font-bold text-foreground">Lado Pessoal</h3>
                  <p className="text-muted-foreground">Humana e curiosa por natureza</p>
                </div>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Valores que me movem</h4>
                  <p>
                    Empatia em primeiro lugar - sempre. Acredito que tecnologia deve amplificar 
                    nossa humanidade, não substituí-la. Transparência, colaboração e aprendizado 
                    contínuo são meus pilares.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Curiosidades nerds</h4>
                  <p>
                    Sou fascinada por psicologia comportamental e como micro-interações podem 
                    influenciar grandes decisões. Leio papers de neurociência no tempo livre 
                    (sim, eu sei que é estranho 🤓).
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Quando não estou designando</h4>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                      <Camera className="w-5 h-5 text-primary" />
                      <span className="text-sm">Fotografia urbana</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                      <Coffee className="w-5 h-5 text-primary" />
                      <span className="text-sm">Cafés especiais</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                      <Gamepad2 className="w-5 h-5 text-primary" />
                      <span className="text-sm">Indie games</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
                      <span className="w-5 h-5 text-primary flex items-center justify-center text-xs">🧩</span>
                      <span className="text-sm">Quebra-cabeças</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 lg:p-12 max-w-3xl mx-auto">
            <blockquote className="text-fluid-xl font-medium text-foreground italic leading-relaxed">
              "Design é sobre fazer escolhas conscientes que tornam a vida das pessoas 
              um pouquinho melhor. É sobre empatar primeiro, questionar depois e criar sempre."
            </blockquote>
            <cite className="text-muted-foreground mt-4 block">— Luna, em um domingo qualquer pensando sobre design</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;