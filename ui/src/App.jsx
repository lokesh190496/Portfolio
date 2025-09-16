import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import resumePDF from "./assets/resume.pdf";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "S D Lokesh - Resume.pdf";
    link.click();
  };

  const themeClasses = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: darkMode ? 'text-gray-50' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-200' : 'text-gray-700',
    textMuted: darkMode ? 'text-gray-300' : 'text-gray-600',
    card: darkMode ? 'bg-gray-800' : 'bg-white',
    border: darkMode ? 'border-gray-600' : 'border-gray-300',
    accent: darkMode ? 'text-cyan-400' : 'text-blue-600',
    accentBg: darkMode ? 'bg-cyan-400' : 'bg-blue-600',
    hover: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100',
    glow: darkMode ? 'shadow-cyan-500/20' : 'shadow-blue-500/20'
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses.bg} ${themeClasses.text}`}>
      <Navigation
        darkMode={darkMode}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
        themeClasses={themeClasses}
      />

      <Hero
        darkMode={darkMode}
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
        downloadResume={downloadResume}
      />

      <About themeClasses={themeClasses} />

      <Skills themeClasses={themeClasses} />

      <Experience
        darkMode={darkMode}
        themeClasses={themeClasses}
      />

      <Projects
        darkMode={darkMode}
        themeClasses={themeClasses}
      />

      <Testimonials themeClasses={themeClasses} />

      <Contact
        darkMode={darkMode}
        themeClasses={themeClasses}
      />

      <Footer
        themeClasses={themeClasses}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default App;