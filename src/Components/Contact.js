import React from "react";
import BgImage from "../Images/devContact.c05478c8323ce7adadd4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="md:h-screen grid md:grid-cols-2 text-lg" id="contact">
      <div className="flex-col justify-center flex relative max-md:order-2">
        <h2 className="font-bold text-4xl md:text-6xl my-4 text-center mx-auto">
          CONTACT ME
        </h2>
        <p className="mx-auto my-2">Contact me for your works.</p>
        <div className="mx-auto">
          <a
            href="mailto:kofiackah@gmail.com"
            className="flex items-center hover:text-primary"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-4" />
            <span className="ml-3">kofiackah@gmail.com</span>
          </a>
        </div>
        <div className="mx-auto">
          <a
            href="tel:+233262092037"
            className="flex items-center hover:text-primary"
          >
            <FontAwesomeIcon icon={faPhoneVolume} className="h-4" />
            <span className="ml-3">+233-26-209-2037</span>
          </a>
        </div>
        <div className="flex gap-8 mt-4 text-center self-center">
          <a
            href="https://twitter.com/LivingstoneAcka"
            target="_blank"
            className="hover:text-primary"
            title="X-Twiiter"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-livingstone-kofi-ackah/"
            target="_blank"
            className="hover:text-primary"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6" />
          </a>
          <a
            href="https://github.com/KofiAckah"
            target="_blank"
            className="hover:text-primary"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6" />
          </a>
          <a
            href="https://www.instagram.com/livingstoneackah?igsh=MWtlNHE0ZjlyOXA5Mw=="
            target="_blank"
            className="hover:text-primary"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-6" />
          </a>
          <a
            href="https://www.facebook.com/livingstone.ackah?mibextid=ZbWKwL"
            target="_blank"
            className="hover:text-primary"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="h-6" />
          </a>
        </div>
        <div className="max-md:flex self-center my-2 relative md:-bottom-32">
          <p>Copyright &copy; 2024</p>
          <p className="max-md:ml-2">Livingstone Ackah&reg;</p>
        </div>
      </div>
      <div className="items-center justify-center flex bg-black h-full">
        <img src={BgImage} alt="Contact Icon" className="" />
      </div>
    </div>
  );
}
{
  /* <a href="mailto:anthonybekoebankah@gmail.com" class="flex">
<a href="tel:+233594618786" class="flex">flex */
}
