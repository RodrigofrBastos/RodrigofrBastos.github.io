
import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[2px] bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="flex-1 ml-8 md:ml-0">
                  <div className={`bg-slate-800/40 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all shadow-lg ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-primary text-sm font-bold tracking-widest uppercase mb-2">{exp.period}</div>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <h5 className="text-slate-400 text-sm font-medium mb-4">{exp.company}</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-dark shadow-[0_0_0_4px_rgba(59,130,246,0.3)] mt-6 z-10"></div>

                {/* Empty Side for Balance */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
