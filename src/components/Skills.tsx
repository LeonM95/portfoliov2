import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSharp,
  SiDotnet,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    icon: <SiHtml5 />,
    name: "HTML",
    Description: "Semantic markup for clean structure.",
  },
  {
    icon: <SiCss3 />,
    name: "CSS",
    Description: "Responsive layouts and modern styling.",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    Description: "Core scripting for dynamic apps.",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    Description: "Typed JS for scalable codebases.",
  },
  {
    icon: <SiReact />,
    name: "React",
    Description: "Component-based UI library.",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    Description: "Fullstack framework with SSR.",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    Description: "Utility-first CSS for rapid UI.",
  },
  {
    icon: <SiSharp />,
    name: "C#",
    Description: "Object-oriented programming for APIs.",
  },
  {
    icon: <SiDotnet />,
    name: ".NET Core",
    Description: "Cross-platform backend framework.",
  },
  {
    icon: <SiDotnet />,
    name: "SQL Server",
    Description: "Relational database design.",
  },
  {
    icon: <SiGithub />,
    name: "GitHub",
    Description: "Version control and collaboration.",
  },
];

export const Skills = () => {
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
              className="bg-card bg-opacity-7 p-6 rounded-lg shadow-xs card-hover flex flex-col items-start space-y-2"
            >
              <div className="text-3xl text-primary">{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <p className="text-sm text-muted">{skill.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
