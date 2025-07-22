// src/components/pages/cot/Window.jsx

import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const Window = ({ title, icon, content, onClose }) => {
    return (
        <div className="bg-gray-100 border border-gray-800 shadow-window95 w-[500px] font-vt323 text-black">
            {/* Window Header */}
            <div className="bg-blue-800 text-white px-3 py-2 flex justify-between items-center cursor-move">
                <div className="flex items-center gap-2">
                    <img
                        src={icon}
                        alt="icon"
                        className="w-5 h-5"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/img/Windows/fallback-icon.png";
                        }}
                    />
                    <span className="text-lg font-bold">{title || "Ms-dos_5 (C:)"}</span>
                </div>
                <button
                    onClick={onClose}
                    className="bg-red-600 px-3 py-1 text-base hover:bg-red-700"
                >
                    X
                </button>
            </div>

            {/* Resizable Content Area */}
            <ResizableBox
                width={500}
                height={400}
                minConstraints={[400, 250]}
                maxConstraints={[800, 700]}
            >
                <div className="bg-white text-black text-[16px] p-5 overflow-auto h-full whitespace-pre-line leading-relaxed">
                    {content}
                </div>
            </ResizableBox>
        </div>
    );
};

export default Window;
