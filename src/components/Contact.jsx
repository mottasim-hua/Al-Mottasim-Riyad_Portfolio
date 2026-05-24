import { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-text-muted text-lg mb-16 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all">
                  <i className="fas fa-envelope text-primary text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-text-light mb-1">Email</h4>
                  <p className="text-text-muted hover:text-primary transition-colors">
                    {portfolioData.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.phone}`}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all">
                  <i className="fas fa-phone text-primary text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-text-light mb-1">Phone</h4>
                  <p className="text-text-muted hover:text-primary transition-colors">
                    {portfolioData.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-text-light mb-1">
                    Location
                  </h4>
                  <p className="text-text-muted">{portfolioData.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-semibold text-text-light mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {portfolioData.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-bg-dark transition-all duration-300 transform hover:scale-110"
                      title={social.name}
                    >
                      <i className={`${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6"
          >
            {/* Success Message */}
            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg flex items-center gap-3 animate-fadeInUp">
                <i className="fas fa-check-circle"></i>
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            {/* Name Field */}
            <div>
              <label className="block text-text-light font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-secondary border border-primary/30 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-primary/100 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-text-light font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-secondary border border-primary/30 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-primary/100 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-text-light font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-bg-secondary border border-primary/30 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-primary/100 transition-all duration-300"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-text-light font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-bg-secondary border border-primary/30 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-primary/100 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-bg-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner animate-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
