import Image from "next/image";
import React from "react";
import Html from "../../public/images/skills/html.png";
import Css from "../../public/images/skills/css.png";
import Javascript from "../../public/images/skills/javascript.png";
import ReactImg from "../../public/images/skills/react.png";
import Tailwind from "../../public/images/skills/tailwind.png";
import Github from "../../public/images/skills/github1.png";
import Firebase from "../../public/images/skills/firebase.png";
import NextJS from "../../public/images/skills/nextjs.png";
import AWSCDK from "../../public/images/skills/aws-cdk.png";

const techs = [
  {
    id: 1,
    title: "HTML",
    src: Html,
  },
  {
    id: 2,
    title: "CSS",
    src: Css,
  },
  {
    id: 3,
    title: "JavaScript",
    src: Javascript,
  },
  {
    id: 4,
    title: "React",
    src: ReactImg,
  },
  {
    id: 5,
    title: "Tailwind",
    src: Tailwind,
  },
  {
    id: 6,
    title: "Firebase",
    src: Firebase,
  },
  {
    id: 7,
    title: "Github",
    src: Github,
  },
  {
    id: 8,
    title: "Next.js",
    src: NextJS,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map(({ id, title, src }) => (
            <div
              key={id}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={src} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
