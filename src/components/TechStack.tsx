import Card from "./ui/Card";

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 gap-6 font-inter">
      <Card>
        <div className="flex flex-col gap-6">
          <p className="text-2xl font-bold">Tech Stack</p>
          <ul className="flex flex-col gap-1">
            <li className="text-gray-600">CORE</li>
            {["React", "TypeScript", "JavaScript", "PHP"].map((core) => (
              <li>{core}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-gray-600">STYLING</li>
            {["Tailwind CSS", "CSS3", "Responsive Design"].map((styling) => (
              <li>{styling}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-gray-600">TOOLS</li>
            {["Vite", "Git", "npm"].map((tool) => (
              <li>{tool}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-1">
            <li className="text-gray-600">STATE & DATA</li>
            {["React Query"].map((stateData) => (
              <li>{stateData}</li>
            ))}
          </ul>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-6">
          <h2 className="font-inter font-bold text-2xl">Freelance Services</h2>
          <ul className="flex flex-col gap-3">
            {[
              "Custom Web Application Development",
              "UI/UX Implementation",
              "Component Library Design",
              "Performance Optimization",
              "Responsive Design & Mobile-First Development",
              "Code Review & Refactoring",
            ].map((service) => (
              <li key={service} className="flex items-center gap-3 font-inter">
                <span className="w-2 h-2 bg-black rotate-45 shrink-0" />
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
  );
};

export default TechStack;
