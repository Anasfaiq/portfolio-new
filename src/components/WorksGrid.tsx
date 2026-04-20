import { Fragment } from "react/jsx-runtime";
import Card from "./ui/Card";
import WorkCard from "./ui/WorkCard";

const WorksGrid = () => {
  return (
    <Fragment>
      <Card>
        <div className="flex flex-col gap-2">
          <h1 className="font-inter font-bold text-3xl">Selected Works</h1>
          <p className="text-gray-600 text-lg">
            Recent projects demonstrating UI/UX and system architecture
          </p>
        </div>
      </Card>

      <WorkCard>
        <div> <img src="" alt="" /></div>
      </WorkCard>
    </Fragment>
  );
};

export default WorksGrid;
