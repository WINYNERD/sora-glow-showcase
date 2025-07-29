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
    "Ambiente de Estudo – Qconcursos": {
      title: "Ambiente de Estudo – Qconcursos",
      subtitle: "Nova experiência no ambiente de estudo integrado com teoria, exercícios e videoaulas",
      role: [
        "Learning Experience",
        "Edtech",
        "Product Learning"
      ],
      context: "O Qconcursos precisava transformar o ambiente de consumo em um ambiente digital moderno e integrado, capaz de oferecer uma experiência de estudo contínua para alunos de concursos públicos.\n\nA experiência anterior era desmotivadora, com textos longos, pouco escaneáveis e separados de exercícios e videoaulas, o que prejudicava o engajamento e a retenção de alunos.",
      problem: "Os alunos relatavam que:\nA leitura da apostila era cansativa e pouco interativa\nEra difícil conectar teoria, prática e videoaulas em um único fluxo\nA experiência não refletia a qualidade do conteúdo oferecido pelos professores\nFaltavam recursos de acessibilidade e personalização\nIsso gerava baixa motivação e altos índices de abandono na jornada de estudo.",
      process: [
        "Discovery intenso com foco em entender profundamente a jornada do aluno.",
        "Mapeamento completo de eventos no Amplitude e análise de comportamento com Hotjar.",
        "Pesquisas qualitativas e entrevistas com alunos e com o time acadêmico.",
        "Investigação interna para entender o sistema por trás da criação de apostilas.",
        "Fluxogramas As-Is e To-Be para reestruturar os fluxos de estudo.",
        "Benchmarking de ambientes de estudo dedicados e produtos concorrentes.",
        "Muitas trocas com Tech para avaliar limitações, soluções viáveis e integrações.",
        "Wireframes e prototipação iterativa, com diversos rounds de refinamento.",
        "Testes de usabilidade com alunos de diferentes perfis de estudo.",
        "Implementação em fases, com ciclos de feedback contínuos."
      ],
      solution: "A solução foi criar um novo ambiente de estudo unificado e interativo, que conectasse teoria, prática e videoaulas em um só fluxo:\nLeitura otimizada com markdown estruturado, tipografia hierárquica e até 13 palavras por linha para conforto visual.\n\nStudioDock: painel flutuante que permite navegação rápida, marcações, visualização de progresso e ajustes de acessibilidade.\n\nIntegração total de exercícios, textos e videoaulas, permitindo estudar sem trocar de contexto.\n\nAcessibilidade completa com modo escuro, ajuste de fonte, modo foco e suporte para leitor de tela.\n\nExperiência mobile-first adaptada para 1366px, principal resolução dos alunos.\n\nO resultado foi uma jornada de estudo fluida, motivadora e visualmente agradável, que valoriza o conteúdo produzido pelos professores.",
      results: [
        "Aumento no engajamento com apostilas digitais.",
        "Redução no abandono do estudo em apostilas.",
        "Aumento no NPS dos alunos nas pesquisas pós-lançamento.",
        "Jornada mais fluida, com integração natural entre leitura, exercícios e videoaulas."
      ],
      images: [
        "/capa2.png",
        "/galeria2-1.png",
        "/galeria2-2.png",
        "/galeria2-3.png",
        "/galeria2-4.png"
      ],
      figmaUrl: "https://embed.figma.com/proto/6ys2zLG6RES11a6Cipp2Bp/Anna-Projetos?node-id=104-37619&scaling=scale-down&content-scaling=fixed&page-id=94%3A9405&embed-host=share",
      // tags removido conforme solicitado
    },
    "mobile-banking": {
      title: "App de Banking Mobile",
      subtitle: "Aplicativo completo para banco digital",
      period: "8 meses",
      team: "6 pessoas",
      role: "Senior UX Designer",
      context: "Banco tradicional precisava lançar sua versão digital para competir com fintechs emergentes e atender a demanda por serviços mobile-first.",
      problem: "Clientes jovens migrando para bancos digitais, processos burocráticos e interface desatualizada do app atual.",
      solution: "Desenvolvi uma experiência mobile-first completamente repensada, priorizando velocidade e simplicidade. Criei fluxos otimizados que reduzem o número de telas e taps necessários para operações comuns. A interface usa micro-interações e feedback visual para deixar cada ação mais satisfatória e confiável. Implementei também onboarding progressivo e contextual para reduzir a curva de aprendizado.",
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
    },
    "Página de Concurso Público – Qconcursos": {
      title: "Página de Concurso Público – Qconcursos",
      subtitle: "Redesign da principal página informativa da plataforma, voltada para tráfego e ativação de usuários",
      role: ["UX end-to-end", "SEO", "Product Growth"],
      context: "O Qconcursos precisava redesenhar sua página de concursos públicos para informar usuários e gerar tráfego orgânico, além de apoiar alunos já ativos na plataforma. O maior desafio era lidar com um banco de dados complexo e com concursos que não seguem um padrão: alguns têm várias etapas, outros têm poucas, e nem sempre todas as informações estão disponíveis.",
      problem: "Os usuários tinham dificuldade em entender o status dos concursos e em acessar informações confiáveis e organizadas. Internamente, os stakeholders também precisavam de flexibilidade para atualizar concursos específicos de forma manual e ágil.",
      process: [
        "Mergulho profundo no banco de dados e lógica de estrutura dos concursos",
        "Mapeamento de comportamentos de usuários em diferentes níveis de acesso",
        "UX research qualitativa com usuários de topo e meio de funil",
        "Benchmark com concorrentes e sites de bancas organizadoras",
        "Redesenho da arquitetura da informação para suportar flexibilidade e clareza",
        "Criação de componentes modulares com lógica condicional",
        "Interface adaptada priorizando informações na primeira dobra (foco em desktop 1366px)",
        "Testes com usuários e validações internas com a equipe editorial"
      ],
      solution: "A nova página organiza os concursos de forma clara e confiável, adaptando o conteúdo de acordo com as informações disponíveis para cada caso.\n\nCriamos uma interface modular, que permite exibir status, detalhes e conteúdos de apoio, além de oferecer particularidades na exibição para atualizações manuais quando necessário.\n\nO design guia o usuário desde a descoberta do concurso até o engajamento com estudos na plataforma, reforçando a autoridade e completude do Qconcursos.",
      results: [
        "+5% em novos cadastros",
        "70% de engajamento na página",
        "Maior fluxo de usuários iniciando estudos a partir desta página",
        "Melhora na performance de SEO e uso da página como canal de aquisição orgânica"
      ],
      images: [
        "/capa1.png",
        "/galeria1-1.png",
        "/galeria1-2.png",
        "/galeria1-3.png",
        "/galeria1-4.png"
      ],
      figmaUrl: "https://www.figma.com/proto/6ys2zLG6RES11a6Cipp2Bp/P%C3%A1gina-de-Concurso---Qconcursos?node-id=1-22684&p=f&t=Gqs5LvCatZOD6dX3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed_host=share",
      tags: ["UX Research", "UI Strategy", "Banco de Dados", "Dados Complexos", "SEO", "Plataformas Educacionais"]
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

          {/* Tags removido conforme solicitado */}
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
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.context.split('\n').map((line, idx) =>
                  line.trim() === '' ? <br key={idx} /> : <span key={idx}>{line}<br /></span>
                )}
              </div>
            </section>

            {/* Problem */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-4">
                Problema
              </h2>
              {project.title === "Ambiente de Estudo – Qconcursos" ? (
                <div className="text-muted-foreground leading-relaxed">
                  <div>Os alunos relatavam que:</div>
                  <ul className="list-disc pl-6 mt-2 mb-2 space-y-2">
                    <li>A leitura da apostila era cansativa e pouco interativa.</li>
                    <li>Era difícil conectar teoria, prática e videoaulas em um único fluxo.</li>
                    <li>A experiência não refletia a qualidade do conteúdo oferecido pelos professores.</li>
                    <li>Faltavam recursos de acessibilidade e personalização.</li>
                  </ul>
                  <div>Isso gerava baixa motivação e altos índices de abandono na jornada de estudo.</div>
                </div>
              ) : (
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.problem.split('\n').map((line, idx) =>
                    line.trim() === '' ? <br key={idx} /> : <span key={idx}>{line}<br /></span>
                  )}
                </div>
              )}
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

            {/* Solution */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-4">
                Solução
              </h2>
              {project.title === "Ambiente de Estudo – Qconcursos" ? (
                <div className="text-muted-foreground leading-relaxed">
                  <div>A solução foi criar um novo ambiente de estudo unificado e interativo, que conectasse teoria, prática e videoaulas em um só fluxo:</div>
                  <ul className="list-disc pl-6 mt-2 mb-2 space-y-2">
                    <li>Leitura otimizada com markdown estruturado, tipografia hierárquica e até 13 palavras por linha para conforto visual.</li>
                    <li>StudioDock: painel flutuante que permite navegação rápida, marcações, visualização de progresso e ajustes de acessibilidade.</li>
                    <li>Integração total de exercícios, textos e videoaulas, permitindo estudar sem trocar de contexto.</li>
                    <li>Acessibilidade completa com modo escuro, ajuste de fonte, modo foco e suporte para leitor de tela.</li>
                    <li>Experiência mobile-first adaptada para 1366px, principal resolução dos alunos.</li>
                  </ul>
                  <div>O resultado foi uma jornada de estudo fluida, motivadora e visualmente agradável, que valoriza o conteúdo produzido pelos professores.</div>
                </div>
              ) : (
                <div className="text-muted-foreground leading-relaxed">
                  {project.solution.split('\n').map((line, idx) =>
                    line.trim() === '' ? <br key={idx} /> : <span key={idx}>{line}<br /></span>
                  )}
                </div>
              )}
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

            {/* Curiosity Box - For Qconcursos projects */}
            {(project.title === "Página de Concurso Público – Qconcursos" || project.title === "Ambiente de Estudo – Qconcursos") && (
              <section className="mb-10">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    {/* Ícone removido */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        💡 Curiosidade
                      </h3>
                      {project.title === "Página de Concurso Público – Qconcursos" ? (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Em vez de parar no rascunho, eu criei um wireframe funcional. Combinei minha base em tech com IA para codar a estrutura direto no CodePen.{" "}
                          <a 
                            href="https://codepen.io/dezdosete/full/WNqjQBL" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 underline transition-colors"
                          >
                            Ver aqui
                          </a>
                        </p>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Nesse projeto, consegui montar todo o código da página usando Tailwind e React através do Figma Make. O Widget flutuante Painel de Estudo, o Modo Escuro e o Modo Noturno ficaram totalmente funcionais, e o dev do time utilizou essa base para desenvolver o restante da página.
                        </p>
                      )}
                    </div>
                  </div>
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
                <a
                  href="https://wa.me/552197356953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full hover-glow" asChild>
                    <span className="flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Entre em contato
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;