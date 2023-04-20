import React from "react";
import { certs } from "@/Data/Certs";
import { TechSkills } from "@/Data/TechSkills";
import Certifications from "./Certifications";
import Technologies from "./Technologies";

const Skills = () => {
  return (
    <div className="min-h-[93vh] pt-8 md:pt-24 px-8 md:px-24" id="skills">
      <h2 className="text-4xl"><span className='text-br-red font-black'>$</span>Skills</h2>

      <div className="flex flex-col max-w-5xl mx-auto mt-12">
        <div>
          <h3 className="text-3xl">{"> "}Certifications</h3>
          <div className="mt-4 ml-16">
            {certs.map((cert,index) => (
                <div className="inline-flex">
                <span className='text-xl md:text-2xl mr-2'>{">"}</span>
              <Certifications
                name={cert.name}
                startDate={cert.startDate}
                endDate={cert.endDate}
                url={cert.url}
                // index={index}
                />
                </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl">{"> "}Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 px-2 md:px-12">
            {TechSkills.map((tech,index) => (
              <Technologies heading={tech.heading} skills={tech.skills} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
