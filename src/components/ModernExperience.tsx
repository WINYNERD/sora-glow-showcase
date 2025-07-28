import { Building, Calendar, Target } from "lucide-react";

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
        "Mentoria de 3 designers e 1 UX researcher"
      ],
      highlights: ["65% ↑ engagement", "40% ↓ churn rate"]
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
        "Criação de linguagem visual e componentes reutilizáveis"
      ],
      highlights: ["70% ↓ drop-off", "50+ empresas validadas"]
    },
    {
      role: "UX Designer",
      company: "Digital Agency",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Design de interfaces e experiências para produtos digitais diversos",
      responsibilities: [
        "Design de landing pages e e-commerces",
        "Prototipagem de alta fidelidade",
        "Testes de usabilidade com usuários"
      ],
      highlights: ["20+ projetos", "95% satisfação"]
    }
  ];

  return (
    <section id="experience" className="fluid-section">
      <div className="fluid-container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-3">
            Experiência Profissional
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            Minha trajetória no design de produtos
          </p>
        </div>

      {/* Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-px bg-border"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-4 h-4 gradient-primary rounded-full"></div>
            
            {/* Content */}
            <div className="ml-16">
              <div className="glass-card p-6 hover-glow transition-smooth">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Building className="h-4 w-4 text-primary mr-2" />
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-fluid-xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  <div className="mt-3 sm:mt-0 sm:ml-6">
                    <div className="flex items-center text-xs text-muted-foreground bg-card/50 px-3 py-2 rounded-xl">
                      <Calendar className="h-3 w-3 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Target className="h-4 w-4 text-primary mr-2" />
                    Principais Responsabilidades
                  </h4>
                  <div className="space-y-2">
                    {exp.responsibilities.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ModernExperience;