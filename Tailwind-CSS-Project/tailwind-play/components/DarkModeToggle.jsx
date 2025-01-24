"use client";
import { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`my-5 flex flex-col items-center gap-5 px-6 py-8 shadow-xl ring-1 ring-slate-900/5 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-mono text-4xl font-extrabold">Dark Mode Toggle</h1>
      <p className="font-serif text-xl">
        Click the button below to toggle dark mode.
      </p>
      <button
        onClick={toggleDarkMode}
        className="py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 font-bold"
      >
        Toggle Dark Mode
        {isDarkMode ? " Off" : " On"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
