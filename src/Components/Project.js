import React from "react";
import { ProjectData } from "../Data/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - (window.innerWidth - 10);
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + (window.innerWidth - 10);
  };

  return (
    <div className="md:h-screen" id="project">
      <div className="flex items-center relative">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="absolute opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={20}
        />
        <div
          className="overflow-x-scroll whitespace-nowrap scroll-smooth"
          id="slider"
        >
          {ProjectData.map((item) => (
            <img
              src={item.image}
              alt="project"
              className="inline-block"
              id="pic"
            />
          ))}
        </div>
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="opacity-50 cursor-pointer hover:opacity-100 absolute right-0"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
}
