import MediaLinks from "@/components/MediaLinks";

export default function About() {

  return (
    <main className="min-h-screen bg-[#14213d] px-[5%] flex items-center flex-wrap gap-10 py-20">
        <div className="flex flex-1 justify-center items-center">
            <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[500px] bg-[#00abf0]">

            </div>
        </div>
        <div className="flex-2 text-white text-center">
            <h1 className="text-[32px] lg:text-[56px] font-[700]">
                About Me
            </h1>
            <h3 className="text-[24px] lg:text-[32px] font-[500] text-center text-[#457b9d]">
                Michael Asare - Frontend Developer
            </h3>
            <p className="text-[16px] my-6 max-w-[600px] text-center text-[#adb5bd] tracking-wide leading-7 mx-auto">
                I am a passionate frontend developer with a knack for creating visually appealing and user-friendly web applications.
                With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive designs that adapt seamlessly across devices.
                I thrive on turning complex problems into elegant solutions, ensuring optimal performance and accessibility.
                Let's collaborate to bring your digital visions to life!
            </p>
            <MediaLinks />
        </div>
    </main>
  );
}
