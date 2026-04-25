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
            <p className="text-xl md:text-2xl font-bold">Tech Stack</p>
            <ul className="flex flex-col gap-1">
              <li className="text-gray-600 text-sm">CORE</li>
              {["React", "TypeScript", "JavaScript", "PHP"].map((core) => (
                <li key={core}>{core}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="text-gray-600 text-sm">STYLING</li>
              {["Tailwind CSS", "CSS3", "Responsive Design"].map((styling) => (
                <li key={styling}>{styling}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="text-gray-600 text-sm">TOOLS</li>
              {["Vite", "Git", "npm"].map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="text-gray-600 text-sm">STATE & DATA</li>
              {["React Query"].map((stateData) => (
                <li key={stateData}>{stateData}</li>
              ))}
            </ul>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-6">
            <h2 className="font-inter font-bold text-xl md:text-2xl">
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
                  className="flex items-start gap-3 font-inter text-sm md:text-base"
                >
                  <span className="w-2 h-2 bg-black rotate-45 shrink-0 mt-1.5" />
                  {service}
                </li>
              ))}
            </ul>
            <hr className="border-gray-600" />
            <p className="text-gray-500 text-sm font-inter font-light">
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
