
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { title, description, tags, imageUrl, liveUrl, githubUrl } = project;

  // Default images for different project categories
  const getDefaultImage = () => {
    switch (project.category) {
      case 'web':
        return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6';
      case 'app':
        return 'https://images.unsplash.com/photo-1518770660439-4636190af475';
      default:
        return 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7';
    }
  };

  return (
    <div 
      className={cn(
        "bg-card border border-border rounded-lg overflow-hidden group transition-all hover:shadow-lg",
        className
      )}
    >
      <AspectRatio ratio={16/9}>
        <img 
          src={imageUrl || getDefaultImage()} 
          alt={`${title} project thumbnail`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </AspectRatio>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-secondary px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild className="gap-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="secondary" size="sm" asChild className="gap-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
