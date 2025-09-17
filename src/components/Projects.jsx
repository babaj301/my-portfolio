import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => (
  <section id="projects" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
