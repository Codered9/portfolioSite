import React from "react";
import { certs } from "@/Data/Certs";
import { TechSkills } from "@/Data/TechSkills";
import Certifications from "./Certifications";
import Technologies from "./Technologies";

const Skills = () => {
  return (
    <div className="h-[93vh] pt-24 px-24" id="skills">
      <h2 className="text-4xl">$Skills</h2>

      <div className="flex flex-col max-w-5xl mx-auto mt-12">
        <div>
          <h3 className="text-3xl">{">"}Certifications</h3>
          <p className="mt-4 ml-16">
            {certs.map((cert) => (
              <Certifications
                name={cert.name}
                startDate={cert.startDate}
                endDate={cert.endDate}
                url={cert.url}
              />
            ))}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl">{">"}Technologies</h3>
          <div className="grid grid-cols-2 gap-12 pt-12 px-12">
            {TechSkills.map((tech) => (
              <Technologies heading={tech.heading} skills={tech.skills} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
