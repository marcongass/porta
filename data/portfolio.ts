export const PORTFOLIO_DATA = {
  hero: {
    name: "Marco Bruno",
    headline: "Full-Stack Engineer | Automation Systems | ML & Cloud Solutions",
    subHeadline: "Delivering end-to-end technology solutions, combining modern web development, workflow automation, and machine learning concepts to build scalable systems with real business impact.",
    status: "Founding Engineer @ Brutal (2025-Present)",
    contact: {
      phone: "+506 88084410",
      email: "marcobruno@example.com", // Placeholder as actual email wasn't clear in prompt, using safe default or empty
      location: "San Pedro, Costa Rica",
      linkedin: "https://www.linkedin.com/in/marcobrunocsprof/"
    }
  },
  projects: [
    {
      title: "Deep Learning Rice Classification",
      description: "Binary classification system distinguishing Cammeo vs Osmancik rice varieties (n=3810). Features AUC/ROC model comparison and threshold optimization using computer vision.",
      link: "https://colab.research.google.com/drive/1qQYffdzqiTpJT0WbOT_WggIwno-i8FWM#scrollTo=hBUX64GbEEMj",
      techStack: ["Python", "Computer Vision", "Deep Learning", "ROC/AUC"],
      type: "AI Research"
    },
    {
      title: "Brutal Agency",
      description: "High-performance digital agency website delivering immersive web experiences. Built for speed, SEO, and conversion using modern web technologies.",
      link: "https://somosbrutal.com/",
      techStack: ["Next.js", "React", "Framer Motion", "Tailwind"],
      type: "Web Platform"
    },
    {
      title: "Enterprise Workflow Automation",
      description: "Complex n8n automation ecosystem integrating CRM, Support, and Sales pipelines. Drastically reduced manual overhead for client operations.",
      link: "#", // No specific link provided for n8n concepts, keeping internal or generic
      techStack: ["n8n", "Webhooks", "API Integration", "Node.js"],
      type: "Automation"
    }
  ],
  experience: [
    {
      company: "Brutal",
      role: "Founding Engineer / Startup Technical Owner",
      period: "2025 - Present",
      description: [
        "Owned full lifecycle development: client analysis, architecture design, full-stack implementation, automation engineering, and production deployment.",
        "Built scalable AI-enabled web systems with Next.js, modern databases, and cloud integrations.",
        "Developed automation workflows and sales/customer-support chatbots using n8n, generating measurable business impact through process optimization.",
        "Drove technical and strategic decisions across infrastructure, integrations, and solution scalability."
      ],
      skills: ["Next.js", "n8n", "AI Integration", "System Architecture"],
    },
    {
      company: "ZETA",
      role: "Web Developer & Programming Instructor",
      period: "2024 - 2025",
      description: [
        "Developed scalable web applications using Next.js, React, and modern JavaScript frameworks.",
        "Integrated secure payment solutions and third-party REST APIs.",
        "Improved team workflows through Git best practices and agile methodologies.",
        "Taught programming fundamentals (HTML, CSS, Java, C#, Python, JavaScript, SQL)."
      ],
      skills: ["React", "Next.js", "Mentorship", "REST APIs"],
    },
  ],
  education: [
    {
      degree: "Bachelor's degree in Computer Science",
      school: "Universidad Fidélitas",
      period: "2023 - 2026 (Pursuing)",
    }
  ],
  certifications: [
    {
      name: "AWS AI Practitioner",
      year: "2026",
      issuer: "Amazon Web Services",
      icon: "aws",
    },
    {
      name: "AWS Cloud Quest: Cloud Practitioner",
      year: "2025",
      issuer: "Amazon Web Services",
      icon: "aws",
    },
    {
      name: "Machine Learning Crash Course",
      year: "2025",
      issuer: "Google Developers",
      icon: "ml",
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      year: "2024",
      issuer: "Cisco",
      icon: "network",
    },
    {
      name: "Certified Scrum Developer",
      year: "2024",
      issuer: "SCRUMstudy",
      icon: "agile",
    },
    {
      name: "Foundations of Project Management",
      year: "2024",
      issuer: "Google (Coursera)",
      icon: "pm",
    },
    {
      name: "Introduction to IoT",
      year: "2024",
      issuer: "Cisco",
      icon: "iot",
    },
    {
      name: "Cybersecurity Fundamentals",
      year: "2025",
      issuer: "IBM SkillsBuild",
      icon: "security",
    },
     {
      name: "English level Certificate",
      year: "2024",
      issuer: "Michigan",
      icon: "lang",
    },
  ],
  skills: {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C#"],
    "Full-Stack": ["React", "Next.js", "Vue.js", "Node.js", "Django", "ASP.NET"],
    "Automation & Integration": ["n8n", "Chatbot Dev", "API Integrations", "Process Automation"],
    "Databases": ["PostgreSQL", "Oracle SQL", "SQL Server", "MongoDB", "Firebase"],
    "Cloud & DevOps": ["AWS S3", "Google Cloud Storage", "GitHub", "CI/CD", "Linux/Unix"],
    "System Design": ["Scalable Architecture", "API Design", "Technical Strategy"],
    "AI & ML": ["TensorFlow/PyTorch (Basic)", "Foundational AI/ML", "Experimentation"]
  },
};
