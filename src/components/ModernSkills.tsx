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

const ModernSkills = () => {
  const skillCategories = [
    {
      title: "Hard Skills",
      icon: <Brain className="h-6 w-6 text-primary-foreground" />,
      description: "Competências técnicas especializadas",
      skills: [
        { name: "UX Research", level: 95, icon: BarChart3 },
        { name: "Interface Design", level: 90, icon: Palette },
        { name: "Design Systems", level: 95, icon: Monitor },
        { name: "Prototipagem", level: 85, icon: Smartphone },
        { name: "Data Analysis", level: 80, icon: BarChart3 },
        { name: "Product Strategy", level: 85, icon: Target },
        { name: "Information Architecture", level: 90, icon: Monitor },
        { name: "Usability Testing", level: 88, icon: Users }
      ]
    },
    {
      title: "Ferramentas",
      icon: <Code className="h-6 w-6 text-primary-foreground" />,
      description: "Stack tecnológico e softwares",
      skills: [
        { name: "Figma", level: 95, icon: Figma },
        { name: "Adobe Creative Suite", level: 85, icon: Palette },
        { name: "Sketch", level: 80, icon: Monitor },
        { name: "Miro", level: 90, icon: Lightbulb },
        { name: "Notion", level: 85, icon: Monitor },
        { name: "Hotjar", level: 75, icon: BarChart3 },
        { name: "Google Analytics", level: 80, icon: BarChart3 },
        { name: "Mixpanel", level: 75, icon: BarChart3 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6 text-primary-foreground" />,
      description: "Habilidades comportamentais",
      skills: [
        { name: "Liderança", level: 88, icon: Users },
        { name: "Comunicação", level: 92, icon: MessageCircle },
        { name: "Pensamento Crítico", level: 90, icon: Brain },
        { name: "Colaboração", level: 95, icon: Users },
        { name: "Mentoria", level: 85, icon: Lightbulb },
        { name: "Adaptabilidade", level: 90, icon: Zap },
        { name: "Gestão de Stakeholders", level: 82, icon: Target },
        { name: "Problem Solving", level: 93, icon: Brain }
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
    <section id="skills" className="fluid-section bg-gradient-to-b from-transparent to-primary-deeper/5">
      <div className="fluid-container">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Skills & Competências
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
            Arsenal completo para criar produtos digitais excepcionais
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 hover-glow transition-smooth">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills with progress bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-muted/30 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Specialties */}
        <div className="text-center mb-16">
          <h3 className="text-fluid-2xl font-bold text-foreground mb-8">
            Especialidades em Destaque
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="glass-card px-6 py-3 hover-glow transition-smooth group cursor-default"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-smooth">
                  {specialty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="glass-card p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-fluid-2xl font-bold text-foreground mb-4 flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary mr-3" />
              Minha Metodologia de Trabalho
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Como transformo problemas complexos em soluções elegantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                description: "Research, entrevistas e análise de dados para entender o problema real",
                icon: BarChart3
              },
              {
                step: "02", 
                title: "Define",
                description: "Síntese de insights e definição clara do problema a ser resolvido",
                icon: Target
              },
              {
                step: "03",
                title: "Design",
                description: "Ideação, prototipagem e iteração baseada em feedback contínuo",
                icon: Palette
              },
              {
                step: "04",
                title: "Deliver",
                description: "Implementação, teste com usuários e otimização baseada em métricas",
                icon: Zap
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <phase.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="text-xs font-bold text-primary mb-2">{phase.step}</div>
                <h4 className="font-semibold text-foreground mb-3">{phase.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

export default ModernSkills;