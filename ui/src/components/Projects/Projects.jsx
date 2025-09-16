import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from './../../data/projectsData';

const Projects = ({ darkMode, themeClasses }) => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${themeClasses.accent}`}>Featured Projects</h2>
          <p className={`mt-4 text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
            A showcase of my recent work and the technologies I love working with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className={`${themeClasses.card} ${themeClasses.border} border rounded-2xl overflow-hidden ${themeClasses.glow} shadow-xl ${themeClasses.hover} transition-all duration-300 transform hover:-translate-y-2`}>
              <div className={`h-48 ${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center relative overflow-hidden`}>
                <div className={`text-6xl ${themeClasses.accent} opacity-20 absolute`}>
                  {project.emoji}
                </div>
                <div className={`text-3xl ${themeClasses.accent} z-10`}>
                  {project.emoji}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${themeClasses.text}`}>{project.title}</h3>
                <p className={`${themeClasses.textSecondary} mb-4 text-sm leading-relaxed`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'} rounded-full text-xs font-medium`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 ${themeClasses.border} border rounded-lg ${themeClasses.hover} transition-colors duration-200 text-sm font-medium`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={`flex items-center gap-2 px-4 py-2 ${themeClasses.accentBg} text-white rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm font-medium`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;