/** @jsxRuntime classic */
/** @jsx React.createElement */
declare module "react";
declare namespace JSX {
  interface Element { }
  interface IntrinsicElements {
    [key: string]: any;
  }
}
import * as React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const RESUME_URL = '/resume.pdf';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md py-4 border-b border-zinc-800' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold rounded-lg text-lg group-hover:bg-zinc-200 transition-colors">
            NK
          </div>
          <span className="hidden sm:block text-xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
            PORTFOLIO
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full border border-zinc-700 text-sm font-medium text-white hover:bg-white hover:text-black transition-all"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-zinc-400 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-lg text-white font-bold"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
}
