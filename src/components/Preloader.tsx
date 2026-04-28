import { useState, useEffect } from "react";

const Preloader = ({ isShattering }: { isShattering: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "CRAFTING THE EXPERIENCE...";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-(--color-bg) transition-transform duration-[800ms] ease-in-out
        ${isShattering ? "-translate-y-full" : "translate-y-0"}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-(--color-bg) transition-transform duration-[800ms] ease-in-out
        ${isShattering ? "translate-y-full" : "translate-y-0"}`}
      ></div>

      <div
        className={`relative z-10 border-4 border-(--color-border) p-6 md:p-10 bg-(--color-bg) transition-all duration-500
        ${isShattering ? "opacity-0 scale-90" : "opacity-100 scale-100 shadow-[6px_6px_0_var(--color-shadow)]"}`}
      >
        <h1 className="text-(--color-text-base) font-cutive text-xl md:text-3xl font-bold uppercase tracking-tighter">
          {displayText} <span className="animate-blink">_</span>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
