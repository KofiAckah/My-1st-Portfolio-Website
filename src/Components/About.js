import React from "react";
import MeImage from "../Images/Me.jpg";

export default function About() {
  return (
    <div id="about" className="grid md:grid-cols-3 lg:grid-cols-2 md:h-screen">
      <div>
        <img
          src={MeImage}
          alt="Livingstone Ackah Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-col justify-center flex md:col-span-2 lg:col-span-1 px-3 max-md:mt-5"></div>
    </div>
  );
}
