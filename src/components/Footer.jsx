import { LucideArrowUpRight, LucideGithub, LucideLinkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#111111] text-[#F2F2ED] pt-32 pb-10 px-6 md:px-1 overflow-hidden"
    >
      {/* Large Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5 select-none">
        <h2 className="font-display text-[25vw] leading-none whitespace-nowrap">
          LET'S BUILD
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col h-full">
        <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
          <div>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-[#F96A00] mb-6 font-bold">
              Open for opportunities
            </p>
            <a
              href="mailto:babajideoluwaferanmi301@gmail.com"
              className="font-display text-4xl md:text-8xl hover:text-[#F96A00] transition-colors inline-flex items-center gap-4 group"
            >
              GET IN TOUCH
              <LucideArrowUpRight
                size={64}
                className="group-hover:rotate-45 transition-transform duration-300 w-12 h-12 md:w-16 md:h-16"
              />
            </a>
          </div>

          <div className="flex flex-col gap-4 font-body">
            <a
              href="https://github.com/babaj301"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-[#F96A00] transition-colors"
            >
              GitHub
              <LucideGithub size={24} className="inline-block ml-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/babaj301/"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-[#F96A00] transition-colors"
            >
              <LucideLinkedin size={24} className="inline-block mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#F2F2ED]/20 font-body text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Babajide Oluwaferanmi.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0"></div>
        </div>
      </div>
    </footer>
  );
}
