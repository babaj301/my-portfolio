import { motion } from 'motion/react';
export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-10 ">
      {' '}
      {/* The Basketball Hint: Abstract Court Lines */}
      {/* These lines subtly mimic the center line, key circle, and arcs of a basketball court */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-10"
      >
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
          className="w-[150vw] md:w-[80vw] aspect-square stroke-[#111111] fill-none shrink-0"
          strokeWidth="1.5"
        >
          <line x1="500" y1="0" x2="500" y2="1000" />
          <circle cx="500" cy="500" r="150" />
          <line x1="0" y1="0" x2="1000" y2="0" />
          <line x1="0" y1="1000" x2="1000" y2="1000" />
          <circle
            cx="500"
            cy="500"
            r="12"
            className="fill-[#F96A00] stroke-none"
          />
        </svg>
      </motion.div>
      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6 md:mb-12">
            <div className="w-12 h-[1px] bg-[#111111]"></div>
            <p className="font-body text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
              Software Developer
            </p>
          </div>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="font-display text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight mb-1 text-[#111111]"
          >
            BABAJIDE
            <br />
            OLUWAFERANMI
          </motion.h1>
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="md:w-1/4 pb-2 md:pb-6"
        >
          <p className="font-body text-sm md:text-base leading-relaxed text-gray-600 font-medium">
            Crafting high-performance web experiences. Focused on pixel-perfect
            execution, clean architecture, and smooth interactions.
            <span className="block mt-4 text-[#F96A00] font-bold tracking-wider text-xs uppercase">
              Nothing but net.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
