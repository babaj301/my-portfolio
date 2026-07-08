export default function Skills({ skills }) {
  // Let's divide your true technical competencies into category columns for that beautiful editorial layout
  const coreCompetencies = skills.filter((s) =>
    [
      'React',
      'TypeScript',
      'Next.js',
      'Express.js',
      'Postgres',
      'Redux',
    ].includes(s),
  );
  const stylingCompetencies = skills.filter((s) =>
    ['Tailwind CSS', 'Framer Motion', 'CSS'].includes(s),
  );
  const backToolsCompetencies = skills.filter((s) =>
    ['Prisma', 'Redis', 'MongoDB', 'Firebase', 'Git', 'GraphQL'].includes(s),
  );

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-10 bg-[#111111] text-[#F2F2ED]"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-display text-8xl md:text-[10rem] leading-none text-[#F2F2ED]/10 block -ml-2 select-none">
                01
              </span>
              <h2 className="font-display text-4xl md:text-6xl tracking-wide mt-[-2rem] relative z-10">
                THE PLAYBOOK
              </h2>
            </div>

            <div className="hidden lg:block">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="stroke-[#F96A00] fill-none animate-spin"
                style={{ animationDuration: '20s' }}
                strokeWidth="1.5"
              >
                <circle cx="20" cy="20" r="18" />
                <line x1="20" y1="2" x2="20" y2="38" />
                <line x1="2" y1="20" x2="38" y2="20" />
                <path d="M 6,10 C 15,15 15,25 6,30" />
                <path d="M 34,10 C 25,15 25,25 34,30" />
              </svg>
            </div>
          </div>

          <div className="lg:col-span-8 font-body text-xl md:text-3xl leading-snug md:leading-normal font-light">
            <p className="mb-12">
              I am a software developer driven by logic, layout, and motion. I
              bridge the gap between complex engineering problems and seamless
              user interfaces.
            </p>
            <p className="text-gray-400">
              Whether it's building a robust component library from scratch or
              fine-tuning the performance of a fullstack application, I approach
              code with the same discipline required on the court:{' '}
              <strong className="text-[#F2F2ED] font-normal">
                preparation, execution, and follow-through.
              </strong>
            </p>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[#F2F2ED]/20 pt-12">
              <div>
                <h4 className="font-body text-xs uppercase tracking-widest font-bold mb-6 text-[#F96A00]">
                  Core Stack
                </h4>
                <ul className="space-y-3 font-body text-base text-gray-400">
                  {coreCompetencies.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-body text-xs uppercase tracking-widest font-bold mb-6 text-[#F96A00]">
                  Styling & Interaction
                </h4>
                <ul className="space-y-3 font-body text-base text-gray-400">
                  {stylingCompetencies.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-body text-xs uppercase tracking-widest font-bold mb-6 text-[#F96A00]">
                  Architectures & Tools
                </h4>
                <ul className="space-y-3 font-body text-base text-gray-400">
                  {backToolsCompetencies.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
