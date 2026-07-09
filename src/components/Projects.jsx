import ProjectRow from './ProjectRow';

export default function Projects({ projects }) {
  return (
    <section id="work" className="py-32 px-6 md:px-10 bg-[#F2F2ED]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-baseline justify-between border-b-2 border-[#111111] pb-6 mb-16">
          <div className="relative">
            <span className="font-display text-8xl md:text-[10rem] leading-none text-black/10 block -ml-2 select-none absolute top-0 left-0 -translate-y-1/4 z-0 pointer-events-none">
              03
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-wide relative z-10 pt-10 md:pt-16">
              PROJECTS
            </h2>
          </div>
          <span className="font-body text-sm font-bold tracking-widest uppercase">
            2023 — 2026
          </span>
        </div>

        <div className="flex flex-col w-full">
          {projects.map((project, idx) => (
            <ProjectRow key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
