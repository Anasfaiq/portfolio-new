import React from "react";

interface AnimatedShape {
  id: string;
  type: "hexagon" | "triangle" | "circle" | "square";
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  opacity: number;
  filled: boolean;
}

const Hexagon = ({ size, filled }: { size: number; filled: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className="overflow-visible"
  >
    <polygon
      points="50,10 90,35 90,85 50,110 10,85 10,35"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const Triangle = ({ size, filled }: { size: number; filled: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className="overflow-visible"
  >
    <polygon
      points="50,10 90,90 10,90"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const Circle = ({ size, filled }: { size: number; filled: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className="overflow-visible"
  >
    <circle
      cx="50"
      cy="50"
      r="45"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const Square = ({ size, filled }: { size: number; filled: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className="overflow-visible"
  >
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ShapeComponent = ({
  type,
  size,
  filled,
}: {
  type: string;
  size: number;
  filled: boolean;
}) => {
  switch (type) {
    case "hexagon":
      return <Hexagon size={size} filled={filled} />;
    case "triangle":
      return <Triangle size={size} filled={filled} />;
    case "circle":
      return <Circle size={size} filled={filled} />;
    case "square":
      return <Square size={size} filled={filled} />;
    default:
      return null;
  }
};

const AnimatedGeometricBackground: React.FC = () => {
  // curate shapes dengan timing yang bagus
  const shapes: AnimatedShape[] = [
    // hexagons
    {
      id: "hex-1",
      type: "hexagon",
      size: 80,
      top: "10%",
      left: "15%",
      delay: 0,
      duration: 20,
      opacity: 0.15,
      filled: false,
    },
    {
      id: "hex-2",
      type: "hexagon",
      size: 60,
      top: "70%",
      left: "90%",
      delay: 2,
      duration: 25,
      opacity: 0.1,
      filled: false,
    },
    // triangles
    {
      id: "tri-1",
      type: "triangle",
      size: 70,
      top: "70%",
      left: "10%",
      delay: 1,
      duration: 22,
      opacity: 0.12,
      filled: false,
    },
    {
      id: "tri-2",
      type: "triangle",
      size: 90,
      top: "20%",
      left: "85%",
      delay: 3,
      duration: 26,
      opacity: 0.1,
      filled: false,
    },
    // circles (accent)
    {
      id: "circle-1",
      type: "circle",
      size: 50,
      top: "50%",
      left: "95%",
      delay: 0.5,
      duration: 24,
      opacity: 0.1,
      filled: false,
    },
    {
      id: "circle-2",
      type: "circle",
      size: 45,
      top: "35%",
      left: "10%",
      delay: 2.5,
      duration: 28,
      opacity: 0.1,
      filled: false,
    },
    // squares (subtle)
    {
      id: "sq-1",
      type: "square",
      size: 70,
      top: "15%",
      left: "5%",
      delay: 1.5,
      duration: 80,
      opacity: 0.07,
      filled: false,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">

      {/* animated shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute text-(--color-text-muted)"
          style={{
            top: shape.top,
            left: shape.left,
            opacity: shape.opacity,
            animation: `float-${shape.id} ${shape.duration}s ease-in-out ${shape.delay}s infinite`,
            // @keyframes akan di define di App.css atau global css
          }}
        >
          <ShapeComponent
            type={shape.type}
            size={shape.size}
            filled={shape.filled}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedGeometricBackground;
