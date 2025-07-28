import { Mail, Linkedin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernContact = () => {
  return (
    <section id="contact" className="fluid-section">
      <div className="fluid-container">
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Vamos Conversar?
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            Pronta para criar algo incrível juntos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* CTA Principal */}
          <div className="text-center mb-16">
            <div className="glass-card p-12 gradient-glow max-w-3xl mx-auto">
              <Sparkles className="w-16 h-16 text-primary mb-6 animate-pulse mx-auto" />
              <h3 className="text-fluid-3xl font-bold text-foreground mb-6">
                Vamos criar algo incrível juntos?
              </h3>
              <p className="text-fluid-lg text-muted-foreground leading-relaxed">
                Escolha a melhor forma de entrar em contato
              </p>
            </div>
          </div>

          {/* Cards de Contato */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+55 (11) 99999-9999", 
                link: "https://wa.me/5511999999999",
                description: "Resposta rápida"
              },
              {
                icon: Linkedin,
                label: "LinkedIn", 
                value: "/in/anna-machado-designer",
                link: "https://linkedin.com/in/anna-machado-designer",
                description: "Vamos nos conectar"
              },
              {
                icon: Mail,
                label: "Email",
                value: "anna@designstudio.com",
                link: "mailto:anna@designstudio.com",
                description: "Contato profissional"
              }
            ].map((contact, index) => (
              <a 
                key={index} 
                href={contact.link} 
                className="glass-card p-8 hover-float transition-slow group text-center"
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth mx-auto mb-6">
                  <contact.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-fluid-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {contact.label}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                <p className="text-primary font-medium group-hover:text-primary-glow transition-smooth">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;