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

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 gradient-glow text-center">
            <Sparkles className="w-12 h-12 text-primary mb-6 animate-pulse mx-auto" />
            <h3 className="text-fluid-2xl font-bold text-foreground mb-8">
              Vamos criar algo incrível juntos?
            </h3>

            {/* Cards de contato */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+55 (11) 99999-9999", 
                  link: "https://wa.me/5511999999999"
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn", 
                  value: "/in/anna-machado-designer",
                  link: "https://linkedin.com/in/anna-machado-designer"
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "anna@designstudio.com",
                  link: "mailto:anna@designstudio.com"
                }
              ].map((contact, index) => (
                <a key={index} href={contact.link} className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover-glow transition-smooth group block">
                  <div className="text-center">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth mx-auto mb-4">
                      <contact.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{contact.label}</h4>
                    <p className="text-primary hover:text-primary-glow transition-smooth font-medium text-sm">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;