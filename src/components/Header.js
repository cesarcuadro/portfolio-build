import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
  return (
    <div className='flex justify-center'>
      <nav  
        className='shadow-md shadow-black bg-gradient-to-r from-red-500 to-red-100 w-11/12 flex justify-between mt-2 rounded-lg'>
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
    </div>
  );
};

export default Header;
