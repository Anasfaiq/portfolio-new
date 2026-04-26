import { useEffect, useState } from "react";

const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return active;
};

const navItems = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const active = useActiveSection();
  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-[60] w-fit">
      <ul className="flex gap-6 items-center [writing-mode:vertical-rl] rotate-360 whitespace-nowrap">
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`
               text-sm font-cutive font-bold tracking-widest transition-all duration-200
                ${
                  active === id
                    ? "text-(--color-text-base) font-medium"
                    : "text-(--color-text-muted) hover:text-(--color-text-base) font-thin"
                }
              `}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
