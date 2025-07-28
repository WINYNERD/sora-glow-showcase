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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Pronta para criar */}
            <div className="glass-card p-8 gradient-glow">
              <Sparkles className="w-12 h-12 text-primary mb-6 animate-pulse" />
              <h3 className="text-fluid-2xl font-bold text-foreground mb-4">
                Pronta para criar algo incrível juntos?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Seja para um projeto freelance, consultoria ou posição full-time, 
                adoraria ouvir sobre seus desafios e como posso ajudar.
              </p>
              
              <Button size="lg" className="gradient-primary hover-lift transition-bounce group w-full" asChild>
                <a href="mailto:anna@designstudio.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Vamos conversar!
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
            </div>

            {/* Lista de contatos */}
            <div className="space-y-6">
              <h3 className="text-fluid-xl font-bold text-foreground mb-6">
                Entre em contato
              </h3>
              
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "anna@designstudio.com",
                  link: "mailto:anna@designstudio.com",
                  description: "Respondo em até 6h"
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn", 
                  value: "/in/anna-machado-designer",
                  link: "https://linkedin.com/in/anna-machado-designer",
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
                <div key={index} className="glass-card p-6 hover-glow transition-smooth group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <contact.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{contact.description}</p>
                      <a href={contact.link} className="text-primary hover:text-primary-glow transition-smooth font-medium text-sm">
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;