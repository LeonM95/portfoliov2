import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export default function MeteorCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Position[]>([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setIsMoving(true);

      // Add to trail
      setTrail((prev) => [...prev.slice(-8), newPos]);

      // Reset moving state after 100ms of no movement
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
      setTrail([]);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button {
          cursor: none !important;
        }
      `}</style>

      {/* Trail particles */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9999] transition-opacity duration-300"
          style={{
            left: pos.x - 2,
            top: pos.y - 2,
            opacity: ((index + 1) / trail.length) * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full bg-white"
            style={{
              boxShadow: `0 0 ${4 + index}px rgba(255, 255, 255, 0.8), 
                          0 0 ${8 + index * 2}px rgba(100, 149, 237, 0.4)`,
            }}
          />
        </div>
      ))}

      {/* Main cursor - Star shape */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-100"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: isMoving ? "scale(1.2)" : "scale(1)",
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: "24px",
            height: "24px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(100,149,237,0.3) 50%, transparent 80%)",
            boxShadow:
              "0 0 20px rgba(255,255,255,0.6), 0 0 50px rgba(100,149,237,0.4)",
            filter: "blur(1px)",
          }}
        />

        {/* Meteor Star Core */}
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Cross-shaped glow */}
          <div
            className="absolute bg-white rounded-full"
            style={{
              width: "3px",
              height: "20px",
              boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
            }}
          />
          <div
            className="absolute bg-white rounded-full"
            style={{
              width: "20px",
              height: "3px",
              boxShadow: "0 0 12px rgba(255, 255, 255, 0.8)",
            }}
          />

          {/* Diagonal rays */}
          <div
            className="absolute bg-white rounded-full rotate-45"
            style={{
              width: "2px",
              height: "16px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
            }}
          />
          <div
            className="absolute bg-white rounded-full -rotate-45"
            style={{
              width: "2px",
              height: "16px",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.7)",
            }}
          />

          {/* Bright center dot */}
          <div
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              boxShadow:
                "0 0 12px rgba(255, 255, 255, 1), 0 0 25px rgba(100, 149, 237, 0.5)",
            }}
          />
        </div>
      </div>
    </>
  );
}
