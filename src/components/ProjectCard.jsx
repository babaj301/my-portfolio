import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
    <p className="text-gray-600 mb-6">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <Github size={20} />
        <span>Code</span>
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ExternalLink size={20} />
        <span>Live Site</span>
      </a>
    </div>
  </div>
);

export default ProjectCard;
