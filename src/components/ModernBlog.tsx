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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="glass-card overflow-hidden hover-glow transition-smooth group cursor-pointer">
              {/* Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/50" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                    <span>{article.readTime} leitura</span>
                  </div>
                  
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="mr-1">Ler</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
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