import { skills } from "../lib/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card bg-opacity-7 p-6 rounded-lg shadow-xs card-hover flex items-start space-y-2 cursor-pointer"
            >
              <div className="mr-4">
                <div className="text-3xl text-primary">{skill.icon}</div>
              </div>
              <div className=" flex flex-col">
                <h3 className="text-primary text-lg">{skill.name}</h3>
                <p className="text-sm text-muted">{skill.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
