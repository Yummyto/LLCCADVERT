import { useState, useRef } from "react";

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    // Tilt logic shared by both mouse and touch
    const applyTilt = (x, y) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (x - left) / width;
        const relativeY = (y - top) / height;

        const tiltX = (relativeY - 0.5) * 8;
        const tiltY = (relativeX - 0.5) * -8;

        const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`;
        setTransformStyle(newTransform);
    };

    const handleMouseMove = (e) => applyTilt(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            applyTilt(touch.clientX, touch.clientY);
        }
    };

    const resetTilt = () => setTransformStyle("");

    return (
        <div
            ref={itemRef}
            className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            onTouchMove={handleTouchMove}
            onTouchEnd={resetTilt}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};
