import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillData } from "../Data/SkillData";

export default function Skill() {
  return (
    <div
      className="md:h-screen flex flex-col items-center justify-center"
      id="skill"
    >
      <h2 className="font-bold text-4xl md:text-6xl my-4 text-center md:mb-14">
        Skills
      </h2>
      <div className="grid grid-cols-2">
        {skillData.map((item) => (
          <div
            key={item.id}
            className={`flex items-center m-4 sm:m-6 md:m-10 changeColor delay-${item.delay} duration-[${item.duration}]`}
          >
            <FontAwesomeIcon icon={item.icon} className="h-6 sm:h-7" />
            <p className="text-xl ml-2 font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
