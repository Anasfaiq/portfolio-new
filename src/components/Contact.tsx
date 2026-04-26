interface Props {
  email: string;
  instagram: string;
  github: string;
}

const Contact = ({ email, instagram, github }: Props) => {
  return (
    <div
      id="contact"
      className="bg-[#141210] text-[#F0EDE6] px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 py-10 mt-6 flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-2xl md:text-4xl font-bold">Let's Work Together</p>
          <p className="text-[#9E9A90] text-sm md:text-base">
            Available for freelance projects, consulting, and long-term
            collaborations. Get in touch to discuss your next web application.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 font-inter hover:underline transition-all duration-200 w-max text-[#F0EDE6] hover:text-olive text-sm md:text-base break-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            {email}
          </a>
          <div className="flex gap-3">
            <div className="p-2.5 border border-olive hover:bg-olive transition-all duration-200">
              <a href={`https://github.com/${github}/`} target="blank_">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>
            <div className="p-2.5 border border-olive hover:bg-olive transition-all duration-200">
              <a
                href={`https://www.instagram.com/${instagram}/`}
                target="blank_"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4 border-[#2E2B26]" />
      <p className="text-[#9E9A90] text-xs md:text-sm">
        &copy; 2026 Anas Faiq. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
