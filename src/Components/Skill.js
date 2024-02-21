import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

export default function Skill() {
  return (
    <div className="md:h-screen justify-center items-center" id="skill">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <FontAwesomeIcon icon={faHtml5} className="h-32 md:h-44 text-white" />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCss3Alt}
            className="h-32 md:h-44 text-white"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faJs} className="h-32 md:h-44 text-white" />
        </div>
      </div>
    </div>
  );
}
