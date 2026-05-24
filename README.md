# 🚀 Al Mottasim Riyad - Professional Portfolio

A modern, responsive, and fully functional personal portfolio website built with **React.js** and **Tailwind CSS**.

## ✨ Features

- 🎨 **Modern Design**: Beautiful dark theme with cyan and purple gradient accents
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight**: Built with Vite for optimal performance
- 🎯 **Smooth Animations**: Scroll-triggered fade-in effects and transitions
- 📦 **Component-Based**: Modular React architecture for easy maintenance
- 🎓 **Dynamic Certifications**: Automatically loads certificate images from folder
- 📧 **Contact Form**: Fully functional contact form with validation
- 🔗 **Social Integration**: Links to LinkedIn, GitHub, and Email

## 📁 Project Structure

```
Myportfolio/
├── public/
│   ├── index.html
│   └── images/
│       ├── profile/
│       │   └── profile.jpg          # Your profile picture
│       └── certifications/          # Add certificate images here
├── src/
│   ├── components/
│   │   ├── Navigation.jsx           # Top navigation bar
│   │   ├── Hero.jsx                 # Hero/landing section
│   │   ├── About.jsx                # About section
│   │   ├── Skills.jsx               # Skills section
│   │   ├── Projects.jsx             # Featured projects
│   │   ├── Education.jsx            # Education timeline
│   │   ├── Certifications.jsx       # Certifications gallery
│   │   ├── Contact.jsx              # Contact form
│   │   └── Footer.jsx               # Footer section
│   ├── data/
│   │   └── portfolioData.js         # Portfolio content data
│   ├── App.jsx                      # Main App component
│   ├── index.jsx                    # React entry point
│   └── index.css                    # Global styles
├── package.json                     # Dependencies & scripts
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.js                  # Vite configuration
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

   The portfolio will open automatically at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates an optimized `dist` folder for deployment.

## 📸 Setting Up Your Profile Picture

Your profile picture (`profile.jpg`) is already set up in `/public/images/profile/`

## 🎓 Adding Certificates

To display your certificates:

1. **Save certificate images** to: `/public/images/certifications/`
2. **Supported formats**: PNG, JPG, JPEG, GIF, WebP
3. **File naming**: Use clear names (e.g., `python-certification.png`, `react-course.jpg`)
4. Certificates will automatically appear in the Certifications section

### Example:

```
public/images/certifications/
├── data-analyst-sql.png
├── web-development.jpg
└── machine-learning-basics.png
```

## 📝 Editing Content

All portfolio content is stored in `/src/data/portfolioData.js`

### To update:

- **Personal Info**: Edit name, title, contact details
- **About**: Update your bio and description
- **Skills**: Add/remove skill categories
- **Projects**: Modify project details and technologies
- **Education**: Update education history
- **Social Links**: Add your LinkedIn and GitHub profiles

Example:

```javascript
export const portfolioData = {
  name: 'Your Name',
  email: 'your.email@example.com',
  // ... more content
};
```

## 🎨 Customization

### Colors & Theme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#00d9ff',        // Cyan
  secondary: '#ff006e',       // Pink
  accent: '#8338ec',          // Purple
  // ... customize as needed
}
```

### Font & Typography

Modify in `tailwind.config.js` or `src/index.css`

## 📤 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Deploy contents of 'dist' folder
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS
- **Vite** - Build tool & dev server
- **Font Awesome 6** - Icons
- **JavaScript ES6+** - Modern JavaScript

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Sections

- **Hero**: Eye-catching landing section with CTA buttons
- **About**: Personal introduction and contact information
- **Skills**: Organized skill categories with tags
- **Projects**: Featured project showcase with details
- **Education**: Timeline view of educational background
- **Certifications**: Gallery of certificate images
- **Contact**: Contact form and social media links
- **Footer**: Quick links and copyright information

## 💡 Tips

- Keep certificate images under 2MB for optimal loading
- Use descriptive alt text for accessibility
- Test on mobile devices before deploying
- Update portfolio content regularly

## 📄 License

This project is open source and free to use for your personal portfolio.

## 🤝 Support

For issues or questions, feel free to reach out via:

- Email: amriyad682@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

**Made with ❤️ by Al Mottasim Riyad**
