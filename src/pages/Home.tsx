import StarBackground from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* The toggle */}
      <ThemeToggle />
      {/* backgroud effects */}
      <StarBackground />
      {/* navbar */}
      <Navbar />
      {/* main content */}
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
};
