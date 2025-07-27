import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FinanceApp",
      description: "Redesign completo de aplicativo financeiro com foco em simplicidade e transparência. Resultou em 40% de aumento na retenção de usuários.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      tags: ["Mobile Design", "FinTech", "User Research"],
      link: "#"
    },
    {
      title: "EcommerceX",
      description: "Plataforma e-commerce B2B com dashboard completo para vendedores. Simplificou o processo de vendas em 60% e aumentou conversões.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Web Design", "Dashboard", "B2B"],
      link: "#"
    },
    {
      title: "HealthTech Portal",
      description: "Portal médico para agendamentos e telemedicina. Design centrado em acessibilidade para diferentes faixas etárias.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Healthcare", "Accessibility", "Portal"],
      link: "#"
    },
    {
      title: "Design System",
      description: "Sistema de design completo usado por múltiplas equipes. Documentação interativa e componentes reutilizáveis.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["Design System", "Documentation", "Components"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos trabalhos que mais me orgulho de ter criado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover-glow transition-smooth border-border/50 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button size="sm" className="gradient-primary">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group/btn">
                  Ver Mais
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;