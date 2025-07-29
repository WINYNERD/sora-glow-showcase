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
        "Interface Design","Product Strategy","Design Systems",
        "Prototipagem","Information Architecture",
        "Data Analysis","Product Analytics","A/B Testing",
        "UX Writing","Usability","Testing AI-Driven","Design UX Research"
      ]
    },
    {
      title: "Ferramentas",
      icon: <Code className="h-5 w-5" />,
      description: "Stack tecnológico e softwares",
      skills: [
        "Figma","Hotjar","Amplitude","Google Analytics",
        "LaunchDarkly", "Stitch AI","Lovable","Confluence","Jira","Miro","XD","Notion",
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-5 w-5" />,
      description: "Habilidades comportamentais",
      skills: [
        "Liderança", "Comunicação", "Pensamento Estratégico", "Colaboração",
        "Multidisciplinar", "Adaptabilidade", "Gestão de Stakeholders", "Problem Solving","Data-Driven",
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

      </div>
    </section>
  );
};

export default ModernSkillsBadges;