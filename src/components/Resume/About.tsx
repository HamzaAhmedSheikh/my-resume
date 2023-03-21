import React from "react";
import Link from "next/link";
import aboutImg from "../../../public/images/about.png";

import Image from "next/image";

interface Information {
  id: number;
  text: string;
  count: string;
}

const info: Information[] = [
  { id: 1, text: "Years experience", count: "03+" },
  { id: 2, text: "Completed Projects", count: "24+" },
  { id: 3, text: "Companies Work", count: "0" },
];

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600"> Me </span>
        </h3>
        <p className="text-gray-400 my-3 text-lg"> My introduction </p>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum natus et itaque blanditiis deleniti quae necessitatibus
                fugiat minus doloribus iusto ipsa neque ex nobis sed amet rem
                qui, eos expedita! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nobis ducimus aut nam, quidem hic minus modi
                Non saepe eos corporis, obcaecati exercitationem consequatur.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              {info.map(({ id, text, count }) => (
                <div key={id}>
                  <h3 className="md:text-4xl text-2xl font-semibold">
                    {count}
                  </h3>
                  <span className="md:text-base text-xs"> {text} </span>
                </div>
              ))}
            </div>
            <Link href="./images/hamza.jpg" download>
              <button className="btn-primary mt-8"> Download CV </button>
            </Link>
          </div>

          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <Image
                src={aboutImg}
                alt="aboutImg"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
