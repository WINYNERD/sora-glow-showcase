import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  // ...existing code...

  // Mock project data - in real app, this would come from an API or database
  const projects = {
    "Página de Concurso Público – Qconcursos": {
      title: "Página de Concurso Público – Qconcursos",
      subtitle: "Redesign da principal página informativa da plataforma, voltada para tráfego e ativação de usuários",
      role: ["UX end-to-end", "Arquitetura de Informação", "Design System"],
      context: "A página de concursos públicos do Qconcursos é uma das principais portas de entrada da plataforma. Ela precisava ser redesenhada para aumentar a taxa de cadastro, melhorar o engajamento e transmitir autoridade sobre os concursos divulgados.",
      problem: 'Concursos públicos não seguem um padrão fixo: variam em número de etapas, completude de dados e formato de edital. Alguns concursos têm sete fases detalhadas, outros oferecem poucas ou nenhuma informação. Era necessário criar uma arquitetura capaz de se adaptar a essas diferenças, mantendo a clareza e utilidade para o usuário.\n\nAlém disso, existiam diferentes níveis de navegação (usuário deslogado, logado, assinante, aluno de curso) e era essencial comunicar bem com todos eles, respeitando restrições e liberando conteúdos conforme o tipo de acesso.\n\nPor fim, também havia uma necessidade interna do time editorial: os stakeholders responsáveis pelo cadastro e atualização de concursos precisavam de uma estrutura que permitisse tanto automações quanto atualizações manuais em concursos estratégicos. A página precisava atender tanto o usuário final quanto o fluxo interno da empresa.',
      process: [
        "Mergulho profundo no banco de dados e lógica de estrutura dos concursos",
        "Mapeamento de comportamentos dos usuários com diferentes níveis de acesso",
        "UX research qualitativa com usuários de topo e meio de funil",
        "Benchmark com sites de prefeituras, bancas organizadoras e concorrentes",
        "Redesenho da arquitetura de informação para suportar flexibilidade e clareza",
        "Criação de componentes modulares com lógica condicional",
        "Interface adaptada para priorizar informações na primeira dobra (com foco em 1366px de largura)",
        "Validações com equipe editorial para garantir facilidade de uso interno",
        "Testes com usuários e iterações baseadas em dados do Amplitude"
      ],
      results: [
        "📈 +5% de aumento em novos cadastros",
        "🧭 +70% de engajamento médio com a nova página",
        "📚 Mais usuários iniciando ações de estudo diretamente a partir da página",
        "🔗 Aumento nas navegações para planos de estudo, videoaulas e simulados",
        "⚙️ Página se tornou base confiável para atualizações manuais de concursos estratégicos",
        "🌐 Melhora na performance de SEO e uso da página como canal de aquisição orgânica",
        "🏛️ Fortalecimento da autoridade do Qconcursos como referência sobre concursos públicos"
      ],
      images: [
        "/capa1.png",
        "/galeria1.png",
        "/galeria1-1.png"
      ],
      figmaUrl: "https://www.figma.com/proto/6ys2zLG6RES11a6Cipp2Bp/P%C3%A1gina-de-Concurso---Qconcursos?node-id=1-22684&p=f&t=Gqs5LvCatZOD6dX3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed_host=share",
      tags: ["UX Research", "UI Strategy", "Banco de Dados", "Dados Complexos", "SEO", "Plataformas Educacionais"]
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
      figmaUrl: "https://www.figma.com/proto/6ys2zLG6RES11a6Cipp2Bp/P%C3%A1gina-de-Concurso---Qconcursos?node-id=1-22684&p=f&t=Gqs5LvCatZOD6dX3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed_host=share",
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
      figmaUrl: "https://www.figma.com/proto/6ys2zLG6RES11a6Cipp2Bp/P%C3%A1gina-de-Concurso---Qconcursos?node-id=1-22684&p=f&t=Gqs5LvCatZOD6dX3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed_host=share",
      tags: ["Mobile Design", "Banking", "Security", "User Journey"]
    }
  };

  // ...existing code...
  // Lookup project after projects declaration
  const project = projects[decodeURIComponent(id ?? "") as keyof typeof projects];

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
            {"period" in project && project.period && (
              <div className="flex items-center text-sm text-muted-foreground bg-card/10 px-3 py-2 rounded-lg">
                <Calendar className="w-4 h-4 mr-2" />
                {project.period}
              </div>
            )}
            {"team" in project && project.team && (
              <div className="flex items-center text-sm text-muted-foreground bg-card/10 px-3 py-2 rounded-lg">
                <Users className="w-4 h-4 mr-2" />
                {project.team}
              </div>
            )}
            {Array.isArray(project.role)
              ? project.role.map((roleTag, idx) => (
                  <div key={idx} className="text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-lg">
                    {roleTag}
                  </div>
                ))
              : (
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-2 rounded-lg">
                    {project.role}
                  </div>
                )}
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

            {/* Figma Preview */}
            {project.figmaUrl && (
              <section className="mb-10">
                <h2 className="text-fluid-2xl font-bold text-foreground mb-6">
                  Preview do Figma
                </h2>
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-elegant">
                  <iframe 
                    src={project.figmaUrl}
                    width="100%" 
                    height="100%" 
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </section>
            )}

            {/* Gallery */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-6">
                Galeria do Projeto
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.images.slice(1).map((image, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <img 
                        src={image} 
                        alt={`${project.title} - Imagem ${index + 2}`}
                        className="w-full h-64 object-cover rounded-xl hover-float transition-smooth cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                      <img 
                        src={image} 
                        alt={`${project.title} - Imagem ${index + 2}`}
                        className="w-full h-full object-contain"
                      />
                    </DialogContent>
                  </Dialog>
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