import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Product Designer",
      company: "TechCorp Solutions",
      period: "2022 - Presente",
      deliverables: [
        "Redesign completo do app principal (+ 40% retenção)",
        "Criação de design system usado por 3 squads",
        "Liderança de pesquisas UX com +1000 usuários",
        "Mentoria de 2 designers júnior"
      ]
    },
    {
      role: "Product Designer",
      company: "StartupLab",
      period: "2020 - 2022",
      deliverables: [
        "Design de 0 a 1 de plataforma SaaS B2B",
        "Implementação de metodologia Design Sprint",
        "Redução de 60% no tempo de onboarding",
        "Aumento de 25% na conversão de trials"
      ]
    },
    {
      role: "UX/UI Designer",
      company: "DigitalAgency",
      period: "2019 - 2020",
      deliverables: [
        "Design de +15 websites responsivos",
        "Criação de identidades visuais completas",
        "Prototipagem interativa para validação",
        "Workshops de UX para clientes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha jornada criando produtos digitais impactantes
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover-glow transition-smooth border-border/50">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.role}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    <Calendar className="h-3 w-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Principais Entregas:</h4>
                  <ul className="space-y-2">
                    {exp.deliverables.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-muted-foreground">
                        <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;