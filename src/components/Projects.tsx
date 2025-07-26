import { Github, Globe } from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";
import { projects } from "../lib/projectsData";

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

              <div className="p-6 h-52">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="w-full text-center">
                    <h2 className="text-primary text-center text-xl font-semibold mb-1">
                      {project.title}
                    </h2>
                  </div>
                  <div>
                    <div className="flex flex-row flex-wrap gap-2.5">
                      {project.tag.map((tag, key) => (
                        <div key={key}>{tag}</div>
                      ))}
                    </div>
                  </div>

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
