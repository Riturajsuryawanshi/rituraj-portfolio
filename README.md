Rituraj Suryawanshi | Data Analyst Portfolio
Overview
Welcome to Rituraj Suryawanshi's personal portfolio website! This dynamic and interactive web application showcases my projects, internships, certifications, and skills as an aspiring Data Analyst. Designed with a modern aesthetic, responsive layout, and subtle animations, it provides a comprehensive overview of my professional journey and capabilities in turning data into actionable insights.

Features
Interactive Navigation: Smooth scrolling to different sections (Home, Projects, About, Internships, Certifications, Contact).

Dynamic Sections: Dedicated sections for:

Home/Hero: A welcoming introduction with a subtle particle background and bright glow effect.

Projects: Detailed descriptions and links to selected data analysis projects.

About Me: A professional overview, skills breakdown, and a resume download link.

Internships & Roles: A timeline of practical experiences gained through internships and ambassador roles.

Certifications: A comprehensive list of validated skills and expertise with links to credentials.

Contact: A functional form for inquiries and direct contact information.

Responsive Design: Optimized for seamless viewing and interaction across various devices (desktop, tablet, mobile).

Custom Cursor Effect: An engaging swirl particle effect follows the mouse cursor.

Dark Mode Toggle: Easily switch between light and dark themes for enhanced viewing comfort.

Animated Elements: Utilizes framer-motion for subtle entrance animations and interactive hover effects.

Thematic Colors: Features a sophisticated color scheme (Earthy Sandy, Slate Gray, Sky Blue, and Fern Green) for a professional and inviting look.

Technologies Used
This project is built using modern web technologies and libraries:

React.js: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development and responsive design.

Framer Motion: A production-ready motion library for React to create animations and gestures.

Lucide React: A beautiful and consistent icon library used for various UI elements.

React-TSParticles: A lightweight library for creating highly customizable particle animations.

Setup and Installation
Follow these steps to get a local copy of the project up and running on your machine.

Prerequisites:

Node.js (LTS version recommended)

npm (comes with Node.js) or Yarn

Steps:

Clone the repository:

git clone https://github.com/Riturajsuryawanshi/your-portfolio-repo-name.git
cd your-portfolio-repo-name

(Note: Replace your-portfolio-repo-name with the actual name of your GitHub repository)

Install dependencies:

npm install
# OR
yarn install

Start the development server:

npm start
# OR
yarn start

This will open the application in your browser at http://localhost:3000 (or another available port).

Project Structure
The project follows a modular structure for better organization and maintainability:

my-portfolio-app/
├── public/                 # Static assets (like index.html, images accessible via '/')
│   └── index.html
├── src/
│   ├── components/         # Reusable React components
│   │   ├── AnimatedButton.jsx
│   │   └── SectionRenderer.jsx
│   ├── data/               # JavaScript files holding static data (e.g., project details)
│   │   ├── projectsData.js
│   │   ├── internshipsData.js
│   │   ├── certificationsData.js
│   │   └── sectionData.js
│   ├── hooks/              # Custom React Hooks
│   │   └── useSwirlCursor.js
│   ├── styles/             # Global CSS definitions and custom themes
│   │   └── global.css
│   ├── App.jsx             # Main application component
│   └── index.js            # Entry point for the React application
└── package.json            # Project metadata and dependencies

Usage
Navigation: Use the navigation bar at the top to jump between sections.

Interactivity: Hover over elements like the profile picture, project cards, and buttons to see interactive effects.

Dark Mode: Click the sun/moon icon in the navigation bar to toggle between light and dark themes.

Customization
You can easily customize this portfolio:

Update Content: Modify the data in files under src/data/ (e.g., projectsData.js, internshipsData.js, certificationsData.js, sectionData.js) to personalize your projects, skills, and experiences.

Change Colors: Adjust the CSS variables in src/styles/global.css to define your own color scheme.

Replace Images: Update imageUrl paths in src/data/projectsData.js and the image path in src/data/sectionData.js with your own image URLs or paths to your public folder assets.

Formspree Integration: Remember to update the action attribute in the contact form (src/App.jsx, #contact section) with your own Formspree endpoint to receive messages.

Contact
Feel free to reach out to me through the contact form on this website or via:

Email: riturajsuryawanshi51@gmail.com

LinkedIn: Rituraj Suryawanshi

GitHub: Riturajsuryawanshi

License
This project is open-source and available under the
