import Link from "next/link";

export default function Portfolio() {

    const projects = [
        { src: "/portfolio/trustcare.png", alt: "TrustCare-Medical-Supply - A retail shop portfolio", link: "https://trustcaremedicalsupplies.netlify.app/" },
        { src: "/portfolio/the-lobby.png", alt: "The Lobby - A chat app", link: "https://the-lobby.vercel.app/" },
        { src: "/portfolio/slapomania.png", alt: "Slapomania - A game", link: "https://slapomania.vercel.app/" },
    ];

  return (
    <main className="min-h-screen bg-[#14213d] px-[5%] flex flex-wrap items-center justify-center py-20 text-white">
        <div className="h-1/4">
            <h1 className="text-[32px] lg:text-[56px] font-[700]">
                Portfolio
            </h1>
            <h3 className="text-[16px] lg:text-[24px] font-[400] mt-4 text-[#457b9d]">
                Projects that reflect my skills and experience:
            </h3>
        </div>
        <div className="h-3/4 w-full flex flex-wrap justify-center items-center">
            {projects.map((project, index) => (
                <div key={index} className="w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <img src={project.src} alt={project.alt} className="w-40 h-40 lg:w-64 lg:h-64 object-contain mb-4 hover:scale-105 transition-transform duration-300" />
                    </Link>
                    <p className="text-[#adb5bd] text-center">
                        {project.alt}
                    </p>
                </div>
            ))}
        </div>
    </main>
    );
}