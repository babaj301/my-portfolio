import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Crop2Cash",
      period: "2024 - Present",
      description:
        "Working as part of the development team to build and maintain modern web applications, focusing on React-based solutions and responsive design implementations.",
      achievements: [
        "Worked on building and optimizing React applications, resulting in a 25% improvement in load times",
        "Collaborated with a team of 5 developers to implement new features and debug issues",
        "Utilized Git and GitHub for version control and collaborative development",
        "Implemented responsive designs using Tailwind CSS, ensuring mobile-first approach",
        "Participated in code reviews and provided constructive feedback to team members",
        "Assisted in the migration of legacy code to modern React practices and TypeScript",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - 2024",
      description:
        "Worked with various clients to deliver custom web solutions and applications.",
      achievements: [
        "Developed and maintained websites for 5+ clients using React and modern web technologies",
        "Created responsive and accessible user interfaces using Tailwind CSS",
        "Implemented state management solutions using Redux and Context API",
        "Integrated third-party APIs and services into client applications",
        "Provided technical consultation and solutions architecture for client projects",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Education</h3>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-gray-800">
                  B.A. in Political Science
                </p>
                <p className="text-gray-600">
                  Specialized in Public Policy and Administration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
