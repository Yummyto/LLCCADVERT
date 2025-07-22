import { useEffect, useRef } from "react";
import { BentoTilt } from "./BentoUtils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll(".bento-card");

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
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen w-full bg-black px-3 py-20 md:px-10"
        >
            <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2">
                {/* Core Values - EDUC */}
                <BentoTilt className="bento-card group h-full w-full overflow-hidden rounded-xl border border-white/10 text-white hover:shadow-lg relative transition-all duration-300">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-20 group-hover:opacity-40"
                        style={{ backgroundImage: `url('/img/EDUC-Building.jpg')` }}
                    />
                    <div className="relative z-10 flex h-full flex-col justify-start space-y-6 p-5 backdrop-blur-sm">
                        <h1 className="text-4xl font-bold mb-2">Core Values</h1>

                        <div>
                            <h2 className="text-xl font-semibold">LOVE</h2>
                            <p className="text-base text-white/90">
                                Focusing and extending minds and hearts to nurture one’s own and another’s good.
                                Love expressed in the LLCC community is not a feeling but an action for the communal good
                                manifested through the time, talent and energy of its members. It is a responsible dedication
                                to utilize available resources and turn them towards humanity’s good.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">LEADERSHIP</h2>
                            <p className="text-base text-white/90">
                                LLCC strives to develop and mold leaders necessary to realize educational excellence and equity.
                                We establish bold visions and invest others in working towards them. We work in purposeful,
                                strategic, and resourceful ways, and learn and improve constantly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">COURAGE</h2>
                            <p className="text-base text-white/90">
                                The mental, moral and physical strength ingrained among the LLCCians. It carries them through
                                challenges and helps them overcome fear. It is the inner strength that enables an LLCCian to do
                                what is right and to make tough decisions under stress and pressure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">COMPETENCE</h2>
                            <p className="text-base text-white/90">
                                Based on the unique skills of our staff and faculty we continuously improve and innovate our
                                services and solutions driven by the needs of our stakeholders. We pursue excellence in everything
                                we do.
                            </p>
                        </div>
                    </div>
                </BentoTilt>

                {/* Mission & Vision */}
                <div className="grid h-full w-full grid-rows-2 gap-7">
                    {/* Mission - COT */}
                    <BentoTilt className="bento-card group w-full overflow-hidden rounded-xl border border-white/10 text-white hover:shadow-lg relative transition-all duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-20 group-hover:opacity-40"
                            style={{ backgroundImage: `url('/img/COT-Building.jpg')` }}
                        />
                        <div className="relative z-10 flex h-full flex-col justify-between p-5 backdrop-blur-sm">
                            <h1 className="text-4xl font-bold mb-4">Mission</h1>
                            <p className="text-base text-white/90">
                                To provide quality education and holistic development in pursuit
                                of academic excellence, character building, and community service.
                            </p>
                        </div>
                    </BentoTilt>

                    {/* Vision - COHTM */}
                    <BentoTilt className="bento-card group w-full overflow-hidden rounded-xl border border-white/10 text-white hover:shadow-lg relative transition-all duration-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-20 group-hover:opacity-40"
                            style={{ backgroundImage: `url('/img/COHTM-Building.jpg')` }}
                        />
                        <div className="relative z-10 flex h-full flex-col justify-between p-5 backdrop-blur-sm">
                            <h1 className="text-4xl font-bold mb-4">Vision</h1>
                            <p className="text-base text-white/90">
                                A leading institution nurturing globally competitive individuals
                                committed to lifelong learning, innovation, and servant leadership.
                            </p>
                        </div>
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
};

export default About;
