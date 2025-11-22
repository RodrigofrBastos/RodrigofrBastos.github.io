
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-10 bg-dark border-t border-white/5 flex justify-center">
      <div className="max-w-4xl w-full px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-slate-800/30 backdrop-blur-md border border-white/5 rounded-full px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 hover:border-primary/20 hover:bg-slate-800/50 transition-all duration-500 shadow-lg shadow-black/20"
        >
          {/* Label */}
          <div className="hidden md:block text-slate-500 text-xs font-bold tracking-widest uppercase mr-auto border-r border-white/10 pr-6">
            Location Status
          </div>

          {/* Timeline Center */}
          <div className="flex items-center gap-6 md:gap-10 w-full md:w-auto justify-center">
             
             {/* Current Node */}
             <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-3 h-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </div>
                <div className="flex flex-col">
                   <span className="text-white font-bold text-sm leading-none">Salvador (BR)</span>
                   <span className="text-[10px] text-primary/80 font-mono uppercase tracking-wider mt-1">Current Base</span>
                </div>
             </div>

             {/* Connector */}
             <div className="flex items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                <div className="w-4 md:w-12 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <ArrowRight size={14} className="ml-[-4px]" />
             </div>

             {/* Future Node */}
             <div className="flex items-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <Globe size={16} className="text-slate-400 group-hover:text-accent transition-colors" />
                <div className="flex flex-col">
                   <span className="text-slate-300 font-bold text-sm leading-none group-hover:text-white transition-colors">Worldwide</span>
                   <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-1">Open to Relocation</span>
                </div>
             </div>
          </div>

          {/* Action Hint */}
          <div className="hidden md:block ml-auto pl-6 border-l border-white/10">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Online"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Location;
