import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectData } from "../Data/ProjectData";

export default function Project() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col justify-center md:h-screen" id="project">
      <h1 className="text-center text-4xl font-bold py-10">Projects</h1>
      <Slider {...settings} className="w-10/12 mx-auto lg:w-1/2 md:w-2/3">
        {ProjectData.map((project) => (
          <div key={project.id} className="card overflow-hidden">
            <img src={project.image} alt={project.name} className="w-fit" />
            <div className="">
              <p>{project.name}</p>
              <p>{project.description}</p>
              <p>{project.tools}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
