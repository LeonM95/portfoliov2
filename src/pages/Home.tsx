import StarBackground from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

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
        <HeroSection />
      </main>
    </div>
  );
};
