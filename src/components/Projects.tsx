import Image from "next/image";
import Link from "next/link";
import React from "react";
import employee_directory from "../../public/images/projects/an-employee-directory.jpeg";
import { BsGithub } from "react-icons/bs";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsCard
            title="The Employee Directory App"
            backgroundImg="/images/projects/an-employee-directory.jpeg"
            tech="This project was built with Next.js and Chakra UI."
            projectUrl="https://github.com/HamzaAhmedSheikh/an-employee-directory-with-Chakra-UI-and-Next.js"
          />

          <ProjectsCard
            title="Virtual Lolly App"
            backgroundImg="/images/projects/virtual-lolly-app.jpeg"
            tech="This project was built with Gatsby, Netlify, FaunaDB, Formik, and Storybook 6."
            projectUrl="https://github.com/HamzaAhmedSheikh/project-12E-Virtual-Lolly"
          />

          <ProjectsCard
            title="Shopping Basket App"
            backgroundImg="/images/projects/shopping-basket.jpeg"
            tech="This project was built with React.js, Redux Toolkit and TypeScript."
            projectUrl="https://github.com/HamzaAhmedSheikh/shopping-basket-with-redux-toolkit"
          />

          <ProjectsCard
            title="The Quiz App"
            backgroundImg="/images/projects/quiz-app-with-pwa-and-fcm.jpeg"
            tech="This project was built with Quiz App with React, TypeScript, PWA and Firebase FCM."
            projectUrl="https://github.com/HamzaAhmedSheikh/quiz-app-with-pwa-and-fcm"
          />

          <ProjectsCard
            title="JAMstack Todo App"
            backgroundImg="/images/projects/jamstack-serverless-todo-app.jpeg"
            tech="This project was built with React, Gatsby, Netlify and FaunaDB."
            projectUrl="https://github.com/HamzaAhmedSheikh/JAMstack-TodoApp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
