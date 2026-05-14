import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { navData } from './NavData';

const Navbar = ({ view, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  // Mobile Accordion state
  const [mobileExpanded, setMobileExpanded] = useState(null);

  return (
    <nav 
      className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left: Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => setView('landing')}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-indigo-200">
              <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">
              Evaluf<span className="text-indigo-600">AI</span>
            </span>
          </div>

          {/* Center: Menu items (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {['Products', 'Solutions', 'Resources'].map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.toLowerCase())}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeMenu === item.toLowerCase() 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === item.toLowerCase() ? 'rotate-180' : ''}`} />
                </button>
              </div>
            ))}
            <button 
              onClick={() => setView('pricing')}
              className="px-4 py-2 rounded-full text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-50 transition-all"
            >
              Pricing
            </button>
          </div>

          {/* Right: Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setView('candidate')}
              className="text-slate-700 font-semibold hover:text-indigo-600 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => setView('book-demo')}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown (Desktop) */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 w-full bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
            onMouseEnter={() => handleMouseEnter(activeMenu)}
          >
            <div className="max-w-7xl mx-auto p-8">
              <div className={`grid ${activeMenu === 'products' ? 'grid-cols-5' : 'grid-cols-3'} gap-8`}>
                {navData[activeMenu].map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <button 
                      onClick={() => {
                        setView(section.title.toLowerCase());
                        setActiveMenu(null);
                        window.scrollTo(0,0);
                      }}
                      className="flex items-center gap-3 group/item text-left w-full transition-transform hover:translate-x-1"
                    >
                      <div className={`p-2.5 rounded-xl bg-${section.color}-50 text-${section.color}-600 group-hover/item:bg-${section.color}-600 group-hover/item:text-white transition-colors`}>
                        <section.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 group-hover/item:text-indigo-600 transition-colors">{section.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-1">{section.subtitle}</p>
                      </div>
                    </button>
                    
                    <div className="h-px bg-slate-100" />
                    
                    <ul className="space-y-2.5">
                      {section.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <button 
                            onClick={() => {
                              setView(link.id);
                              setActiveMenu(null);
                              window.scrollTo(0,0);
                            }}
                            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                            {link.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dropdown Footer Area */}
            <div className="bg-slate-50 border-t border-slate-100 p-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
                <p className="text-slate-500 italic">"The world's most advanced AI-powered hiring platform."</p>
                <a href="#" className="text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                  See all features
                  <Zap className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu (Accordion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {['Products', 'Solutions', 'Resources'].map((item) => (
                <div key={item} className="border-b border-slate-50 last:border-0">
                  <button 
                    onClick={() => setMobileExpanded(mobileExpanded === item ? null : item)}
                    className="flex items-center justify-between w-full py-4 text-left text-slate-900 font-semibold"
                  >
                    {item}
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === item ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pb-4 grid grid-cols-1 gap-4"
                      >
                        {navData[item.toLowerCase()].map((section, idx) => (
                          <div key={idx} className="pl-4 space-y-2">
                            <button 
                              onClick={() => {
                                setView(section.title.toLowerCase());
                                setIsOpen(false);
                                window.scrollTo(0,0);
                              }}
                              className="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors"
                            >
                              {section.title}
                            </button>
                            <ul className="space-y-2">
                              {section.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                  <button 
                                    onClick={() => {
                                      setView(link.id);
                                      setIsOpen(false);
                                      window.scrollTo(0,0);
                                    }}
                                    className="text-slate-600 font-medium hover:text-indigo-600"
                                  >
                                    {link.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <button 
                onClick={() => { setView('pricing'); setIsOpen(false); }}
                className="block w-full py-4 text-left text-slate-900 font-semibold border-b border-slate-50"
              >
                Pricing
              </button>
              
              <div className="pt-6 pb-4 space-y-3">
                <button 
                  onClick={() => { setView('candidate'); setIsOpen(false); }}
                  className="w-full btn-secondary py-3 text-sm rounded-full"
                >
                  Candidate Login
                </button>
                <button 
                  onClick={() => { setView('book-demo'); setIsOpen(false); }}
                  className="w-full bg-slate-900 text-white py-3 text-sm font-semibold rounded-full shadow-lg"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
