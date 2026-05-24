import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function About() {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* About Text */}
          <div className="mb-12">
            {portfolioData.about.description.map((para, index) => (
              <p
                key={index}
                className="text-text-light text-lg leading-relaxed mb-6"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📍', title: 'Location', value: portfolioData.location },
              { icon: '📞', title: 'Phone', value: portfolioData.phone },
              { icon: '📧', title: 'Email', value: portfolioData.email },
            ].map((info, index) => (
              <div
                key={index}
                className="p-6 bg-bg-tertiary/50 border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {info.icon} {info.title}
                </h3>
                <p className="text-text-muted">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
