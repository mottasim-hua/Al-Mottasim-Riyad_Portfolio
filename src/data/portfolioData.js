// Portfolio data for Al Mottasim Riyad

export const portfolioData = {
  name: 'Hello I\'m Al Mottasim Riyad',
  title: 'Final Year Computer Science Student at United International University',
  subtitle:
    'Passionate about solving problems with code and creating innovative solutions',
  location: 'Notun Bazar, Badda, Dhaka',
  phone: '01302492682',
  email: 'amriyad682@gmail.com',
  profileImage: '/images/profile/profile.jpg',

  // Resume
  resume: {
    fileName: 'Al mottasim riyad Resume.pdf',
    path: '/Al mottasim riyad Resume.pdf',
    downloadText: 'Download My Resume',
  },

  // Social Links
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/al-mottasim-riyad-494b9b383',
      icon: 'fab fa-linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mottasim-hua',
      icon: 'fab fa-github',
    },
    {
      name: 'Email',
      url: 'mailto:amriyad682@gmail.com',
      icon: 'fas fa-envelope',
    },
  ],

  // About Section
  about: {
    title: 'About Me',
    description: [
      "I’m Al Mottasim Riyad, a final-year Computer Science student at United International University. I’m passionate about learning new technologies, solving problems, and continuously improving my coding skills. I am interested in Artificial Intelligence and Machine Learning.",
      "With a strong foundation in Data Structures, Algorithms, and Web Development, I love building applications that solve real-world problems. I'm always eager to take on new challenges and collaborate with talented developers to create impactful solutions.",
    ],
  },

  // Skills Section
  skills: [
    {
      category: 'Programming Languages',
      items: ['C', 'C++', 'Java', 'JavaScript'],
    },
    {
      category: 'Web Development',
      items: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'React.js'],
    },
    {
      category: 'Tools & Technologies',
      items: ['Git & GitHub', 'VS Code', 'Arduino & ESP32', 'MySQL'],
    },
    {
      category: 'Computer Science',
      items: ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS'],
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Teamwork', 'Time Management', 'Communication'],
    },
    {
      category: 'Languages',
      items: ['Bangla', 'English'],
    },
  ],

  interests:
    'Artificial Intelligence | Machine Learning | Development',

  // Projects Section
  projects: [
    {
      id: 1,
      title: 'Smart Home',
      image: '/images/certifications/SmartHome.jpg',
      description:
        'An IoT-based smart home project that integrates Smart door, automated lighting, water pump management, gas leakage detection, and rain sensing features.',
      technologies: [
        'ESP32',
        'Servo Motor',
        'MQ2 Gas Sensor',
        'Rain Sensor',
        'LED Light',
        'Water Level Sensor',
        'WiFi Module',
      ],
      features: [
        'Smart Door System',
        'Smart Lighting Control',
        'Smart Water Pump Management',
        'Gas Leakage Detection',
        'Rain Detection Sensor',
      ],
    },
    {
      id: 2,
      title: 'SaftyNet - Women Security Application',
      image: '/images/certifications/SaftyNet.png',
      badge: '1st Runner-up',
      description:
        "A comprehensive security application designed for women's safety with real-time emergency alerts, GPS location sharing, and quick contact access features.",
      award: '1st Runner-up at UIU CSE Project Show',
      technologies: ['JavaScript', 'React Native', 'PHP', 'SQLite'],
      features: [
        'Emergency Alert System',
        'Real-time Location Sharing',
        'Quick Contact Access',
      ],
    },
    {
      id: 3,
      title: 'HealthyLife - Personalized Diet Recommendation',
      image: '/images/certifications/DietSystem.png',
      badge: 'Full Stack',
      description:
        'A comprehensive health management platform where users track food intake, receive personalized diet plans with calorie alerts, and interact with professional dietitians.',
      features: [
        'User food tracking & intake dashboard',
        'Personalized diet plans & recommendations',
        'Calorie alerts & daily reports',
        'Dietitian feedback system',
        'Admin management panel',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL'],
    },
  ],

  // Education Section
  education: [
    {
      degree: 'BSc in Computer Science & Engineering',
      institution: 'United International University, Dhaka',
      duration: 'September 2022 - Present',
      gpa: '3.20',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Shaheed Buddijibi Government College, Rajshahi',
      duration: 'Completed in 2021 | Rajshahi Board',
      gpa: '5.00',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution:
        'Shaheed Colonel Kazi Emdadul Haque Public School, Rajshahi',
      duration: 'Completed in 2019 | Rajshahi Board',
      gpa: '4.94',
    },
  ],

  // Experience Section
  experience: [
    {
      position: 'Campus Ambassador',
      company: 'Technonext Academy',
      duration: 'Present',
      description:
        'Representing and promoting Technonext Academy on campus, organizing workshops and events, and connecting students with learning opportunities.',
      icon: 'fas fa-user-tie',
    },
  ],

  // Certifications with images - COMPLETE LIST
  certifications: [
    {
      id: 1,
      title: 'Computer Office and Package and Internet Browsing',
      provider: "BSCIC Rajshahi",
      date: 'July 2019',
      icon: 'fas fa-desktop',
      image: '/images/certifications/BSCIC.png',
    },
    {
      id: 2,
      title: 'Data Analyst with SQL & Python',
      provider: "Farhan's Academy",
      date: 'October 2024',
      icon: 'fas fa-chart-line',
      image: '/images/certifications/Data Analyst with SQL.jpg',
    },
    {
      id: 3,
      title: 'Artificial Intelligence & Machine Learning Fundamentals',
      provider: 'Grameenphone Academy',
      date: 'December 2024',
      icon: 'fas fa-robot',
      image:
        '/images/certifications/Arttifial Inteligence and machine learning.png',
    },
    {
      id: 4,
      title: 'Career with AI',
      provider: 'Grameenphone Academy',
      date: 'December 2024',
      icon: 'fas fa-brain',
      image: '/images/certifications/career with ai.png',
    },
    {
      id: 5,
      title: 'UX Research Strategy with AI',
      provider: 'Grameenphone Academy',
      date: 'February 2026',
      icon: 'fas fa-magnifying-glass-chart',
      image: '/images/certifications/UX research.png',
    },
    {
      id: 6,
      title: 'Art of Communication',
      provider: 'Grameenphone Academy',
      date: 'March 2026',
      icon: 'fas fa-comments',
      image: '/images/certifications/communication.png',
    },
    {
      id: 7,
      title: 'Sharpen Your Interview Skills',
      provider: 'Grameenphone Academy',
      date: 'March 2026',
      icon: 'fas fa-user-tie',
      image: '/images/certifications/interview.png',
    },
    {
      id: 8,
      title: 'LinkedIn 101',
      provider: 'Grameenphone Academy',
      date: 'March 2026',
      icon: 'fab fa-linkedin',
      image: '/images/certifications/linkedIn.png',
    },
    {
      id: 9,
      title: '1st Runner-up Project Award',
      provider: 'UIU CSE Project Show',
      date: 'Project Show 2025',
      icon: 'fas fa-trophy',
      image: '/images/certifications/Aoop_1st runner-up.jpg',
    },
  ],

  // Contact Section
  contact: {
    title: 'Get In Touch',
    description:
      "I'm always open to new opportunities and collaborations. Feel free to reach out!",
  },
};

export default portfolioData;
