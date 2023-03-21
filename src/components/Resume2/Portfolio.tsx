import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-xl font-bold tracking-widest uppercase text-[#5651e5]">
            Portfolio
          </p>
          <p className="py-4"> Check out some of my work right here </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <Image
              src="/images/projects/an-employee-directory.jpeg"
              width={500}
              height={500}
              alt="an-employee-directory project"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex flex-center justify-center ">
              <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                Demo
              </button>
              <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
