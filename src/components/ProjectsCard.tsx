import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Projects {
  title: string;
  backgroundImg: string;
  tech: string;
  projectUrl: string;
}

const ProjectsCard: React.FC<Projects> = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={backgroundImg}
        alt="project-1"
        width={500}
        height={500}
        className="rounded-xl group-hover:opacity-10 cursor-pointer"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>

        <Link href={projectUrl}>
          <p className="text-center py-3  rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Check it out on GitHub.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
