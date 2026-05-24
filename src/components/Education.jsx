import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Education() {
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20 px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Education
        </h2>

        {/* Timeline */}
        <div
          className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="flex gap-6 relative">
              {/* Timeline Marker */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full relative z-10"></div>
                {index !== portfolioData.education.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8 flex-1">
                <div className="p-6 bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-text-light mb-1">
                    <span className="font-semibold">📍 {edu.institution}</span>
                  </p>
                  <p className="text-text-muted mb-2">{edu.duration}</p>
                  <p className="text-accent font-semibold">GPA: {edu.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
