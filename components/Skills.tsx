
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { SKILL_METRICS, SOFT_SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex flex-col justify-center"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Technical <br /><span className="text-slate-600">Skills</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              From low-level hardware control to high-level programming.
            </p>
            <div className="p-6 bg-slate-800/30 rounded-3xl border border-white/5">
               <p className="text-primary font-mono text-sm mb-2">// CORE COMPETENCIES</p>
               <div className="flex flex-wrap gap-2">
                 {['ROS 2', 'PX4-Autopilot','C', "C++", 'Python', 'Perception', 'Machine Learning'].map(tag => (
                   <span key={tag} className="px-8 py-1 bg-slate-700/50 rounded-md text-slate-300 text-xs border border-white/5 hover:border-primary/30 hover:text-white transition-colors">{tag}</span>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Radar Chart Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-8 h-[500px] relative hover:border-primary/20 transition-colors"
          >
            <div className="absolute top-8 left-8 z-10">
              <h3 className="text-xl font-bold text-white">Proficiency Matrix</h3>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="55%" outerRadius="70%" data={SKILL_METRICS}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: '600' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  fill="#3B82F6"
                  fillOpacity={0.2}
                />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '12px', color: '#fff' }}
                   itemStyle={{ color: '#3B82F6' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Soft Skills Bento Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
             {SOFT_SKILLS.map((skill, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-slate-800/30 p-6 rounded-3xl border border-white/5 hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20"
               >
                 <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white">
                   <skill.icon size={20} />
                 </div>
                 <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
                 <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                   {skill.description}
                 </p>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
