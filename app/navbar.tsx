"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => { 
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 850) {
         setShowMenu(false);
        }
    };

  return (
   <>
     <nav className='navbar flex justify-between items-center bg-gradient-to-b from-[#020617] to-[#031629]'>
        <div className="h-16 m-4">
          <Image className='rounded-full border-2' src='./images/logo.jpg' alt='logo'
           width={64}
           height={64}
          />
        </div>
        <div className={`nav-links ${showMenu ? "show-menu" : ""}`}
         id="nav-menu">
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
           <IoClose />
         </div>
        <ul className='flex text-white gap-9 p-8 '>
            <Link href="#home"><li className='bg-slate-00 p-4 rounded-3xl' onClick={closeMenuOnMobile}>Home</li></Link>
            <Link href="#about"><li className='bg-slate-00 p-4 rounded-3xl' onClick={closeMenuOnMobile}>About</li></Link>
            <Link href="#gallery"><li className='bg-slate-00 p-4 rounded-3xl' onClick={closeMenuOnMobile}>Gallery</li></Link>
            <Link href="#feedback"><li className='bg-slate-00 p-4 rounded-3xl' onClick={closeMenuOnMobile}>Feedbacks</li></Link>
            <Link href="#contacts"><li className='bg-slate-00 p-4 rounded-3xl' onClick={closeMenuOnMobile}>Contact</li></Link>
        </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
         <IoMenu />
       </div>
     </nav>
   </>
  )
}

export default Navbar
