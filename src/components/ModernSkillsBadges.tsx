import { 
  Palette, 
  Code, 
  Users, 
  Brain,
  Lightbulb,
  MessageCircle,
  Zap,
  Target,
  BarChart3,
  Figma,
  Monitor,
  Smartphone
} from "lucide-react";

const ModernSkillsBadges = () => {
  const skillCategories = [
    {
      title: "Hard Skills",
      icon: <Brain className="h-5 w-5" />,
      description: "Competências técnicas especializadas",
      skills: [
        "UX Research", "Interface Design", "Design Systems", "Prototipagem", 
        "Data Analysis", "Product Strategy", "Information Architecture", "Usability Testing"
      ]
    },
    {
      title: "Ferramentas",
      icon: <Code className="h-5 w-5" />,
      description: "Stack tecnológico e softwares",
      skills: [
        "Figma", "Adobe Creative Suite", "Sketch", "Miro", 
        "Notion", "Hotjar", "Google Analytics", "Mixpanel"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      description: "Habilidades comportamentais",
      skills: [
        "Liderança", "Comunicação", "Pensamento Crítico", "Colaboração", 
        "Mentoria", "Adaptabilidade", "Gestão de Stakeholders", "Problem Solving"
      ]
    }
  ];

  const specialties = [
    "Design Systems Architecture",
    "AI/ML Product Design", 
    "Data-Driven Design",
    "Design Leadership",
    "User Research & Testing",
    "Product Strategy",
    "Growth Design",
    "Design Operations"
  ];

  return (
    <section id="skills" className="fluid-section bg-gradient-to-b from-transparent to-primary/5">
      <div className="fluid-container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Skills & Competências
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            Arsenal completo para criar produtos digitais excepcionais
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 hover-glow transition-smooth">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills as badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium hover-glow transition-smooth cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialties */}
        <div className="mb-12">
          <h3 className="text-fluid-2xl font-bold text-foreground mb-8">
            Especialidades em Destaque
          </h3>
          <div className="flex flex-wrap gap-3">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="glass-card px-4 py-3 hover-glow transition-smooth group cursor-default"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-smooth">
                  {specialty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="glass-card p-6 lg:p-8">
          <div className="mb-8">
            <h3 className="text-fluid-2xl font-bold text-foreground mb-4 flex items-center">
              <Zap className="h-6 w-6 text-primary mr-3" />
              Minha Metodologia de Trabalho
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              Como transformo problemas complexos em soluções elegantes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Discover",
                description: "Research, entrevistas e análise de dados para entender o problema real",
                icon: BarChart3
              },
              {
                step: "02", 
                title: "IA",
                description: "Aplicação de inteligência artificial para otimizar insights e soluções",
                icon: Brain
              },
              {
                step: "03", 
                title: "Define",
                description: "Síntese de insights e definição clara do problema a ser resolvido",
                icon: Target
              },
              {
                step: "04",
                title: "Design",
                description: "Ideação, prototipagem e iteração baseada em feedback contínuo",
                icon: Palette
              },
              {
                step: "05",
                title: "Deliver",
                description: "Implementação, teste com usuários e otimização baseada em métricas",
                icon: Zap
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-smooth">
                  <phase.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-xs font-bold text-primary mb-2">{phase.step}</div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">{phase.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsBadges;