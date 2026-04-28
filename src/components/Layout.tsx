import { motion } from 'motion/react';
import * as React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

export function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(148, 163, 184, 0.2)",
        backgroundColor: "rgba(30, 41, 59, 0.4)"
      }}
      className={`bg-slate-900/40 border border-slate-800/60 rounded-2xl p-8 transition-all duration-500 backdrop-blur-xl ring-1 ring-white/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Section({ children, id, title, subtitle, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-16 text-center">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
