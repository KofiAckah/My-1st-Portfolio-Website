import React from "react";
import DevImage from "../Images/developer.a335c591a5d24ddd9e8c.gif";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-2 md:h-screen">
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
        <button className="bg-secondary-200 border-primary border-2 px-4 py-2 rounded-md mt-5 w-32 mx-auto hover:bg-primary hover:text-secondary-100 transition-all ease-in-out duration-500 font-semibold">
          <Link>Contact Me</Link>
        </button>
      </div>
    </div>
  );
}

// Text for the p tag in Home.js

// Hello, I am a Full Stack Developer. I am passionate about building web
//         applications. I am proficient in JavaScript, React, Node, Express, and
//         MongoDB. I am also familiar with Python, Django, and SQL. I am currently
//         learning TypeScript and GraphQL. I am looking for opportunities to work
//         on exciting projects. I am open to both full-time and part-time
//         positions. I am also open to internships and freelance work. I am open
//         to working remotely. I am open to working with startups and small
//         businesses. I am open to working with non-profits and social
//         enterprises. I am open to working with established companies and
//         corporations. I am open to working with individuals and teams. I am open
//         to working with people from diverse backgrounds. I am open to working
//         with people from different countries. I am open to working with people
//         from different industries. I am open to working with people from
//         different cultures. I am open to working with people from different age
//         groups. I am open to working with people
