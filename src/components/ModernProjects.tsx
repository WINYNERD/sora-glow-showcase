import { useState } from "react";
import { ExternalLink, ArrowRight, Sparkles, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ModernProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(4);

  const projects = [
    {
      id: "fintech-dashboard",
      title: "Dashboard Analytics - FinTech",
      description: "Redesign completo de uma plataforma de análise financeira, focando em melhor visualização de dados e redução de complexidade para usuários B2B.",
      image: "/placeholder.svg",
      category: "SaaS • B2B",
      duration: "6 meses",
      impact: "+65% engagement",
      users: "2k+ usuários",
      tags: ["UX Research", "Data Visualization", "B2B"],
      featured: true
    },
    {
      id: "ai-assistant",
      title: "AI Assistant Interface",
      description: "Design de interface conversacional para assistente de IA focado em suporte ao cliente, priorizando naturalidade e eficiência nas interações.",
      image: "/placeholder.svg",
      category: "AI/ML • Support",
      duration: "4 meses",
      impact: "70% redução tickets",
      users: "500+ usuários/dia",
      tags: ["Conversational Design", "AI/ML", "Customer Support"],
      featured: true
    },
    {
      id: "mobile-banking",
      title: "App de Banking Mobile",
      description: "Aplicativo completo para banco digital, desde onboarding até transações complexas, com foco em segurança e simplicidade de uso.",
      image: "/placeholder.svg",
      category: "FinTech • Mobile",
      duration: "8 meses",
      impact: "90% adoção",
      users: "50k+ downloads",
      tags: ["Mobile Design", "Banking", "Security", "User Journey"],
      featured: true
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com foco em conversão e experiência do usuário, incluindo checkout otimizado e personalização.",
      image: "/placeholder.svg",
      category: "E-commerce • Web",
      duration: "5 meses",
      impact: "+45% conversão",
      users: "10k+ usuários",
      tags: ["E-commerce", "Conversion", "Personalization"],
      featured: true
    },
    {
      id: "healthcare-app",
      title: "Healthcare Mobile App",
      description: "App de saúde para agendamento de consultas e acompanhamento médico, priorizando acessibilidade e facilidade de uso.",
      image: "/placeholder.svg",
      category: "Healthcare • Mobile",
      duration: "7 meses",
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
      duration: "6 meses",
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
        <div className="mb-20">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl">
            Casos de sucesso que demonstram minha abordagem estratégica
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {projects.filter(p => p.featured).slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden hover-float transition-slow"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-72 object-cover transition-slow group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                {/* Featured badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <Sparkles className="w-3 h-3" />
                    <span>Destaque</span>
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Link to={`/projeto/${project.id}`}>
                    <Button size="sm" className="gradient-primary shadow-glow">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-fluid-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{project.impact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{project.users}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted/30 text-muted-foreground rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-smooth"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mb-16">
            <Button 
              onClick={loadMoreProjects}
              variant="outline"
              size="lg"
              className="hover-lift transition-bounce group"
            >
              Carregar mais projetos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        )}

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
