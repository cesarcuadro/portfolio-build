import React from 'react'
import Link from 'next/link';


const Header = () => {
return (
    <>
        <nav className="p-3 bg-primary">
        <div className="flex space-x-4">
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
        </div>
    </nav>
    </>
    
  )
}

export default Header