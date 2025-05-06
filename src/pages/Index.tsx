import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      
      {/* Skills Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in front-end development with expertise in modern frameworks and libraries.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <Avatar className="h-40 w-40 border-4 border-primary/20">
              <AvatarImage 
                src="./lovable-uploads/53d62265-fa15-4f27-804f-98fb8f5a5d4a.png" 
                alt="Profile" 
                className="object-cover"
              />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            
            <div className="space-y-4 max-w-2xl">
              <h3 className="text-2xl font-semibold">A passionate developer from Nairobi</h3>
              <p className="text-muted-foreground">
                With a focus on creating elegant, efficient, and user-friendly web applications, 
                I bring designs to life with clean code and modern technologies. I'm dedicated to 
                continuous learning and keeping up with the latest industry trends.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", 
              "React", "Next.js", "Tailwind CSS", "Node.js",
              "Git", "Figma", "Responsive Design", "API Integration"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-4 text-center transition-all hover:shadow-md hover:border-primary"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Interested in collaborating on a project? I'm always open to discussing new opportunities and ideas.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="mt-6"
            asChild
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
