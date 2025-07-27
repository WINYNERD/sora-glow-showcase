import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      type: "graduation",
      title: "Bacharelado em Design",
      institution: "Universidade Federal de Design",
      period: "2015 - 2019",
      description: "Especialização em Design de Interação e Comunicação Visual"
    },
    {
      type: "postgrad",
      title: "Pós-graduação em UX Design",
      institution: "Instituto de Tecnologia e Design",
      period: "2020 - 2021",
      description: "Foco em pesquisa de usuário, arquitetura da informação e design de serviços"
    }
  ];

  const courses = [
    "Design System Advanced - Design+Code",
    "User Research Fundamentals - Nielsen Norman Group",
    "Figma Advanced Prototyping - Figma Academy",
    "Design Leadership - IDEO U",
    "Service Design Thinking - Copenhagen Institute"
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "graduation":
        return <GraduationCap className="h-6 w-6 text-primary-foreground" />;
      case "postgrad":
        return <Award className="h-6 w-6 text-primary-foreground" />;
      default:
        return <BookOpen className="h-6 w-6 text-primary-foreground" />;
    }
  };

  return (
    <section id="education" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Educação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Formação acadêmica e desenvolvimento contínuo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Formal Education */}
          <div className="mb-12 space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card hover-glow transition-smooth border-border/50">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                        {getIcon(edu.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{edu.title}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{edu.period}</Badge>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Courses */}
          <Card className="shadow-card hover-glow transition-smooth border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Cursos Relevantes</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;