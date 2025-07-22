import React from "react";

const Taskbar = ({ onStartToggle }) => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-300 border-t border-gray-500 text-xs flex items-center justify-between px-2 py-1 z-50 font-vt323">
            <button
                onClick={onStartToggle}
                className="bg-gray-200 border border-gray-600 px-3 py-1 mr-2 hover:bg-gray-400 flex items-center gap-2 text-base text-black"
            >
                <img
                    src="/img/Windows/Windows-logo.png"
                    alt="Start"
                    className="w-5 h-5"
                />
                <span className="drop-shadow-sm">Start</span>
            </button>
            <div className="ml-auto bg-black text-white px-2 py-1 text-base">
                {hours}:{minutes}
            </div>
        </div>
    );
};

export default Taskbar;
