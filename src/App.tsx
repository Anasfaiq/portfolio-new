import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WorksGrid from "./components/WorksGrid";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleHireMe = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-6 justify-center min-h-screen pt-10 px-80">
        <Hero
          badge="AVAILABLE FOR HIRE"
          title="Frontend Developer Specializing in Modern Web Experiences"
          description="Building fast, responsive, and accessible interfaces with React, Vite, and Tailwind CSS. From concept to deployment."
          buttonText="Hire Me"
          onHireMe={handleHireMe}
        />
        <About
          name="Anas Faiq"
          title="Junior Frontend Developer"
          location="Depok, Indonesia"
          description="I am a junior frontend developer with a strong passion for building responsive and interactive web applications. Currently, I am focused on mastering modern technologies like React and Tailwind CSS to create clean, efficient, and user-centric interfaces."
        />
        <WorksGrid />
        <TechStack />
      </div>
      <div ref={contactRef}>
        <Contact 
          email="anasfaiq04@gmail.com"
          instagram="ansfqq08"
          github="anasfaiq"
        />
      </div>
    </div>
  );
};

export default App;
