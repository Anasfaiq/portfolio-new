interface Props {
  image: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

const WorkCard = ({ image, title, description, tags, className }: Props) => {
  return (
    <div
      className={`group border-2 border-black mt-10 overflow-hidden ${className}`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex justify-between">
          <h2 className="font-inter font-bold text-xl">{title}</h2>
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
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
            <path d="M11 13l9 -9" />
            <path d="M15 4h5v5" />
          </svg>
        </div>
        <p className="text-gray-600 font-inter">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <div
              key={tag}
              className="border border-black px-2 py-1 w-max text-xs"
            >
              <p className="font-inter font-thin">{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
