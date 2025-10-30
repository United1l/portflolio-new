import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import NavLink from "@/components/NavLink"


const HomeContent = () => {
    const mediaLinks = [
        { icon: <FontAwesomeIcon icon={faEnvelope} className="w-[20px] h-[20px]" />,
         href: "/"},
        { icon: <FontAwesomeIcon icon={faInstagram} className="w-[20px] h-[20px]" />,
         href: "https://www.instagram.com/"},
        { icon: <FontAwesomeIcon icon={faXTwitter} className="w-[20px] h-[20px]" />,
         href: "https://twitter.com/"},
    ];

  return (
    <section className="h-screen flex flex-col justify-center px-[10%] text-white">
        <div className="max-w-[600px]">
            <h1 className="w-fit text-[56px] font-[700] relative before:content-[''] before:absolute
            before:w-full before:h-full before:top-0 before:right-0 before:bg-[#0e273c] before:animate-showRight
            before:delay-900">
                Hi, I'm Michael Asare
            </h1>
            <h3 className="w-fit text-[32px] font-[500] text-[#457b9d] relative before:content-[''] before:absolute
            before:w-full before:h-full before:top-0 before:right-0 before:bg-[#0e273c] before:animate-showRight
            before:delay-[1s,300ms]">
                A Frontend Developer
            </h3>
            <p className="w-fit text-[16px] my-6 relative before:content-[''] before:absolute
            before:w-full before:h-full before:top-0 before:right-0 before:bg-[#0e273c] before:animate-showRight
            before:delay-[1s,600ms]">
                I create responsive and engaging web 
                applications that provide seamless user experiences.
                Using the latest technologies and best practices,
                I bring your ideas to life on the web.
            </p>
            <div className="w-[175px] h-[50px]">
                <Link href="/" className="w-[150px] h-full border-2 border-[#00abf0] text-[19px]
                    font-[600] border-solid rounded-lg inline-flex justify-center items-center
                    text-[#457b9d] hover:before:w-full hover:text-[#081b29]
                    before:content-[''] before:absolute before:w-0 before:h-full before:top-0 before:left-0 
                    before:z-[-1] relative z-1 before:bg-[#00abf0] before:transition-all before:duration-300">
                    Let's Connect
                </Link>
            </div>
        </div>
        <div className="flex justify-between mt-30 max-w-[250px]">
            {mediaLinks.map((media, index) => (
                <NavLink key={index} link={media.icon} href={media.href} />
            ))}
        </div>
    </section>
  )
}

export default HomeContent
