import React, { useRef, useEffect } from "react";

interface Props {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const MagneticButton = ({ onClick, href, children, className }: Props) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const glowRef = useRef<HTMLSpanElement>(null);
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = () => {
    const el = ref.current;
    if (!el || !glowRef.current) return;
    current.current.x = lerp(current.current.x, target.current.x, 0.15);
    current.current.y = lerp(current.current.y, target.current.y, 0.15);
    el.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
    glowRef.current.style.background = `radial-gradient(250px at ${current.current.x + 150}px ${current.current.y + 40}px, rgba(240, 237, 230, 0.18), transparent 80%)`;
    rafId.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    target.current.x = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
    target.current.y = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
  };

  const handleMouseLeave = () => {
    target.current.x = 0;
    target.current.y = 0;
  };

  const handleMouseEnter = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const hireButton = `relative overflow-hidden border-2 border-(--color-border) flex gap-2 
    font-inter font-medium text-sm outline-none
    bg-(--color-surface) text-(--color-text-base)
    hover:bg-(--color-text-base) hover:text-(--color-surface)
    cursor-pointer transition-all duration-200
    active:scale-95 active:shadow-none active:translate-x-1 active:translate-y-1
    px-5 py-3 md:px-7 md:py-4 w-max items-center
    shadow-[6px_6px_0_var(--color-shadow)]
    hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${className ?? ""}`;

  const githubButton = `border border-(--color-border) px-4 py-2 w-max flex items-center gap-2
                shadow-[6px_6px_0_var(--color-shadow)]
                bg-(--color-surface) text-(--color-text-base)
                hover:bg-(--color-text-base) hover:text-(--color-surface)
                hover:shadow-none hover:translate-x-1 hover:translate-y-1
                active:shadow-none active:translate-x-1 active:translate-y-1 active:scale-95
                font-inter font-medium text-sm outline-none transition-all duration-200 ${className}`;

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  };

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span ref={glowRef} className="absolute inset-0 pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={githubButton}
        {...sharedProps}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      className={hireButton}
      {...sharedProps}
    >
      {inner}
    </button>
  );
};

export default MagneticButton;
