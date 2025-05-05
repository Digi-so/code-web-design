
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText, Graduation, MapPin } from 'lucide-react';

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="text-center space-y-4 max-w-3xl mx-auto animated-element">
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Learn more about my journey, experience, and the passion that drives me.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-primary/10 rounded-lg z-0"></div>
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-secondary border border-border rounded-lg z-10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl text-muted-foreground font-heading">Profile Image</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Frontend Developer & UI Designer</h2>
              <p className="text-muted-foreground">
                I'm a passionate frontend developer with a strong focus on creating intuitive and engaging user experiences. With over 5 years of experience, I specialize in building responsive websites and web applications that not only look great but also provide seamless functionality.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with creative problem-solving to deliver solutions that exceed client expectations. I stay current with the latest technologies and best practices to ensure my work is modern, efficient, and maintainable.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-primary" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>Available for Freelance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Graduation size={18} className="text-primary" />
                  <span>Computer Science Degree</span>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                role: "Senior Frontend Developer",
                company: "Tech Solutions Inc.",
                period: "2020 - Present",
                description: "Lead frontend development for various client projects, mentored junior developers, and implemented modern web technologies to enhance user experiences."
              },
              {
                role: "Frontend Developer",
                company: "Digital Creations",
                period: "2018 - 2020",
                description: "Developed responsive websites and applications, collaborated with UI/UX designers, and implemented performance optimizations for existing web projects."
              },
              {
                role: "Web Developer",
                company: "Creative Studio",
                period: "2016 - 2018",
                description: "Built and maintained websites for clients across diverse industries, ensured cross-browser compatibility, and implemented SEO best practices."
              }
            ].map((job, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-xl">{job.role}</h3>
                    <p className="text-primary">{job.company}</p>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                degree: "Master of Computer Science",
                institution: "Technology University",
                period: "2014 - 2016",
                description: "Specialized in human-computer interaction and web technologies, with a thesis focused on improving user experience in web applications."
              },
              {
                degree: "Bachelor of Computer Science",
                institution: "State University",
                period: "2010 - 2014",
                description: "Studied software development fundamentals, data structures, algorithms, and completed various web development projects."
              }
            ].map((education, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-xl">{education.degree}</h3>
                    <p className="text-primary">{education.institution}</p>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">
                    {education.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Create Something Amazing</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Ready to discuss your project needs? I'd love to hear from you and explore how we can work together.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="mt-6"
            asChild
          >
            <Link to="/contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
