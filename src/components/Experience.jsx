import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Experience() {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience
        </h2>

        {/* Timeline */}
        <div
          className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="flex gap-6 relative">
              {/* Timeline Marker */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full relative z-10"></div>
                {index !== portfolioData.experience.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="p-6 bg-gradient-to-br from-bg-dark to-bg-tertiary border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start gap-3 mb-2">
                    <i className={`${exp.icon} text-primary text-xl mt-1`}></i>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary">
                        {exp.position}
                      </h3>
                      <p className="text-text-light font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-muted mb-3 ml-8">{exp.duration}</p>
                  <p className="text-text-light ml-8 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
