import { GraduationCap, Calendar, Award, BookOpen, Star, ChevronRight } from "lucide-react";

const ModernEducation = () => {
  const educationJourney = [
    {
      id: 1,
      year: "2023 - 2024",
      type: "academic",
      title: "MBA em Product Management",
      institution: "FIAP",
      level: "Pós-graduação",
      description: "Estratégia de produto, growth, analytics e liderança técnica",
      highlights: ["Product Leadership", "Data Analytics", "Growth Strategy"],
      featured: true
    },
    {
      id: 2,
      year: "2023",
      type: "course",
      title: "Data-Driven Design",
      institution: "Nielsen Norman Group",
      description: "Analytics, métricas e otimização baseada em dados",
      highlights: ["Analytics", "A/B Testing", "Conversion Optimization"]
    },
    {
      id: 3,
      year: "2023",
      type: "course",
      title: "AI for Designers",
      institution: "MIT OpenCourseWare",
      description: "Aplicação de IA em processos de design e tomada de decisão",
      highlights: ["AI Tools", "Machine Learning", "Design Automation"]
    },
    {
      id: 4,
      year: "2022",
      type: "course",
      title: "Design Systems Masterclass",
      institution: "Design+Code",
      description: "Criação e manutenção de design systems escaláveis",
      highlights: ["Component Libraries", "Design Tokens", "Atomic Design"]
    },
    {
      id: 5,
      year: "2021",
      type: "course",
      title: "UX Design Professional Certificate",
      institution: "Google",
      description: "Design centrado no usuário, pesquisa e prototipagem",
      highlights: ["User Research", "Prototyping", "Design Thinking"]
    },
    {
      id: 6,
      year: "2017 - 2020",
      type: "academic",
      title: "Design Gráfico",
      institution: "Universidade Mackenzie",
      level: "Graduação",
      description: "Fundamentos em design, tipografia, teoria das cores e comunicação visual",
      highlights: ["Design Fundamentals", "Visual Identity", "Typography"],
      featured: true
    }
  ];

  return (
    <section id="education" className="fluid-section">
      <div className="fluid-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-fluid-4xl font-bold text-foreground mb-6">
            Jornada Educacional
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-3xl mx-auto">
            Uma trajetória contínua de aprendizado e evolução profissional
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:transform md:-translate-x-0.5"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationJourney.map((item, index) => (
              <div key={item.id} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg md:transform md:-translate-x-2 z-10">
                  {item.type === 'academic' ? (
                    <GraduationCap className="absolute -top-1 -left-1 w-6 h-6 text-primary-foreground" />
                  ) : (
                    <BookOpen className="absolute -top-0.5 -left-0.5 w-5 h-5 text-primary-foreground" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'} md:w-5/12 w-full`}>
                  <div className={`glass-card p-6 hover-glow transition-smooth group ${item.featured ? 'border-primary/30 bg-primary/5' : ''}`}>
                    {/* Year Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                      </div>
                      {item.featured && (
                        <Star className="h-4 w-4 text-primary fill-primary/20" />
                      )}
                    </div>

                    {/* Type Badge */}
                    <div className="mb-3">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        item.type === 'academic' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary/80 text-secondary-foreground'
                      }`}>
                        {item.type === 'academic' ? item.level : 'Certificação'}
                      </span>
                    </div>

                    {/* Title and Institution */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-3 flex items-center">
                      {item.institution}
                      <ChevronRight className="h-3 w-3 ml-1 opacity-50" />
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium hover:bg-primary/20 transition-colors">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Timeline End */}
          <div className="relative mt-12">
            <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-gradient-to-r from-primary to-primary-glow rounded-full border-4 border-background shadow-lg md:transform md:-translate-x-3 animate-pulse">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
            </div>
            <div className="ml-16 md:ml-0 md:text-center">
              <p className="text-muted-foreground text-sm italic">
                Sempre em busca de novos conhecimentos...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernEducation;