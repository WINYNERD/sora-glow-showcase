import { Mail, Linkedin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernContact = () => {
  return (
    <section id="contact" className="fluid-section">
      <div className="fluid-container">
        <div className="text-center mb-16">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-6">
            Bora Conversar?
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberta para discutir novos projetos e oportunidades incríveis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "luna@designstudio.com",
                link: "mailto:luna@designstudio.com",
                description: "Respondo em até 6h"
              },
              {
                icon: Linkedin,
                label: "LinkedIn", 
                value: "/in/luna-designer",
                link: "https://linkedin.com/in/luna-designer",
                description: "Vamos nos conectar"
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+55 (11) 99999-9999", 
                link: "https://wa.me/5511999999999",
                description: "Chat direto comigo"
              }
            ].map((contact, index) => (
              <div key={index} className="glass-card p-6 text-center hover-glow transition-smooth group">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <contact.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                <p className="text-xs text-muted-foreground mb-3">{contact.description}</p>
                <a href={contact.link} className="text-primary hover:text-primary-glow transition-smooth font-medium text-sm">
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="glass-card p-12 text-center gradient-glow">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6 animate-pulse" />
            <h3 className="text-fluid-2xl font-bold text-foreground mb-4">
              Pronta para criar algo incrível juntos?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Seja para um projeto freelance, consultoria ou posição full-time, 
              adoraria ouvir sobre seus desafios.
            </p>
            
            <Button size="lg" className="gradient-primary hover-lift transition-bounce group" asChild>
              <a href="mailto:luna@designstudio.com">
                <Mail className="h-5 w-5 mr-2" />
                Vamos conversar!
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;