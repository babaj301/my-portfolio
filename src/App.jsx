import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Git",
    "Firebase",
  ];

  const projects = [
    {
      title: "TaskMinder",
      description:
        "A full-featured task management application built with TypeScript and Redux. Features include CRUD operations, Firebase Authentication for Google Sign Up and Login, and Firestore integration.",
      tech: ["TypeScript", "Redux", "Firebase", "Tailwind CSS"],
      github: "https://github.com/babaj301/task-dashboard",
      live: "https://taskrrrr.netlify.app/",
    },
    {
      title: "E-commerce Site",
      description:
        "An e-commerce platform with dynamic cart functionality, email login and optimized performance using React Context API.",
      tech: ["React", "Context API", "Lazy Loading"],
      github: "https://github.com/babaj301/react-work-practice",
      live: "https://rayna-ecommerce.netlify.app/",
    },
    {
      title: "Job Site",
      description:
        "A responsive job listing platform with clean UI using Tailwind CSS and seamless navigation implemented using React Router.",
      tech: ["React Router", "Tailwind CSS"],
      github: "https://github.com/babaj301/react-j",
      live: "https://react-jobbs.netlify.app/s",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
