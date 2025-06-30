
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    "20+ Automation Bots in Production",
    "Hands-on with Node.js & Python",
    "System & API Integration Lead",
    "ETL & HR Data Engineering",
    "From Recruitment to HR Tech"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary font-mono">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    I began my career in recruitment, where I spent 3 years mastering end-to-end hiring processes.
                    Over time, I transitioned into HRIS and automation, combining my HR knowledge with hands-on
                    technical skills to design scalable internal systems, bots, and integration workflows.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Today, I specialize in building HR automation tools, internal portals, and data pipelines using
                    Node.js, Python, Power Automate, SQL, and Bash. My focus is on solving real business problems—automating
                    employee data workflows, bridging HRIS with IT service platforms, and streamlining repetitive operations.
                  </p>

                  <div className="pt-4">
                    <h3 className="font-semibold mb-4 text-lg">Key Achievements:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">▸</span>{' '}
                        Developed and deployed 20+ automation bots to streamline HR processes and reduce manual tasks
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">▸</span>{' '}
                        Integrated SuccessFactors with Freshservice to streamline onboarding tickets and notifications
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">▸</span>{' '}
                        Created internal web tools with Role-Based Permission (RBP) for secure file processing
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">▸</span>{' '}
                        served as technical advisor and solution designer for HRIS and automation projects
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-3 text-sm justify-center bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 p-6 bg-muted/20 rounded-lg border border-border">
                <h4 className="font-mono text-primary mb-3">Current Focus</h4>
                <p className="text-muted-foreground">
                  Designing internal HR tools powered by automation and AI — from employee self-service systems
                  to secure document workflows and smart data pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
