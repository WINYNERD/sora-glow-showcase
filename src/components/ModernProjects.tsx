import { useState } from "react";
import { ExternalLink, ArrowRight, Sparkles, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ModernProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(4);

  const projects = [
    {
      id: "ambiente-de-estudo-qconcursos",
      slug: "ambiente-de-estudo-qconcursos",
      title: "Ambiente de Estudo – Qconcursos",
      description: "Nova experiência no ambiente de estudo integrado com teoria, exercícios e videoaulas",
      image: "/projetocapa1.png",
      category: "Educacional • Web",
      // duration: "4 meses",
      impact: "Aumento no engajamento e NPS dos alunos",
      users: "Aumento no engajamento com apostilas digitais",
      tags: ["Learning Experience", "Edtech", "Product Learning"],
      featured: true
    },
    {
      id: "busca-por-ia-qconcursos",
      slug: "busca-por-ia-qconcursos",
      title: "Busca por IA – Qconcursos",
      description: "Nova página inicial e busca global inteligente",
      image: "/projetocapa2.png",
      category: "EdTech • Web",
      // duration: "6 meses",
      impact: "+35% de engajamento na primeira interação",
      users: "Milhões de buscas mensais",
      tags: [
        "AI-Driven UX",
        "Smart Search",
        "Product Strategy"
      ],
      featured: true
    },
    {
      id: "pagina-de-concurso-publico-qconcursos",
      slug: "pagina-de-concurso-publico-qconcursos",
      title: "Página de Concurso – Qconcursos",
      description: "Redesign da principal página informativa da plataforma, voltada para tráfego e ativação de usuários",
      image: "/projetocapa3.png",
      category: "Educacional • Web",
      // duration: "Projeto contínuo",
      impact: "+5% novos cadastros, +70% engajamento",
      users: "Milhões de acessos anuais",
      tags: ["UX end-to-end", "SEO", "Product Growth"],
      featured: true
    },
    {
      id: "checkout-pix-vitat",
      slug: "checkout-pix-vitat",
      title: "Checkout & PIX – Vitat",
      description: "Redesign do checkout e validação de novo método de pagamento para aumento de conversão",
      image: "/projetocapa4.png",
      category: "Payment Experience • SaaS",
      // duration: "5 meses",
      impact: "+45% conversão",
      users: "10k+ usuários",
      tags: ["Payment Experience", "Stakeholder Management", "SaaS"],
      featured: true
    },
    {
      id: "healthcare-app",
      title: "Healthcare Mobile App",
      description: "App de saúde para agendamento de consultas e acompanhamento médico, priorizando acessibilidade e facilidade de uso.",
      image: "/placeholder.svg",
      category: "Healthcare • Mobile",
      // duration: "7 meses",
      impact: "85% satisfação",
      users: "5k+ downloads",
      tags: ["Healthcare", "Accessibility", "Mobile"],
      featured: true
    },
    {
      id: "travel-booking",
      title: "Travel Booking Platform",
      description: "Plataforma de reservas de viagem com sistema de busca avançado e interface intuitiva para planejamento de viagens.",
      image: "/placeholder.svg",
      category: "Travel • Web",
      // duration: "6 meses",
      impact: "+30% bookings",
      users: "8k+ usuários",
      tags: ["Travel", "Search", "Booking"],
      featured: true
    }
  ];

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 4, projects.length));
  };


  return (
    <section id="projects" className="fluid-section">
      <div className="fluid-container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Projetos em Destaque
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl md:whitespace-nowrap">
            Casos de sucesso que demonstram minha abordagem estratégica
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {projects.filter(p => p.featured).slice(0, visibleProjects).map((project, index) => (
            <Link
              key={project.id}
              to={`/projeto/${project.slug}`}
              className="group glass-card overflow-hidden md:hover-float transition-slow block"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-72 object-cover transition-slow md:group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-smooth"></div>
                {/* Featured badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 bg-primary/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Sparkles className="w-3 h-3" />
                    <span>Destaque</span>
                  </span>
                </div>
                {/* Hover CTA */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="sm" className="gradient-primary shadow-glow">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>

                <h3 className="text-fluid-xl font-bold text-foreground mb-3 md:group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted/30 text-muted-foreground rounded-lg md:group-hover:bg-primary/10 md:group-hover:text-primary transition-smooth"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-fluid-2xl font-bold text-foreground mb-4">
              Quer ver mais projetos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tenho mais cases e experimentos no meu portfólio completo
            </p>
            <Button 
              size="lg" 
              className="gradient-primary hover-lift transition-bounce group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Vamos conversar sobre projetos
              <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;