import { useEffect, useRef } from "react";
import { BentoTilt } from "./BentoUtils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const bentoData = [
    {
        id: "program",
        image: "/img/COED-Pics/coed-1.jpg",
        title: "Program Description",
        content:
            "The Bachelor of Secondary Education is a four-year program providing academic and clinical preparation for prospective teachers through courses in general education, professional education, and field study/practice teaching. The degree is awarded to students who complete English, Filipino, and MAPEH specializations, with practicum under education professionals. Graduates qualify for the Licensure Examination for Teachers (LET).",
    },
    {
        id: "objectives",
        image: "/img/COED-Pics/coed-2.jpg",
        title: "Objectives",
        content:
            "The BSED program aims to develop high school teachers in English, Filipino, and MAPEH with competencies to:",
        list: [
            "Demonstrate advanced literacy, communication, numeracy, and critical thinking skills;",
            "Understand student learning processes deeply;",
            "Relate educational practices to historical, social, cultural, and political contexts;",
            "Master their teaching subjects comprehensively;",
            "Apply curriculum development, lesson planning, assessment, and teaching processes effectively;",
            "Gain direct classroom experience (observation, assistance, practice teaching);",
            "Uphold professional and ethical teaching standards;",
            "Facilitate diverse learning environments with innovative approaches;",
            "Reflect on their teaching practices to improve continuously;",
            "Create and evaluate alternative teaching strategies;",
            "Commit to lifelong learning for teaching excellence.",
        ],
    },
    {
        id: "philosophy",
        image: "/img/COED-Pics/coed-3.jpg",
        title: "Goals & Philosophy",
        content:
            "The College of Education sets benchmarks for teacher education, working towards its vision, mission, and goals with dedication and excellence.",
    },
    {
        id: "vision",
        image: "/img/COED-Pics/coed-4.jpg",
        title: "Vision",
        content:
            "To be a training ground for producing competent, quality, and ethical teachers with strong personal and professional attributes.",
    },
    {
        id: "mission",
        image: "/img/COED-Pics/coed-5.jpg",
        title: "Mission",
        content:
            "To provide academic and professional preparation for teachers with dedication and commitment, meeting standards of excellence in the profession.",
    },
    {
        id: "goals",
        image: "/img/COED-Pics/coed-6.jpg",
        title: "Goals",
        list: [
            "Produce graduates ready for global market demands;",
            "Inculcate high ethical standards and dignity in teachers;",
            "Achieve academic excellence through a flexible curriculum;",
            "Prepare students to become competent professionals aligned with global trends.",
        ],
    },
];

const COEDPage = () => {
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
                    style={{ backgroundImage: "url('/img/EDUC-Building.jpg')" }}
                />
                {/* Strong angled blue gradient overlay - RIGHT SIDE */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top left, rgba(39, 82, 172, 0.95) 0%, rgba(39, 82, 172, 0.8) 40%, rgba(0, 0, 0, 0) 70%)",
                    }}
                />

                {/* Logo & Title */}
                <div ref={heroRef} className="relative z-10 flex flex-col items-center">
                    <img
                        src="/img/COED.png"
                        alt="COED Logo"
                        className="w-40 h-40 object-contain rounded-full border border-white/30 shadow mb-4"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-white text-center opacity-80">
                        College of Education
                    </h1>
                </div>
            </section>

            {/* Bento Section */}
            <section
                ref={bentoRef}
                className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-black to-gray-900 px-4 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
                {bentoData.map((section) => (
                    <BentoTilt
                        key={section.id}
                        className="bento-card group relative w-full overflow-hidden rounded-xl border border-white/10 text-white hover:shadow-lg transition-all duration-300"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                            style={{ backgroundImage: `url('${section.image}')` }}
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

export default COEDPage;
