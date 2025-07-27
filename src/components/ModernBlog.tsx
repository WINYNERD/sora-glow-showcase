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

        {/* Articles Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <article className="glass-card overflow-hidden hover-glow transition-smooth group cursor-pointer">
              {/* Featured Image */}
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-primary/70" />
              </div>
              
              {/* Featured Content */}
              <div className="p-8">
                {/* Category */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-lg">
                    {articles[0].category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-fluid-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-6">
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
          <div className="space-y-6">
            <h3 className="text-fluid-xl font-bold text-foreground mb-6">
              Outros artigos
            </h3>
            
            {articles.slice(1, 4).map((article, index) => (
              <article key={index} className="glass-card p-4 hover-glow transition-smooth group cursor-pointer">
                <div className="flex gap-4">
                  {/* Small Image */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary/70" />
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
                    <h4 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                      
                      <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
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