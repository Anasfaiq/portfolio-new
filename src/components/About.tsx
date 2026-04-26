import selfPhoto from "../assets/self-photo.jpg";
import Card from "./ui/Card";
import AccentShapes from "./ui/AccentShapes";

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
    <div className="relative">
      <AccentShapes variant="circle" className="-top-8 -left-8" />
      <AccentShapes
        variant="black-square"
        className="w-5 h-5 -top-8 left-10 rotate-12"
      />
      <AccentShapes variant="diamond" className="top-10 -left-12" />
      <Card>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          <div className="w-32 h-32 md:w-44 md:h-44 border-2 border-(--color-border) flex items-center justify-center shrink-0 bg-(--color-bg) overflow-hidden self-center md:self-start md:order-last">
            <picture>
              <img
                src={selfPhoto}
                alt="Anas Faiq"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          <div className="flex-1 flex flex-col gap-5">
            <div className="border border-(--color-border) px-3 py-1 w-max">
              <p className="font-inter font-thin text-xs tracking-widest text-(--color-text-base)">
                ABOUT ME
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-inter font-bold text-3xl md:text-5xl text-(--color-text-base)">
                {name}
              </h2>
              <div className="font-inter font-thin text-(--color-text-muted)] text-xs md:text-sm tracking-wide flex gap-2 flex-wrap">
                <p>{title}</p>
                <p>·</p>
                <p>{location}</p>
              </div>
            </div>

            <p className="font-inter font-thin text-(--color-text-muted)] text-base md:text-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col gap-2">
              <p className="font-inter font-thin text-xs text-(--color-text-muted)] tracking-widest">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="border border-(--color-border) px-3 py-1 w-max"
                  >
                    <p className="font-inter font-thin text-xs text-(--color-text-base)">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/anasfaiq"
              target="_blank"
              rel="noreferrer"
              className="border border-(--color-border) px-4 py-2 w-max flex items-center gap-2
                shadow-[6px_6px_0_var(--color-shadow)]
                bg-(--color-surface) text-(--color-text-base)
                hover:bg-(--color-text-base) hover:text-(--color-surface)
                hover:shadow-none hover:translate-x-1 hover:translate-y-1
                active:shadow-none active:translate-x-1 active:translate-y-1 active:scale-95
                font-inter font-medium text-sm outline-none transition-all duration-200"
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
        </div>
      </Card>
    </div>
  );
};

export default About;
