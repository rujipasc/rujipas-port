
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CRC Upload Portal",
      description: "Web application for internal teams to securely upload documents and files for centralized processing. Includes user authentication, upload tracking, and error handling, built with React frontend and Node.js backend, connected to internal storage systems.",
      technologies: ["React", "Node.js", "Express", "Docker", "Vercel"],
      repo: "",
      demo: "https://centralretail-upload-portal.vercel.app/login",
      category: "Web Application",
      features: [
        "Secure user login system",
        "Drag-and-drop file upload interface",
        "Real-time upload progress tracking",
        "Server-side validation and error handling",
        "Database logging of file metadata and status",
        "Containerized deployment with Docker and deployment to Vercel",
        "Responsive design for desktop and mobile",
        "Integration with internal storage systems for file management"
      ]
    },
    {
      title: "FleetCard Registration API Automation",
      description: "Automated API integration service built with Bun and TypeScript to streamline employee onboarding. Executes stored procedures, fetches employee data from MySQL, calls external APIs to generate registration magic links, and updates log statuses with retry mechanisms.",
      technologies: ["Bun", "TypeScript", "MySQL", "Axios", "dotenv"],
      repo: "https://github.com/rujipasc/fleetcard-registration-api",
      demo: "",
      category: "Automation",
      features: [
        "Execute stored procedures for data preparation",
        "Fetch pending employee records from MySQL",
        "Call external API with retry logic to create registration magic links",
        "Update database log status upon successful API calls",
        "Designed for scheduled execution with cron or task schedulers"
      ]
    },
    {
      title: "Auto Calculate Incentive Processing",
      description: "End-to-end automation system for HR incentive calculation. Fetches raw CSV files from SFTP, processes and transforms data, ingests records into MySQL, generates Excel reports, and transfers processed files to OneDrive using Power Automate, reducing manual workload by 80%.",
      technologies: ["Node.js", "MySQL", "SFTP", "Power Automate"],
      repo: "",
      demo: "",
      category: "Automation",
      features: [
        "Scheduled fetching of incentive and schedule files from SFTP",
        "Data transformation including combining, splitting, and date formatting",
        "Automated ingestion of processed data into MySQL",
        "Execution of stored procedures and summary queries",
        "Excel report generation for payroll and scheduling",
      ]
    },
    {
      title: "Upload API Service",
      description: "Backend API for the Central Retail Upload Portal. Provides secure RESTful endpoints for user authentication, file metadata management, file upload processing, and integration with internal storage systems. Includes rate limiting, security best practices with Helmet, and detailed logging with Morgan.",
      technologies: ["Node.js", "Express", "MongoDB Atlas", "JWT", "Helmet", "Docker", "GCP"],
      repo: "",
      demo: "",
      category: "Web API",
      features: [
        "JWT-based user authentication",
        "Role-based access control for protected endpoints",
        "Secure REST API with rate limiting and Helmet security headers",
        "Endpoints for file upload, retrieval, and metadata management",
        "Detailed request/response logging using Morgan",
        "Graceful shutdown and retry mechanism for MongoDB connection",
        "Containerized deployment with Docker and deployment to GCP"
      ]
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "Automation": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Web API": "bg-black text-white border-red-500/30",
      "Web Application": "bg-orange-500/20 text-orange-300 border-orange-500/30",
      // "Platform": "bg-orange-500/20 text-orange-300 border-orange-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary font-mono">04.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up h-full flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <Badge className={`text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-1">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-sm text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

              <div className="flex gap-2 pt-2">
                {project.repo ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.repo, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 opacity-70 cursor-not-allowed"
                    title="Repository is private. Request access if needed."
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Private Repo
                  </Button>
                )}

                {project.demo ? (
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="flex-1 opacity-70 cursor-not-allowed"
                    title="Demo unavailable. Contact for more info."
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Request Access
                  </Button>
                )}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="inline-block p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            <p className="text-muted-foreground mb-4">
              These projects represent a combination of internal tools, automation solutions, and innovative HR technology implementations.
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open("https://github.com/rujipasc?tab=repositories", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
