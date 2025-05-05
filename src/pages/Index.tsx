
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
