import React, { useRef } from "react";

interface Props {
  onHireMe: () => void;
  children: React.ReactNode;
}

const MagneticButton = ({ onHireMe, children }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);

  let current = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = () => {
    if (!ref.current || !glowRef.current) return;

    // inertia effect
    current.x = lerp(current.x, target.x, 0.15);
    current.y = lerp(current.y, target.y, 0.15);
    ref.current.style.transform = `translate(${current.x}px, ${current.y}px)`;

    // liquid like glow effect
    glowRef.current.style.background = `radial-gradient(250px at ${current.x + 150}px ${current.y + 40}px, rgba(240, 237, 230, 0.18), transparent 80%)`;
    requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    target.x = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
    target.y = (e.clientY - (rect.top + rect.width / 2)) * 0.2;
  };

  const handleMouseLeave = () => {
    target.x = 0;
    target.y = 0;
  };

  const handleMouseEnter = () => {
    requestAnimationFrame(animate);
  };
  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onHireMe}
      className="relative overflow-hidden border-2 border-(--color-border) flex gap-2 font-inter font-medium text-sm md:text-md outline-none
              bg-(--color-surface) text-(--color-text-base)
              hover:bg-(--color-text-base) hover:text-(--color-surface)
              cursor-pointer transition-all duration-200
              active:scale-95 active:shadow-none active:translate-x-1 active:translate-y-1
              px-5 py-3 md:px-7 md:py-4 w-max items-center
              shadow-[6px_6px_0_var(--color-shadow)]
              hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      <span
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 7l-10 10" />
        <path d="M8 7l9 0l0 9" />
      </svg>
    </button>
  );
};

export default MagneticButton;
