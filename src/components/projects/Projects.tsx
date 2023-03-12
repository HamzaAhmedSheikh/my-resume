import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 ml-1">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ml-2">
        <div>
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I've Built</h2>
        </div>
        {/* <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="The Employee Directory"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={"/images/projects/an-employee-directory.jpeg"}
        />
        <ProjectsCard
          title="The Employee Directory"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={"/images/projects/an-employee-directory.jpeg"}
        />
        <ProjectsCard
          title="The Employee Directory"
          desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={"/images/projects/an-employee-directory.jpeg"}
        />
      </div>
    </section>
  );
};

export default Projects;
