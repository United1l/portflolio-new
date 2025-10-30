import NavLink from "@/components/NavLink";

const Nav = () => {
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

  return (
    <header className="w-full h-1/12 flex items-center fixed top-0 text-white">
        <h1 className="w-fit text-3xl font-bold ml-[5%] relative before:content-[''] before:absolute
         before:w-full before:h-full before:top-0 before:right-0 before:bg-[#0e273c] before:animate-showRight
         before:delay-400">
          Michael
        </h1>
        <nav className="ml-auto space-x-10 pr-[10%] text-lg font-medium">
          {links.map((link, index) => (
            <NavLink key={index} link={link.name} href={link.href} />
          ))}
        </nav>
    </header>
  )
}

export default Nav
