import React from "react";
import { ProjectData } from "../Data/ProjectData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="md:h-screen" id="project">
      {/* <div className="relative flex items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {ProjectData.map((item) => (
            <img
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.image}
              alt="/"
            />
          ))}
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div> */}
      <div className="flex items-center relative">
        <div className="overflow-x-scroll whitespace-nowrap scroll-smooth">
          {ProjectData.map((item) => (
            <img src={item.image} alt="project" className="inline-block" />
          ))}
        </div>
      </div>
    </div>
  );
}
