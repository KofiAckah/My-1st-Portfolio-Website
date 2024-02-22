import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { skillData } from "../Data/SkillData";

export default function Skill() {
  return (
    <div className="md:h-screen flex flex-col" id="skill">
      <h2 className="font-bold text-4xl md:text-6xl my-4 text-center">
        Skills
      </h2>
      <div className="mx-auto flex">
        {skillData.map((item) => (
          <div key={item.id} className="flex flex-col items-center m-4">
            <FontAwesomeIcon icon={item.icon} />
            <p className="text-2xl font-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
