import Link from "next/link";

const NavLink = ({link, href }) => {
  return (
    <Link href={href} className="hover:text-[#00abf0] transition duration-300">
        {link}
    </Link>
  )
}

export default NavLink
