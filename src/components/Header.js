import React from 'react'
import Link from 'next/link';


const Header = () => {
return (
    <>
        <nav className="p-3 bg-primary">
        <div className="flex space-x-4">
            <Link 
            href="/"
            className='red'
            >
                Home
            </Link>
            <Link href="/about-me">
                About Me
            </Link>
            <Link href="/contact">
                Projects
            </Link>
            <Link href="/contact">
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