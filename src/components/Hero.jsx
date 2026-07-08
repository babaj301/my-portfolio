

export default function Hero() {
  return (

    <section className="relative min-h-screen w-full flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-10">
      {/* The Basketball Hint: Abstract Court Lines */}
      {/* These lines subtly mimic the center line, key circle, and arcs of a basketball court */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-10">
        <svg
          viewBox="0 0 1000 1000"
          className="w-[150vw] md:w-[80vw] h-auto stroke-[#111111] fill-none"
          strokeWidth="1.5"
        >
          {/* Center court line */}
          <line x1="500" y1="0" x2="500" y2="1000" />
          {/* Center circle */}
          <circle cx="500" cy="500" r="150" />
          {/* Three point arcs (abstracted) */}
          <path d="M 200,0 C 200,400 800,400 800,0" strokeDasharray="10, 10" />
          <path d="M 200,1000 C 200,600 800,600 800,1000" />
          {/* The "Ball" Accent */}
          <circle
            cx="500"
            cy="500"
            r="12"
            className="fill-[#F96A00] stroke-none animate-pulse"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6 md:mb-12">
            <div className="w-12 h-[1px] bg-[#111111]"></div>
            <p className="font-body text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
              Frontend Developer
            </p>
          </div>

          <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.85] tracking-tight m-0 text-[#111111]">
            BABAJIDE
            <br />
            OLUWAFERANMI
          </h1>
        </div>

        <div className="md:w-1/4 pb-2 md:pb-6">
          <p className="font-body text-sm md:text-base leading-relaxed text-gray-600 font-medium">
            Crafting high-performance web experiences. Focused on pixel-perfect
            execution, clean architecture, and smooth interactions.
            <span className="block mt-4 text-[#F96A00] font-bold tracking-wider text-xs uppercase">
              Nothing but net.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
