import Hero from "./components/Hero";
import WorksGrid from "./components/WorksGrid";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center min-h-screen pt-10 px-80">
        <Hero
          badge="AVAILABLE FOR HIRE"
          title="Frontend Developer Specializing in Modern Web Experiences"
          description="Building fast, responsive, and accessible interfaces with React, Vite, and Tailwind CSS. From concept to deployment."
          buttonText="Hire Me"
        />
        <WorksGrid />
        <TechStack />
      </div>
      <Contact />
    </div>
  );
};

export default App;
