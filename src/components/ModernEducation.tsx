import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const ModernEducation = () => {
  const education = [
    {
      degree: "Mestrado em Design de Interação",
      institution: "USP - Universidade de São Paulo",
      period: "2019 - 2021",
      type: "Pós-graduação",
      description: "Pesquisa em design centrado no usuário e interfaces inteligentes",
      achievements: [
        "Dissertação sobre design de sistemas de IA",
        "Pesquisa em UX para produtos de machine learning",
        "Publicação de 3 artigos acadêmicos"
      ],
      highlights: ["Magna Cum Laude", "3 publicações"]
    },
    {
      degree: "Bacharelado em Design Gráfico",
      institution: "PUC-SP",
      period: "2015 - 2019",
      type: "Graduação",
      description: "Formação sólida em fundamentos do design visual e comunicação",
      achievements: [
        "Projeto de conclusão em Design de Produto Digital",
        "Estágio em agência de publicidade",
        "Monitoria em disciplinas de tipografia"
      ],
      highlights: ["Projeto premiado", "CRA 8.7"]
    }
  ];

  const courses = [
    "Google UX Design Certificate - 2022",
    "Design Systems Avançado - Design+Code - 2021",
    "Data-Driven Design - Nielsen Norman Group - 2021",
    "AI for Designers - MIT xPRO - 2020"
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-fluid-3xl font-bold text-foreground mb-4">
          Educação
        </h2>
        <p className="text-fluid-base text-muted-foreground">
          Minha formação acadêmica e certificações
        </p>
      </div>

      {/* Education Timeline */}
      <div className="space-y-8 mb-12">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            {/* Timeline line */}
            {index < education.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-px bg-border"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-4 h-4 gradient-primary rounded-full"></div>
            
            {/* Content */}
            <div className="ml-16">
              <div className="glass-card p-6 hover-glow transition-smooth">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-4 w-4 text-primary mr-2" />
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-lg">
                        {edu.type}
                      </span>
                    </div>
                    <h3 className="text-fluid-lg font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                  
                  <div className="mt-3 sm:mt-0 sm:ml-6">
                    <div className="flex items-center text-xs text-muted-foreground bg-card/50 px-3 py-2 rounded-xl">
                      <Calendar className="h-3 w-3 mr-2" />
                      {edu.period}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {edu.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-medium">
                      <Award className="h-3 w-3" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Principais Conquistas
                  </h4>
                  <div className="space-y-2">
                    {edu.achievements.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Courses */}
      <div className="glass-card p-6">
        <h3 className="text-fluid-lg font-bold text-foreground mb-4 flex items-center">
          <BookOpen className="h-4 w-4 text-primary mr-3" />
          Cursos e Certificações
        </h3>
        <div className="space-y-3">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="flex items-center p-3 bg-card/30 rounded-lg hover-glow transition-smooth"
            >
              <div className="w-2 h-2 gradient-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground text-sm">{course}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernEducation;