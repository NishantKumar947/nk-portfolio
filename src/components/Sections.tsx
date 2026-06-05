import { Section, Card } from './Layout';
import { EDUCATION, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../constants/content';
import { Github, Mail, Linkedin, Send, Download, GraduationCap, Calendar, Code2, ChartNoAxesCombined, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const RESUME_URL = '/resume.pdf';
const CONTACT_EMAIL = 'nishantkumar3189@gmail.com';
const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const ABOUT_CARDS = [
  {
    title: 'Product Developer',
    description: 'Building responsive web apps and portfolio solutions.',
    icon: Code2,
  },
  {
    title: 'Data & Analytics',
    description: 'Creating useful dashboards, reports, and insights.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Problem Solver',
    description: 'Solving real work problems with clean, practical tech.',
    icon: Lightbulb,
  },
];

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-[0.9fr_1.25fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group aspect-square max-w-md mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-white rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl shadow-blue-500/10" />
          <div className="absolute inset-0 bg-slate-900 border border-slate-700/50 rounded-3xl overflow-hidden flex items-center justify-center -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-black/40">

            <img
              src="/photo.jpg"
              alt="Nishant Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Bridging development, <span className="text-slate-500 italic font-light">and</span> {' '}
              real-world solutions.
            </h3>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
              I&apos;m an MCA student who enjoys building things that actually
              <span className="text-white font-normal"> solve problems.</span> Whether it&apos;s working with
              <span className="text-white font-normal"> data, writing backend logic,</span> or <span className="text-white font-normal">creating web interfaces.</span> I focus on keeping things
              <span className="text-white font-normal"> simple, practical,</span> and <span className="text-white font-normal">useful.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {ABOUT_CARDS.map(({ title, description, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/55 p-5 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-slate-900/85 hover:shadow-2xl hover:shadow-blue-950/30"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-950/50 text-slate-300 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-blue-400/50 group-hover:bg-blue-500/10 group-hover:text-blue-200">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mb-3 text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-blue-100">
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                    {description}
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="h-1 w-10 rounded-full bg-slate-700 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? EXPERIENCES : EXPERIENCES.slice(0, 2);
  const hiddenCount = EXPERIENCES.length - visibleExperiences.length;

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="A record of professional contributions where I've applied technical solutions to business challenges."
    >
      <div className="grid md:grid-cols-2 gap-8">
        {visibleExperiences.map((exp, i) => (
          <Card key={exp.id} delay={i * 0.15} className="group relative overflow-hidden h-full flex flex-col justify-between">

            {/* 1. Background Index Number (Fixed Tag Closing Here) */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none select-none">
              <span className="text-7xl font-black italic tracking-tighter text-white">
                {i + 1}
              </span>
            </div>

            {/* 2. Main Content Wrapper */}
            <div className="relative z-10 flex flex-col h-full p-6 md:p-8">

              {/* Top Bar: Period and Duration */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                  {exp.duration}
                </p>
              </div>

              {/* Middle Section: Title and Description */}
              <div className="space-y-3 mb-6 flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-blue-200 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg text-slate-400 font-light tracking-wide">
                  {exp.company}
                </p>
                <p className="text-slate-400 text-base leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>

              {/* Bottom Section: Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-medium rounded-md border border-slate-800 group-hover:border-slate-700/50 group-hover:text-slate-200 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </Card>
        ))}
      </div>

      {EXPERIENCES.length > 2 && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="group inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-slate-800 hover:text-blue-100 hover:shadow-blue-950/30"
          >
            {showAll ? 'Show less' : `Show more ${hiddenCount ? `(${hiddenCount})` : ''}`}
            {showAll ? (
              <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </Section>
  );
}


export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background that supports my technical foundation and problem-solving approach."
    >
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
                <p className="text-slate-400 text-base leading-relaxed font-light">{edu.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-medium rounded-md border border-slate-800 group-hover:border-slate-700/50 group-hover:text-slate-200 transition-all duration-300"
                  >
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
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);
  const hiddenCount = PROJECTS.length - visibleProjects.length;

  return (
    <Section
      id="projects"
      title="Core Projects"
      subtitle="Technically focused implementations demonstrating versatility across my three primary domains."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {visibleProjects.map((project, i) => (
          <Card
            key={project.id}
            delay={i * 0.1}
            className="flex flex-col h-full group border-b-4 border-b-slate-800 hover:border-b-blue-500/50 transition-all"
          >
            <div className="mb-8 aspect-[16/10] overflow-hidden bg-[#0f172a] rounded-xl flex flex-col items-center justify-center border border-slate-800/50 group-hover:bg-[#1e293b]/50 transition-colors shadow-inner">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6">
                  <div className="w-12 h-12 mb-4 text-slate-600 group-hover:text-blue-400 transition-colors">
                    {project.type === 'python' && <div className="text-4xl font-mono opacity-80">Py</div>}
                    {project.type === 'data' && <div className="text-4xl opacity-80">📊</div>}
                    {project.type === 'web' && <div className="text-4xl font-bold opacity-80">{'</>'}</div>}
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                    {project.type === 'python' ? 'Automation' : project.type === 'data' ? 'Analytics' : 'Interface'}
                  </span>
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
            <p className="text-slate-400 text-base mb-8 flex-grow leading-relaxed font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono font-bold text-slate-500 group-hover:text-slate-300 uppercase"
                >
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

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="flex items-center text-xs font-black tracking-widest text-slate-400 hover:text-white transition-colors pb-1 border-b border-transparent"
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE DEMO
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      {PROJECTS.length > 3 && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="group inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-slate-800 hover:text-blue-100 hover:shadow-blue-950/30"
          >
            {showAll ? 'Show less' : `Show more ${hiddenCount ? `(${hiddenCount})` : ''}`}
            {showAll ? (
              <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
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

        <a
          href={RESUME_URL}
          download="Nishant_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center py-4 px-10 bg-white text-black rounded-full font-bold hover:bg-zinc-300 transition-all group"
        >
          Download Professional CV
          <Download className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </a>
      </Card>
    </Section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleContactChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitState !== 'idle') {
      setSubmitState('idle');
    }
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('sending');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New portfolio message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Message failed');
      }

      setSubmitState('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitState('error');
    }
  };

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
              <a
                href="mailto:nishantkumar3189@gmail.com"
                className="text-white font-medium hover:text-blue-400 transition-colors break-all"
              >
                nishantkumar3189@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nishant-kumar-021740270/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 transition">
                <Linkedin className="text-zinc-400 w-5 h-5 group-hover:text-blue-400 transition" />
              </div>

              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">
                  LinkedIn
                </p>

                <p className="text-white font-medium group-hover:text-blue-400 transition break-all">
                  linkedin.com/in/nishant-kumar-021740270
                </p>
              </div>
            </a>

          </div>

          <div>
            <a
              href="https://github.com/NishantKumar947/nk-portfolio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 transition">
                <Github className="text-zinc-400 w-5 h-5 group-hover:text-blue-400 transition" />
              </div>

              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">GitHub</p>
                <p className="text-white font-medium group-hover:text-blue-400 transition break-all">
                  github.com/NishantKumar947/nk-portfolio
                </p>
              </div>
            </a>
          </div>

        </div>

        <div className="md:col-span-2">
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleContactChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:border-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleContactChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:border-zinc-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleContactChange}
                rows={5}
                placeholder="How can I help you?"
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-700 focus:border-zinc-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {submitState === 'success' && (
              <p className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300">
                Message sent successfully. I&apos;ll get back to you soon.
              </p>
            )}
            {submitState === 'error' && (
              <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                Message could not be sent. Please try again or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={submitState === 'sending'}
              className="w-full py-4 bg-zinc-100 text-black font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center group disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState === 'sending' ? 'Sending...' : 'Send Message'}
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
      <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-2xl font-bold text-white tracking-tighter">
          NK.
        </div>

        <p className="absolute left-1/2 -translate-x-1/2 text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} NK Tech. All rights reserved. Built with React & Motion.
        </p>

        {/* <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">Behance</a>
        </div> */}

      </div>
    </footer>
  );
}
