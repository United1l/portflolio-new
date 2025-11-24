export default function Skills() {

    const skills = [
        { src: "/skills/html.png", alt: "HTML" },
        { src: "/skills/css.png", alt: "CSS" },
        { src: "/skills/react.png", alt: "React" },
        { src: "/skills/nextjs.png", alt: "Next.js" },
        { src: "/skills/supabase.png", alt: "Supabse" },
        { src: "/skills/tailwind.png", alt: "Tailwindcss" },
    ];

  return (
    <main className="min-h-screen bg-[#14213d] px-[5%] flex flex-wrap items-center justify-center py-20 text-white">
        <div className="h-1/4">
            <h1 className="text-[32px] lg:text-[56px] font-[700]">
                Skills
            </h1>
            <h3 className="text-[16px] lg:text-[24px] font-[400] mt-4 text-[#457b9d]">
                These are the languages and technologies I work with:
            </h3>
        </div>
        <div className="h-3/4 w-full flex flex-wrap justify-center items-center">
            {skills.map((skill, index) => (
                <div key={index} className="w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
                    <img src={skill.src} alt={skill.alt} className="w-20 h-20 lg:w-32 lg:h-32 object-contain mb-4" />
                </div>
            ))}
        </div>
    </main>
    );
}
