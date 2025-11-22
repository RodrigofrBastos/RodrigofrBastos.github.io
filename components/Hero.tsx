
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, ChevronDown, Globe, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Electrical Engineer", "Robotics Researcher", "UAV Specialist", "Software Engineer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      let speed = 100;
      if (isDeleting) speed = 50; 
      
      if (!isDeleting && text === fullText) {
        speed = 2000; 
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        speed = 500; 
      }

      setTypingSpeed(speed);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
      
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-dark to-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-3 mb-8">
             <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
             <span className="text-slate-400 text-sm font-medium tracking-widest uppercase">Available for hire</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 font-sans tracking-tight text-white">
            Rodrigo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Bastos
            </span>
          </h1>

           <div className="h-8 mb-8 flex items-center">
            <span className="text-lg md:text-xl font-mono text-primary">
              &gt; {text}
              <span className="inline-block w-2 h-5 bg-primary ml-1 animate-blink align-middle"></span>
            </span>
          </div>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
            Passionate about Innovation. Bridging the gap between Electrical Engineering and Robotics Software.
          </p>

          {/* Location Timeline (Merged) */}
          <div className="mb-10 w-full max-w-[450px]">
             <div className="group relative bg-slate-800/30 backdrop-blur-md border border-white/5 rounded-full px-6 py-3 flex items-center justify-between hover:border-primary/20 hover:bg-slate-800/50 transition-all duration-500 shadow-lg shadow-black/20">
               
               {/* Timeline Content */}
               <div className="flex items-center gap-4 w-full justify-between">
                  
                  {/* Current Node */}
                  <div className="flex items-center gap-3">
                     <div className="relative flex items-center justify-center w-3 h-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-white font-bold text-sm leading-none">Salvador (BR)</span>
                        <span className="text-[10px] text-primary/80 font-mono uppercase tracking-wider mt-0.5">Current Base</span>
                     </div>
                  </div>

                  {/* Connector */}
                  <div className="flex items-center opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-primary flex-1 justify-center">
                     <div className="w-full max-w-[60px] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                     <ArrowRight size={14} className="ml-[-4px]" />
                  </div>

                  {/* Future Node */}
                  <div className="flex items-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                     <Globe size={16} className="text-slate-400 group-hover:text-accent transition-colors" />
                     <div className="flex flex-col items-end">
                        <span className="text-slate-300 font-bold text-sm leading-none group-hover:text-white transition-colors">Worldwide</span>
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-0.5">Open to Relocation</span>
                     </div>
                  </div>
               </div>
             </div>
          </div>
          
          <div className="flex flex-wrap gap-6">
             <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-primary/25">
               View Projects
             </button>
             <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 border border-slate-700 text-white rounded-full hover:border-primary hover:text-primary transition-colors duration-300">
               Contact Me
             </button>
          </div>
        </motion.div>

        {/* Right: Visual / Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end py-12 lg:py-0"
        >
          {/* Main Image Card */}
          <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 z-10">
             <img 
               src="https://picsum.photos/id/1058/800/1000?grayscale" 
               alt="Rodrigo Bastos" 
               className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
             />
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
             
             <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white font-bold text-2xl">Rodrigo Bastos</div>
                <div className="text-slate-400 text-sm">Robotics Engineer Intern</div>
             </div>
          </div>

          {/* Floating Element 1: Expertise */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-4 -left-4 md:top-20 md:-left-24 z-20 bg-slate-800/90 backdrop-blur-md p-4 pr-6 rounded-2xl border border-slate-700 shadow-2xl flex items-center gap-3 scale-90 md:scale-100"
          >
            <div className="bg-primary/20 p-2 rounded-full text-primary">
                <Terminal size={20} />
            </div>
            <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Expertise</div>
                <div className="text-white font-bold text-sm">Autonomous Systems</div>
            </div>
          </motion.div>

           {/* Floating Element 2: Experience */}
           <motion.div 
            animate={{ 
              y: [0, 12, 0],
              x: [0, -5, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: 0.8 
            }}
            className="absolute bottom-10 -right-4 md:bottom-24 md:-right-16 z-20 bg-slate-800/90 backdrop-blur-md p-4 pr-6 rounded-2xl border border-slate-700 shadow-2xl flex items-center gap-3 scale-90 md:scale-100"
          >
            <div className="bg-primary p-2 rounded-full text-white shadow-lg shadow-primary/30">
                <Layers size={20} />
            </div>
            <div>
                <div className="text-3xl font-bold text-white leading-none">2+</div>
                <div className="text-xs text-slate-400 font-medium">Years Experience</div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
