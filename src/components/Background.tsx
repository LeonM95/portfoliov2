import { useEffect, useState } from "react";

export default function Background() {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // TS types
  type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
  };

  type Meteor = {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: string;
    animationDuration: number;
  };

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateMeteors = () => {
    const numberOfMeteors = 5;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: `${Math.random() * 2}s`,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
}
