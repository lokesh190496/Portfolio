import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = ({ darkMode, themeClasses, scrollToSection, downloadResume }) => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          
          {/* Small Intro Line */}
          <p
            className={`text-2xl md:text-3xl font-semibold mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Hi, I'm
          </p>

          {/* Name */}
          <h1
            className={`text-5xl md:text-7xl font-extrabold mb-6 ${
              darkMode
                ? "bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500"
                : "bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700"
            } bg-clip-text text-transparent`}
          >
            S D Lokesh
          </h1>

          {/* Role - Clickable */}
          <button
            onClick={() => scrollToSection("skills")}
            className={`text-xl md:text-2xl mb-8 font-semibold ${themeClasses.textSecondary} hover:${themeClasses.accent.replace('text-', 'text-')} transition-colors duration-300 cursor-pointer`}
          >
            Full-Stack Developer & Tech Enthusiast
          </button>

          {/* Tagline */}
          <p
            className={`text-lg mb-12 max-w-2xl mx-auto ${themeClasses.textMuted} leading-relaxed`}
          >
            Turning ideas into interactive web solutions with React and Node.js
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/lokesh190496"
              target="_blank"
              rel="noopener noreferrer"
              className={`${themeClasses.textMuted} hover:${themeClasses.accent.replace(
                "text-",
                "text-"
              )} transition-colors duration-300`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/s-d-lokesh-820828256/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${themeClasses.textMuted} hover:${themeClasses.accent.replace(
                "text-",
                "text-"
              )} transition-colors duration-300`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sdlokesh@email.com"
              className={`${themeClasses.textMuted} hover:${themeClasses.accent.replace(
                "text-",
                "text-"
              )} transition-colors duration-300`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-3 ${themeClasses.accentBg} text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 ${
                darkMode
                  ? "shadow-lg shadow-cyan-500/25"
                  : "shadow-lg shadow-blue-500/25"
              }`}
            >
              Get In Touch
            </button>

            <button
              onClick={downloadResume}
              className={`px-8 py-3 border-2 ${
                darkMode
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600"
              } hover:text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2`}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;