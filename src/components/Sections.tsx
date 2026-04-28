import { Section, Card } from './Layout';
import { EDUCATION, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../constants/content';
import { ExternalLink, Github, Mail, Linkedin, Send, Download, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative group aspect-square max-w-md mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-white rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl shadow-blue-500/10" />
          <div className="absolute inset-0 bg-slate-900 border border-slate-700/50 rounded-3xl overflow-hidden flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-black/40">
             <span className="text-9xl font-black text-white/5 select-none tracking-tighter">NK</span>
             <div className="absolute flex flex-col items-center">
                <span className="text-4xl font-bold text-white tracking-widest leading-none">NISHANT</span>
                <span className="text-4xl font-light text-slate-500 tracking-widest leading-none">KUMAR</span>
             </div>
          </div>
        </motion.div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Bridging the gap between <span className="text-slate-500 italic font-light">data</span> and <span className="text-slate-500 italic font-light">deployment</span>.
            </h3>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              I am an early-career technologist with a dual passion for building 
              <span className="text-white font-normal"> scalable cloud software</span> and uncovering 
              <span className="text-white font-normal"> meaningful insights</span> from massive datasets.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-1 bg-white" />
              <h4 className="text-white font-semibold flex items-center gap-2">
                Development
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">Crafting robust Python backends and modern web interfaces using modern frameworks.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-1 bg-slate-700" />
              <h4 className="text-white font-semibold">Analytics</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Transforming raw data into strategic business intelligence using advanced analysis techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="A record of professional contributions where I've applied technical solutions to business challenges.">
      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((exp, i) => (
          <Card key={exp.id} delay={i * 0.15} className="group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
               <span className="text-7xl font-black italic tracking-tighter text-white">{i + 1}</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 relative z-10">
              <div className="lg:w-1/4">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{exp.duration}</p>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-slate-400 font-light tracking-wide">{exp.company}</p>
                </div>
                
                <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-medium rounded-md border border-slate-800 group-hover:border-slate-700/50 group-hover:text-slate-200 transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background that supports my technical foundation and problem-solving approach.">
      <div className="grid md:grid-cols-2 gap-8">
        {EDUCATION.map((edu, i) => (
          <Card key={edu.id} delay={i * 0.12} className="group relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
              <GraduationCap className="w-24 h-24 text-white" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 text-slate-400 mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-slate-800 flex items-center justify-center group-hover:border-slate-700 transition-colors">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase font-bold tracking-widest">{edu.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-lg text-slate-400 font-light tracking-wide">{edu.institution}</p>
                <p className="text-slate-400 text-base leading-relaxed font-light">
                  {edu.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {edu.highlights.map((highlight) => (
                  <span key={highlight} className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-medium rounded-md border border-slate-800 group-hover:border-slate-700/50 group-hover:text-slate-200 transition-all duration-300">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Core Projects" subtitle="Technically focused implementations demonstrating versatility across my three primary domains.">
      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <Card key={project.id} delay={i * 0.1} className="flex flex-col h-full group border-b-4 border-b-slate-800 hover:border-b-blue-500/50 transition-all">
            <div className="mb-8 aspect-[16/10] bg-[#0f172a] rounded-xl flex flex-col items-center justify-center p-6 border border-slate-800/50 group-hover:bg-[#1e293b]/50 transition-colors shadow-inner">
               <div className="w-12 h-12 mb-4 text-slate-600 group-hover:text-blue-400 transition-colors">
                  {project.type === 'python' && <div className="text-4xl font-mono opacity-80">Py</div>}
                  {project.type === 'data' && <div className="text-4xl opacity-80">📊</div>}
                  {project.type === 'web' && <div className="text-4xl font-bold opacity-80">{'</>'}</div>}
               </div>
               <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                  {project.type === 'python' ? 'Automation' : project.type === 'data' ? 'Analytics' : 'Interface'}
               </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
            <p className="text-slate-400 text-base mb-8 flex-grow leading-relaxed font-light">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[11px] font-mono font-bold text-slate-500 group-hover:text-slate-300 uppercase">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-6 mt-auto">
              <a 
                href={project.githubUrl} 
                className="flex items-center text-xs font-black tracking-widest text-white hover:text-blue-400 transition-all border-b border-white/10 hover:border-blue-400/50 pb-1"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                SOURCE
              </a>
              <a 
                href="#" 
                className="flex items-center text-xs font-black tracking-widest text-slate-500 hover:text-white transition-colors pb-1 border-b border-transparent"
              >
                LIVE DEMO
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="My core competencies organized by domain and toolset.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((cat, i) => (
          <Card key={cat.title} delay={i * 0.05} className="md:even:bg-zinc-800/20">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-center border-b border-zinc-800 pb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-zinc-950/50 border border-zinc-800 rounded-lg text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Resume() {
  return (
    <Section id="resume" className="bg-zinc-900/10 py-16">
      <Card className="max-w-3xl mx-auto p-12 text-center border-dashed border-2 border-zinc-800 bg-transparent flex flex-col items-center">
        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-8">
          <Download className="text-white w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tighter">Ready to hire?</h2>
        <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
          Download my full resume for a detailed view of my experience, technical stack, and education. 
          I am currently open to full-time roles and freelance consultations.
        </p>
        <button className="flex items-center py-4 px-10 bg-white text-black rounded-full font-bold hover:bg-zinc-300 transition-all group">
          Download Professional CV
          <Download className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </Card>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind or just want to say hi? My inbox is always open.">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-8">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Mail className="text-zinc-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Email</p>
                <p className="text-white font-medium">contact@nkdev.com</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Linkedin className="text-zinc-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">LinkedIn</p>
                <p className="text-white font-medium">linkedin.com/in/nk-tech</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                <Github className="text-zinc-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">GitHub</p>
                <p className="text-white font-medium">github.com/nk-dev</p>
              </div>
           </div>
        </div>

        <div className="md:col-span-2">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:border-zinc-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:border-zinc-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={5} 
                placeholder="How can I help you?"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:border-zinc-500 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button className="w-full py-4 bg-zinc-100 text-black font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center group">
              Send Message
              <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-tighter">NK.</div>
        <p className="text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} NK Tech. All rights reserved. Built with React & Motion.
        </p>
        <div className="flex gap-6">
           <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
           <a href="#" className="text-zinc-500 hover:text-white transition-colors">Dribbble</a>
           <a href="#" className="text-zinc-500 hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}
