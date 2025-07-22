// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import VerticalSections from "./components/VerticalSections";
import ScrollLogo from "./components/ScrollLogo";
import About from "./components/About";
import Footer from "./components/Footer";
import COTPage from "./components/pages/COTPage.jsx";
import COEDPage from "./components/pages/COEDPage.jsx";
import COHTMPage from "./components/pages/COHTMPage.jsx";
import ITPage from "./components/pages/ITPage.jsx";

const MainContent = () => {
    const location = useLocation();

    // ✅ Updated: Also hide layout for /cohtm
    const hideLayout =
        location.pathname === "/cot" ||
        location.pathname === "/coed" ||
        location.pathname === "/cohtm" ||
        location.pathname === "/it";

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            {/* ✅ Navbar & ScrollLogo hidden when hideLayout is true */}
            {!hideLayout && <ScrollLogo />}
            {!hideLayout && <Navbar />}

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <section className="w-full">
                                <VerticalSections />
                                <About />
                            </section>
                            <Footer />
                        </>
                    }
                />
                <Route path="/cot" element={<COTPage />} />
                <Route path="/it" element={<ITPage />} />
                <Route path="/coed" element={<COEDPage />} />
                <Route path="/cohtm" element={<COHTMPage />} />
            </Routes>
        </main>
    );
};

const App = () => (
    <Router>
        <MainContent />
    </Router>
);

export default App;
