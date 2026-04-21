import Card from "./ui/Card";

interface Props {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  onHireMe: () => void;
}

const Hero = ({ badge, title, description, buttonText, onHireMe }: Props) => {
  return (
    <Card>
      <div className="flex flex-col gap-6 md:gap-8 lg:max-w-4xl">
        <div className="border border-black px-3 py-1 w-max">
          <p className="font-inter font-thin text-xs md:text-sm">{badge}</p>
        </div>
        <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          {title}
        </h1>
        <p className="text-base md:text-xl font-inter font-thin text-gray-500">
          {description}
        </p>
        <button
          onClick={onHireMe}
          className="border-2 border-black flex gap-2 font-inter font-medium text-sm md:text-md
           bg-black text-white hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-200 
           px-5 py-3 md:px-7 md:py-4 w-max items-center"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 7l-10 10" />
            <path d="M8 7l9 0l0 9" />
          </svg>
        </button>
      </div>
    </Card>
  );
};

export default Hero;
