import React from 'react'
import Link from 'next/link';


const Header = () => {
return (
    <>
        <nav className="p-3 bg-primary font-serif text-highlight mx-4 rounded-xl flex justify-evenly">
            <Link 
            href="/">
                Home
            </Link>
            <Link href="/about-me">
                About Me
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/resume">
                Resume
            </Link>
            <Link href="/contact">
                Contact
            </Link>
    </nav>
    </>
    
  )
}

export default Header