import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  const [open, setOpen] = useState(true);

  function handleMenu() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="sticky bg-secondary-100 -top-2 shadow-2xl block z-10">
      {/* Nav Bar for Desktop */}
      <nav className="flex py-2 px-5 justify-between items-center">
        <h3 className="text-2xl font-bold">Portfolio.</h3>
        <ul className="sm:flex hidden">
          <li>
            <Link smooth to="#home">
              Home
            </Link>
          </li>
          <li>
            <Link smooth to="#about">
              About
            </Link>
          </li>
          <li>
            <Link smooth to="#project">
              Projects
            </Link>
          </li>
          <li>
            <Link smooth to="#skill">
              Skills
            </Link>
          </li>
          <li>
            <Link smooth to="#contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Nav Bar for Mobile */}
        <FontAwesomeIcon
          onClick={handleMenu}
          icon={open ? faBars : faTimes}
          className="sm:hidden"
          bounce={open ? false : true}
        />
      </nav>
      <ul
        className={` ${
          open ? "hidden" : "block"
        } flex flex-col sm:hidden bg-secondary-200`}
      >
        <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="#about">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="#project">
            Projects
          </Link>
        </li>
        <li>
          <Link smooth to="#skill">
            Skills
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
