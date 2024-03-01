import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillData } from "../Data/SkillData";

export default function Skill() {
  return (
    <div
      className="md:h-screen flex flex-col items-center justify-center"
      id="skill"
    >
      <h2 className="font-bold text-4xl md:text-6xl my-4 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full">
        {skillData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center m-4 sm:m-6 md:m-10  mx-auto hover:scale-125 transition-transform ease-in-out animate-none`}
          >
            <FontAwesomeIcon icon={item.icon} className="h-10 sm:h-20" />
            <p className="text-xl mt-2 font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
