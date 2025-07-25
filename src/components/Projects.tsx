import { Github, Globe } from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";

type projects = {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  tag: string[];
  demoURL: string;
  githubURL: string;
};

const projects = [
  {
    id: 1,
    title: "Ecommerce Gym Up",
    description:
      "Gym Up is an Ecommerce to seel products for athletes of any sport",
    images: [
      "/projects/GymCore/GymCore1.png",
      "/projects/GymCore/GymCore2.png",
      "/projects/GymCore/GymCore3.png",
      "/projects/GymCore/GymCore4.png",
      "/projects/GymCore/GymCore5.png",
      "/projects/GymCore/GymCore6.png",
      "/projects/GymCore/GymCore7.png",
    ],
    tag: ["React, Next.js, Tailwind CSS"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "This is a portfolio to show my abilities",
    images: [
      "/projects/GymCore/GymCore1.png",
      "/projects/GymCore/GymCore2.png",
      "/projects/GymCore/GymCore3.png",
      "/projects/GymCore/GymCore4.png",
      "/projects/GymCore/GymCore5.png",
      "/projects/GymCore/GymCore6.png",
      "/projects/GymCore/GymCore7.png",
    ],
    tag: ["React, Vite, Tailwind CSS"],
    demoURL: "#",
    githubURL: "#",
  },
  {
    id: 3,
    title: "AI landing page",
    description: "This is a landing page for AI bots",
    images: [
      "/projects/GymCore/GymCore1.png",
      "/projects/GymCore/GymCore2.png",
      "/projects/GymCore/GymCore3.png",
      "/projects/GymCore/GymCore4.png",
      "/projects/GymCore/GymCore5.png",
      "/projects/GymCore/GymCore6.png",
      "/projects/GymCore/GymCore7.png",
    ],
    tag: ["React, Next.js, Tailwind CSS"],
    demoURL: "#",
    githubURL: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-32 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on — each one is part of my
          path to becoming a better developer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <ProjectCarousel images={project.images ?? []} />
              {/* <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div> */}
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  {project.tag.map((tag) => (
                    // <span className="px-2 py-1 text-sm font-medium rounded-full bg-secondary text-secondary">
                    <div>{tag}</div>
                    // </span>
                  ))}
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-6 items-center">
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
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
