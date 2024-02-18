import React from "react";
import DevImage from "../Images/developer.a335c591a5d24ddd9e8c.gif";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-2 md:h-screen" id="home">
      <div
        className="md:w-100-60 bg-white
      items-center justify-center flex md:order-2"
      >
        <img src={DevImage} alt="Developer Gif" />
      </div>
      <div className="flex-col justify-center flex md:col-span-2 lg:col-span-1 px-3 max-md:mt-5">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500 font-bold  text-3xl md:text-5xl mb-3">
          Hello, It's Me{" "}
          <span className="block text-4xl md:text-6xl my-2">
            Livingstone Ackah
          </span>
          An Engineer/Developer
        </p>
        <p className="text-lg">
          Passionate computer enthusiast with a solid background in computer
          science and a deep love for coding. I thrive on the challenges of
          problem-solving and excel in finding innovative solutions.A creative
          and collaborative team player, I bring enthusiasm and dedication to
          every project.I'm always at your service to get the work done neatly,
          effectively and of desire. Click the button to contact me.
        </p>
        <button class="ui-btn mx-auto w-44 mt-5 max-md:mb-7">
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
}
