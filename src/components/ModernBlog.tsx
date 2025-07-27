import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const ModernBlog = () => {
  const articles = [
    {
      title: "O Futuro do Design está na IA Colaborativa",
      excerpt: "Como a inteligência artificial está redefinindo processos criativos e a importância de manter a humanidade no centro do design.",
      date: "15 Jan 2024",
      readTime: "8 min",
      category: "AI & Design",
      image: "/api/placeholder/400/240"
    },
    {
      title: "Design Systems que Escalam",
      excerpt: "Lições aprendidas construindo design systems para equipes distribuídas e produtos complexos em constante evolução.",
      date: "02 Jan 2024", 
      readTime: "12 min",
      category: "Design Systems",
      image: "/api/placeholder/400/240"
    },
    {
      title: "Pesquisa de Usuário em Tempos de Dados",
      excerpt: "Como equilibrar insights qualitativos e quantitativos para tomar decisões de design mais assertivas e centradas no usuário.",
      date: "18 Dez 2023",
      readTime: "6 min",
      category: "UX Research",
      image: "/api/placeholder/400/240"
    },
    {
      title: "A Psicologia das Micro-interações",
      excerpt: "Como pequenos detalhes de interface podem criar experiências memoráveis e influenciar comportamentos de forma sutil mas poderosa.",
      date: "05 Dez 2023",
      readTime: "10 min", 
      category: "Psychology",
      image: "/api/placeholder/400/240"
    }
  ];

  return (
    <section id="blog" className="fluid-section">
      <div className="fluid-container">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-fluid-4xl font-bold text-foreground mb-6">
            Devaneios
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl">
            Reflexões sobre design, tecnologia e comportamento humano
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-4 lg:gap-6 mb-12">
          {articles.slice(0, 3).map((article, index) => (
            <article key={index} className="glass-card p-4 lg:p-6 hover-glow transition-smooth group cursor-pointer">
              <div className="flex items-start gap-4">
                {/* Image/Icon */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 lg:h-8 lg:w-8 text-primary/70" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category */}
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base lg:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                      <span>•</span>
                      <span>{article.readTime} leitura</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth flex-shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="glass-card px-8 py-4 hover-glow transition-smooth group">
            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
              Ver todos os artigos
            </span>
            <ArrowRight className="h-4 w-4 ml-2 text-primary group-hover:translate-x-1 transition-transform inline" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernBlog;