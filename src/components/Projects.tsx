import React from "react";
import { ProjectData } from "@/Data/Projects";
import ProjectsCard from "./ProjectsCard";
const Projects = () => {
  return (
    <div className="min-h-[93vh] pt-8 md:pt-24 px-8 md:px-24" id='projects'>
      <h2 className="text-4xl">
        <span className="text-br-red font-black">$</span>Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[90rem] mx-auto mt-16">
            {
                ProjectData.map(project => (
                    <ProjectsCard name={project.name} desc={project.desc} repo={project.repo}/>
                ))
            }
      </div>
    </div>
  );
};

export default Projects;
