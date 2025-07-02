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
    "Next.js",
    "Git",
    "Firebase",
  ];

  const projects = [

    {
      title: "FindTrend",
      description:"A landing page for a social media platform for sharing and discovering trends. Built with React.js, it features a responsive design",
      tech: ["React", "Tailwind CSS", ],
      github: "https://github.com/babaj301/FindTrend-landing-page",
      live:"https://findtrend-copy.netlify.app/",
    }
    {
      title: "TaskMinder",
      description:
        "A full-featured task management application built with TypeScript and Redux. Features include CRUD operations, Firebase Authentication for Google Sign Up and Login, and Firestore integration.",
      tech: ["TypeScript", "Redux", "Firebase", "Tailwind CSS"],
      github: "https://github.com/babaj301/task-dashboard",
      live: "https://taskrrrr.netlify.app/",
    },
    {
      title: "Rayna E-commerce",
      description:
        "An e-commerce platform with dynamic cart functionality, email login and optimized performance using React Context API.",
      tech: ["React", "Context API", "Lazy Loading"],
      github: "https://github.com/babaj301/react-work-practice",
      live: "https://rayna-ecommerce.netlify.app/",
    },
    {
      title: "React Jobs",
      description:
        "A responsive job listing platform with clean UI using Tailwind CSS and seamless navigation implemented using React Router.",
      tech: ["React Router", "Tailwind CSS"],
      github: "https://github.com/babaj301/react-jobs",
      live: "https://react-jobbs.netlify.app/",
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
