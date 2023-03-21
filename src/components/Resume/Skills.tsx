import React from "react";
import Html from "../../../public/images/_skills/html.png";
import Css from "../../../public/images/_skills/css.png";
import Javascript from "../../../public/images/_skills/javascript.png";
import ReactImg from "../../../public/images/_skills/react.png";
import Tailwind from "../../../public/images/_skills/tailwind.png";
import Github from "../../../public/images/_skills/github1.png";
import Firebase from "../../../public/images/_skills/firebase.png";
import NextJS from "../../../public/images/_skills/nextjs.png";
import Typescript from "../../../public/images/_skills/typescript.png";
import ChakraUI from "../../../public/images/_skills/chakra-ui.svg";
import Docker from "../../../public/images/_skills/docker.png";
import Kubernetes from "../../../public/images/_skills/kubernetes.png";
import AWS_CDK from "../../../public/images/_skills/aws-cdk.png";
import Faunadb from "../../../public/images/_skills/faunadb.png";
import GatsbyJS from "../../../public/images/_skills/gatsby-js.png";
import Netlify from "../../../public/images/_skills/netlify.png";
import Graphql from "../../../public/images/_skills/graphql.png";
import AWS_DynamoDB from "../../../public/images/_skills/dynamo-db.png";
import Image from "next/image";

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
    title: "Typescript",
    src: Typescript,
  },
  {
    id: 5,
    title: "React",
    src: ReactImg,
  },
  {
    id: 6,
    title: "GatsbyJS",
    src: GatsbyJS,
  },
  {
    id: 7,
    title: "Next.js",
    src: NextJS,
  },
  {
    id: 8,
    title: "Tailwind",
    src: Tailwind,
  },
  {
    id: 9,
    title: "Chakra ui",
    src: ChakraUI,
  },
  {
    id: 10,
    title: "Firebase",
    src: Firebase,
  },
  {
    id: 11,
    title: "Netlify",
    src: Netlify,
  },
  {
    id: 12,
    title: "Github",
    src: Github,
  },
  {
    id: 13,
    title: "Docker",
    src: Docker,
  },
  {
    id: 14,
    title: "Kubernetes",
    src: Kubernetes,
  },
  {
    id: 15,
    title: "AWS CDK",
    src: AWS_CDK,
  },
  {
    id: 16,
    title: "FaunaDB",
    src: Faunadb,
  },
  {
    id: 17,
    title: "Graphql",
    src: Graphql,
  },
  {
    id: 18,
    title: "DynamoDB",
    src: AWS_DynamoDB,
  },
];

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
