import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in real app, this would come from an API or database
  const projects = {
    "fintech-dashboard": {
      title: "Dashboard Analytics - FinTech",
      subtitle: "Redesign completo de plataforma de análise financeira",
      period: "6 meses",
      team: "4 pessoas",
      role: "Lead UX/UI Designer",
      context: "A startup FinanceFlow precisava redesenhar sua plataforma de analytics para melhorar a experiência dos usuários B2B e reduzir o churn rate que estava em 40%.",
      problem: "Os usuários relatavam dificuldade para encontrar insights importantes, interface confusa e falta de personalização nos dashboards. O produto estava perdendo clientes para concorrentes.",
      process: [
        "Research qualitativo com 25 usuários atuais",
        "Análise de dados de comportamento no produto",
        "Benchmarking com concorrentes e melhores práticas",
        "Criação de personas e jornadas do usuário",
        "Wireframes e prototipagem iterativa",
        "Testes de usabilidade com 50+ usuários",
        "Design system e componentes reutilizáveis",
        "Implementação em fases com feedback contínuo"
      ],
      results: [
        "65% de aumento no engagement",
        "40% de redução no churn rate",
        "25% de melhoria no NPS",
        "50% menos cliques para encontrar informações"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      tags: ["UX Research", "Data Visualization", "B2B", "SaaS"]
    },
    "ai-assistant": {
      title: "AI Assistant Interface",
      subtitle: "Design de chatbot inteligente para suporte ao cliente",
      period: "4 meses",
      team: "3 pessoas",
      role: "Product Designer",
      context: "Empresa de e-commerce queria implementar um assistente de IA para melhorar o atendimento ao cliente e reduzir custos operacionais.",
      problem: "Alto volume de tickets de suporte, demora no atendimento e baixa satisfação do cliente. Necessidade de uma solução automatizada mas humanizada.",
      process: [
        "Análise dos principais tipos de dúvidas dos clientes",
        "Research sobre conversational design",
        "Criação de persona e tom de voz do assistant",
        "Design de fluxos conversacionais",
        "Prototipagem de interações complexas",
        "Testes A/B com diferentes abordagens",
        "Integração com sistema de fallback humano"
      ],
      results: [
        "70% de redução em tickets de suporte",
        "85% de satisfação nas interações",
        "3x mais rápido que atendimento humano",
        "30% de aumento nas vendas assistidas"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      tags: ["Conversational Design", "AI/ML", "Customer Support", "E-commerce"]
    },
    "mobile-banking": {
      title: "App de Banking Mobile",
      subtitle: "Aplicativo completo para banco digital",
      period: "8 meses",
      team: "6 pessoas",
      role: "Senior UX Designer",
      context: "Banco tradicional precisava lançar sua versão digital para competir com fintechs emergentes e atender a demanda por serviços mobile-first.",
      problem: "Clientes jovens migrando para bancos digitais, processos burocráticos e interface desatualizada do app atual.",
      process: [
        "Research com usuários de bancos digitais",
        "Mapeamento de jornada atual vs. ideal",
        "Benchmark com principais players do mercado",
        "Arquitetura de informação e card sorting",
        "Design system mobile-first",
        "Prototipagem de alta fidelidade",
        "Testes de usabilidade em dispositivos reais",
        "Compliance com regulamentações bancárias"
      ],
      results: [
        "90% de adoção entre clientes jovens",
        "4.8 estrelas na App Store",
        "60% de redução em ligações para SAC",
        "15% de aumento na abertura de contas"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      tags: ["Mobile Design", "Banking", "Security", "User Journey"]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Projeto não encontrado</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" style={{ scrollBehavior: 'auto' }}>
      {/* Scroll to top on component mount */}
      {(() => {
        window.scrollTo(0, 0);
        return null;
      })()}
      {/* Header */}
      <header className="border-b border-border/50 p-6">
        <div className="fluid-container">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover-glow">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao portfólio
            </Button>
          </Link>
          
          <div className="mb-6">
            <h1 className="text-fluid-3xl font-bold text-gradient mb-2">
              {project.title}
            </h1>
            <p className="text-fluid-xl text-muted-foreground">
              {project.subtitle}
            </p>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-sm text-muted-foreground bg-card/50 px-3 py-2 rounded-lg">
              <Calendar className="w-4 h-4 mr-2" />
              {project.period}
            </div>
            <div className="flex items-center text-sm text-muted-foreground bg-card/50 px-3 py-2 rounded-lg">
              <Users className="w-4 h-4 mr-2" />
              {project.team}
            </div>
            <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-lg">
              {project.role}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-card/30 text-muted-foreground px-2 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="fluid-container py-12">
        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={project.images[0]} 
            alt={project.title}
            className="w-full h-96 object-cover rounded-2xl shadow-elegant"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Context */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-4 flex items-center">
                <Target className="w-5 h-5 text-primary mr-3" />
                Contexto
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.context}
              </p>
            </section>

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-4">
                Problema
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Process */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-6">
                Processo
              </h2>
              <div className="space-y-3">
                {project.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-6">
                Galeria do Projeto
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} - Imagem ${index + 2}`}
                    className="w-full h-64 object-cover rounded-xl hover-float transition-smooth cursor-pointer"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Results */}
              <div className="glass-card p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  Resultados
                </h3>
                <div className="space-y-3">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm leading-relaxed">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Gostou do projeto?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Vamos conversar sobre como posso ajudar o seu produto.
                </p>
                <Button className="w-full hover-glow">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Entre em contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;