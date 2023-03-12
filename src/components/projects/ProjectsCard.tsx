import React from "react";
import Image from "next/image";

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

interface Projects {
  title: string;
  desc: string;
  src: string;
}
const ProjectsCard: React.FC<Projects> = ({ title, desc, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor  to-[#709dff] group hover:bg-gradient-to-b hover:from-[#5651e5] transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <Image
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
          width={500}
          height={350}
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-700 duration-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;