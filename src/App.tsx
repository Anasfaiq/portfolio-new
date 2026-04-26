import { useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WorksGrid from "./components/WorksGrid";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { DarkMode } from "./components/DarkMode";
import "./App.css";

const App = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, toggleTheme } = DarkMode();

  const handleHireMe = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      <button
        className={isDarkMode ? `absolute border rounded-full p-2 top-4 right-4 bg-black border text-white hover:bg-white hover:text-black transition` : `absolute border rounded-full p-2 top-4 right-4 bg-white border text-black hover:bg-black hover:text-white transition`}
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-moon"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brightness-up"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M12 5l0 -2" />
            <path d="M17 7l1.4 -1.4" />
            <path d="M19 12l2 0" />
            <path d="M17 17l1.4 1.4" />
            <path d="M12 19l0 2" />
            <path d="M7 17l-1.4 1.4" />
            <path d="M6 12l-2 0" />
            <path d="M7 7l-1.4 -1.4" />
          </svg>
        )}
      </button>
      <div className="flex flex-col gap-6 justify-center min-h-screen pt-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80">
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
