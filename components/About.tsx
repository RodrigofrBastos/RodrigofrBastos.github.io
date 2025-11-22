import React from 'react';
import { BIO_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary text-sm font-bold tracking-widest mb-4 uppercase">Who Am I?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Engineer. Maker. Problem Solver.</h3>
          
          <div className="relative p-8 bg-slate-800/30 border border-slate-700 rounded-2xl backdrop-blur-sm">
            <p className="text-slate-300 text-lg leading-loose whitespace-pre-line">
              {BIO_TEXT}
            </p>
            
            {/* Decorative quotes */}
            <span className="absolute top-4 left-6 text-6xl text-slate-700 opacity-50 font-serif">“</span>
            <span className="absolute bottom-[-20px] right-6 text-6xl text-slate-700 opacity-50 font-serif">”</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;