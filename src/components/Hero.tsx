import Card from "./ui/Card";
import AccentShapes from "./ui/AccentShapes";
import MagneticButton from "./ui/MagneticButton";

interface Props {
  badge: string;
  title: string;
  description: string;
  onHireMe: () => void;
}

const Hero = ({ badge, title, description, onHireMe }: Props) => {

  return (
    <div className="relative">
      <Card>
        <AccentShapes variant="hero" />
        <AccentShapes
          variant="black-circle"
          className="w-30 h-30 -right-10 -bottom-10"
        />
        <div className="flex flex-col gap-6 md:gap-8 lg:max-w-4xl">
          <div className="border border-(--color-border) px-3 py-1 w-max">
            <p className="font-inter font-thin text-xs md:text-sm text-(--color-text-base)">
              {badge}
            </p>
          </div>
          <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-(--color-text-base)">
            {title}
          </h1>
          <p className="text-base md:text-xl font-inter font-thin text-(--color-text-muted)">
            {description}
          </p>
          <MagneticButton onHireMe={onHireMe}>
            Hire Me
          </MagneticButton>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
