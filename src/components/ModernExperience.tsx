import { Building, Calendar, TrendingUp, Users, Target, Zap } from "lucide-react";

const ModernExperience = () => {
  const experiences = [
    {
      role: "Senior Product Designer",
      company: "TechFlow AI",
      period: "2022 - Presente",
      type: "Full-time",
      description: "Liderando design de produtos de IA para otimização de processos empresariais",
      responsibilities: [
        "Redesign completo da plataforma principal (+65% engagement)",
        "Criação de design system para 4 squads de produto",
        "Liderança de research com +2000 usuários B2B",
        "Mentoria de 3 designers e 1 UX researcher",
        "Implementação de metodologia data-driven design"
      ],
      highlights: ["65% ↑ engagement", "40% ↓ churn rate", "4 squads impactadas"],
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Product Designer",
      company: "DataVision Startup",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Design de produtos SaaS para análise de dados e business intelligence",
      responsibilities: [
        "Design 0 to 1 de dashboard analytics complexo",
        "Research e validação com 50+ empresas do mercado",
        "Criação de linguagem visual e componentes reutilizáveis",
        "Colaboração direta com founders e equipe de growth",
        "Otimização de onboarding (redução de 70% no abandono)"
      ],
      highlights: ["70% ↓ drop-off", "85% satisfação NPS", "50+ empresas validadas"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      role: "UX/UI Designer",
      company: "Creative Studio Lab",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Design de produtos digitais para clientes de diversos segmentos",
      responsibilities: [
        "Design de 20+ produtos digitais (web e mobile)",
        "Workshops de UX para times de produto",
        "Prototipagem e testes de usabilidade",
        "Criação de identidades visuais integradas",
        "Metodologia ágil e sprint design"
      ],
      highlights: ["20+ produtos", "15 clientes", "metodologia ágil"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="fluid-section bg-gradient-to-b from-transparent to-primary-deeper/5">
      <div className="fluid-container">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
            Experiência Profissional
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
            Minha jornada criando produtos que importam
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline line */}
              <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-12 w-4 h-4 gradient-primary rounded-full shadow-glow"></div>
              
              {/* Content */}
              <div className="ml-20">
                <div className="glass-card p-8 hover-float transition-slow">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-fluid-2xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium mr-4">{exp.company}</span>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-lg">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <div className="flex items-center text-sm text-muted-foreground bg-white/5 px-4 py-2 rounded-xl">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium">
                        <TrendingUp className="h-3 w-3" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Target className="h-5 w-5 text-primary mr-2" />
                      Principais Responsabilidades
                    </h4>
                    <div className="grid gap-3">
                      {exp.responsibilities.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 gradient-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills developed */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-fluid-2xl font-bold text-foreground mb-6 flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary mr-3" />
              Skills Desenvolvidas ao Longo da Jornada
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Design Systems", "UX Research", "Product Strategy", "Data Analysis",
                "Team Leadership", "Stakeholder Management", "Agile Methodology", 
                "User Testing", "Prototyping", "Design Ops", "Growth Design", "AI/ML Design"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/5 text-muted-foreground rounded-xl text-sm font-medium hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernExperience;