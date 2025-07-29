import { GraduationCap, Calendar, Award } from "lucide-react";

const ModernEducation = () => {
  const academicEducation = [
    {
      degree: "Desenvolvimento de tecnologias digitais",
      institution: "Estácio",
      period: "2024 - 2025",
      type: "Pós-graduação",
      description: "",
      highlights: []
    },
    {
      degree: "Marketing",
      institution: "IBMR",
      period: "2020 - 2022",
      type: "Graduação",
      description: "",
      highlights: []
    },
    {
      degree: "Publicidade e propaganda",
      institution: "Estácio",
      period: "2014 - 2017",
      type: "Graduação",
      description: "",
      highlights: []
    }
  ];

  const courses = [
    {
      title: "AI for Designers",
      institution: "Interaction Design Foundation",
      period: "2025",
      description: "",
      highlights: ["AI-First","Design Prototyping","IA UX Automation"]
    },
    {
      title: "Digital Product Leadership",
      institution: "Tera",
      period: "2024",
      description: "",
      highlights: ["Product Strategy UX","Research Roadmap","Prioritization"]
    },
    {
      title: "Product Growth",
      institution: "PM3",
      period: "2023",
      description: "",
      highlights: [" Growth Strategy A/B","Testing Funnel","Optimization"]
    },
    {
      title: "Product Analytics",
      institution: "Tera",
      period: "2022",
      description: "",
      highlights: ["Amplitude Cohort","Analysis Data-Driven","Decisions"]
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