import React from "react";
import Image from "next/image";
import { techs } from "../page-data/allData";

const Skills = () => {
  return (
    <>
      <section id="skills" className="py-10 bg-gray-800 relative">
        <div className="mt-8 text-gray-100 text-center">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600">Skills</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {techs.map(({ id, title, src }) => (
              <div
                key={id}
                className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl hover:scale-105 hover:cursor-pointer"
              >
                <div className="w-32 h-32 flex items-center justify-center rounded-full">
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <Image src={src} alt="tech logos" />
                  </div>
                </div>
                <p className="text-xl mt-3">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
