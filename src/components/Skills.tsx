
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Frameworks",
      skills: ["React", "Next.js", 'Tailwindcss', 'Shadcn/ui', 'DaisyUI'],
      icon: "🎨"
    },
    {
      title: "Backend & Integration",
      skills: ["Node.js",'bun.js', "Express.js", "REST APIs", "Python", "MongoDB"],
      icon: "🛠️"
    },
    {
      title: "Automation & AI",
      skills: ["Power Automate", "Ollama", "Chatbot Development", "Cron Jobs", "LLM Integration", "Apache Airflow"],
      icon: "🤖"
    },
    {
      title: "Data & Analytics",
      skills: ["Power BI", "Looker Studio", "Excel/Google Sheets", "MySQL", "PostgreSQL", "MS-SQL Server"],
      icon: "📊"
    },
    {
      title: "HR Technology",
      skills: ["Successfactor", "Workday", "Freshservice", "PeopleSoft"],
      icon: "👥"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "GCP", "Microsoft Graph", "Postman", "Plane (Self-Hosted)"],
      icon: "🛠️"
    },
    {
      title: "Dev Environment",
      skills: ["WSL2 + Ubuntu", "PM2", "bash Script", "Nginx"],
      icon: "🧱"
    },
    {
      title: "Business Skills",
      skills: ["Project Management", "Process Optimization", "Lean Six Sigma", "Agile Methodologies"],
      icon: "📈"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary">02.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-soft transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-xs bg-background/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 border-border/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block p-6 bg-card/50 backdrop-blur-sm rounded-lg border shadow-soft">
            <h3 className="font-mono text-primary mb-3 font-semibold">{'{ "philosophy": '}</h3>
            <p className="text-muted-foreground italic max-w-2xl">
              "Great technology should be simple enough for anyone to use. I design systems that are intuitive, 
                inclusive, and accessible—empowering all users regardless of their technical background."
            </p>
            <div className="font-mono text-primary mt-3 font-semibold">{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
