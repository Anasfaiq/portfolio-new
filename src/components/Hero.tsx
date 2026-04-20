import Card from './ui/Card';
interface Props {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
}
const Hero = ({ badge, title, description, buttonText }: Props) => {
  return (
    <Card>
      <div className="max-w-4xl flex flex-col gap-8 p-8">
        <div className="border border-black px-3 py-1 w-max">
          <p className="font-inter font-thin">{badge}</p>
        </div>
        <h1 className="font-inter font-bold text-7xl">{title}</h1>
        <p className="text-xl font-inter font-thin text-gray-500">
          {description}
        </p>
        <button
          className="border-2 border-black flex gap-2 font-inter font-medium text-md
         bg-black text-white hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all duration-200 
         px-7 py-4 w-max items-center"
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
