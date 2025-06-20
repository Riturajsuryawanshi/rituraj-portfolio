// src/data/sectionData.js
// This file defines the structure and content for various sections of the portfolio.
// It imports project, internship, and certification data from their respective files,
// and holds general section information, including the profile image path.
import Image  from "../assets/images/rituraj.jpg";
const sectionData = [
  {
    id: 'intro',
    heading: 'Hi, I\'m Rituraj Suryawanshi.',
    subheading: 'An Aspiring Data Analyst turning data into insights.',
    content: `I'm a data whisperer who turns messy spreadsheets into meaningful stories. Armed with Python, SQL, Tableau, and Power BI, I craft dashboards so sharp they practically sing. Whether it's crunching numbers or uncovering hidden patterns, I live for those "aha!" moments. Looking to put my analytical superpowers to work in a fast-paced, data-hungry environment where insights aren’t just nice-to-haves — they’re game-changers.`,
    // Updated image path to use the uploaded image directly, avoiding local import issues.
    image: Image,
    imageAlt: 'Rituraj Suryawanshi Profile Picture',
    type: 'intro'
  },
  {
    id: 'about',
    heading: 'About Me.',
    subheading: 'My Journey in Data.',
    content: `My passion lies in uncovering stories hidden within data. With hands-on experience in data collection,
              cleaning, and advanced analysis, I thrive on solving complex problems and driving business decisions
              through robust insights. I'm always eager to learn and adapt to new technologies in the data landscape.`,
    skills: ['Python', 'SQL', 'A/B Testing', 'EDA', 'Data Structures', 'Tableau', 'Power BI', 'Looker', 'RDBMS', 'AWS', 'Blockchain Technology', 'Cybersecurity', 'CRM Tools', 'Gmail', 'OOPS', 'DBMS', 'CN', 'OS'],
    resumeLink: "uploaded:RITURAJ_SURYAWANSHI_ATS_Optimized[1].pdf", // Path to the uploaded resume
    type: 'about'
  },
  {
    id: 'portfolio',
    heading: 'Selected Works.',
    subheading: 'A glimpse into our dedication to excellence.',
    content: `Explore a curated selection of my recent projects, each a testament to my commitment to innovative
              design and exceptional craftsmanship in data analysis and visualization.`,
    projects: [], // Project data will be passed via props from App.jsx, imported from projectsData.js
    type: 'portfolio'
  },
  {
    id: 'internships',
    heading: 'Internships & Roles.',
    subheading: 'Practical Experience in the Field.',
    content: `My professional journey has been enriched by diverse internship and ambassador roles, allowing me to apply
              theoretical knowledge to real-world challenges and develop practical skills in data science and analytics.`,
    internships: [], // Internship data will be passed via props from App.jsx, imported from internshipsData.js
    type: 'internships'
  },
  {
    id: 'certifications',
    heading: 'Certifications.',
    subheading: 'Validated Skills and Expertise.',
    content: `A collection of my certifications showcasing continuous learning and validated proficiency in various
              data analysis, cybersecurity, and cloud technologies.`,
    certifications: [], // Certification data will be passed via props from App.jsx, imported from certificationsData.js
    type: 'certifications'
  },
  {
    id: 'contact',
    heading: 'Connect with Me.',
    subheading: 'Let’s bring your next project to life.',
    content: `Whether you have a specific vision or are seeking guidance on your next venture, I am eager to
              collaborate. Reach out to discuss how my expertise in data analysis and design can elevate your project.`,
    formEnabled: true,
    contactInfo: {
      phone: "+917089956401",
      email: "riturajsuryawanshi51@gmail.com",
      linkedin: "https://www.linkedin.com/in/rituraj-suryawanshi-0b68b5255/"
    },
    type: 'contact'
  }
];

export default sectionData;
