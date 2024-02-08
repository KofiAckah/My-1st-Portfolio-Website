import React from "react";
import MeImage from "../Images/Me.jpg";

export default function About() {
  return (
    <div id="about" className="grid md:grid-cols-2 md:h-screen">
      <div>
        <img
          src={MeImage}
          alt="Livingstone Ackah Image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-col justify-center flex md:col-span-1 px-3 max-md:mt-5 m-5">
        <h2 className="font-bold text-4xl md:text-6xl mb-4 text-center">
          About Me
        </h2>
        <p className="text-lg text-right">
          I am Joel Livingstone Kofi Ackah, a passionate Computer Science
          student with a love for building mobile apps and web applications. I
          am proficient in JavaScript, React, React Native and Tailwindcss. I am
          also familiar with Node, Express, and MongoDB. I am looking for
          opportunities to work on exciting projects. I am open to part-time
          positions. I excel in collaborative settings, connecting technology
          with users. My drive for improvement sets me apart. My diverse
          portfolio aims to make a positive impact. Nature inspires me, and I
          enjoy reading and sketching. Let's collaborate and create something
          amazing! Thank you for visiting my portfolio.
        </p>
      </div>
    </div>
  );
}
