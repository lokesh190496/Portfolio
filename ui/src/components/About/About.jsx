import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = ({ themeClasses }) => {
  return (
    <section id="about" className="py-16 scroll-mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-3 ${themeClasses.accent}`}>
            About Me
          </h2>
          <p className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
            Full-stack developer passionate about building scalable web apps and learning emerging technologies to create impactful digital solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* About Text */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${themeClasses.text}`}>
              Passionate Full-Stack Developer with a Vision
            </h3>

            <p className={`text-lg mb-5 ${themeClasses.textSecondary} leading-relaxed`}>
              With over <strong>3 years of experience</strong> in full-stack web development, 
              I focus on building <strong>responsive and scalable applications</strong> using 
              modern technologies such as <strong>ReactJS, Node.js, and REST APIs</strong>. 
              I also have working knowledge of <strong>Python</strong> for backend integration 
              and <strong>Docker</strong> for setting up development environments.
            </p>

            <p className={`text-lg mb-5 ${themeClasses.textSecondary} leading-relaxed`}>
              My journey in tech is driven by <strong>curiosity and a commitment to continuous learning</strong>. 
              I believe in writing clean, efficient, and maintainable code while collaborating 
              with teams to build meaningful and performance-driven user experiences.
            </p>

            <p className={`text-lg mb-8 ${themeClasses.textSecondary} leading-relaxed`}>
              Outside of coding, I enjoy exploring new frameworks, improving my problem-solving skills, 
              and occasionally contributing to open-source projects.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">

              <a
                href="https://www.linkedin.com/in/s-d-lokesh-820828256/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-3 rounded-lg border ${themeClasses.card} ${themeClasses.border} ${themeClasses.hover} transition-all duration-200 hover:scale-105`}
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="mailto:sdlokesh@email.com"
                aria-label="Email Lokesh"
                className={`p-3 rounded-lg border ${themeClasses.card} ${themeClasses.border} ${themeClasses.hover} transition-all duration-200 hover:scale-105`}
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div
            className={`${themeClasses.card} ${themeClasses.border} border rounded-2xl p-8 ${themeClasses.glow} shadow-xl hover:shadow-2xl transition-shadow duration-300`}
          >
            <h4 className={`text-xl font-semibold mb-6 ${themeClasses.text}`}>
              Quick Highlights
            </h4>
            <div className="space-y-5">
              <div className="flex justify-between">
                <span className={themeClasses.textSecondary}>Projects Completed</span>
                <span className={`font-semibold ${themeClasses.accent}`}>15+</span>
              </div>
              <div className="flex justify-between">
                <span className={themeClasses.textSecondary}>Years of Experience</span>
                <span className={`font-semibold ${themeClasses.accent}`}>3+</span>
              </div>
              <div className="flex justify-between">
                <span className={themeClasses.textSecondary}>Technologies Worked With</span>
                <span className={`font-semibold ${themeClasses.accent}`}>18+</span>
              </div>
              <div className="flex justify-between">
                <span className={themeClasses.textSecondary}>Core Skills</span>
                <span className={`font-semibold ${themeClasses.accent}`}>
                  React • Node.js • REST APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;