import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronRight, Download } from 'lucide-react';


const roles = [
  "Python Developer",
  "Data Analyst",
  "Web Developer"
];

const RESUME_URL = '/resume.pdf';

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-slate-800/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 mb-10 rounded-full border border-slate-800/50 bg-slate-900/40 backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Available for New Projects</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1] px-4"
        >
          I build high-impact <br className="hidden sm:block" />
          <div className="relative h-[1.3em] flex items-center justify-center overflow-hidden my-2">
             <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="absolute text-slate-400 whitespace-nowrap px-4 w-full text-center"
                style={{ 
                  fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                }}
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4"
        >
          Specializing in <span className="text-white/90 font-normal">scalable Python solutions</span>, 
          <span className="text-white/90 font-normal"> data-driven decision insights</span>, and 
          <span className="text-white/90 font-normal"> crafting modern web applications</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4"
        >
          <a 
            href="#projects" 
            className="group flex items-center px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all w-full sm:w-auto justify-center shadow-xl shadow-white/5"
          >
            Explore Projects
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-10 py-4 bg-[#1e293b]/40 text-white font-bold rounded-full border border-slate-700/50 hover:bg-[#1e293b]/60 transition-all w-full sm:w-auto justify-center backdrop-blur-sm shadow-xl shadow-black/20"
          >
            <Download className="mr-2 w-5 h-5" />
            View CV
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-zinc-700 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
