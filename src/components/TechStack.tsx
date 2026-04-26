import Card from "./ui/Card";
import AccentShapes from "./ui/AccentShapes";

const TechStack = () => {
  return (
    <div className="relative">
      <AccentShapes variant="square" className="-top-8 -left-8" />
      <AccentShapes variant="black-circle" className="w-4 h-4 -top-3 left-10" />
      <AccentShapes variant="diamond" className="-bottom-1 -right-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
        <Card>
          <div className="flex flex-col gap-6">
            <p className="text-xl md:text-2xl font-bold text-(--color-text-base)">
              Tech Stack
            </p>
            {[
              {
                label: "CORE",
                items: ["React", "TypeScript", "JavaScript", "PHP"],
              },
              {
                label: "STYLING",
                items: ["Tailwind CSS", "CSS3", "Responsive Design"],
              },
              { label: "TOOLS", items: ["Vite", "Git", "npm"] },
              { label: "STATE & DATA", items: ["React Query"] },
            ].map(({ label, items }) => (
              <ul key={label} className="flex flex-col gap-1">
                <li className="text-(--color-text-muted) text-sm">
                  {label}
                </li>
                {items.map((item) => (
                  <li key={item} className="text-(--color-text-base)">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-6">
            <h2 className="font-inter font-bold text-xl md:text-2xl text-(--color-text-base)">
              Freelance Services
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                "Custom Web Application Development",
                "UI/UX Implementation",
                "Component Library Design",
                "Performance Optimization",
                "Responsive Design & Mobile-First Development",
                "Code Review & Refactoring",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 font-inter text-sm md:text-base text-(--color-text-base)"
                >
                  <span className="w-2 h-2 bg-(--color-border) rotate-45 shrink-0 mt-1.5" />
                  {service}
                </li>
              ))}
            </ul>
            <hr className="border-(--color-text-muted)" />
            <p className="text-(--color-text-muted) text-sm font-inter font-light">
              Currently available for project-based work and ongoing
              collaborations
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TechStack;
