import { useEffect, useRef } from "react";
import { BentoTilt } from "./BentoUtils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const bentoData = [
    {
        id: "program",
        image: "COHTM-Pics/cohtm-1.jpg",
        title: "Program Description",
        content:
            "The Bachelor of Science in Hospitality Management program (BSHM) is designed to provide students with the necessary knowledge, skills and attitude in the management of the different facets of Hotels, Restaurants and Resorts. The program train students for entry level jobs, supervisory and managerial positions in the hospitality industry.",
    },
    {
        id: "mission",
        image: "COHTM-Pics/cohtm-2.jpg",
        title: "Mission",
        content:
            "This vision is driven forward by its commitment for: profound and excellent education through less expensive tertiary education; a culture of extending necessary and essential service to the marginalized sectors Lapu-Lapu City; and knowledge acquisition, accumulation and application for global competence.",
    },
    {
        id: "goals",
        image: "COHTM-Pics/cohtm-3.jpg",
        title: "Goals and Objectives",
        content: "To develop future hospitality leaders by:",
        list: [
            "equipping with required technical and professional competencies to pursue a globally competitive career through quality classroom instruction and relevant on-the-job training;",
            "enhance students skills and personal qualities that will empower them to become self-reliant and successful professional;",
            "upholding values and virtues required of a good leader.",
        ],
    },
    {
        id: "vision",
        image: "COHTM-Pics/cohtm-4.jpg",
        title: "Vision",
        content:
            "Lapu-Lapu City College shall be well-known globally as a model institution of excellence for outstanding academic and technical programs that prepare students for lifelong learning and improve economic vitality and quality of life.",
    },
    {
        id: "aims",
        image: "COHTM-Pics/cohtm-5.jpg",
        title: "Aims of BSHM",
        list: [
            "Creativity and Innovation",
            "Integrity",
            "Teamwork",
            "Passion and Commitment",
            "Hard work and Perseverance",
            "Respect",
        ],
    },
];

const COHTMPage = () => {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const bentoRef = useRef(null);

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
                {/* Background image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url("${import.meta.env.BASE_URL}img/COHTM-Building.jpg")`,
                    }}
                />
                {/* Strong angled orange gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top left, rgba(255, 115, 0, 0.95) 0%, rgba(255, 115, 0, 0.8) 40%, rgba(0, 0, 0, 0) 70%)",
                    }}
                />

                {/* Logo & Title */}
                <div ref={heroRef} className="relative z-10 flex flex-col items-center">
                    <img
                        src={`${import.meta.env.BASE_URL}img/COHTM.png`}
                        alt="COHTM Logo"
                        className="w-40 h-40 object-contain rounded-full border border-white/30 shadow mb-4"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-white text-center opacity-80">
                        College of Hospitality & Tourism Management
                    </h1>
                </div>
            </section>

            {/* Bento Section */}
            <section
                ref={bentoRef}
                className="min-h-screen w-full bg-gradient-to-br from-orange-800 via-black to-gray-900 px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
                {bentoData.map((section) => (
                    <BentoTilt
                        key={section.id}
                        className="bento-card group relative w-full overflow-hidden rounded-xl border border-white/10 text-white hover:shadow-lg transition-all duration-300"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                            style={{
                                backgroundImage: `url("${import.meta.env.BASE_URL}img/${section.image}")`,
                            }}
                        />
                        <div className="relative z-10 flex h-full flex-col justify-start space-y-4 p-5 backdrop-blur-sm bg-black/30">
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

export default COHTMPage;
