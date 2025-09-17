import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "React",
    "Redux",
    "Next.js",
    "Express.js",
    "Prisma",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "Firebase",
  ];

  const projects = [
    {
      title: "Chatty",
      description:
        "A real-time chat application built with Next.js for the frontend, Express.js for the backend using Socket.io for real-time communication.",
      tech: ["Next.js", "Express.js", "Socket.io", "Prisma"],
      github: "https://github.com/babaj301/chat-backend",
      live: "https://chat-frontend-ten-opal.vercel.app/rooms",
    },
    {
      title: "TaskMinder",
      description:
        "A full-featured task management application built with TypeScript and Redux. Features include CRUD operations, Firebase Authentication for Google Sign Up and Login, and Firestore integration.",
      tech: ["TypeScript", "Redux", "Firebase", "Tailwind CSS"],
      github: "https://github.com/babaj301/task-dashboard",
      live: "https://taskrrrr.netlify.app/",
    },
    {
      title: "CreoWis",
      description:
        "A responsive landing page for a note taking app using Next.js, and Framer Motion for animations. Built with TypeScript and Tailwind CSS for styling.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/babaj301/creowis-landing",
      live: "https://creowis-landing.vercel.app/",
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
