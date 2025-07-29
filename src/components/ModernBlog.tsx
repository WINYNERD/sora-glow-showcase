import { useEffect, useState } from "react";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

const MEDIUM_RSS = "https://medium.com/feed/@anmaxdo";

const ModernBlog = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  // Removido: artigos locais

  useEffect(() => {
    async function fetchMedium() {
      try {
        const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_RSS}`);
        const data = await res.json();
        if (data.items) {
          setMediumPosts(data.items);
        }
      } catch (err) {
        // Falha silenciosa
      }
    }
    fetchMedium();
  }, []);

  // Função para remover a primeira <img> do HTML do description
  function removeFirstImg(html) {
    return html ? html.replace(/<img[^>]*>/i, '') : html;
  }

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

        {/* Articles Layout restaurado, agora usando dados do Medium */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Article */}
          <div>
            {mediumPosts.length > 0 ? (
              <a
                href={mediumPosts[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card overflow-hidden hover-glow transition-smooth group cursor-pointer block"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  {/* Busca imagem do thumbnail, enclosure ou do conteúdo do post */}
                  {(() => {
                    const post = mediumPosts[0];
                    let imgSrc = post.thumbnail || (post.enclosure && post.enclosure.link);
                    if (!imgSrc && post.description) {
                      const match = post.description.match(/<img[^>]+src=["']([^"'>]+)["']/);
                      if (match) imgSrc = match[1];
                    }
                    return imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={post.title}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    ) : (
                      <BookOpen className="h-12 w-12 text-primary/70" />
                    );
                  })()}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-lg">
                      {mediumPosts[0].categories && mediumPosts[0].categories.length > 0 ? mediumPosts[0].categories[0] : "Medium"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {mediumPosts[0].title}
                  </h3>
                  {/* Mostra só as 3 primeiras linhas do resumo, se houver */}
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: removeFirstImg(mediumPosts[0].description) }} />
                  <div className="flex items-center justify-end">
                    <span className="text-sm font-medium mr-2">Ler mais</span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </a>
            ) : (
              <div className="glass-card p-12 text-center text-muted-foreground">Carregando post em destaque...</div>
            )}
          </div>
          {/* Articles List */}
          <div className="space-y-4">
            {mediumPosts.length > 1 ? (
              mediumPosts.slice(1, 4).map((post) => {
                let imgSrc = post.thumbnail || (post.enclosure && post.enclosure.link);
                if (!imgSrc && post.description) {
                  const match = post.description.match(/<img[^>]+src=["']([^"'>]+)["']/);
                  if (match) imgSrc = match[1];
                }
                return (
                  <a
                    key={post.guid}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-border/50 pb-4 last:border-b-0 hover:bg-accent/30 p-3 rounded-lg transition-smooth cursor-pointer group block"
                  >
                    <div className="flex gap-3">
                      <div
                        className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0 relative overflow-hidden"
                        style={imgSrc ? { backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                      >
                        <div style={imgSrc ? { background: 'rgba(255, 255, 255, 0)', borderRadius: '8px', position: 'absolute', inset: 0 } : {}}></div>
                        {/* Ícone removido, só imagem de fundo */}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-lg">
                            {post.categories && post.categories.length > 0 ? post.categories[0] : "Medium"}
                          </span>
                        </div>
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2" style={{ fontSize: '18px' }}>
                          {post.title}
                        </h4>
                        {/* Descrição removida, apenas título */}
                        {/* Data removida */}
                        <div className="flex items-center justify-end">
                          <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })
            ) : (
              <div className="text-center text-muted-foreground py-12">Carregando posts do Medium...</div>
            )}
            {/* Read More Button */}
            <div className="pt-4">
              <a
                href="https://medium.com/@anmaxdo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-left p-3 hover:bg-accent/30 rounded-lg transition-smooth group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Ver todos os artigos no Medium
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernBlog;