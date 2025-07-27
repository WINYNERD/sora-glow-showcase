import { Building, Calendar, GraduationCap, Award, BookOpen, Target, Zap } from "lucide-react";

const ModernEducation = () => {
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
      highlights: ["65% ↑ engagement", "40% ↓ churn rate"],
      category: "work"
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
      highlights: ["70% ↓ drop-off", "50+ empresas validadas"],
      category: "work"
    },
    {
      role: "Mestrado em Design de Interação",
      company: "USP - Universidade de São Paulo",
      period: "2019 - 2021",
      type: "Pós-graduação",
      description: "Pesquisa em design centrado no usuário e interfaces inteligentes",
      responsibilities: [
        "Dissertação sobre design de sistemas de IA",
        "Pesquisa em UX para produtos de machine learning",
        "Publicação de 3 artigos acadêmicos"
      ],
      highlights: ["Magna Cum Laude", "3 publicações"],
      category: "education"
    },
    {
      role: "Bacharelado em Design Gráfico",
      company: "PUC-SP",
      period: "2015 - 2019",
      type: "Graduação",
      description: "Formação sólida em fundamentos do design visual e comunicação",
      responsibilities: [
        "Projeto de conclusão em Design de Produto Digital",
        "Estágio em agência de publicidade",
        "Monitoria em disciplinas de tipografia"
      ],
      highlights: ["Projeto premiado", "CRA 8.7"],
      category: "education"
    }
  ];

  const courses = [
    "Google UX Design Certificate - 2022",
    "Design Systems Avançado - Design+Code - 2021",
    "Data-Driven Design - Nielsen Norman Group - 2021",
    "AI for Designers - MIT xPRO - 2020"
  ];

  return (
    <section id="experience" className="fluid-section bg-gradient-to-b from-transparent to-primary/5">
      <div className="fluid-container">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
            Experiências & Educação
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl">
            Minha jornada profissional e acadêmica
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 gradient-primary rounded-full"></div>
              
              {/* Content */}
              <div className="ml-16">
                <div className="glass-card p-6 hover-float transition-smooth">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {exp.category === 'education' ? (
                          <GraduationCap className="h-5 w-5 text-primary mr-2" />
                        ) : (
                          <Building className="h-5 w-5 text-primary mr-2" />
                        )}
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-fluid-xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="mt-3 lg:mt-0 lg:ml-6">
                      <div className="flex items-center text-sm text-muted-foreground bg-card/50 px-3 py-2 rounded-xl">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                        <Award className="h-3 w-3" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      Principais Responsabilidades
                    </h4>
                    <div className="grid gap-2">
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

        {/* Courses */}
        <div className="mt-16">
          <div className="glass-card p-6">
            <h3 className="text-fluid-xl font-bold text-foreground mb-4 flex items-center">
              <BookOpen className="h-5 w-5 text-primary mr-3" />
              Cursos e Certificações Relevantes
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-card/30 rounded-lg hover-glow transition-smooth"
                >
                  <div className="w-2 h-2 gradient-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEducation;