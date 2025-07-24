import { Briefcase, Code, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold  mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Passionate Web developer</h3>
          <p className="text-muted-foreground">
            I'm a web developer with extensive experience providing technical
            support and resolving technical issues with SaaS application. I have
            great communications skils, I can handle difficult customers and can
            work in hign pace environments
          </p>

          <p className="text-muted-foreground">
            With over 1 year of experience working as freelance web developer
            I'm able to develop stunning landing pages, create API's and connect
            them with the fronted. Also I have experice doing icustomization to
            existing web applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Contact me
            </a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3  rounded-full bg-primary/10">
                <Code className="h6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Frontend Development</h4>
                <p>Creating responsive web appliction with robuest backends</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3  rounded-full bg-primary/10">
                <Users className="h6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p>Creating responsive web appliction with robuest backends</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3  rounded-full bg-primary/10">
                <Briefcase className="h6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UX/UI</h4>
                <p>Creating responsive web appliction with robuest backends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
