import selfPhoto from "../assets/self-photo.jpg";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
  "PHP",
  "MySQL",
];

interface Props {
  name: string;
  title: string;
  location: string;
  description: string;
}

const About = ({ name, title, location, description }: Props) => {
  return (
    <div className="border-2 border-black p-8 mt-6">
      <div className="flex gap-10 items-start">
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-black px-3 py-1 w-max">
            <p className="font-inter font-thin text-xs tracking-widest">
              ABOUT ME
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-inter font-bold text-5xl">{name}</h2>
            <div className="font-inter font-thin text-gray-400 text-sm tracking-wide flex gap-2">
              <p>{title}</p>
              <p>·</p>
              <p>{location}</p>
            </div>
          </div>

          <p className="font-inter font-thin text-gray-500 text-lg leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col gap-2">
            <p className="font-inter font-thin text-xs text-gray-400 tracking-widest">
              TECH STACK
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="border border-black px-3 py-1 w-max"
                >
                  <p className="font-inter font-thin text-xs">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://github.com/anasfaiq"
            target="_blank"
            rel="noreferrer"
            className="border border-black px-4 py-2 w-max flex items-center gap-2
              font-inter font-medium text-sm hover:bg-black hover:text-white
              transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 19 19"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>

        {/* Avatar */}
        <div className="w-44 h-44 border-2 border-black flex items-center justify-center shrink-0 bg-gray-50 overflow-hidden">
          <picture>
            <img src={selfPhoto} alt="Anas Faiq" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
