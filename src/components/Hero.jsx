import { portfolioData } from '../data/portfolioData';

function Hero({ onNavClick }) {
  const scrollToSection = (sectionId) => {
    onNavClick(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-tertiary to-bg-dark flex items-center justify-center pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {portfolioData.name}
            </h1>
            <p className="text-2xl md:text-3xl text-text-muted mb-6">
              {portfolioData.title}
            </p>
            <p className="text-text-light text-lg mb-8 leading-relaxed max-w-2xl">
              {portfolioData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-bg-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <a
                href={portfolioData.resume.path}
                download={portfolioData.resume.fileName}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                title="Download my resume"
              >
                <i className="fas fa-download"></i>
                {portfolioData.resume.downloadText}
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {portfolioData.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-bg-dark transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center animate-fadeIn">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover border-2 border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-text-muted text-sm">Scroll to explore</span>
          <i className="fas fa-arrow-down text-primary"></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;
