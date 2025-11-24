import Link from "next/link"
import Image from "next/image"
import MediaLinks from "./MediaLinks"

const HomeContent = () => {

  return (
    <section className="h-screen w-screen flex items-center justify-between flex-wrap px-[5%] text-white">
        <div className="max-w-full lg:max-w-[600px] text-center lg:text-left">
            <h1 className="w-fit text-[32px] lg:text-[56px] font-[700] mt-20 mr-auto lg:mr-0 ml-auto lg:ml-0 
            relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:right-0 before:bg-[#14213d]
            before:animate-showRight before:delay-900">
                Hi, I'm Michael Asare
            </h1>
            <h3 className="w-fit text-[24px] lg:text-[32px] font-[500] text-center text-[#457b9d] mr-auto lg:mr-0 ml-auto lg:ml-0 
             relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:right-0 
             before:bg-[#14213d] before:animate-showRight before:delay-[1s,300ms]">
                A Frontend Developer
            </h3>
            <p className="w-fit text-[16px] text-[#adb5bd] my-6 relative tracking-wide leading-7 before:content-[''] before:absolute
            before:w-full before:h-full before:top-0 before:right-0 before:bg-[#14213d] before:animate-showRight
            before:delay-[1s,600ms]">
                I create responsive and engaging web 
                applications that provide seamless user experiences.
                Using the latest technologies and best practices,
                I bring your ideas to life on the web.
            </p>
            <div className="w-[175px] h-[50px] mr-auto lg:mr-0 ml-auto lg:ml-0">
                <Link href="/" className="w-[150px] h-full border-2 border-[#00abf0] text-[19px]
                    font-[600] border-solid rounded-lg inline-flex justify-center items-center
                    text-[#0e273c] hover:before:w-full hover:text-[#457b9d] bg-[#00abf0] overflow-hidden
                    before:content-[''] before:absolute before:w-0 before:h-full before:top-0 before:left-0 
                    before:z-[-1] relative z-1 before:bg-[#14213d] before:transition-all before:duration-300">
                    Let's Connect
                </Link>
            </div>
            <MediaLinks />
        </div>

        <div className="w-fit flex justify-center items-center mr-auto lg:mr-0 ml-auto lg:ml-0">
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] rounded-full 
            bg-[#00abf0] animate-bounce">
                <Image src="/profile.png" alt="profile" width={50} height={50} className="w-full h-full object-cover rounded-full" />
            </div>
        </div>
    </section>
  )
}

export default HomeContent
