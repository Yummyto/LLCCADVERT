import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import { Howl } from "howler";
import Window from "./cot/Window";
import StartMenu from "./cot/StartMenu";
import Taskbar from "./cot/Taskbar";
import "./cot/windows95.css";

const bootLines = [
    "Starting Windows 95...",
    "Loading desktop environment...",
    "Initializing mouse driver...",
    "Launching taskbar...",
    "Welcome to the College of Technology Terminal!",
    "Click the icons to explore.",
];

const bootSound = new Howl({
    src: ["/audio/sounds/boo.wav"],
});

// Array of 19 image filenames for COT Days Snaps
const galleryImages = Array.from({ length: 19 }, (_, i) => `pic-${i + 1}.jpg`);

const windowContent = {
    About: `📁 Program Description

The Bachelor of Science in Industrial Technology is a four-year technology degree program with specialization in Computer Technology and Electronics Technology. The students equip with specialized technical competencies of an occupation in the field of industrial technology towards entrepreneurial capability and/or supervisory and management positions in industry.`,

    Vision: `👁️ Vision

To be a pioneering institution in the region, dedicated to advancing technological innovation and producing highly skilled graduates who contribute to industry, society, and sustainable development.`,

    Mission: `🎯 Mission

To deliver quality, hands-on technical education in industrial and computer technologies, fostering innovation, critical thinking, and industry-readiness in every student.`,

    Philosophy: `💡 Philosophy

We believe in learning through doing, fostering integrity, innovation, and lifelong growth in an inclusive and excellence-driven environment.`,

    "COT Days Snaps": galleryImages, // special handling for gallery
};

const iconMap = {
    About: "Files-windows.png",
    Vision: "computer-Windows.png",
    Mission: "Tools-Windows.png",
    Philosophy: "call-icon.png",
    "COT Days Snaps": "camera-icon.png",
};

