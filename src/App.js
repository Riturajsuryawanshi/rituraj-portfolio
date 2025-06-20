import React from 'react';
import { motion } from 'framer-motion';
import { Download } from "lucide-react"; // Import Download icon

// Import data from dedicated data files
import PROJECTS_DATA_PORTFOLIO from './data/projectsData'; // .js extension removed
import INTERNSHIPS_DATA from './data/internshipsData'; // .js extension removed
import CERTIFICATIONS_DATA from './data/certificationsData'; // .js extension removed
import sectionData from './data/sectionData'; // .js extension removed

// Import custom hooks and components
import useSwirlCursor from './hooks/useSwirlCursor'; // .js extension removed
import SectionRenderer from './components/SectionRenderer'; // .jsx extension removed
import AnimatedButton from './components/AnimatedButton'; // .jsx extension removed


function App() {
  const [activeSection, setActiveSection] = React.useState('intro');

  // Initialize the swirl cursor effect
  useSwirlCursor();

  // Set document title
  React.useEffect(() => {
    document.title = "Rituraj Suryawanshi | Data Analyst Portfolio";
  }, []);

  return (
    <div className="font-serif text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] bg-[var(--color-lighter-blue)] dark:bg-[var(--color-dark-blue)] antialiased overflow-x-hidden">
      {/* Navigation - Minimal and fixed */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-[var(--color-light-blue)]/70 dark:bg-[var(--color-dark-blue)]/70 backdrop-blur-md shadow-sm">
        <div className="text-xl font-bold tracking-wider text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">Rituraj Suryawanshi</div>
        <div className="space-x-8 text-lg">
          {sectionData.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent-light)] transition-colors duration-300
                          ${activeSection === section.id ? 'font-semibold text-[var(--color-accent)] dark:text-[var(--color-accent-light)]' : 'text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]'}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-24"> {/* Padding to account for fixed nav */}
        {sectionData.map((section, index) => (
          <SectionRenderer
            key={section.id} // Important for React list rendering
            section={section}
            isEven={index % 2 === 0}
            setActiveSection={setActiveSection}
            // Pass specific data to SectionRenderer based on section type
            projectsData={section.type === 'portfolio' ? PROJECTS_DATA_PORTFOLIO : []}
            internshipsData={section.type === 'internships' ? INTERNSHIPS_DATA : []}
            certificationsData={section.type === 'certifications' ? CERTIFICATIONS_DATA : []}
            resumeLink={section.type === 'about' ? section.resumeLink : null}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="py-10 bg-[var(--color-mid-blue)] dark:bg-[var(--color-secondary-blue-dark)] text-center text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] text-sm border-t border-[var(--color-border-light)] dark:border-[var(--color-border-dark)]">
        <p>&copy; {new Date().getFullYear()} Rituraj Suryawanshi. All rights reserved.</p>
        <p className="mt-2">Designed with passion for timeless aesthetics.</p>
      </footer>
    </div>
  );
}

// Explicitly export App as default
export default App;
