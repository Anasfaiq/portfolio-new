import Hero from "./components/Hero";
import WorksGrid from "./components/WorksGrid";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col gap-10 justify-center min-h-screen px-80">
      <Hero 
        badge="AVAILABLE FOR HIRE"
        title="Frontend Developer Specializing in Modern Web Experiences"
        description="Building fast, responsive, and accessible interfaces with React, Vite, and Tailwind CSS. From concept to deployment."
        buttonText="Hire Me"
      />
      <WorksGrid />
    </div>
  );
};

export default App;
