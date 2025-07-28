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
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Devaneios
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            Reflexões sobre design, tecnologia e comportamento humano
          </p>
        </div>

        {/* Articles Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Article */}
          <div>
            <article className="glass-card overflow-hidden hover-glow transition-smooth group cursor-pointer">
              {/* Featured Image */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary/70" />
              </div>
              
              {/* Featured Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-lg">
                    {articles[0].category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {articles[0].excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {articles[0].date} • {articles[0].readTime}
                  </div>
                  
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium mr-2">Ler mais</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Articles List */}
          <div className="space-y-4">
            {articles.slice(1, 4).map((article, index) => (
              <div key={index} className="border-b border-border/50 pb-4 last:border-b-0 hover:bg-accent/30 p-3 rounded-lg transition-smooth cursor-pointer group">
                <div className="flex gap-3">
                  {/* Article Image */}
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary/70" />
                  </div>
                  
                  {/* Article Content */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">
                        {article.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2" style={{fontSize: '18px'}}>
                      {article.title}
                    </h4>

                    <div className="flex items-center justify-end">
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Read More Button */}
            <div className="pt-4">
              <button className="w-full text-left p-3 hover:bg-accent/30 rounded-lg transition-smooth group">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Ver todos os artigos
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernBlog;