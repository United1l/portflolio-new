'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import NavLink from "@/components/NavLink";

const Nav = () => {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    const [menuState, setMenuState] = useState(false);

    const handleClick = () => (
      setMenuState(prevState => !prevState)
    )

  return (
    <header className="w-full h-1/12 flex items-center fixed top-0 text-white">
        <h1 className="w-fit text-3xl font-bold ml-[5%] relative before:content-[''] before:absolute
         before:w-full before:h-full before:top-0 before:right-0 before:bg-[#14213d] before:animate-showRight
         before:delay-400">
          Michael
        </h1>
        <nav className="ml-auto space-x-10 pr-[10%] text-lg font-medium hidden md:flex">
          {links.map((link, index) => (
            <NavLink key={index} link={link.name} href={link.href} />
          ))}
        </nav>
        <button className="w-[3rem] flex items-center justify-center p-2 border-2 border-[#C0E6BA]
       cursor-pointer md:hidden ml-auto mr-4" onClick={handleClick}>
        <FontAwesomeIcon icon={menuState?faClose:faBars} />
      </button>
    </header>
  )
}

export default Nav
