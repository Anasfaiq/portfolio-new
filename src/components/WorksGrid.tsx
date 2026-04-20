import { Fragment } from "react/jsx-runtime";
import imageEtch from "../assets/etch-a-sketch.png";
import imageManajemen from "../assets/manajemen-member.png";
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
    },
    {
      id: 2,
      image: imageManajemen,
      title: "Manajemen Member",
      description:
        "A member management system for a local community organization",
      tags: ["React", "TypeScript", "Tailwind CSS"],
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

        <div className="grid grid-cols-2 gap-6">
          {works.map(({ id, image, title, description, tags }, index) => (
            <WorkCard
              key={id}
              image={image}
              title={title}
              description={description}
              tags={tags}
              className={index === 0 ? "col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WorksGrid;
