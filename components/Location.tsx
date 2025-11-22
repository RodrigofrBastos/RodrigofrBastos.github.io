
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden border-t border-slate-800/30">
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 text-primary mb-8 bg-slate-800/50 px-5 py-2 rounded-full border border-slate-700 backdrop-blur-sm">
            <MapPin size={16} />
            <span className="text-xs font-bold tracking-widest uppercase">Base of Operations</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight leading-tight">
            Based in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Salvador, Bahia
            </span>
          </h2>

          {/* Timeline Visual */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mt-12 mb-12">

            {/* Timeline Item 1: Current */}
            <div className="flex flex-col items-center relative group z-10">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-primary shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                <MapPin className="text-white" size={28} />
              </div>
              <div className="text-white font-bold text-xl">Brazil</div>
              <div className="text-primary text-xs font-bold tracking-widest uppercase mt-2 bg-primary/10 px-3 py-1 rounded-full">Current Base</div>
            </div>

          </div>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Engineering solutions from Northeastern Brazil.
            Available to work worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
