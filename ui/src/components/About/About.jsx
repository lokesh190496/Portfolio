import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = ({ themeClasses }) => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${themeClasses.accent}`}>About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${themeClasses.text}`}>
              Passionate Developer with a Vision
            </h3>
            <p className={`text-lg mb-6 ${themeClasses.textSecondary} leading-relaxed`}>
              With over 3 years of experience in full-stack development, I specialize in building 
              scalable web applications and innovative digital solutions. My journey in tech has 
              been driven by curiosity and a constant desire to learn.
            </p>
            <p className={`text-lg mb-8 ${themeClasses.textSecondary} leading-relaxed`}>
              I believe in writing clean, efficient code and creating user experiences that not 
              only look great but perform exceptionally well. When I'm not coding, you'll find 
              me exploring new technologies or contributing to open-source projects.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://github.com/lokesh190496" className={`p-3 ${themeClasses.card} ${themeClasses.border} border rounded-lg ${themeClasses.hover} transition-colors duration-200`}>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/s-d-lokesh-820828256/" className={`p-3 ${themeClasses.card} ${themeClasses.border} border rounded-lg ${themeClasses.hover} transition-colors duration-200`}>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:sdlokesh@email.com" className={`p-3 ${themeClasses.card} ${themeClasses.border} border rounded-lg ${themeClasses.hover} transition-colors duration-200`}>
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className={`${themeClasses.card} ${themeClasses.border} border rounded-2xl p-8 ${themeClasses.glow} shadow-xl`}>
            <h4 className={`text-xl font-semibold mb-6 ${themeClasses.text}`}>Quick Stats</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className={themeClasses.textSecondary}>Projects Completed</span>
                <span className={`font-semibold ${themeClasses.accent}`}>15+</span>
              </div>
              <div className="flex justify-between">
                <span className={themeClasses.textSecondary}>Years Experience</span>
                <span className={`font-semibold ${themeClasses.accent}`}>3+</span>
              </div>
              <div className="flex justify-between">
                <span className={themeClasses.textSecondary}>Technologies Mastered</span>
                <span className={`font-semibold ${themeClasses.accent}`}>18+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;