import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça mais sobre minha trajetória e o que me motiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Professional */}
          <Card className="shadow-card hover-glow transition-smooth border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Profissional</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Experiência:</strong> 5+ anos criando produtos digitais 
                  que impactam milhões de usuários. Especializado em design systems, 
                  pesquisa UX e prototipagem avançada.
                </p>
                
                <p>
                  <strong className="text-foreground">Métodos:</strong> Design Thinking, Lean UX, 
                  Design Sprint. Trabalho com dados e feedback constante para validar hipóteses.
                </p>
                
                <p>
                  <strong className="text-foreground">Abordagem:</strong> Acredito que o melhor design 
                  é invisível. Foco na simplicidade, acessibilidade e performance para criar 
                  experiências que realmente funcionam.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Personal */}
          <Card className="shadow-card hover-glow transition-smooth border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Pessoal</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Valores:</strong> Empatia, curiosidade e 
                  colaboração. Acredito que design é sobre pessoas, não pixels.
                </p>
                
                <p>
                  <strong className="text-foreground">Curiosidades:</strong> Sou fascinado por 
                  psicologia comportamental e como pequenos detalhes podem influenciar 
                  grandes decisões.
                </p>
                
                <p>
                  <strong className="text-foreground">Hobbies:</strong> Fotografia urbana, 
                  jogos de estratégia e experimentar cafés especiais. Quando não estou 
                  desenhando, estou explorando novas perspectivas da cidade.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;