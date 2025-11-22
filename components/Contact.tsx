
import React from 'react';
import { Mail, Github, Linkedin, ChevronRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between mb-16 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-2">Ready to automate the future?</h2>
            <p className="text-blue-100 font-medium text-lg">Let's build something intelligent together.</p>
          </div>
          <a 
            href="https://wa.me/5571993712236"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
          >
            Let's Talk <ChevronRight />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-800 pt-12">
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">ROBO<span className="text-primary">DEV</span></h4>
            <p className="text-slate-400 leading-relaxed mb-6">
              Passionate Robotics Engineer dedicated to creating autonomous systems that solve real-world problems.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Github} href="https://github.com/RodrigofrBastos" />
              <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/rodrigo-freire-bastos/" />
              <SocialIcon icon={Mail} href="mailto:digofbastos@gmail.com" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resume / CV</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6">Contact Info</h4>
             <ul className="space-y-4 text-slate-400">
               <li className="flex items-center gap-3">
                 <Mail size={18} className="text-primary" />
                 digofbastos@gmail.com
               </li>
               <li className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 Open to opportunities
               </li>
             </ul>
          </div>
        </div>

        <div className="text-center text-slate-600 text-sm mt-16">
          &copy; {new Date().getFullYear()} RoboDev Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ElementType, href: string }> = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
  >
    <Icon size={20} />
  </a>
);

export default Contact;
