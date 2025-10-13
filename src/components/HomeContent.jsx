import Link from "next/link"

const HomeContent = () => {
  return (
    <section className="h-screen flex items-center px-[10%] text-white">
        <div className="max-w-[600px]">
            <h1 className="text-[56px] font-[700]">
                Hi, I'm Michael Asare
            </h1>
            <h3 className="text-[32px] font-[500] text-[#457b9d]">
                A Frontend Developer
            </h3>
            <p className="text-[16px] my-6">
                I create responsive and engaging web 
                applications that provide seamless user experiences.
                Using the latest technologies and best practices,
                I bring your ideas to life on the web.
            </p>
            <div className="w-[175px] h-[50px]">
                <Link href="/" className="w-[150px] h-full border-2 border-[#00abf0] text-[19px]
                    font-[600] border-solid rounded-lg inline-flex justify-center items-center
                    bg-[#00abf0] text-[#081b29] hover:bg-transparent hover:text-[#00abf0]">
                    Let's Connect
                </Link>
            </div>
        </div>
    </section>
  )
}

export default HomeContent
