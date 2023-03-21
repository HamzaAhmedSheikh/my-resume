import React from "react";
import project1 from "../../../public/images/_projects/an-employee-directory.jpeg";
import project2 from "../../../public/images/_projects/virtual-lolly-app.jpeg";
import project3 from "../../../public/images/_projects/project-12a-gatsby-blogsite-with-contentful.jpeg";
import project4 from "../../../public/images/_projects/project-12d-bookmarking-application.jpeg";
import project5 from "../../../public/images/_projects/serverless-crud-app.jpeg";
import project6 from "../../../public/images/_projects/panaverse-dao-syllabus-website-redesign.jpeg";
import project7 from "../../../public/images/_projects/shopping-basket.jpeg";
import project8 from "../../../public/images/_projects/quiz-app-with-pwa-and-fcm.jpeg";
import project9 from "../../../public/images/_projects/jamstack-serverless-todo-app.jpeg";
import { FiCode, FiNavigation } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image: project1,
    project_name: "The Employee Directory App",
    languages: "Typescript",
    description:
      "This Employee Directory App was created with Next.js and Chakra-UI and deployed to Vercel.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/an-employee-directory-with-Chakra-UI-and-Next.js",
    live_link:
      "https://an-employee-directory-with-chakra-ui-and-next-h8pxzqbo8.vercel.app/",
  },
  {
    id: 2,
    image: project2,
    project_name: "Virtual Lolly App",
    languages: "JavaScript",
    description:
      "Gatsby, Netlify, FaunaDB, Formik, and Storybook 6 were used to create this Virtual Lolly App, which was then deployed to Netlify.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/project-12E-Virtual-Lolly",
    live_link: "https://project-12e-virtual-lolly.netlify.app/",
  },
  {
    id: 3,
    image: project3,
    project_name: "Blog Site",
    languages: "JavaScript & Typescript",
    description:
      "This Blog Site was created with Gatsby.js, Contentful, and TypeScript. and deployed to Netlify.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/project-12A-Gatsby-Blog-with-Contentful",
    live_link:
      "https://project-12a-gatsby-blogsite-with-contentful.netlify.app/",
  },
  {
    id: 4,
    image: project4,
    project_name: "Bookmarking Application",
    languages: "Javascript",
    description:
      "This Bookmarking Application was created with FaunaDB and Netlify and deployed to Netlify.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/project-12D_Bookmarking-Application",
    live_link: "https://project-12d-bookmarking-application.netlify.app/",
  },
  {
    id: 5,
    image: project5,
    project_name: "CRUD App",
    languages: "Typescript",
    description:
      "This Serverless CRUD App was created with Netlify Functions, Formik, Material-UI, and FaunaDB and deployed to Netlify.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/project-12B_Serverless-CRUD-App",
    live_link: "https://serverless-crud-app-hamza.netlify.app/",
  },
  {
    id: 6,
    image: project6,
    project_name: "Panaverse Dao Syllabus Website",
    languages: "Typescript",
    description:
      "This Panaverse Dao Syllabus Website was created with  Next.js and Chakra-UI and deployed to Vercel.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/panaverse-dao-syllabus-website-redesign",
    live_link: "https://panaverse-dao-syllabus-website-redesign.vercel.app/",
  },
  {
    id: 7,
    image: project7,
    project_name: "Shopping Basket App",
    languages: "Typescript",
    description:
      "This Shopping Basket App was created with React, Redux Toolkit, and Typescript and deployed to Surge.sh.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/shopping-basket-with-redux-toolkit",
    live_link: "https://project-9a_shopping-basket.surge.sh/",
  },
  {
    id: 8,
    image: project8,
    project_name: "The Quiz App",
    languages: "Typescript",
    description:
      "This Quiz App was created with React, TypeScript, PWA, and Firebase FCM and deployed to Firebase.",
    github_link:
      "https://github.com/HamzaAhmedSheikh/quiz-app-with-pwa-and-fcm",
    live_link: "https://quiz-app-with-pwa-and-fcm.firebaseapp.com/",
  },
  {
    id: 9,
    image: project9,
    languages: "Javascript",
    description:
      "This Todo App was created with React Gatsby.js, Netlify, and FaunaDB and deployed to Netlify.",
    project_name: "JAMstack Todo App",
    github_link: "https://github.com/HamzaAhmedSheikh/JAMstack-TodoApp",
    live_link: "https://jamstackserverlesstodoapp.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="relative py-8 text-white justify-center">
      <div className="relative">
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <h3 className="text-4xl font-semibold">
            My <span className="text-cyan-600"> Projects </span>
          </h3>
          <p className="mx-auto mt-5 text-xl text-gray-400 max-w-prose">
            Websites and web apps I have put considerable time and effort into.
          </p>
        </div>
        <div className="grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:grid-cols-3 lg:max-w-7xl">
          {projects.map((repo) => {
            return (
              <div
                key={repo.id}
                className="flex flex-col border border-transparent rounded-lg shadow-lg cursor-pointer dark:border-gray-700 filter dark:hover:drop-shadow-2xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400"
              >
                <Link
                  href={repo.live_link}
                  className="overflow-hidden bg-white rounded-t-lg dark:bg-gray-900 h-96"
                  target="_blank"
                >
                  <div className="flex-shrink-0 rounded-t-lg">
                    <Image
                      src={repo.image}
                      alt={`screenshot`}
                      width={1200}
                      height={630}
                      loading="lazy"
                      className="object-cover object-top w-full h-48 rounded-t-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white ">
                    <div className="flex-1">
                      <div className="mt-2">
                        <p className="text-sm font-medium text-cyan-700">
                          {repo.languages}
                        </p>
                        <p className="text-xl font-semibold text-gray-900 truncat hover:underline">
                          {repo.project_name}
                        </p>
                        <p className="mt-3 text-base text-gray-600  line-clamp-3">
                          {repo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex bg-white border-t border-gray-200 divide-gray-200 rounded-b-lg dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
                  <div className="flex flex-1 w-0 rounded-bl-lg">
                    <Link
                      href={repo.live_link}
                      target="_blank"
                      className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 rounded-bl-lg dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
                    >
                      <FiNavigation className="inline text-lg align-middle" />
                      <span className="ml-3">Visit site</span>
                    </Link>
                  </div>
                  <div className="flex flex-1 w-0">
                    <Link
                      href={repo.github_link}
                      target="_blank"
                      className={`relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 rounded-br-lg dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400`}
                    >
                      <FiCode className="inline text-lg align-middle" />
                      <span className="ml-3"> View code </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
