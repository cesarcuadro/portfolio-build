import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
  return (
    <>
      <nav className="p-3 bg-primary font-serif text-highlight mx-4 rounded-xl flex justify-evenly">
        <ActiveLink href="/" >
          Home
        </ActiveLink>
        <ActiveLink href="/about-me">
          About Me
        </ActiveLink>
        <ActiveLink href="/projects">
          Projects
        </ActiveLink>
        <ActiveLink href="/resume">
          Resume
        </ActiveLink>
        <ActiveLink href="/contact">
          Contact
        </ActiveLink>
      </nav>
    </>
  );
};

export default Header;
