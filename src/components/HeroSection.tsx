
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animated-element">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Frontend Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Creating <span className="text-primary">beautiful</span> digital experiences
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              I design and develop responsive websites and web applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Let's work together <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link to="/about">
                  Learn more about me
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animated-element delay-200 h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-primary/10 rounded-lg z-0"></div>
            <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-secondary border border-border rounded-lg z-10 overflow-hidden">
              <AspectRatio ratio={16/9} className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Modern laptop with code on screen" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
