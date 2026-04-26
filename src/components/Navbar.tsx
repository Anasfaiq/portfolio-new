import { useEffect, useState } from "react";

const useActiveSection = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    // pakai rootMargin biar lebih akurat, terutama buat section pendek kayak contact
    const observer = new IntersectionObserver(
      (entries) => {
        // ambil semua yang lagi intersecting, pilih yang paling atas
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          setActive(intersecting[0].target.id);
        }
      },
      {
        threshold: 0.1,
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* desktop: sidebar kanan, vertical */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-[60] hidden lg:block">
        <ul className="flex gap-5 items-end [writing-mode:vertical-rl]">
          {navItems.map(({ id, label }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`
                  text-xs font-cutive tracking-widest transition-all duration-300 relative
                  ${
                    active === id
                      ? "text-(--color-text-base) font-bold"
                      : "text-(--color-text-muted) hover:text-(--color-text-base) font-thin"
                  }
                `}
              >
                {/* indicator dot */}
                <span
                  className={`
                    absolute -left-3 top-1/2 -translate-y-1/2 w-0.5 h-full rounded-full
                    transition-all duration-300
                    ${active === id ? "bg-(--color-text-base) scale-100" : "bg-transparent scale-0"}
                  `}
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile: bottom bar, horizontal */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden">
        <div
          className="
            bg-(--color-surface) border-t border-(--color-border)
            backdrop-blur-sm bg-opacity-90
          "
        >
          <ul className="flex justify-around items-center px-2 py-2">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`
                    flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg
                    transition-all duration-300 text-[10px] font-cutive tracking-wider
                    ${
                      active === id
                        ? "text-(--color-text-base) font-bold"
                        : "text-(--color-text-muted)"
                    }
                  `}
                >
                  {/* dot indicator di atas label */}
                  <span
                    className={`
                      w-full h-0.5 rounded-full transition-all duration-300
                      ${active === id ? "bg-(--color-text-base) scale-100" : "bg-transparent scale-0"}
                    `}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
