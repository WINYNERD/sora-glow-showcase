import { GraduationCap, Calendar, Award } from "lucide-react";

const ModernEducation = () => {
  const academicEducation = [
    {
      degree: "MBA em Product Management",
      institution: "FIAP",
      period: "2023 - 2024",
      type: "Pós-graduação",
      description: "Estratégia de produto, growth, analytics e liderança técnica",
      highlights: ["Product Leadership", "Data Analytics", "Growth Strategy"]
    },
    {
      degree: "Design Gráfico",
      institution: "Universidade Mackenzie", 
      period: "2017 - 2020",
      type: "Graduação",
      description: "Fundamentos em design, tipografia, teoria das cores e comunicação visual",
      highlights: ["Design Fundamentals", "Visual Identity", "Typography"]
    }
  ];

  const courses = [
    {
      title: "UX Design Professional Certificate",
      institution: "Google",
      period: "2021",
      description: "Design centrado no usuário, pesquisa e prototipagem",
      highlights: ["User Research", "Prototyping", "Design Thinking"]
    },
    {
      title: "Design Systems Masterclass",
      institution: "Design+Code",
      period: "2022", 
      description: "Criação e manutenção de design systems escaláveis",
      highlights: ["Component Libraries", "Design Tokens", "Atomic Design"]
    },
    {
      title: "AI for Designers",
      institution: "MIT OpenCourseWare",
      period: "2023",
      description: "Aplicação de IA em processos de design e tomada de decisão",
      highlights: ["AI Tools", "Machine Learning", "Design Automation"]
    },
    {
      title: "Data-Driven Design",
      institution: "Nielsen Norman Group",
      period: "2023",
      description: "Analytics, métricas e otimização baseada em dados",
      highlights: ["Analytics", "A/B Testing", "Conversion Optimization"]
    }
  ];

  return (
    <section id="education" className="fluid-section">
      <div className="fluid-container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-fluid-4xl font-bold text-gradient mb-3">
            Formação & Educação
          </h2>
          <p className="text-fluid-lg text-muted-foreground max-w-2xl">
            Minha base educacional e jornada de aprendizado contínuo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Academic Education */}
          <div>
            <h3 className="text-fluid-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              Formação Acadêmica
            </h3>
            
            <div className="space-y-6">
              {academicEducation.map((edu, index) => (
                <div key={index} className="glass-card p-6 hover-glow transition-smooth">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">
                          {edu.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                    
                    <div className="mt-3 sm:mt-0 sm:ml-6">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-2" />
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses & Certifications */}
          <div>
            <h3 className="text-fluid-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Cursos & Certificações
            </h3>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="glass-card p-5 hover-glow transition-smooth">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">
                        {course.title}
                      </h4>
                      <p className="text-muted-foreground text-sm font-medium mb-2">{course.institution}</p>
                    </div>
                    
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <span className="text-xs text-muted-foreground">
                        {course.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {course.highlights.map((highlight, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
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

export default ModernEducation;