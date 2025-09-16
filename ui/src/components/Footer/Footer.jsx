import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ themeClasses, scrollToSection }) => {
  const navigationItems = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact'];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'API Development',
    'Cloud Solutions',
    'Consulting'
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'lokeshvasu63@gmail.com',
      href: 'mailto:lokeshvasu63@email.com'
    },
    {
      icon: Github,
      label: 'github.com/lokesh190496',
      href: 'https://github.com/lokesh190496'
    },
    {
      icon: Linkedin,
      label: 'linkedin.com/in/s-d-lokesh-820828256',
      href: 'https://www.linkedin.com/in/s-d-lokesh-820828256/'
    }
  ];

  return (
    <footer className={`${themeClasses.card} ${themeClasses.border} border-t py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className={`text-2xl font-bold ${themeClasses.accent}`}>
              S D Lokesh
            </div>
            <p className={`${themeClasses.textSecondary} leading-relaxed`}>
              Full-Stack Developer passionate about creating innovative digital solutions and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/lokesh190496"
                target="_blank"
                rel="noopener noreferrer" 
                className={`p-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg ${themeClasses.hover} transition-all duration-200`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/s-d-lokesh-820828256/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg ${themeClasses.hover} transition-all duration-200`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sdlokesh@email.com" 
                className={`p-2 ${themeClasses.card} ${themeClasses.border} border rounded-lg ${themeClasses.hover} transition-all duration-200`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`${themeClasses.textSecondary} ${themeClasses.hover} transition-colors duration-200 capitalize hover:${themeClasses.accent} text-left font-medium`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className={`${themeClasses.textSecondary} font-medium`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <contact.icon className={`w-4 h-4 ${themeClasses.accent}`} />
                  <a 
                    href={contact.href}
                    {...(contact.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`${themeClasses.textSecondary} ${themeClasses.hover} transition-colors duration-200 hover:${themeClasses.accent} text-sm`}
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${themeClasses.border} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`text-sm ${themeClasses.textSecondary}`}>
              © 2025 S D Lokesh. All rights reserved. Built with React & Tailwind CSS.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <button
                onClick={() => scrollToSection('home')}
                className={`${themeClasses.accent} ${themeClasses.hover} transition-colors duration-200 font-medium flex items-center space-x-1`}
              >
                <span>Back to Top</span>
                <span className="text-xs">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;