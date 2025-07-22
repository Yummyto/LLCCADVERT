import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const collegeData = [
    {
        id: "coed",
        logo: "/img/COED.png",
        title: "College of Education",
        bgColor: "bg-blue-700",
        textColor: "text-white",
        courses: [
            "Bachelor of Elementary Education",
            "Bachelor of Secondary Education Major in Math",
            "Bachelor of Secondary Education Major in Araling Panlipunan",
            "Bachelor of Secondary Education Major in Filipino",
            "Bachelor of Secondary Education Major in English",
        ],
    },
    {
        id: "cot",
        logo: "/img/COT.png",
        title: "College of Technology",
        bgColor: "bg-yellow-400",
        textColor: "text-black",
        courses: [
            "Bachelor of Science in Industrial Technology Major in Computer",
            "Bachelor of Science in Industrial Technology Major in Electronics",
        ],
    },
    {
        id: "cohtm",
        logo: "/img/COHTM.png",
        title: "College of Hospitality and Management",
        bgColor: "bg-orange-500",
        textColor: "text-white",
        courses: [
            "Bachelor of Science in Tourism Management",
            "Bachelor of Science in Hospitality Management",
        ],
    },
];

const VerticalSections = () => {
    const [activeCollege, setActiveCollege] = useState(null);
    const [visibleSections, setVisibleSections] = useState(
        Array(collegeData.length).fill(false)
    );
    const refs = useRef([]);
    const lastScrollY = useRef(window.scrollY);

    // Detect scroll direction and close active section on scroll down
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const isScrollingDown = currentScroll > lastScrollY.current;

            if (isScrollingDown && activeCollege !== null) {
                setActiveCollege(null);
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeCollege]);

    // Fade-in on intersection
    useEffect(() => {
        const observers = refs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    setVisibleSections((prev) => {
                        const updated = [...prev];
                        updated[index] = entry.isIntersecting;
                        return updated;
                    });
                },
                { threshold: 0.5 }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer, i) => {
                if (observer && refs.current[i]) {
                    observer.unobserve(refs.current[i]);
                }
            });
        };
    }, []);

    return (
        <div className="flex flex-col sm:flex-row w-full h-auto sm:h-screen">
            {collegeData.map((college, i) => {
                const isVisible = visibleSections[i];
                const isActive = activeCollege === college.id;

                return (
                    <div
                        key={college.id}
                        className={`${college.bgColor} w-full sm:w-1/3 min-h-screen flex flex-col items-center justify-center transition-all duration-500 relative px-4 py-10`}
                        ref={(el) => (refs.current[i] = el)}
                        onClick={() =>
                            setActiveCollege(isActive ? null : college.id)
                        }
                    >
                        <AnimatePresence>
                            {isVisible && (
                                <motion.img
                                    key="logo"
                                    src={college.logo}
                                    alt={`${college.title} Logo`}
                                    className="w-32 h-32 object-contain mb-4 transition-transform hover:scale-110 cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                />
                            )}
                        </AnimatePresence>

                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    key="text"
                                    className={`mt-6 text-center text-sm sm:text-base ${college.textColor} max-w-xs bg-black/30 p-4 rounded-lg backdrop-blur-sm`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <h2 className="text-lg font-bold mb-2">{college.title}</h2>
                                    <p className="underline font-semibold mb-1">Courses Offered:</p>
                                    <ul className="list-disc list-inside text-left space-y-1">
                                        {college.courses.map((course, idx) => (
                                            <li key={idx}>{course}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export default VerticalSections;
