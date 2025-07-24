import { Github, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce",
    description: "Ecommerce for gym products",
    image: "/projects/GymCore/GymCore1.png",
    tag: ["React, Next.js, Tailwind CSS"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Landing Page",
    description: "AI landing page",
    image: "/projects/GymCore/GymCore2.png",
    tag: ["React, Next.js, Tailwind CSS"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 3,
    title: "Test",
    description: "This is for testing",
    image: "/projects/GymCore/GymCore3.png",
    tag: ["React, Next.js, Tailwind CSS"],
    demoURL: "#",
    githubURL: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          unde in reiciendis totam officiis iure placeat non ab facere,
          consectetur eius id laboriosam harum dolor quam, dolores itaque,
          eligendi veritatis?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((tag) => (
                    <span className="px-2 py-1 text-sm font-medium rounded-full bg-secondary text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 ">
                  <a
                    href={project.demoURL}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Globe size={20} />
                  </a>
                  <a
                    href={project.githubURL}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center ">
          <a
            href="https://github.com/LeonM95"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Github Profile <Github size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
