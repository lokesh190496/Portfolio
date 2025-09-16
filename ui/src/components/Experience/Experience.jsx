import React from 'react';
import { experienceData } from './../../data/experienceData';

const Experience = ({ darkMode, themeClasses }) => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${themeClasses.accent}`}>Work Experience</h2>
          <p className={`mt-4 text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
            My professional journey and key accomplishments throughout my career
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${themeClasses.accentBg} opacity-30`}></div>
          
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`flex-shrink-0 w-16 h-16 ${themeClasses.accentBg} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                  <span>{experience.companyInitials}</span>
                </div>
                <div className={`ml-8 ${themeClasses.card} ${themeClasses.border} border rounded-2xl p-6 ${themeClasses.glow} shadow-xl flex-1`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${themeClasses.text} mb-1`}>{experience.position}</h3>
                      <p className={`${themeClasses.accent} font-semibold`}>{experience.company}</p>
                    </div>
                    <span className={`${themeClasses.textMuted} text-sm md:text-base mt-2 md:mt-0 font-medium`}>{experience.duration}</span>
                  </div>
                  <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'} rounded-full text-sm font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;