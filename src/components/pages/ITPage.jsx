import { useEffect, useRef, useState } from "react";
import { BentoTilt } from "./BentoUtils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const bentoData = [
    {
        id: "program",
        image: `${import.meta.env.BASE_URL}img/IT-pics/it-1.jpg`,
        title: "Program Description",
        content:
            "The Bachelor of Science in Industrial Technology is a four-year technology degree program with specialization in Computer Technology and Electronics Technology. Students are equipped with specialized technical competencies in industrial technology toward entrepreneurial capability and/or supervisory and management positions in industry. BSIT majors in Computer Technology gain profound knowledge and technical skills in tool, professional, and shop work subjects including basic electricity and electronics, digital electronics, computer systems software and hardware, networking, and programming. Students who complete the training requirements are advised to take TESDA National Examinations I & II. The degree is awarded to students who complete three academic years and 1,800 hours of OJT (Third Ladder of Bachelor of Science in Technology) and pass all required subjects in the six-semester curriculum.",
    },
    {
        id: "vision",
        image: `${import.meta.env.BASE_URL}img/IT-pics/it-2.jpg`,
        title: "Vision",
        content:
            "To be a premier institution advancing scientific and technological excellence, empowering students with cutting-edge skills and innovation, and producing globally competitive graduates who contribute meaningfully to industry and society.",
    },
    {
        id: "mission",
        image: `${import.meta.env.BASE_URL}img/IT-pics/it-3.jpg`,
        title: "Mission",
        content:
            "To deliver high-quality, industry-relevant education in industrial technology, fostering advanced technical skills and entrepreneurial spirit, while ensuring our graduates are equipped to meet evolving market demands and technological advancements.",
    },
    {
        id: "philosophy",
        image: `${import.meta.env.BASE_URL}img/IT-pics/it-4.jpg`,
        title: "Philosophy",
        content:
            "To hone individuals with competencies in technological quality education and technical-level skills, enabling them to adapt to rapid technological advancements and contribute to the growth and progress of society.",
    },
    {
        id: "goals",
        image: `${import.meta.env.BASE_URL}img/IT-pics/it-5.jpg`,
        title: "Goals",
        content:
            "Equip students with specialized technical competencies in industrial technology occupations, preparing them for entrepreneurial ventures and supervisory or management positions in industry.",
    },
];

const ITPage = () => {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const bentoRef = useRef(null);

    // Secret click logic
    const [clickCount, setClickCount] = useState(0);
    const clickTimer = useRef(null);

    const handleLogoClick = () => {
        setClickCount((prev) => {
            const newCount = prev + 1;

            if (newCount === 3) {
                navigate("/cot");
            }

            return newCount;
        });

        if (clickTimer.current) clearTimeout(clickTimer.current);
        clickTimer.current = setTimeout(() => {
            setClickCount(0);
        }, 2000);
    };

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            { y: -200, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "bounce.out" }
        );

        const cards = bentoRef.current.querySelectorAll(".bento-card");
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="w-full text-white overflow-x-hidden">
            {/* Back Button */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-6 left-6 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium shadow-md backdrop-blur-lg transition-all duration-200 hover:bg-white/20 active:scale-95 z-50"
            >
                ← Back
            </button>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('${import.meta.env.BASE_URL}img/COT-Building.jpg')`,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top left, rgba(255, 204, 0, 0.95) 0%, rgba(255, 204, 0, 0.8) 40%, rgba(0, 0, 0, 0) 70%)",
                    }}
                />

                <div ref={heroRef} className="relative z-10 flex flex-col items-center">
                    <img
                        src={`${import.meta.env.BASE_URL}img/COT.png`}
                        alt="COT Logo"
                        onClick={handleLogoClick}
                        className="w-40 h-40 object-contain rounded-full border border-white/30 shadow mb-4 cursor-pointer"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-white text-center opacity-80">
                        College of Technology
                    </h1>
                </div>
            </section>

            {/* Bento Section */}
            <section
                ref={bentoRef}
                className="min-h-screen w-full bg-gradient-to-br from-yellow-600 via-black to-gray-900 px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
                {bentoData.map((section) => (
                    <BentoTilt
                        key={section.id}
                        className="bento-card group relative w-full overflow-hidden rounded-xl border border-white/10 text-white hover:shadow-lg transition-all duration-300"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                            style={{
                                backgroundImage: `url('${section.image}')`,
                            }}
                        />
                        <div className="relative z-10 flex h-full flex-col justify-start space-y-4 p-5 backdrop-blur-sm">
                            <h1 className="text-2xl font-bold">{section.title}</h1>
                            {section.content && (
                                <p className="text-base text-white/90">{section.content}</p>
                            )}
                            {section.list && (
                                <ul className="list-disc list-inside text-white/90 space-y-1">
                                    {section.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </BentoTilt>
                ))}
            </section>
        </div>
    );
};

export default ITPage;
