import React from "react";
import { FiCode, FiNavigation } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../page-data/allData";

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
