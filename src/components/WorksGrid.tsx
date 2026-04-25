import { Fragment } from "react/jsx-runtime";
import imageEtch from "../assets/etch-a-sketch.png";
import imageManajemen from "../assets/manajemen-member.png";
import imageBerita from "../assets/berita.png";
import imageCalculator from "../assets/kalkulator.png";
import imageWeather from "../assets/weather.png";
import comicList from "../assets/ComicList.png";
import Card from "./ui/Card";
import WorkCard from "./ui/WorkCard";

const WorksGrid = () => {
  const works = [
    {
      image: comicList,
      title: "Comic List",
      description:
        "Browse and discover comics with ease — features real-time search, genre filtering, and a visually organized card layout.",
      tags: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
      linkDemo: "https://comic-list.vercel.app/",
    },
    {
      image: imageEtch,
      title: "Etch-a-Sketch",
      description:
        "A browser-based take on the iconic drawing toy — pick your colors, adjust the grid size, and sketch freely on an interactive canvas.",
      tags: ["Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      linkDemo: "https://etch-a-sketch-seven-sooty.vercel.app/",
    },
    {
      image: imageManajemen,
      title: "Manajemen Member",
      description:
        "A member & points management app with full CRUD functionality — built with React and local state management as a frontend-focused project.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      linkDemo: "https://app-manajemen-member-dan-poin.vercel.app/",
    },
    {
      image: imageBerita,
      title: "Berita",
      description:
        "A static news homepage UI — crafted with pure HTML and Tailwind CSS, focusing on layout, typography, and a clean modern aesthetic.",
      tags: ["HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://berita-sage.vercel.app/",
    },
    {
      image: imageCalculator,
      title: "Kalkulator",
      description:
        "A sleek, responsive calculator with smooth interactions and a clean UI — handles all your everyday arithmetic without the clutter.",
      tags: ["JavaScript", "HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://calculator-app-lilac-five.vercel.app/",
    },
    {
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
        <Card>
          <div className="flex flex-col gap-2">
            <h1 className="font-inter font-bold text-2xl md:text-3xl">
              Selected Works
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Recent projects demonstrating UI/UX and system architecture
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map(({ image, title, description, tags, linkDemo }, index) => (
            <WorkCard
              key={Date.now()}
              image={image}
              title={title}
              description={description}
              tags={tags}
              linkDemo={linkDemo}
              className={index === 0 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WorksGrid;
