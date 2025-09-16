import React from 'react';
import { testimonialsData } from './../../data/testimonialsData';

const Testimonials = ({ themeClasses }) => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${themeClasses.accent}`}>
            Testimonials
          </h2>
          <p className={`mt-4 text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
            What colleagues say about working with me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={`${themeClasses.card} ${themeClasses.border} border-2 rounded-2xl p-8 ${themeClasses.glow} shadow-xl ${themeClasses.hover} transition-all duration-300 transform hover:-translate-y-2`}>
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-yellow-400 text-lg">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <div className={`px-3 py-1 ${themeClasses.accentBg} text-white text-xs rounded-full font-semibold`}>
                    {testimonial.project}
                  </div>
                </div>
                <p className={`${themeClasses.textSecondary} text-base leading-relaxed italic mb-4`}>
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center">
                <div className={`w-14 h-14 ${themeClasses.accentBg} rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg shadow-lg`}>
                  {testimonial.image}
                </div>
                <div>
                  <p className={`font-bold ${themeClasses.text} text-lg`}>{testimonial.name}</p>
                  <p className={`text-sm ${themeClasses.accent} font-semibold`}>{testimonial.position}</p>
                  <p className={`text-xs ${themeClasses.textMuted}`}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;