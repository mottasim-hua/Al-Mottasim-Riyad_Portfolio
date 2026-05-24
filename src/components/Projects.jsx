import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className={`p-8 bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {project.image && (
                <div className="mb-6 overflow-hidden rounded-lg border border-primary/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary flex-1">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="ml-4 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium whitespace-nowrap">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-text-light mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Award/Info */}
              {project.award && (
                <div className="mb-6 p-3 bg-primary/10 border-l-4 border-primary rounded">
                  <p className="text-primary font-semibold">
                    <strong>Award:</strong> {project.award}
                  </p>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-text-light mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-text-muted flex items-center gap-2"
                    >
                      <span className="text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-text-light mb-3">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
