import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navigation = ({
  darkMode,
  activeSection,
  mobileMenuOpen,
  toggleDarkMode,
  toggleMobileMenu,
  scrollToSection,
  themeClasses
}) => {
  const navigationItems = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact'];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 ${themeClasses.card} ${themeClasses.border} border-b backdrop-blur-md bg-opacity-95`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className={`text-xl font-bold ${themeClasses.accent}`}>
              S D Lokesh
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 relative py-2 font-medium ${
                    activeSection === section ? themeClasses.accent : themeClasses.textMuted
                  } hover:${themeClasses.accent.replace('text-', 'text-')}`}
                >
                  {section}
                  {activeSection === section && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${themeClasses.accentBg} rounded-full transition-all duration-300`}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors duration-200`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors duration-200`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors duration-200`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="pt-4 space-y-2">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 capitalize transition-colors duration-200 rounded-lg font-medium ${
                    activeSection === section 
                      ? `${themeClasses.accent} ${themeClasses.card}` 
                      : `${themeClasses.textMuted} ${themeClasses.hover}`
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navigation