import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [buttonMenu, setButtonMenu] = useState("invisible");
  const handleClick = () => {
    if (buttonMenu === "invisible") {
      setButtonMenu("visible");
    } else if (buttonMenu === "visible") {
      setButtonMenu("invisible");
    }
  };
  return (
    <div className="flex justify-center">
      <nav
        className={`${buttonMenu} absolute z-10 w-full flex-col border-b-2  bg-gradient-to-br from-slate-600 via-slate-500 to-slate-300 p-10 font-serif  md:visible md:mt-5  md:flex md:w-11/12 md:flex-row md:justify-evenly shadow-2xl 
      
      md:rounded-xl md:bg-gradient-to-r md:p-3 md:shadow-lg md:shadow-gray-500
      `}
      >
        <div onClick={handleClick} >
          <ActiveLink href="/">Home</ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/about-me">
            About Me
          </ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/projects">
            Projects
          </ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/resume">
            Resume
          </ActiveLink>
        </div>
        <div onClick={handleClick}>
          <ActiveLink onClick={handleClick} href="/contact">
            Contact
          </ActiveLink>
        </div>
      </nav>
      <button
        className="absolute top-1 right-1 z-20 md:hidden"
        onClick={handleClick}
      >
        {buttonMenu === "invisible" ? (
          <FontAwesomeIcon icon={faBars} className="w-8"/>
        ) : buttonMenu === "visible" ? (
          <FontAwesomeIcon icon={faX} className="w-8"/>
        ) : null}
      </button>
    </div>
  );
};

export default Header;
