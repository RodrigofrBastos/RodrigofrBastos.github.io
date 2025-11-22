
import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { NavLink } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo(NavLink.Home)}>
          <Cpu className="text-primary w-8 h-8" />
          <span className="text-xl font-bold tracking-wider text-white">ROBO<span className="text-primary">DEV</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[NavLink.About, NavLink.Skills, NavLink.Projects].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)}
              className="text-slate-300 hover:text-primary font-medium uppercase text-sm tracking-widest transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollTo(NavLink.Contact)}
            className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-bold text-sm shadow-sm hover:shadow-primary/50"
          >
            CONTACT ME
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-slate-800 absolute w-full">
          <div className="flex flex-col items-center py-8 gap-6">
            {[NavLink.About, NavLink.Skills, NavLink.Projects, NavLink.Contact].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className="text-white text-lg font-medium uppercase tracking-widest hover:text-primary"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
