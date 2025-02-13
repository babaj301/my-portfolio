const Skills = ({ skills }) => (
  <section className="py-20 container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
