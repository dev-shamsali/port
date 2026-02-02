'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'Quantum Commerce',
      category: 'E-commerce Platform',
      year: '2024',
      description: 'Next-gen shopping experience with AI-powered recommendations',
      tags: ['React', 'Node.js', 'AI/ML'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Nebula Analytics',
      category: 'Data Visualization',
      year: '2024',
      description: 'Real-time dashboard for enterprise insights',
      tags: ['D3.js', 'Python', 'PostgreSQL'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Horizon Mobile',
      category: 'Mobile App',
      year: '2023',
      description: 'Social platform connecting creators worldwide',
      tags: ['React Native', 'Firebase', 'GraphQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Echo Studio',
      category: 'Design System',
      year: '2023',
      description: 'Comprehensive component library for modern web',
      tags: ['TypeScript', 'Storybook', 'Figma'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const skills = [
    'JavaScript/TypeScript', 'React & Next.js', 'Node.js',
    'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker',
    'GraphQL', 'REST APIs', 'UI/UX Design', 'Figma'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-5 h-5 border-2 border-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-40 px-8 py-6 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold tracking-tight"
          >
            Portfolio
          </motion.div>
          <div className="flex gap-8">
            {['Work', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" id="hero">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm tracking-[0.3em] text-zinc-400 uppercase mb-6"
          >
            Creative Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="block"
            >
              Crafting Digital
            </motion.span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              className="block bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent"
            >
              Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building elegant solutions at the intersection of design and technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(251, 146, 60, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-zinc-950 rounded-full font-semibold hover:bg-orange-400 transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-zinc-500" />
          <span>SCROLL</span>
        </motion.div>
      </section>

      {/* Work Section */}
      <section className="py-32 px-8" id="work">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-20"
          >
            <span className="text-orange-500 font-bold text-lg tracking-wider">01</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Selected Work</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-9xl font-bold opacity-20"
                  >
                    {project.title.charAt(0)}
                  </motion.div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4 text-sm text-zinc-500">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-20"
          >
            <span className="text-orange-500 font-bold text-lg tracking-wider">02</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">About Me</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="lg:col-span-2"
            >
              <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-light">
                I'm a full-stack developer with a passion for creating intuitive,
                performant web applications. With 5+ years of experience, I specialize
                in modern JavaScript frameworks and scalable backend systems.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-12">
                My approach combines technical expertise with design thinking to deliver
                products that don't just work—they delight. I believe great software is
                invisible, seamlessly integrating into users' lives while solving real problems.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">Core Skills</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-3"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 146, 60, 0.1)' }}
                      className="p-4 bg-zinc-900/50 rounded-xl text-center text-sm border border-white/5 hover:border-orange-500/30 transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="flex flex-col gap-6"
            >
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '20+', label: 'Happy Clients' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-zinc-900/50 rounded-2xl text-center border border-white/5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-20"
          >
            <span className="text-orange-500 font-bold text-lg tracking-wider">03</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Let's Connect</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-zinc-400 mb-16 max-w-2xl"
          >
            I'm always interested in hearing about new projects and opportunities.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
              { label: 'GitHub', value: '@yourusername', href: 'https://github.com' },
              { label: 'LinkedIn', value: '/in/yourprofile', href: 'https://linkedin.com' },
              { label: 'Twitter', value: '@yourhandle', href: 'https://twitter.com' }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: 'rgba(251, 146, 60, 0.1)' }}
                className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group"
              >
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  {contact.label}
                </div>
                <div className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                  {contact.value}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            © 2024 Portfolio. All rights reserved.
          </div>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            className="text-sm text-zinc-500 hover:text-orange-500 transition-colors"
          >
            Back to top ↑
          </motion.a>
        </div>
      </footer>
    </div>
  );
}