import Link from "next/link";

const NavLink = ({link, href, className }) => {
  return (
    <Link href={href} className={`hover:text-[#00abf0] transition duration-300 ${className? className : ''}`}>
        {link}
    </Link>
  )
}

export default NavLink
