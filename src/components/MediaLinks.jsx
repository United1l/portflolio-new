import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import NavLink from "@/components/NavLink"

const MediaLinks = () => {
    const mediaLinks = [
        { icon: <FontAwesomeIcon icon={faInstagram} />,
         href: "https://www.instagram.com/michaelasare._"},
        { icon: <FontAwesomeIcon icon={faXTwitter} />,
         href: "https://x.com/michael08618236?s=21"},
        { icon: <FontAwesomeIcon icon={faLinkedinIn} />,
         href: "https://linkedin.com/in/michael-asare-3782a71b3"},
    ];

    const className= "w-[40px] h-[40px] flex items-center justify-center border-2 border-white hover:bg-[#00abf0] hover:border-[#00abf0] hover:text-[#000] rounded-full"

  return (
    <div className="flex justify-between mt-4 lg:mt-6 max-w-[250px] mr-auto ml-auto">
        {mediaLinks.map((media, index) => (
            <NavLink key={index} link={media.icon} href={media.href} className={className} />
        ))}
    </div>
  )
}

export default MediaLinks
