
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "HRIS Management Profressional",
      role: "Automation Lead & Solution Designer",
      company: "Central Retail Corporation Public Company Limited",
      // logoLight: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2FCRC.BK_BIG.png?alt=media&token=5c12e3d6-f972-4bee-a137-ff12b6dcafbf",
      // logoDark: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2FCRC_BK_BIG_Black.png?alt=media&token=19509bea-d71a-40a6-95bc-7fcc72c69c6e",
      period: "Feb 2023 - Present",
      location: "Hybrid (Bangkok, Thailand)",
      description: "Leading automation and digital transformation initiatives within HR, designing and implementing system integrations, and developing self-hosted automation infrastructure.",
      achievements: [
        "Designed and deployed 20+ automation services using Node.js, Python, and Power Automate, reducing manual tasks by over 70%",
        "Built integration workflows between SAP SuccessFactors and external systems, enabling automatic daily data sync and reducing manual file uploads by 60%.",
        "Developed ETL pipelines automating ingestion, cleaning, and transformation of HR data for BI dashboards",
        "Maintained self-hosted automation servers to run scheduled jobs, achieving 99.9% uptime",
        "Advised HR stakeholders on digital solution design and led new project proposals within the HRIS domain"
      ],
      technologies: ["Node.js", "Python", "Power Automate", "SAP SuccessFactors", "SQL Server", "Bash", "Docker", "WSL2", "Figma"]
    },
    {
      title: "Assistant Hiring Manager",
      role: "Recruitment Process Automation Specialist",
      company: "Ayudhya Capital Services Company Limited (Krungsri Consumer)",
      // logoLight: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2Fksc-light.png?alt=media&token=5bfdcfa8-cfb0-4b87-83ed-35fe87085a80", 
      // logoDark: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2Fksc-dark.png?alt=media&token=0ad1249f-0a4d-4b56-9045-b879d3ad707a",
      period: "Aug 2022 - Feb 2023",
      location: "Hybrid (Bangkok, Thailand)",
      description: "Handled HRIS data entry, streamlined recruitment processes through automation, and developed recruitment dashboards to support hiring operations.",
      achievements: [
        "Entered and maintained accurate new hire data in Oracle PeopleSoft for onboarding processes.",
        "Implemented Power Automate workflows to automate recruitment notifications for new hires and probation deadlines.",
        "Developed an Offer Information Form to standardize candidate data collection.",
        "Created a Recruitment Tracking system using Power Apps for better visibility into hiring pipelines.",
        "Built and maintained recruitment dashboards with Power BI to provide real-time insights."
      ],
      technologies: ["Power Automate", "Power BI", "Power Apps", "MS-SQL Server", "Excel", "Oracle PeopleSoft", "Figma"]
    },
    {
      title: "Assistant HRIS & Data Analytics Manager",
      role: "HRIS Project Manager & System Designer",
      company: "SCB Protect Company Limited",
      logo: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2FSCBPT-Logo-H.png?alt=media&token=7aeb8004-2f48-4530-a362-17090916e8b4",
      // logoDark: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2Fsbbpt_bg.png?alt=media&token=242b4a72-8384-4355-9414-634c2a660da4",
      period: "Mar 2021 - Aug 2022",
      location: "Hybrid (Bangkok, Thailand)",
      description: "Led application development projects for HR systems, collaborated with developers and vendors, and designed integrated recruitment and sales manpower solutions.",
      achievements: [
        "Gathered and analyzed HR requirements, broke down tasks and features, and facilitated requirement meetings with stakeholders.",
        "Managed project collaboration with in-house developers to define features, prioritize backlogs, and plan releases.",
        "Designed workflows for Sales Manpower system to track recruitment and integrate with systems including Workday, myHR, Salesforce, and internal insurance platforms.",
        "Coordinated with technology vendors on solution design and implementation strategy for HR tech projects.",
        "Developed ad hoc SQL queries for sales campaign analytics and reporting for HR and sales teams.",
        "Cleansed and validated sales manpower data to ensure accuracy across integrated systems.",
        "Built dashboards for HR and operations teams to monitor recruitment progress and sales agent performance.",
        "Successfully deployed Sales Manpower System, serving as an HR ERP-like platform for recruitment and sales operations."
      ],
      technologies: ["MS-SQL Server", "Excel", "Power BI", "Project Management Tools", "Workday", "myHR", "Figma"]
    },
    {
      title: "HRIS & Solutions Officer",
      company: "NL Development Public Company Limited",
      role: "HRIS Implementation & Recruitment Tech Specialist",
      // logo: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2Fnl_development_public_company_limited_logo.jpeg?alt=media&token=c85a20f8-7c34-40c4-95ac-edc8dea48587",
      // logoDark: "https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2Fsbbpt_bg.png?alt=media&token=242b4a72-8384-4355-9414-634c2a660da4",
      period: "Mar 2018 - Mar 2021",
      location: "On-site (Bangkok, Thailand)",
      description: "Implemented HR systems, designed recruitment and onboarding solutions, and introduced technology improvements to enhance HR processes.",
      achievements: [
        "Implemented Recruitment Module of the HR system, including data cleansing for successful migration.",
        "Developed Google App Script-based application forms for job applications and hiring data collection.",
        "Built recruitment dashboards with Power BI to monitor hiring KPIs and progress.",
        "Researched and designed technology solutions to streamline internal HR workflows.",
        "Collaborated on creating Work Instructions for Safety and Store operations teams.",
        "Implemented internal communication platform (@work by Eunite) to improve company-wide messaging.",
        "Managed recruitment budgets and negotiated with job portal vendors such as JobsDB and Jobtopgun.",
        "Analyzed employee engagement data to support HR decision-making."
      ],
      technologies: ["Google Sheets", "Power BI", "Google Data Studio", "Google App Script", "Trello"]
    }

  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary font-mono">03.</span> Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-40 bg-border hidden md:block"></div>
              )}

              <div className="flex items-start gap-6 mb-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full flex-shrink-0 mt-2">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>

                <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle className="text-lg font-bold">{exp.company}</CardTitle>
                      <Badge variant="outline" className="w-fit text-sm">{exp.period}</Badge>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground'>
                      <span className="font-semibold text-primary">{exp.title}</span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    {exp.role && (
                      <div className='flex items-center gap-2 text-muted-foreground mt-1'>
                        <span className='font-semibold'>Role:</span>
                        <span>{exp.role}</span>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start text-muted-foreground">
                            <span className="text-primary mr-2 mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
