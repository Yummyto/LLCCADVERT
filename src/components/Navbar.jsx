import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    const navLinks = [
        { label: "COT", href: "/it", color: "bg-yellow-400", external: true },
        { label: "COED", href: "/coed", color: "bg-blue-400" },
        { label: "COHTM", href: "/cohtm", color: "bg-orange-400" },
        { label: "About", href: "#about", color: "bg-gray-400" },
        { label: "Contact", href: "#contact", color: "bg-gray-400" },
    ];

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setShowNav(y < scrollY || y < 50);
            setScrollY(y);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollY]);

    const scrolled = scrollY > 20;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4
                transform transition-transform duration-500 ease-in-out
                ${showNav ? "translate-y-0" : "-translate-y-full"}
                transition-colors duration-300 ${scrolled ? "bg-black text-white shadow-md" : "bg-transparent text-white"}
            `}
        >
            {/* Logo + LLCC Clickable to Home */}
            <Link to="/" className="flex items-center gap-3">
                <img
                    src="/img/llcc-logo.png"
                    alt="LLCC"
                    className="w-10 h-10 object-contain"
                />
                <div className="bg-white text-black px-4 py-2 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition">
                    LLCC
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
                {navLinks.map((link) =>
                    link.external ? (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="relative uppercase font-medium tracking-wide text-white hover:scale-105 transition group"
                        >
                            {link.label}
                            <span
                                className={`absolute left-1/2 -bottom-1 h-[2px] w-0 ${link.color} transition-all duration-300 group-hover:w-full group-hover:left-0`}
                            />
                        </Link>
                    ) : (
                        <a
                            key={link.label}
                            href={link.href}
                            className="relative uppercase font-medium tracking-wide text-white hover:scale-105 transition group scroll-smooth"
                        >
                            {link.label}
                            <span
                                className={`absolute left-1/2 -bottom-1 h-[2px] w-0 ${link.color} transition-all duration-300 group-hover:w-full group-hover:left-0`}
                            />
                        </a>
                    )
                )}
            </nav>

            {/* Mobile Toggle */}
            <button
                className="md:hidden text-white text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-6 gap-6 md:hidden z-40">
                    {navLinks.map((link) =>
                        link.external ? (
                            <Link
                                key={link.label}
                                to={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="relative uppercase font-medium tracking-wide text-white hover:scale-105 transition group"
                            >
                                {link.label}
                                <span
                                    className={`absolute left-1/2 -bottom-1 h-[2px] w-0 ${link.color} transition-all duration-300 group-hover:w-full group-hover:left-0`}
                                />
                            </Link>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="relative uppercase font-medium tracking-wide text-white hover:scale-105 transition group"
                            >
                                {link.label}
                                <span
                                    className={`absolute left-1/2 -bottom-1 h-[2px] w-0 ${link.color} transition-all duration-300 group-hover:w-full group-hover:left-0`}
                                />
                            </a>
                        )
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;
