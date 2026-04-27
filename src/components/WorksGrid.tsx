import { Fragment, useEffect, useState, useRef } from "react";
import imageEtch from "../assets/etch-a-sketch.png";
import imageManajemen from "../assets/manajemen-member.png";
import imageBerita from "../assets/berita.png";
import imageCalculator from "../assets/kalkulator.png";
import imageWeather from "../assets/weather.png";
import comicList from "../assets/ComicList.png";
import AccentShapes from "./ui/AccentShapes";
import Card from "./ui/Card";
import WorkCard from "./ui/WorkCard";

interface AnimatedCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  linkDemo: string;
}

const useReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if (entry.isIntersecting) setIsVisible(true);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
};

const AnimatedCard = ({
  id,
  image,
  title,
  description,
  tags,
  linkDemo,
}: AnimatedCardProps) => {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${id === 1 || id % 4 === 0 ? "md:col-span-2" : ""}`}
    >
      <WorkCard
        image={image}
        title={title}
        description={description}
        tags={tags}
        linkDemo={linkDemo}
      />
    </div>
  );
};

const WorksGrid = () => {
  const works = [
    {
      id: 1,
      image: comicList,
      title: "Comic List",
      description:
        "Browse and discover comics with ease — features real-time search, genre filtering, and a visually organized card layout.",
      tags: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
      linkDemo: "https://comic-list.vercel.app/",
    },
    {
      id: 2,
      image: imageBerita,
      title: "Berita",
      description:
        "A static news homepage UI — crafted with pure HTML and Tailwind CSS, focusing on layout, typography, and a clean modern aesthetic.",
      tags: ["HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://berita-sage.vercel.app/",
    },
    {
      id: 3,
      image: imageManajemen,
      title: "Manajemen Member",
      description:
        "A member & points management app with full CRUD functionality — built with React and local state management as a frontend-focused project.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      linkDemo: "https://app-manajemen-member-dan-poin.vercel.app/",
    },
    {
      id: 4,
      image: imageEtch,
      title: "Etch-a-Sketch",
      description:
        "A browser-based take on the iconic drawing toy — pick your colors, adjust the grid size, and sketch freely on an interactive canvas.",
      tags: ["Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      linkDemo: "https://etch-a-sketch-seven-sooty.vercel.app/",
    },
    {
      id: 5,
      image: imageCalculator,
      title: "Kalkulator",
      description:
        "A sleek, responsive calculator with smooth interactions and a clean UI — handles all your everyday arithmetic without the clutter.",
      tags: ["JavaScript", "HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://calculator-app-lilac-five.vercel.app/",
    },
    {
      id: 6,
      image: imageWeather,
      title: "Weather App",
      description:
        "Get real-time weather updates based on your location — displays temperature, conditions, and forecasts with a clean, minimal interface.",
      tags: ["JavaScript", "HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://weather-app-kappa-teal-50.vercel.app/",
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-6">
        <div className="relative">
          <AccentShapes variant="diamond" className="-top-8 -right-2" />
          <AccentShapes
            variant="black-square"
            className="w-4 h-4 top-10 -right-12 rotate-6"
          />
          <Card>
            <div className="flex flex-col gap-2">
              <h1 className="font-inter font-bold text-2xl md:text-3xl">
                Selected Works
              </h1>
              <p className="text-base md:text-lg text-(--color-text-muted)">
                Recent projects demonstrating UI/UX and system architecture
              </p>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work) => (
            <AnimatedCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WorksGrid;
