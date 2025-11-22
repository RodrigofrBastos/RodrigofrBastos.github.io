
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Professional' | 'Research' | 'Personal'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
             <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Featured <span className="text-slate-600">Work</span></h2>
             <p className="text-slate-400 max-w-md text-lg">
               A selection of research papers, drone prototypes, and industrial applications.
             </p>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-slate-900/50 p-1.5 rounded-3xl md:rounded-full border border-slate-800 backdrop-blur-sm">
            {(['All', 'Professional', 'Research', 'Personal'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  // Determine span classes based on size prop
  const spanClass = 
    project.size === 'wide' ? 'md:col-span-2' :
    project.size === 'tall' ? 'md:row-span-2' :
    'col-span-1';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`group relative bg-slate-800/40 rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 ${spanClass}`}
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col p-8 justify-end">
        
        {/* Top Right Icon */}
        <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 text-white border border-white/10 group-hover:bg-primary group-hover:border-primary">
          <ArrowUpRight size={20} />
        </div>

        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-primary text-xs font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {project.category}
            </span>
            {project.techStack.slice(0, 3).map((tech) => (
               <span key={tech} className="text-slate-300 text-xs font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                 {tech}
               </span>
            ))}
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 absolute md:relative group-hover:relative">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
