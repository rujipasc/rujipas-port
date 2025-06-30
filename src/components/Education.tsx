
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Industrial and Organizational Psychology (Incomplete)",
      school: "Kasetsart University",
      period: "2019 - 2021",
      location: "Bangkok, Thailand",
      description: "Completed all coursework with a focus on HR analytics, organizational behavior, and people systems design. Did not complete the final Independent Study (IS) required for graduation.",
      gpa: "3.29/4.0",
      coursework: ["Organizational Psychology",
        "Leadership for Change and Development",
        "Psychology of Team Effectiveness",
        "Personnel Psychology",
        "Industrial and Organizational Psychology",
        "Psychological Testing and Assessment",
        "Research Methodology in Psychology",
        "Statistical Analysis in Psychology",
      ]
    },
    {
      degree: "Bachelor of Humanities and Social Science in IO Psychology",
      school: "Suan Dusit University",
      period: "2012 - 2017",
      location: "Bangkok, Thailand",
      description: "Focused on Human Resource Management and Organizational Psychology, with electives in technology and data analysis.",
      gpa: "2.3/4.0",
      coursework: ["Personnel Psychology", "Statistics", "Research Methodology", "Psychological Testing", "Counseling Psychology"]
    }
  ];

  const certifications = [
    {
      name: "Information Technology Specialist in Artificial Intelligence",
      issuer: "Certiport - A Pearson VUE Business",
      year: "2025",
      credentialId: "wqGr7-2Fpd"
    },
    {
      name: "Safety Officers in Management Level",
      issuer: "Central People Development Center Limited.",
      year: "2024",
      credentialId: "67-401-20245728"
    },
    {
      name: "Data Analyst in SQL",
      issuer: "DataCamp",
      year: "2023",
      credentialId: "#340,348"
    },
    {
      name: "SQL Server Developer",
      issuer: "DataCamp",
      year: "2022",
      credentialId: "#276,031"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary font-mono">05.</span> Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.degree + edu.school} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                      <Badge variant="outline" className="w-fit">{edu.period}</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-semibold text-primary">{edu.school}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Professional Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <Card key={cert.credentialId} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg leading-tight">{cert.name}</h4>
                      <Badge variant="outline" className="text-xs ml-2">{cert.year}</Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Learning */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Card className="bg-muted/20 border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  I'm dedicated to expanding my skill set in automation, cloud technologies, and modern development practices.
                  Currently focusing on enhancing my expertise in container orchestration, advanced RPA frameworks, and building
                  scalable AI-powered solutions to drive digital transformation across business processes.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  <Badge variant="outline">Container Orchestration (Docker, Kubernetes)</Badge>
                  <Badge variant="outline">Advanced RPA Frameworks</Badge>
                  <Badge variant="outline">Cloud Architecture (GCP/Azure)</Badge>
                  <Badge variant="outline">AI Integration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
