import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-primary-foreground" />,
      label: "Email",
      value: "alex.silva@email.com",
      link: "mailto:alex.silva@email.com",
      description: "Respondo em até 24h"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary-foreground" />,
      label: "LinkedIn",
      value: "/in/alexsilva-designer",
      link: "https://linkedin.com/in/alexsilva-designer",
      description: "Vamos nos conectar"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary-foreground" />,
      label: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999",
      description: "Chat direto comigo"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="shadow-card hover-glow transition-smooth border-border/50 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{method.label}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <a
                    href={method.link}
                    className="text-primary hover:text-primary-glow transition-smooth font-medium text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="shadow-card border-border/50 gradient-subtle">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pronto para criar algo incrível juntos?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Seja para um projeto freelance, consultoria em UX ou uma posição full-time, 
                adoraria ouvir sobre seus desafios e como posso ajudar a resolvê-los.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="gradient-primary hover-glow transition-smooth text-primary-foreground group"
                  asChild
                >
                  <a href="mailto:alex.silva@email.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Enviar Email
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="group"
                  asChild
                >
                  <a href="https://linkedin.com/in/alexsilva-designer" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Alex Silva. Feito com ❤️ e muito café.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;