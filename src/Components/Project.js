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
    <div className="flex flex-col justify-center md:h-screen mb-7" id="project">
      <h1 className="text-center text-4xl font-bold py-7">Projects</h1>
      <Slider
        {...settings}
        className="w-10/12 mx-auto lg:w-1/2 md:w-2/3 shadow-md shadow-primary rounded-lg hover:shadow-2xl hover:shadow-primary transition-all duration-500 ease-in-out"
      >
        {ProjectData.map((project) => (
          <div key={project.id} className=" overflow-hidden">
            <img src={project.image} alt={project.name} className="w-fit" />
            <div className="m-2">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blend-100 to-blend-200">
                {project.name}
              </p>
              <p className="my-2">{project.description}</p>
              <p className="text-lg text-primary">[ {project.tools} ]</p>
            </div>
            <button class="py-1 w-full uppercase btnLink">
              <a href={project.site} className="font-semibold">
                {project.site.length ? "View Page" : "Not Deployed"}
              </a>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
