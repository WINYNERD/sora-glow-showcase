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

        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 lg:p-16 gradient-glow">
            <Sparkles className="w-12 h-12 text-primary mb-6 animate-pulse mx-auto" />
            
            <h3 className="text-fluid-3xl font-bold text-foreground mb-4">
              Vamos criar algo incrível juntos?
            </h3>
            
            <p className="text-fluid-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              Escolha sua forma preferida de contato
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  link: "https://wa.me/5511999999999",
                  primary: true
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn", 
                  link: "https://linkedin.com/in/anna-machado-designer",
                  primary: false
                },
                {
                  icon: Mail,
                  label: "Email",
                  link: "mailto:anna@designstudio.com",
                  primary: false
                }
              ].map((contact, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={contact.primary ? "default" : "outline"}
                  className={`
                    group min-w-[140px] h-14
                    ${contact.primary 
                      ? "gradient-primary hover-lift transition-bounce" 
                      : "hover-lift transition-bounce"
                    }
                  `}
                  asChild
                >
                  <a href={contact.link} className="flex items-center space-x-3">
                    <contact.icon className="h-5 w-5" />
                    <span className="font-medium">{contact.label}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;