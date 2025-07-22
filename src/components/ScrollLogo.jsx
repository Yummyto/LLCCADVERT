// src/components/ScrollLogo.jsx
import { useEffect, useState } from "react";

const ScrollLogo = () => {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show logo after scrolling 100px down
            setShowLogo(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-4 left-4 z-50 transition-opacity duration-500 ${
                showLogo ? "opacity-100" : "opacity-0"
            }`}
        >
            <img
                src={`${import.meta.env.BASE_URL}img/llcc-logo.png`}
                alt="LLCC Logo"
                className="w-15 h-10 object-contain"
            />
        </div>
    );
};

export default ScrollLogo;
