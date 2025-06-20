import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, Linkedin, Download } from "lucide-react"; // Import icons
import AnimatedButton from './AnimatedButton'; // Removed .jsx extension as per environment's resolution preference

// Animation variants for common entrance animations
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 10, stiffness: 80, delay: 0.2 } }
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 10, stiffness: 80, delay: 0.3 } }
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 10, stiffness: 80, delay: 0.3 } }
};

// Component to render each section, encapsulating the hooks
const SectionRenderer = ({ section, isEven, setActiveSection, projectsData, internshipsData, certificationsData, resumeLink }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for images
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Effect to update active section in navigation based on scroll position
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(section.id);
        }
      },
      {
        root: null, // viewport
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is roughly in the middle of the viewport
        threshold: 0 // Observe as soon as any part enters
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [section.id, setActiveSection]); // Re-run if section.id or setActiveSection changes


  return (
    <section
      key={section.id} // Ensure key is on the top-level element being mapped
      id={section.id}
      className={`min-h-screen py-20 flex items-center relative overflow-hidden
                  ${isEven ? 'bg-[var(--color-light-blue)] dark:bg-[var(--color-secondary-blue-dark)]' : 'bg-[var(--color-lighter-blue)] dark:bg-[var(--color-dark-blue)]'}
                  ${section.id === 'intro' ? 'h-screen' : ''}`} // Ensure intro section is full height
      ref={ref}
    >
      <div className={`container mx-auto px-8 flex flex-col lg:flex-row items-center gap-16`}>
        {section.image && (
          <motion.div
            className={`flex-1 w-full lg:w-1/2 rounded-lg shadow-xl overflow-hidden ${isEven ? 'lg:order-2' : ''}`}
            variants={isEven ? slideInRightVariants : slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
          >
            <motion.img
              src={section.image}
              alt={section.imageAlt}
              className="w-full h-full object-cover"
              style={{ y: yImage }} // Apply parallax here
            />
          </motion.div>
        )}
        <motion.div
          className={`flex-1 w-full lg:w-1/2 ${section.image ? '' : 'text-center'}`}
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-extrabold mb-4 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] leading-tight"
            whileHover={{ scale: 1.01, color: isEven ? 'var(--color-dark-blue)' : 'var(--color-light-blue)' }} // Subtle color change on hover
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
          >
            {section.heading}
          </motion.h2>
          <motion.h3
            className="text-2xl lg:text-3xl font-light mb-8 text-[var(--color-accent)] dark:text-[var(--color-accent-light)]"
            variants={fadeInVariants} // Apply fade-in to subheading as well
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {section.subheading}
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl leading-relaxed text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] max-w-2xl mx-auto"
            variants={fadeInVariants} // Apply fade-in to content
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {section.content}
          </motion.p>

          {section.type === 'intro' && (
            <div className="mt-10">
              <AnimatedButton onClick={() => window.location.href='#portfolio'}>
                Explore My Work
              </AnimatedButton>
            </div>
          )}

          {section.type === 'about' && section.skills && (
            <div className="mt-8">
              <h4 className="text-2xl font-semibold mb-4 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">Skills:</h4>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {section.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-4 py-2 rounded-full bg-[var(--color-mid-blue)] text-[var(--color-dark-blue)] dark:bg-[var(--color-dark-blue)] dark:text-[var(--color-mid-blue)] text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              {section.resumeLink && (
                <div className="mt-8">
                  <a
                    href={section.resumeLink}
                    download="Rituraj_Suryawanshi_Resume.pdf" // Suggested filename for download
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium tracking-wide transition-all duration-300 ease-in-out
                               bg-[var(--color-accent)] text-[var(--color-text-light)] hover:bg-[var(--color-secondary-blue)] dark:bg-[var(--color-accent-light)] dark:text-[var(--color-dark-blue)] dark:hover:bg-[var(--color-mid-blue)]"
                  >
                    <Download className="w-5 h-5 mr-2" /> Download Resume
                  </a>
                </div>
              )}
            </div>
          )}

          {section.type === 'portfolio' && projectsData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {projectsData.map((project, projIndex) => (
                <motion.div
                  key={projIndex}
                  className="bg-[var(--color-light-blue)] dark:bg-[var(--color-secondary-blue-dark)] rounded-lg shadow-lg overflow-hidden border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", damping: 10, stiffness: 80, delay: projIndex * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                >
                  <img src={project.imageUrl} alt={project.imageAlt} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] flex items-center gap-2">
                      {project.logoSvg && <span dangerouslySetInnerHTML={{ __html: project.logoSvg }} className="text-[var(--color-accent)] dark:text-[var(--color-accent-light)]" />}
                      {project.title}
                    </h4>
                    <p className="text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] text-sm mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] dark:text-[var(--color-accent-light)] hover:underline transition-colors">View Project &rarr;</a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {section.type === 'internships' && internshipsData && (
            <div className="grid grid-cols-1 gap-8 mt-12">
              {internshipsData.map((internship, intIndex) => (
                <motion.div
                  key={intIndex}
                  className="bg-[var(--color-light-blue)] dark:bg-[var(--color-secondary-blue-dark)] rounded-lg shadow-lg p-6 border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", damping: 10, stiffness: 80, delay: intIndex * 0.1 }}
                  whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">{internship.title}</h4>
                  <p className="text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] text-sm mb-3">{internship.period}</p>
                  <ul className="list-disc list-inside text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] text-base space-y-1">
                    {internship.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {section.type === 'certifications' && certificationsData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {certificationsData.map((cert, certIndex) => (
                <motion.div
                  key={certIndex}
                  className="bg-[var(--color-light-blue)] dark:bg-[var(--color-secondary-blue-dark)] rounded-lg shadow-lg p-6 border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", damping: 10, stiffness: 80, delay: certIndex * 0.1 }}
                  whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">{cert.title}</h4>
                  <p className="text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] text-sm mb-1">{cert.issuer}</p>
                  <p className="text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] text-sm mb-3">{cert.date}</p>
                  {cert.credentialId !== "N/A" && (
                    <p className="text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] text-xs mb-3">ID: {cert.credentialId}</p>
                  )}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] dark:text-[var(--color-accent-light)] hover:underline transition-colors">View Credential &rarr;</a>
                  )}
                </motion.div>
              ))}
            </div>
          )}


          {section.type === 'contact' && section.formEnabled && (
            <motion.form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID" // Replace with your Formspree ID
              method="POST"
              className="mt-12 p-8 bg-[var(--color-light-blue)] dark:bg-[var(--color-secondary-blue-dark)] rounded-lg shadow-xl max-w-lg mx-auto border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", damping: 10, stiffness: 80 }}
            >
              <h4 className="text-2xl font-semibold mb-6 text-center text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">Reach Out to Me:</h4>
              <div className="space-y-4 mb-8">
                {section.contactInfo.phone && (
                  <div className="flex items-center gap-4 text-lg text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
                    <Phone className="w-6 h-6 text-[var(--color-accent)] dark:text-[var(--color-accent-light)]" />
                    <a href={`tel:${section.contactInfo.phone}`} className="hover:underline transition-colors">{section.contactInfo.phone}</a>
                  </div>
                )}
                {section.contactInfo.email && (
                  <div className="flex items-center gap-4 text-lg text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
                    <Mail className="w-6 h-6 text-[var(--color-accent)] dark:text-[var(--color-accent-light)]" />
                    <a href={`mailto:${section.contactInfo.email}`} className="hover:underline transition-colors">{section.contactInfo.email}</a>
                  </div>
                )}
                {section.contactInfo.linkedin && (
                  <div className="flex items-center gap-4 text-lg text-[var(--color-text-dark)] dark:text-[var(--color-text-light)]">
                    <Linkedin className="w-6 h-6 text-[var(--color-accent)] dark:text-[var(--color-accent-light)]" />
                    <a href={section.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">LinkedIn Profile</a>
                  </div>
                )}
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 mb-4 border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] rounded-md bg-white dark:bg-[var(--color-dark-blue)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 mb-4 border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] rounded-md bg-white dark:bg-[var(--color-dark-blue)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] focus:ring-2 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] outline-none transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 mb-6 border border-[var(--color-border-light)] dark:border-[var(--color-border-dark)] rounded-md bg-white dark:bg-[var(--color-dark-blue)] text-[var(--color-text-dark)] dark:text-[var(--color-text-light)] focus:ring-2 focus:ring-[var(--color-accent)] focus:focus:border-[var(--color-accent)] outline-none transition-colors"
                required
              ></textarea>
              <AnimatedButton type="submit" className="w-full">
                Send Message
              </AnimatedButton>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionRenderer;
