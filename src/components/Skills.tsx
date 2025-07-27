import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Code, 
  Users, 
  Lightbulb, 
  MessageCircle, 
  Target,
  Figma,
  Monitor,
  Smartphone
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Hard Skills",
      icon: <Palette className="h-6 w-6 text-primary-foreground" />,
      skills: [
        "User Experience Design",
        "Interface Design",
        "Design Systems",
        "Prototipagem Interativa",
        "User Research",
        "Information Architecture",
        "Usability Testing",
        "Design Thinking"
      ]
    },
    {
      title: "Ferramentas",
      icon: <Code className="h-6 w-6 text-primary-foreground" />,
      skills: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "InVision",
        "Miro",
        "Notion",
        "Hotjar",
        "Google Analytics"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6 text-primary-foreground" />,
      skills: [
        "Liderança de Projetos",
        "Comunicação Visual",
        "Pensamento Crítico",
        "Colaboração Multidisciplinar",
        "Mentoria",
        "Apresentações",
        "Gestão de Stakeholders",
        "Adaptabilidade"
      ]
    }
  ];

  const getRandomIcon = (index: number) => {
    const icons = [Figma, Monitor, Smartphone, Lightbulb, MessageCircle, Target];
    return icons[index % icons.length];
  };

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competências técnicas e comportamentais que uso no dia a dia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover-glow transition-smooth border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center group">
                      <div className="w-2 h-2 gradient-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-smooth">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Visual Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Principais Ferramentas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Notion", "Hotjar", "Analytics"].map((tool, index) => {
              const IconComponent = getRandomIcon(index);
              return (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-card/50 hover-glow transition-smooth group">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-smooth">
                    {tool}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;