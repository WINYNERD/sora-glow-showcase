import { Mail, Linkedin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernContact = () => {
  return (
    <section id="contact" className="fluid-section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-dark/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-deeper/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="fluid-container relative z-10">
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Contato
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            fala comigo, bb 💜! Localizada em Niterói/RJ
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-12 lg:p-16 gradient-glow">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - CTA */}
              <div className="text-center lg:text-left">
                <h3 className="text-fluid-3xl font-bold text-foreground mb-4">
                  Vamos criar algo incrível juntos?
                </h3>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  Às vezes tudo começa com uma boa conversa — e isso já é um ótimo começo.
                </p>
              </div>

              {/* Right side - Contact buttons */}
              <div className="space-y-4">
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    subtitle: "Chat direto",
                    link: "https://wa.me/5511999999999",
                    primary: true
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    subtitle: "anna@designstudio.com",
                    link: "mailto:anna@designstudio.com",
                    primary: false
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn", 
                    subtitle: "Vamos nos conectar",
                    link: "https://linkedin.com/in/anna-machado-designer",
                    primary: false
                  }
                ].map((contact, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={contact.primary ? "default" : "outline"}
                    className={`
                      group w-full h-16 justify-start text-left p-6
                      ${contact.primary 
                        ? "gradient-primary hover-lift transition-bounce" 
                        : "hover-lift transition-bounce"
                      }
                    `}
                    asChild
                  >
                    <a href={contact.link} className="flex items-center space-x-4">
                      <contact.icon className="h-6 w-6 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold">{contact.label}</div>
                        <div className="text-sm opacity-70">{contact.subtitle}</div>
                      </div>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;