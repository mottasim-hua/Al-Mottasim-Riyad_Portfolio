import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Certifications() {
  const [certificates, setCertificates] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load certificates from portfolioData
    // Certificates should have: title, provider, date, image (optional)
    setCertificates(portfolioData.certifications || []);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById('certifications');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-20 px-6 bg-bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>

        <p className="text-center text-text-muted mb-16 text-lg">
          Professional certifications and recognized achievements
        </p>

        {/* Certificates Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {certificates.length > 0 ? (
            certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:scale-105"
              >
                {/* Certificate Image */}
                {cert.image && (
                  <div className="relative h-64 bg-bg-dark overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Certificate Info */}
                <div className={`p-4 ${cert.image ? '' : 'py-6'}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <i
                        className={`${cert.icon || 'fas fa-certificate'} text-lg`}
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {cert.provider && (
                    <p className="text-text-muted text-sm mb-1">
                      {cert.provider}
                    </p>
                  )}

                  {cert.date && (
                    <p className="text-text-muted text-xs">{cert.date}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="inline-block p-8 bg-primary/10 border-2 border-dashed border-primary/30 rounded-lg">
                <i className="fas fa-certificate text-4xl text-primary mb-4 block"></i>
                <p className="text-text-light text-lg mb-2">
                  No certificates added yet
                </p>
                <p className="text-text-muted">
                  Update certifications in{' '}
                  <code className="bg-bg-dark px-2 py-1 rounded">
                    src/data/portfolioData.js
                  </code>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
