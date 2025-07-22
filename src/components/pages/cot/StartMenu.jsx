// src/components/pages/cot/StartMenu.jsx

import React from "react";

const StartMenu = ({ items, onSelect, onShutdown }) => {
    return (
        <div className="absolute bottom-10 left-0 w-64 bg-gray-200 border border-gray-500 shadow-window95 z-50 font-vt323">
            {/* Start Menu Header */}
            <div className="bg-blue-800 text-white px-3 py-2 font-bold tracking-wide border-b border-gray-500">
                Start Menu
            </div>

            <ul className="p-2 space-y-1">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="cursor-pointer hover:bg-blue-500 px-3 py-2 rounded text-gray-800 flex items-center gap-2 transition-colors"
                        onClick={() => onSelect(item)}
                    >
                        <img
                            src="/img/Windows/Files-windows.png"
                            alt="icon"
                            className="w-4 h-4"
                        />
                        <span className="text-base">{item}</span>
                    </li>
                ))}

                {/* Windows 95 Style Shutdown */}
                <li
                    className="cursor-pointer bg-gray-300 hover:bg-gray-400 mt-3 px-3 py-2 rounded flex items-center gap-2 border-t border-gray-400 transition-colors"
                    onClick={onShutdown}
                >
                    <img
                        src="/img/Windows/shutdown-icon (1).png"
                        alt="Shutdown"
                        className="w-5 h-5"
                    />
                    <span className="text-base font-bold text-black">Shut Down...</span>
                </li>
            </ul>
        </div>
    );
};

export default StartMenu;
