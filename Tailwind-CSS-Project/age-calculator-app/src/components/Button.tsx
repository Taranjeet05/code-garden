"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

type ButtonProps = {
  onClick: () => void;
};

const Button = ({ onClick }: ButtonProps) => {
  return (
    <div className="flex items-center mt-8 md:mt-12 lg:mt-16 relative px-2 sm:px-4 md:ml-6 lg:ml-10">
      <hr className="border-gray-200 border-1 w-6xl " />
      <button
        onClick={onClick}
        className="rounded-full p-3 md:p-4 lg:p-11 flex items-center justify-center absolute 
                 left-1/2 -translate-x-1/2 
                 lg:left-auto lg:right-4 lg:-translate-x-0
                 transform transition-all duration-300 hover:bg-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 cursor-pointer"
        style={{ backgroundColor: "var(--color-purple)" }}
      >
        <FaArrowDown className="w-4 h-4 md:w-5 md:h-5 lg:w-10 lg:h-10 text-white font-thin" />
      </button>
    </div>
  );
};

export default Button;