const COTPage = () => {
    const [lines, setLines] = useState([]);
    const [bootComplete, setBootComplete] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [windows, setWindows] = useState({});
    const [startOpen, setStartOpen] = useState(false);
    const [shuttingDown, setShuttingDown] = useState(false);
    const [bsod, setBsod] = useState(false);
    const [clock, setClock] = useState(new Date());
    const [logoClicks, setLogoClicks] = useState(0);
    const [focusedImage, setFocusedImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        bootSound.play();
        let lineIndex = 0;

        const interval = setInterval(() => {
            if (lineIndex < bootLines.length) {
                setLines((prev) => [...prev, bootLines[lineIndex++]]);
            } else {
                clearInterval(interval);
                setBootComplete(true);
            }
        }, 600);

        const cursorBlink = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        const timer = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(cursorBlink);
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (bsod) {
            const timeout = setTimeout(() => {
                navigate("/");
            }, 4000);
            return () => clearTimeout(timeout);
        }
    }, [bsod, navigate]);

    const openWindow = (title) => {
        setWindows((prev) => ({
            ...prev,
            [title]: true,
        }));
        if (title === "COT Days Snaps") {
            setFocusedImage(null);
        }
    };

    const closeWindow = (title) => {
        setWindows((prev) => ({
            ...prev,
            [title]: false,
        }));
        if (title === "COT Days Snaps") {
            setFocusedImage(null);
        }
    };

    const handleShutdown = () => {
        setShuttingDown(true);
        setTimeout(() => {
            navigate("/");
        }, 2500);
    };

    const handleLogoClick = () => {
        setLogoClicks((prev) => {
            const newCount = prev + 1;
            if (newCount >= 10) {
                setBsod(true);
            }
            return newCount;
        });
    };

    const nextImage = () => {
        setFocusedImage((prev) =>
            prev < galleryImages.length - 1 ? prev + 1 : 0
        );
    };

    const prevImage = () => {
        setFocusedImage((prev) =>
            prev > 0 ? prev - 1 : galleryImages.length - 1
        );
    };

    if (!bootComplete) {
        return (
            <div className="h-screen w-screen bg-black p-4 text-green-400 text-base leading-relaxed font-vt323">
                {lines.map((line, i) => (
                    <div key={i}>{line}</div>
                ))}
                {cursorVisible && <span className="animate-pulse">▌</span>}
            </div>
        );
    }

    if (shuttingDown) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-black text-white text-xl animate-pulse">
                It is now safe to turn off your computer.
            </div>
        );
    }

    if (bsod) {
        return (
            <div className="h-screen w-screen bg-blue-800 text-white flex flex-col items-center justify-center font-mono p-10">
                <h1 className="text-3xl mb-4">*** STOP: 0x0000001E (KMODE_EXCEPTION_NOT_HANDLED)</h1>
                <p className="text-xl">
                    A problem has been detected and Windows has been shut down to prevent damage
                    to your computer.
                </p>
                <p className="mt-6">
                    If this is the first time you've seen this Stop error screen, restart your
                    computer. If this screen appears again, follow these steps:
                </p>
                <ul className="mt-4 list-disc pl-6 space-y-2 text-left">
                    <li>Check to be sure you have adequate disk space.</li>
                    <li>If a driver is identified, disable the driver or check for updates.</li>
                    <li>Try changing video adapters.</li>
                    <li>Check with your hardware vendor for BIOS updates.</li>
                </ul>
                <p className="mt-6">Press Ctrl+Alt+Del to restart your computer.</p>
            </div>
        );
    }

    return (
        <div
            className="h-screen w-screen overflow-hidden font-vt323 relative"
            style={{
                backgroundImage: 'url("/img/Windows/windows-95 bg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Centered COT Logo */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleLogoClick}
            >
                <img
                    src="/img/COT.png"
                    alt="College of Technology Logo"
                    className="w-[200px] h-auto opacity-90"
                />
            </div>

            {/* Desktop Icons */}
            <div className="absolute top-4 left-4 flex flex-col items-start gap-5 px-2">
                {Object.keys(windowContent).map((key, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-white cursor-pointer hover:scale-105 transition-transform"
                        onDoubleClick={() => openWindow(key)}
                    >
                        <img
                            src={`/img/Windows/${iconMap[key]}`}
                            alt={key}
                            className="w-12 h-12 hover:border-2 hover:border-white"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/img/Windows/fallback-icon.png";
                            }}
                        />
                        <span className="text-base mt-1 text-center">{key}</span>
                    </div>
                ))}
            </div>

            {/* Render Windows */}
            {Object.entries(windowContent).map(([key, content]) => {
                if (!windows[key]) return null;

                return (
                    <Draggable key={key} defaultPosition={{ x: 150, y: 100 }}>
                        <div className="absolute top-0 left-0">
                            {key === "COT Days Snaps" ? (
                                <Window
                                    title="COT Days Snaps"
                                    icon={`/img/Windows/${iconMap[key]}`}
                                    content={
                                        focusedImage !== null ? (
                                            <div className="flex flex-col items-center gap-4 p-2">
                                                <img
                                                    src={`/img/Gallery/${galleryImages[focusedImage]}`}
                                                    alt={`Gallery ${focusedImage}`}
                                                    className="max-w-full rounded shadow"
                                                />
                                                <div className="flex gap-4">
                                                    <button
                                                        className="bg-gray-300 px-3 py-1 rounded shadow hover:bg-gray-400"
                                                        onClick={prevImage}
                                                    >
                                                        Prev
                                                    </button>
                                                    <button
                                                        className="bg-gray-300 px-3 py-1 rounded shadow hover:bg-gray-400"
                                                        onClick={nextImage}
                                                    >
                                                        Next
                                                    </button>
                                                    <button
                                                        className="bg-red-300 px-3 py-1 rounded shadow hover:bg-red-400"
                                                        onClick={() => setFocusedImage(null)}
                                                    >
                                                        Back to Gallery
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-2 gap-4 p-2">
                                                {galleryImages.map((img, i) => (
                                                    <img
                                                        key={i}
                                                        src={`/img/Gallery/${img}`}
                                                        alt={`Gallery ${i}`}
                                                        className="w-full rounded shadow cursor-pointer"
                                                        onClick={() => setFocusedImage(i)}
                                                    />
                                                ))}
                                            </div>
                                        )
                                    }
                                    onClose={() => closeWindow(key)}
                                />
                            ) : (
                                <Window
                                    title={key}
                                    icon={`/img/Windows/${iconMap[key]}`}
                                    content={content}
                                    onClose={() => closeWindow(key)}
                                />
                            )}
                        </div>
                    </Draggable>
                );
            })}

            {/* Start Menu */}
            {startOpen && (
                <StartMenu
                    items={Object.keys(windowContent)}
                    onSelect={(title) => {
                        openWindow(title);
                        setStartOpen(false);
                    }}
                    onShutdown={handleShutdown}
                />
            )}

            {/* Taskbar */}
            <Taskbar clock={clock} onStartToggle={() => setStartOpen((prev) => !prev)} />
        </div>
    );
};

export default COTPage;
