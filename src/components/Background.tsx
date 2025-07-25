import { useEffect, useState } from "react";

export default function Background() {
  // TS types
  type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
    color: string;
  };

  type Meteor = {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: string;
    animationDuration: number;
  };

  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // to render functions
  useEffect(() => {
    generateStars();
    generateMeteors();

    // to resize the qty of stars in small screens
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const totalStars = 100;
    const stars: Star[] = [];

    for (let i = 0; i < totalStars; i++) {
      let color = "white";
      if (i >= 70 && i < 80) color = "red";
      else if (i >= 80 && i < 90) color = "blue";
      else if (i >= 90) color = "green";

      stars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        color,
      });
    }

    setStars(stars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 5;

    const newMeteors: Meteor[] = [];

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

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full animate-pulse-subtle ${
            star.color === "white"
              ? "bg-white"
              : star.color === "red"
              ? "bg-red-500"
              : star.color === "blue"
              ? "bg-blue-400"
              : "bg-green-400"
          }`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            boxShadow: `0 0 10px 2px ${
              star.color === "white"
                ? "rgba(255,255,255,0.5)"
                : star.color === "red"
                ? "rgba(255,0,0,0.5)"
                : star.color === "blue"
                ? "rgba(0,0,255,0.5)"
                : "rgba(0,255,0,0.5)"
            }`,
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
