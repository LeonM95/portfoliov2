const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Leo_Masis_CV.pdf"; // Path to your CV file in public folder
  link.download = "Leo CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function About() {
  return (
    <section id="about" className="pt-24 pb-64 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 items-center w-1/2 mx-auto">
        <div className="space-y-6 ">
          <p className="text-muted-foreground">
            I'm a web developer with a strong foundation in technical support
            for SaaS platforms. For several years, I helped users solve complex
            problems, handled high-pressure situations, and learned how software
            impacts people in real-time. That experience shaped the way I think
            about building tools — focusing on clarity, performance, and the
            user’s perspective.
          </p>

          <p className="text-muted-foreground">
            Over the past year, I’ve worked as a freelance web developer,
            creating responsive landing pages, building APIs, and integrating
            frontends with backend logic. I enjoy the challenge of making things
            work — whether it’s building something from scratch or customizing
            existing code to fit new requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Contact me
            </a>

            <a
              href="#about"
              onClick={handleDownload}
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
