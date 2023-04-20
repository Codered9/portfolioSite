import React from "react";

const Technologies = (props: {
  heading: string;
  skills: {
    skill: string;
    score: number;
  }[];
}) => {
  return (
    <div>
      <h4 className="text-xl">
        {"> "}
        {props.heading}
      </h4>
      <div className="p-2 md:px-6">
        {props.skills.map((obj) => (
          <div className="flex flex-row justify-between text-lg">
            <p>
              {"~ "}
              {obj.skill}
            </p>
            <p>{obj.score}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
