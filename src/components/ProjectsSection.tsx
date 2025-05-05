
import { useState } from 'react';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from '@/components/ui/button';

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
    tags: ["React", "Tailwind CSS", "Stripe"],
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with user authentication and real-time updates.",
    tags: ["TypeScript", "Firebase", "React"],
    category: "app",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Restaurant Landing Page",
    description: "A modern landing page for a restaurant with online reservation system and menu display.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather forecasting application that shows current and upcoming weather using public APIs.",
    tags: ["React", "API", "ChartJS"],
    category: "app",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Portfolio Template",
    description: "A customizable portfolio template for creative professionals with dark/light mode.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Budget Tracker",
    description: "A personal finance application to track expenses and visualize spending patterns.",
    tags: ["React", "ChartJS", "Firebase"],
    category: "app",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    liveUrl: "#",
    githubUrl: "#"
  }
];

// Filter categories
const categories = ["all", "web", "app", "design"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(projects);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section className="py-20 bg-secondary/50" id="projects">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold animated-element">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animated-element delay-200">
            Explore my recent work across various domains including web applications, mobile apps, and design projects.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-6 animated-element delay-400">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => handleFilterChange(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              className={`animated-element delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
