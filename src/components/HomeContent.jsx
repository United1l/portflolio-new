import Link from "next/link"

const HomeContent = () => {
  return (
    <section className="h-screen flex items-center px-[10%] text-white">
        <div className="max-w-[600px]">
            <h1 className="w-fit text-[56px] font-[700] relative before:content-[''] before:absolute
            before:w-full before:h-full before:top-0 before:right-0 before:bg-[#081b29] before:animate-showRight
            before:delay-900">
                Hi, I'm Michael Asare
            </h1>
            <h3 className="w-fit text-[32px] font-[500] text-[#457b9d] relative before:content-[''] before:absolute
            before:w-full before:h-full before:top-0 before:right-0 before:bg-[#081b29] before:animate-showRight
            before:delay-[1s, 300ms]">
                A Frontend Developer
            </h3>
            <p className="w-fit text-[16px] my-6 relative before:content-[''] before:absolute
            before:w-full before:h-full before:top-0 before:right-0 before:bg-[#081b29] before:animate-showRight
            before:delay-[1s, 600ms]">
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
    </section>
  )
}

export default HomeContent
