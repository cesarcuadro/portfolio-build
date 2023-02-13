import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
  return (
    <div style={{display: 'flex' ,justifyContent: 'center'}}>
      <nav  style={{
        boxShadow: '2px 5px 25px gray',
        background: 'white',
        padding: 20,
        color: 'navy',
        fontWeight: 'bolder',
        border: '3px solid navy',
        width: '97%',
        marginTop: 10,
        borderRadius: 10
      }}>
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
