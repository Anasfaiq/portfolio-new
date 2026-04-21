import { Fragment } from "react/jsx-runtime";
import imageEtch from "../assets/etch-a-sketch.png";
import imageManajemen from "../assets/manajemen-member.png";
import imageBerita from "../assets/berita.png";
import imageCalculator from "../assets/kalkulator.png";
import imageWeather from "../assets/weather.png";
import Card from "./ui/Card";
import WorkCard from "./ui/WorkCard";

const WorksGrid = () => {
  const works = [
    {
      id: 1,
      image: imageEtch,
      title: "Etch-a-Sketch",
      description: "A digital recreation of the classic drawing toy",
      tags: ["Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      linkDemo: "https://etch-a-sketch-seven-sooty.vercel.app/",
    },
    {
      id: 2,
      image: imageManajemen,
      title: "Manajemen Member",
      description:
        "A member management system for a local community organization",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      linkDemo: "https://app-manajemen-member-dan-poin.vercel.app/",
    },
    {
      id: 3,
      image: imageBerita,
      title: "Berita",
      description: "A news aggregation website with a clean and modern design",
      tags: ["HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://berita-sage.vercel.app/",
    },
    {
      id: 4,
      image: imageCalculator,
      title: "Kalkulator",
      description: "A simple calculator app with basic arithmetic functions",
      tags: ["JavaScript", "HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://calculator-app-lilac-five.vercel.app/",
    },
    {
      id: 5,
      image: imageWeather,
      title: "Weather App",
      description: "A simple weather application with location-based forecasts",
      tags: ["JavaScript", "HTML5", "Tailwind CSS", "CSS3"],
      linkDemo: "https://weather-app-kappa-teal-50.vercel.app/",
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-6">
        <Card>
          <div className="flex flex-col gap-2">
            <h1 className="font-inter font-bold text-3xl">Selected Works</h1>
            <p className="text-gray-600 text-lg">
              Recent projects demonstrating UI/UX and system architecture
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
          {works.map(({ id, image, title, description, tags, linkDemo }, index) => (
            <WorkCard
              key={id}
              image={image}
              title={title}
              description={description}
              tags={tags}
              linkDemo={linkDemo}
              className={index === 0 ? "col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WorksGrid;
