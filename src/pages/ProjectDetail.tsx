import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  // ...existing code...

  // Mock project data - in real app, this would come from an API or database
  const projects = [
    {
      slug: "ambiente-de-estudo-qconcursos",
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
        {
          title: "Investigação e Discovery",
          topics: [
            "Entrevistas com alunos e pesquisas qualitativas para mapear hábitos de estudo, dores e expectativas.",
            "Pesquisa com o time acadêmico para entender fluxos internos de criação de conteúdo.",
            "Mapeamento completo de eventos no Amplitude e análise de comportamento com Hotjar, identificando pontos de abandono e padrões de uso.",
            "Benchmarking intenso de ambientes de estudo e plataformas educacionais para boas práticas e inspiração.",
            "Investigação interna para entender a jornada de conteúdo do backoffice até o aluno.",
            "Trocas constantes com o time de tech para mapear limitações do sistema e viabilizar soluções escaláveis."
          ]
        },
        {
          title: "Análise e Definição do Problema",
          topics: [
            "Desenvolvimento de fluxogramas As-Is e To-Be, mostrando o fluxo atual e o fluxo ideal da experiência de estudo.",
            "Identificação de gargalos na navegação, na integração de conteúdos e na performance do sistema."
          ]
        },
        {
          title: "Testes e Implementação",
          topics: [
            "Testes de usabilidade com mais de 50 alunos em diferentes cenários de estudo.",
            "Ajustes contínuos com base em feedback real de usuários e professores.",
            "Implementação em fases, monitorando métricas de engajamento e retenção via Amplitude."
          ]
        }
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
    {
      slug: "busca-por-ia-qconcursos",
      title: "Busca por IA – Qconcursos",
      subtitle: "Nova página inicial e busca global inteligente",
      period: "6 meses",
      team: "Lead UX/UI Designer · EdTech · UX Research & AI Product Design",
      role: [
        "Lead UX/UI Designer",
        "EdTech",
        "UX Research & AI Product Design"
      ],
      context: "O Qconcursos precisava transformar a antiga página inicial em um hub inteligente de busca e descoberta, capaz de unificar todo o conteúdo sobre concursos públicos em um só lugar.\nO objetivo era permitir que o usuário encontrasse notícias, concursos, questões, provas, cursos e videoaulas rapidamente, em qualquer etapa da jornada.\n\nA página anterior não refletia esse posicionamento e não aproveitava o potencial do site como principal destino de estudo e informação para concursos.",
      problem: [
        "A antiga página inicial tinha uma função desconectada da jornada do aluno.",
        "Usuários precisavam navegar por múltiplos menus para encontrar conteúdos relevantes.",
        "Falta de visibilidade para a diversidade de conteúdos do Qconcursos.",
        "Experiência de busca limitada, com resultados lentos e pouco inteligentes.",
        "Página inicial com alto tráfego deslogado, mas baixa conversão para cadastros."
      ],
      process: [
        {
          title: "Discovery e Pesquisa",
          topics: [
            "Benchmarking de sites de busca e portais educacionais.",
            "Heatmaps e cliques com Hotjar para entender padrões da página antiga.",
            "Análise de comportamento e eventos via Amplitude para identificar fluxos de busca e abandono.",
            "Entrevistas ao vivo e surveys com alunos para mapear expectativas da página inicial."
          ]
        },
        {
          title: "Definição da Experiência e Fluxos",
          topics: [
            "Identificação dos conteúdos mais buscados (notícias, concursos, aulas ao vivo).",
            "Mobile-first para atender ao perfil de tráfego majoritariamente deslogado via celular."
          ]
        },
        {
          title: "Parceria com Tech e AI",
          topics: [
            "Desenvolvimento de API de busca com IA, estruturando dados em título, subtítulo, tags e categorias.",
            "Implementação de resultados em tempo real com match semântico inteligente.",
            "Colaboração próxima com devs para otimizar performance e indexação de conteúdos."
          ]
        }
      ],
      solution: [
        {
          title: "Busca por IA em tempo real",
          topics: [
            "Resultados dinâmicos e relevantes à medida que o usuário digita.",
            "Integração de todo o conteúdo do Qconcursos (notícias, provas, questões, cursos, aulas ao vivo)."
          ]
        },
        {
          title: "Vitrine de conteúdos mais buscados",
          topics: [
            "Destaque para Notícias, Concursos Abertos e Aulas ao Vivo, baseado no comportamento do usuário.",
            "Seção de acesso rápido para preservar a familiaridade da página anterior."
          ]
        },
        {
          title: "Experiência fluida e responsiva",
          topics: [
            "Mobile-first, já que 70% do tráfego da página vem de usuários deslogados via celular.",
            "Otimização da velocidade e da escaneabilidade da informação."
          ]
        }
      ],
      results: [
        "Aumento significativo no tráfego interno, conectando usuários a páginas de cursos, questões e notícias.",
        "Dobro de buscas de usuários deslogados, aumentando a chance de conversão para cadastro.",
        "+35% de engajamento na primeira interação com a página.",
        "Maior visibilidade para conteúdos antes subutilizados no site.",
        "Feedback positivo em pesquisas pós-lançamento sobre facilidade de encontrar tudo em um só lugar."
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      figmaUrl: "",
      tags: ["AI Search", "EdTech", "UX Research", "Product Design"]
    },
    {
      slug: "pagina-de-concurso-publico-qconcursos",
      title: "Página de Concurso Público – Qconcursos",
      subtitle: "Redesign da principal página informativa da plataforma, voltada para tráfego e ativação de usuários",
      role: ["UX end-to-end", "SEO", "Product Growth"],
      context: "O Qconcursos precisava redesenhar sua página de concursos públicos para informar usuários e gerar tráfego orgânico, além de apoiar alunos já ativos na plataforma. O maior desafio era lidar com um banco de dados complexo e com concursos que não seguem um padrão: alguns têm várias etapas, outros têm poucas, e nem sempre todas as informações estão disponíveis.",
      problem: "Os usuários tinham dificuldade em entender o status dos concursos e em acessar informações confiáveis e organizadas. Internamente, os stakeholders também precisavam de flexibilidade para atualizar concursos específicos de forma manual e ágil.",
      process: [
        {
          title: "Pesquisa e Diagnóstico",
          topics: [
            "Mergulho profundo no banco de dados e lógica de estrutura dos concursos",
            "Mapeamento de comportamentos de usuários em diferentes níveis de acesso",
            "UX research qualitativa com usuários de topo e meio de funil",
            "Benchmark com concorrentes e sites de bancas organizadoras"
          ]
        },
        {
          title: "Estratégia e Design",
          topics: [
            "Redesenho da arquitetura da informação para suportar flexibilidade e clareza",
            "Criação de componentes modulares com lógica condicional",
            "Interface adaptada priorizando informações na primeira dobra (foco em desktop 1366px)"
          ]
        },
        {
          title: "Validação e Iteração",
          topics: [
            "Testes com usuários e validações internas com a equipe editorial"
          ]
        }
      ],
      solution: [
        {
          title: "Organização Modular e Flexível",
          topics: [
            "Nova página organiza os concursos de forma clara e confiável, adaptando o conteúdo de acordo com as informações disponíveis para cada caso.",
            "Interface modular permite exibir status, detalhes e conteúdos de apoio, além de particularidades para atualizações manuais."
          ]
        },
        {
          title: "Jornada Guiada e Engajadora",
          topics: [
            "Design guia o usuário desde a descoberta do concurso até o engajamento com estudos na plataforma.",
            "Reforço da autoridade e completude do Qconcursos."
          ]
        }
      ],
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
  ];

  // ...existing code...
  // Lookup project by slug
  const project = projects.find(p => p.slug === id);

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
              ) : project.title === "Busca por IA – Qconcursos" && Array.isArray(project.problem) ? (
                <div className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-6 mt-2 mb-2 space-y-2">
                    {project.problem.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {typeof project.problem === 'string'
                    ? project.problem.split('\n').map((line, idx) =>
                        line.trim() === '' ? <br key={idx} /> : <span key={idx}>{line}<br /></span>
                      )
                    : null}
                </div>
              )}
            </section>

            {/* Process */}
            <section className="mb-10">
              <h2 className="text-fluid-2xl font-bold text-foreground mb-6">
                Processo
              </h2>
              <div className="space-y-6">
                {Array.isArray(project.process) ? project.process.map((group, idx) => (
                  <div key={idx}>
                    <div className="flex items-center mb-2">
                      <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-primary-foreground text-xs font-bold">{idx + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                    </div>
                    <ul className="list-disc pl-10 space-y-2">
                      {group.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="text-muted-foreground leading-relaxed">{topic}</li>
                      ))}
                    </ul>
                  </div>
                )) : null}
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
              ) : Array.isArray(project.solution) && project.title === "Busca por IA – Qconcursos" ? (
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  {project.solution.map((group, idx) => (
                    <div key={idx}>
                      <div className="flex items-center mb-2">
                        <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary-foreground text-xs font-bold">{idx + 1}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                      </div>
                      <ul className="list-disc pl-10 space-y-2">
                        {group.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="text-muted-foreground leading-relaxed">{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-muted-foreground leading-relaxed">
                  {typeof project.solution === 'string'
                    ? project.solution.split('\n').map((line, idx) =>
                        line.trim() === '' ? <br key={idx} /> : <span key={idx}>{line}<br /></span>
                      )
                    : null}
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
            {(project.title === "Página de Concurso Público – Qconcursos" || project.title === "Ambiente de Estudo – Qconcursos" || project.title === "Busca por IA – Qconcursos") && (
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
                      ) : project.title === "Ambiente de Estudo – Qconcursos" ? (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Nesse projeto, consegui montar todo o código da página usando Tailwind e React através do Figma Make. O Widget flutuante Painel de Estudo, o Modo Escuro e o Modo Noturno ficaram totalmente funcionais, e o dev do time utilizou essa base para desenvolver o restante da página.
                        </p>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Esse foi meu primeiro projeto de AI no Qconcursos 💜
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