import { useState } from "react";
import { Mail, Linkedin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernContact = () => {
  const [copied, setCopied] = useState(false);
  return (
    <section id="contact" className="fluid-section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-dark/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-deeper/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="fluid-container relative z-10">
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Contato
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            fala comigo, bb 💜!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-12 lg:p-16 gradient-glow">
            <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
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
              <div className="space-y-4 relative">
                {/* Botões de contato */}
                {[
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    subtitle: "Chat direto",
                    link: "https://wa.me/552197356953",
                    primary: true
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    subtitle: "euannamachado@gmail.com",
                    link: "copy-email",
                    primary: false
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    subtitle: "Vamos nos conectar",
                    link: "https://www.linkedin.com/in/machadoanna/",
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
                    {contact.link === "copy-email" ? (
                      <a
                        href="#"
                        className="flex items-center space-x-4"
                        onClick={e => {
                          e.preventDefault();
                          navigator.clipboard.writeText("euannamachado@gmail.com");
                          setCopied(true);
                          setTimeout(() => setCopied(false), 3000);
                        }}
                      >
                        <contact.icon className="h-6 w-6 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-semibold">{contact.label}</div>
                          <div className="text-sm opacity-70">{contact.subtitle}</div>
                        </div>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
                      </a>
                    ) : (
                      <a
                        href={contact.link}
                        className="flex items-center space-x-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <contact.icon className="h-6 w-6 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-semibold">{contact.label}</div>
                          <div className="text-sm opacity-70">{contact.subtitle}</div>
                        </div>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
                      </a>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Toast de email copiado fixo no canto inferior direito */}
    {copied && (
      <div
        className="fixed bottom-6 right-6 px-5 py-3 bg-primary-dark text-primary-foreground rounded-xl shadow-2xl text-base font-semibold z-[9999]"
        style={{
          animation: 'fadeInOut 3s',
        }}
      >
        Email copiado!
      </div>
    )}
    {/* Animação fadeInOut */}
    <style>{`
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(20px); }
        10% { opacity: 1; transform: translateY(0); }
        90% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(20px); }
      }
    `}</style>
  </section>
  );
};

export default ModernContact;