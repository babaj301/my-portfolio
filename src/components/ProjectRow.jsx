import React, { useState, useEffect, useRef } from 'react';
import { LucideArrowUpRight, LucideGithub } from 'lucide-react';
export default function ProjectRow({ project, index }) {
  const useScrollReveal = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold, rootMargin: '0px 0px -50px 0px' },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          if (ref.current) observer.unobserve(ref.current);
        }
      };
    }, [threshold]);

    return [ref, isVisible];
  };
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`group border-b border-[#111111]/10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 cursor-pointer transition-all duration-1000 ease-out hover:bg-[#111111] hover:text-[#F2F2ED] hover:-mx-6 hover:px-6 md:hover:-mx-10 md:hover:px-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full">
        <span className="font-display text-xl text-gray-400 group-hover:text-[#F96A00] transition-colors select-none">
          0{index + 1}
        </span>

        <div className="flex-1">
          <h3 className="font-display text-3xl md:text-5xl mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs uppercase tracking-wider opacity-60 bg-[#111111]/5 group-hover:bg-[#F2F2ED]/10 px-2 py-[2px] rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 md:max-w-md hidden lg:block">
          <p className="font-body text-sm opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto">
        {/* Live Site & GitHub Direct Links */}
        <div className="flex md:flex-col gap-3 z-20">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest py-2 px-4 border border-[#111111]/20 group-hover:border-[#F2F2ED]/30 hover:bg-[#F96A00] hover:text-[#F2F2ED] group-hover:text-[#F2F2ED] transition-all rounded-sm"
            >
              LIVE <LucideArrowUpRight size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest py-2 px-4 border border-[#111111]/20 group-hover:border-[#F2F2ED]/30 hover:bg-white hover:text-black group-hover:text-[#F2F2ED] transition-all rounded-sm"
            >
              CODE <LucideGithub size={14} />
            </a>
          )}
        </div>

        {/* Visual Thumbnail */}
        <div className="relative w-[140px] md:w-[200px] aspect-[4/3] overflow-hidden bg-gray-200 rounded-sm hidden sm:block">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
}
