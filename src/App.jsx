import React, { useState } from 'react';
import { LucideX } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import creowis from './assets/creowis.webp';
import { motion } from 'motion/react';
// Unique fonts that break away from standard system fonts.
// Oswald gives us that tall, athletic, bold look (perfect for the subtle sports hint).
// Manrope provides extremely clean, geometric legibility for the details.
const CustomStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=Oswald:wght@400;500;700&display=swap');
    
    .font-display {
      font-family: 'Oswald', sans-serif;
      text-transform: uppercase;
    }
    .font-body {
      font-family: 'Manrope', sans-serif;
    }
    
    html {
      scroll-behavior: smooth;
    }

    ::selection {
      background-color: #F96A00;
      color: #F2F2ED;
    }
    
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `,
    }}
  />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const skills = [
    'React',
    'Redux',
    'Next.js',
    'Express.js',
    'Prisma',
    'Postgres',
    'Redis',
    'MongoDB',
    'GraphQL',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Git',
    'Firebase',
    'Framer Motion',
  ];

  const projects = [
    {
      title: 'Chatty',
      description:
        'A real-time chat application built with Next.js for the frontend, Express.js for the backend using Socket.io for real-time communication.',
      tech: ['Next.js', 'Express.js', 'Socket.io', 'Prisma'],
      github: 'https://github.com/babaj301/chat-backend',
      live: 'https://chat-frontend-ten-opal.vercel.app/rooms',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    },
    {
      title: 'CreoWis',
      description:
        'A responsive landing page for a note taking app using Next.js, and Framer Motion for animations. Built with TypeScript and Tailwind CSS for styling.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/babaj301/creowis-landing',
      live: 'https://creowis-landing.vercel.app/',
      image: creowis,
    },
    // {
    //   title: 'FindTrend',
    //   description:
    //     'A responsive landing page for a social media platform using Next.js, and Framer Motion for animations. Built with TypeScript and Tailwind CSS for styling.',
    //   tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    //   github: 'https://github.com/babaj301/FindTrend-landing-page',
    //   live: 'https://findtrend-copy.netlify.app/',
    //   image:
    //     'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    // },
    // {
    //   title: 'TaskMinder',
    //   description:
    //     'A full-featured task management application built with TypeScript, React, and Redux using Firebase Authentication.',
    //   tech: ['TypeScript', 'Redux', 'Firebase', 'Tailwind CSS'],
    //   github: 'https://github.com/babaj301/task-dashboard',
    //   live: 'https://taskrrrr.netlify.app/',
    //   image:
    //     'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    // },
  ];

  return (
    <div className="min-h-screen bg-[#F2F2ED] text-[#111111] font-body">
      <CustomStyles />

      {/* Shared Minimalist Navigation Menu */}
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        className="fixed w-full z-50 mix-blend-difference text-[#F2F2ED] p-6 md:p-10 flex justify-between items-center pointer-events-none"
      >
        <div className="font-display text-xl tracking-wide pointer-events-auto select-none">
          B.O.
        </div>
        <button
          onClick={toggleMenu}
          className={`pointer-events-auto cursor-pointer gap-[6px] group focus:outline-none ${isMenuOpen ? 'hidden' : 'flex flex-col'}`}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-[2px] bg-current transition-all group-"></div>
          <div className="w-6 h-[2px] bg-current transition-all group-hover:w-4"></div>
          <div className="w-4 h-[2px] bg-current transition-all group-hover:w-2"></div>
        </button>
      </motion.nav>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#111111] text-[#F2F2ED] z-40 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center items-center ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="absolute top-10 right-10">
          <button
            onClick={toggleMenu}
            className="p-4 hover:text-[#F96A00] transition-colors"
            aria-label="Close Menu"
          >
            <LucideX size={32} strokeWidth={1} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 text-left font-display text-5xl md:text-8xl tracking-tight">
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5, ease: 'easeOut' }}
            href="#about"
            onClick={toggleMenu}
            className="hover:text-[#F96A00] hover:translate-x-4 transition-all"
          >
            01. ABOUT
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
            href="#work"
            onClick={toggleMenu}
            className="hover:text-[#F96A00] hover:translate-x-4 transition-all"
          >
            02. WORK
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            href="#experience"
            onClick={toggleMenu}
            className="hover:text-[#F96A00] hover:translate-x-4 transition-all"
          >
            03. EXPERIENCE
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-[#F96A00] hover:translate-x-4 transition-all"
          >
            04. CONTACT
          </motion.a>
        </div>
      </div>
      <Hero />
      <Skills skills={skills} />
      <Experience />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}
