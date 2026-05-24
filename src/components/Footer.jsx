function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-primary/10 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              AMR
            </h3>
            <p className="text-text-muted">
              Computer Science Student | Web Developer | Problem Solver
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Home',
                'About',
                'Skills',
                'Projects',
                'Certifications',
                'Contact',
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-text-light mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:amriyad682@gmail.com"
                  className="text-text-muted hover:text-primary transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-envelope"></i> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-8">
          {/* Copyright */}
          <div className="text-center text-text-muted text-sm">
            <p>© {currentYear} Al Mottasim Riyad. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Built with <span className="text-primary">❤</span> using React.js
              & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
