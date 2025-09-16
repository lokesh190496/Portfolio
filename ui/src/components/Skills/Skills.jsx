import React from 'react';
import { technicalSkills } from './../../data/skillsData';

const Skills = ({ themeClasses }) => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${themeClasses.accent}`}>Skills & Technologies</h2>
          <p className={`mt-4 text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        {/* Technical Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16">
          {technicalSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <div key={index} className={`${themeClasses.card} ${themeClasses.border} border rounded-2xl p-4 text-center ${themeClasses.glow} shadow-lg ${themeClasses.hover} transition-all duration-300 transform hover:-translate-y-1 group`}>
                <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-r ${skill.bgGradient} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent className="filter drop-shadow-lg text-white" />
                </div>
                <h3 className={`text-sm font-semibold ${themeClasses.text} group-hover:${themeClasses.accent} transition-colors duration-300`}>
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;