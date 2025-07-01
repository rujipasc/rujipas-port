
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8 flex justify-center items-center">
            <Avatar className="w-32 h-32 flex-shrink-0 aspect-square mt-4 shadow-lg ring-4 ring-primary/20 overflow-hidden">
              <AvatarImage src="/rujipas.jpeg" alt="Rujipas Chorfah" className='object-cover w-full h-full object-[center_5%]' />
              <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">
                AT
              </AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Rujipas Chorfah
          </h1>
          
          <div className="text-lg md:text-xl text-muted-foreground mb-6">
            <span className="text-primary font-semibold">HR Tech Solutions</span> |{' '}
            <span className="text-primary font-semibold">System Integration</span> |{' '}
            <span className="text-primary font-semibold">Automation Engineer</span>
          </div>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed">
            Experienced in HR Tech and Automation, I help organizations optimize operations  
            through system integration and digital tools tailored to real HR needs.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={scrollToAbout} className="w-full sm:w-auto shadow-lg">
              Explore My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex space-x-3">
              <a href="https://github.com/rujipasc" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="shadow-sm">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/rujipasc/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="shadow-sm">
                <Linkedin className="w-4 h-4" />
              </Button>
              </a>
              <a href="mailto:rujipas.jayz@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="shadow-sm">
                <Mail className="w-4 h-4" />
              </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="animate-fade-in w-full max-w-4xl mx-auto" style={{ animationDelay: '0.4s' }}>
          <div className="w-full text-left p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border shadow-sm">
            <div className="font-mono text-sm text-muted-foreground">
              <div className="mb-2 text-primary">{'{'}</div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-primary">"role":</span>
                  <span className="ml-2">"HR Tech & Automation Engineer",</span>
                </div>
                <div>
                  <span className="text-primary">"experience":</span>
                  <span className="ml-2">"7+ years",</span>
                </div>
                <div>
                  <span className="text-primary">"specialization":</span>
                  <span className="ml-2">["Integration", "Automation", "Internal Tools"]</span>
                </div>
                <div>
                  <span className="text-primary">"stack":</span>
                  <span className="ml-2">["Node.js", "Python", "SQL", "NoSQL"]</span>
                </div>
                <div>
                  <span className="text-primary">"fun_fact":</span>
                  <span className="ml-2">"My cronjobs never sleep."</span>
                </div>
              </div>
              <div className="text-primary">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
