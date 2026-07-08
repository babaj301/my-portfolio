import ProjectRow from './ProjectRow';

export default function Projects({ projects }) {
  return (
    <section id="work" className="py-32 px-6 md:px-10 bg-[#F2F2ED]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-baseline justify-between border-b-2 border-[#111111] pb-6 mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-wide">
            SELECTED WORK
          </h2>
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
