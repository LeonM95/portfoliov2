export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className=" container max-w-4xl mx-auto text-center z-10">
        <div className=" space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="opacity-0 animate-fade-in">Hey there! </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              I'm Leo
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              a Web Developer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            More than code. I help businesses build digital experiences that are
            functional, fast, and tailored — from landing pages to backend logic
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
