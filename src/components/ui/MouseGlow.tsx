import { useState, useEffect } from "react";

// ganti div gradient jadi component tersendiri
const MouseGlow = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: isDarkMode
          ? `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(240, 237, 230, 0.07), transparent 80%)`
          : `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(26, 26, 26, 0.2), transparent 80%)`,
      }}
    />
  );
};

export default MouseGlow;