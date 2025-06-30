
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Download, MapPin, Phone } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rujipas.jayz@gmail.com",
      href: "mailto:rujipas.jayz@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+66(80)-078-9761",
      href: "tel:+66800789761"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangkok, Thailand",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rujipasc",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rujipasc",
      color: "hover:text-gray-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rujipas.jayz@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-primary font-mono">06.</span> Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="max-w-3xl mx-auto flex justify-center">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always open to exploring new opportunities, innovative tech projects, or collaborations in automation,
                  cloud platforms, and AI integration. Whether you're looking to streamline processes, build scalable internal tools,
                  or discuss how technology can transform your business, let’s connect!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="font-medium hover:text-primary transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Connect Online</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:border-primary/50 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Download Resume</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button asChild className="w-full">
                    <a
                      href="https://firebasestorage.googleapis.com/v0/b/cg-ses-files-upload.appspot.com/o/hostingImage%2Frujipas_cv.pdf?alt=media&token=adb7a443-4b97-48f4-9605-862215d43178"
                      download="rujipas_cv.pdf"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS.{' '}
            <span className="text-primary">{'<>'}</span>{' '}
            Designed & Developed by Rujipas Chorfah
          </p>
          <div className="mt-4 font-mono text-sm text-muted-foreground">
            <span className="text-primary">{'{'}</span>{' '}
            "status": "available_for_opportunities"{' '}
            <span className="text-primary">{'}'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
